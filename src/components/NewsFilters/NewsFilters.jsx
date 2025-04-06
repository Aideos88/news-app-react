import { getCategories } from '../../api/apiNews';
import { useFetch } from '../../helpers/hooks/useFetch';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import styles from './styles.module.css'

const NewsFilters = ({ filters, changeFilter }) => {
    const { data: dataCategories } = useFetch(getCategories)

    return (
        <div className={styles.filter}>
            {dataCategories ? <Categories
                categories={dataCategories.categories}
                setSelectedCategory={filters.category}
                selectedCategory={(category) => changeFilter('category', category)}
            /> : null}

            <Search
                keywords={filters.keywords}
                setKeywords={(keywords) => changeFilter('keywords', keywords)}
            />
        </div>
    )
}

export default NewsFilters;