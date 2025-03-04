describe('Validación de botones CRUD en Gestión de Vuelos', () => {
  beforeEach(() => {
    cy.visit('https://crud.taekwondo4all.cat/');
  });

  it('Debe verificar que los botones CRUD funcionan correctamente', () => {
    // 🔹 CREAR VUELO
    cy.contains('Crear Vuelo')
      .should('be.visible')
      .click({ force: true });

    // 🔄 Esperar a que aparezca el formulario (ajustar selector real)
    cy.get('form').should('exist');

    cy.visit('https://crud.taekwondo4all.cat/');

    // 🔹 LEER VUELOS
    cy.contains('Leer Vuelos')
      .should('be.visible')
      .click({ force: true });

    // 🔄 Esperar a que la lista de vuelos se cargue
    cy.get('table').should('exist'); // Asumiendo que la tabla tiene los vuelos

    cy.visit('https://crud.taekwondo4all.cat/');

    // 🔹 ACTUALIZAR VUELO
    cy.contains('Actualizar Vuelo')
      .should('be.visible')
      .click({ force: true });

    // 🔄 Esperar a que aparezca la interfaz de actualización
    cy.get('form').should('exist'); // Ajustar selector según la web

    cy.visit('https://crud.taekwondo4all.cat/');

    // 🔹 ELIMINAR VUELO
    cy.contains('Eliminar Vuelo')
      .should('be.visible')
      .click({ force: true });

  });
});
