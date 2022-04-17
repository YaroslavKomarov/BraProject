import React from 'react';

function Footer() {
    return (
        <footer className="footer">
			<div className="footer__main">
				<nav className="footer__navigation">
					<i className="fa fa-question-circle-o footer__fa"></i>
					<ul className="footer__ul">
						<li>7 (999) 641-25-26</li>
						<li>cupstory@mail.ru</li>
					</ul>
				</nav>
				<nav className="footer__navigation">
					<i className="fa fa-code footer__fa"></i>
					<ul className="footer__ul">
						<li>
							<a 
							href="https://web.telegram.org/" 
							target="_blank"
							rel="noopener"
							className="footer__link link">Telegram</a></li>
						<li>
							<a 
							href="https://www.instagram.com/"
							target="_blank"
							rel="noopener"
							className="footer__link link">Instagram</a>
						</li>
					</ul>
				</nav>
				<div className="footer__form">
					<input className="form__input" type="text" placeholder="Email..." />
					<button onClick={() => alert('Thank you for your subscription, check your email')} className="form__btn btn" type="submit">Subscribe</button>
				</div>
			</div>
			<p>© 2022 CUPSTORY</p>
		</footer>
    );
}

export default Footer;