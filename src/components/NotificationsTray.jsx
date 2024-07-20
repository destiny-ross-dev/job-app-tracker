const NotificationsTray = () => {
  return (
    <aside className="flex flex-col w-96 bg-primary">
      <header className="h-[--header-h] flex flex-row justify-between p-4 bg-darkBlue text-white">
        <nav className="flex flex-row items-center">
          <i className="fa-solid fa-envelope fa-lg mr-4" />
          <i className="fa-solid fa-bell fa-lg mr-4" />
        </nav>
        <div className="flex items-center justify-end w-60 h-full">
          <section className="flex flex-col text-right">
            <h2 className="text-sm">Destiny Lea Ann Ross</h2>
            <h3 className="text-xs">Web Developer</h3>
          </section>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYOgVxLPZQlTUfG5XDL-uaQqJ03S3XEMx4xg&s"
            height="40"
            width="40"
            className="ml-4 rounded-full border-2"
          />
        </div>
      </header>
    </aside>
  );
};

export default NotificationsTray;
