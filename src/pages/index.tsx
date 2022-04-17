import Header from './shared/header';
import Footer from './shared/footer';
import Aside from './shared/aside';
import { NavLink } from 'react-router-dom';

function Index() {
	return (
		<div className="app">
			<Header/>
			<Aside />
			<main className="main">
                <div className="main__header">
				</div>
				<div className="main__content">
					<h1 className="content__title">Categories</h1>
					<div className="content__wrap">
						<div className="content__card">
							<img className="card__image" src="assets/images/about_types.jpg" ></img>
							<h2 className="card__title">
								About the types of bustagletres. How to choose for yourself
							</h2>
						</div>
						<div className="content__card">
							<img className="card__image" src="assets/images/how_determine.jpg"></img>
							<h2 className="card__title">
								How to determine your breast type and size	
							</h2>
						</div>
						<div className="content__card">
							<img className="card__image" src="assets/images/whole_collect.jpg"></img>
							<h2 className="card__title">
								The whole collection
							</h2>
						</div>
						<div className="content__card">
							<img className="card__image" src="assets/images/sales.jpg"></img>
							<h2 className="card__title">
								Sales
							</h2>
						</div>
						<div className="content__card">
							<img className="card__image" src="assets/images/create_design.jpg"></img>
							<h2 className="card__title">
								Create your own bra design
							</h2>
						</div>
						<div className="content__card">
							<img className="card__image" src="assets/images/fill_out.jpg"></img>
							<h2 className="card__title">
								Fill out a questionnaire for your perfect bra
							</h2>
						</div>
					</div>
				</div>
			</main>
			<Footer/>
		</div>
	);
}

export default Index;