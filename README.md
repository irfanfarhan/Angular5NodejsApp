# Angular5NodejsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


public getByUrlWithoutParsingToJsonObserved(url: string) : any {
        const getHeaders = new HttpHeaders({
            'X-CSC-User-Id': localStorage.getItem('userId')
        });

        return this.http.get(url, { headers: getHeaders, responseType: 'blob', observe: 'response' }).pipe(catchError(this.handleError));
    }
    
    (res) => {
                this.loadingService.toggleLoadingIndicator(false);
                let data = res.body;
                const keys = res.headers.keys();
                const contentDisposition = res.headers.get('content-disposition') || '';
                const matches = /filename=([^;]+)/ig.exec(contentDisposition);
                const fileName = (matches[1] || 'untitled').trim();
                
                let myBlob = new Blob([data], {
                    type: 'application/octet-stream'
                });
                if (navigator.msSaveBlob) { // IE 10+
                    navigator.msSaveBlob(myBlob, fileName);
                } else {
                    const url = window.URL.createObjectURL(data);
                    const link = document.createElement('a');
                    document.body.appendChild(link);
                    data;
                    link.download = fileName;
                    link.href = url;
                    link.click();
                }
            },
