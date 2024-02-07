class RestaurantView {
    constructor() {
        this.main = document.getElementsByTagName('main')[0];
        this.categories = document.getElementById('categorias_principal');
        this.menu = document.querySelector('.navbar');
    }

    bindInit(handler) {
        document.getElementById('init').addEventListener('click', (event) => {
            handler();
        });
        document.getElementById('logo').addEventListener('click', (event) => {
            handler();
        });
    }

    showProductTypes() {
        this.categories.replaceChildren();
        this.categories.insertAdjacentHTML('beforeend',


            `<div class="container text-center">
                <div class="row">
                    <div class="col">

                        <a href="#product-list" data-type="Pasta">
                            <div><img class="img-fluid rounded" alt="Categoria pastas"
                                src="../Imagenes/pasta.jpg" />
                            </div>
                            <div class="cat-list-text">
                                <h3>Pasta</h3>
                                <div>Fresca y no fresca</div>
                            </div>
                        </a>

                    </div>
                    <div class="col">
                        <a href="#product-list" data-type="Carne">
                            <div><img class="img-fluid rounded" alt="Categoría carnes"
                                src="../Imagenes/carne.jpg" />
                            </div>
                            <div class="cat-list-text">
                                <h3>Carnes</h3>
                                <div>De maxima calidad</div>
                            </div>
                        </a>

                    </div>
                    <div class="col">
                        <a href="#product-list" data-type="Pescado">
                            <div><img class="img-fluid rounded" alt="Categoría pescados"
                                src="../Imagenes/pescado.jpg" />
                            </div>
                            <div class="cat-list-text">
                                <h3>Pescados</h3>
                                <div>Congelados y frescos</div>
                            </div>
                        </a>

                    </div>
                </div>
            </div>`

        );
    }

}

export default RestaurantView;