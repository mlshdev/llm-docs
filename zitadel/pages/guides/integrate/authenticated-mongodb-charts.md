> Release-pinned source for ZITADEL v4.17.3: [apps/docs/content/guides/integrate/authenticated-mongodb-charts.mdx](https://zitadel.com/docs/guides/integrate/authenticated-mongodb-charts)

This integration guide shows how you can embed authenticated MongoDB Charts in your web application using ZITADEL as authentication provider.

## Setup ZITADEL Application

Before you can embed an authenticated chart in your application, you have to do a few setup steps in ZITADEL Console.
You will need to provide some information about your app. We recommend creating a new app to start from scratch.

1. Navigate to your Project
2. Add a new application at the top of the page.
3. Select Web application type and continue.
4. Use [Authorization Code](https://zitadel.com/docs/apis/openidoauth/grant-types#authorization-code) in combination with [Proof Key for Code Exchange (PKCE)](https://zitadel.com/docs/apis/openidoauth/grant-types#proof-key-for-code-exchange).
5. Skip the redirect settings and confirm the app creation
6. Copy the client ID, you will need to tell MongoDB Charts about it.
7. When you created the app, expand its *OIDC Settings* section, change the *Auth Token Type* to JWT

Your application settings should now look similar to this:

![Create app in management console](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/integrations/mongodb-charts-app-create-light.png)

## Setup Custom JWT Provider for MongoDB Charts

Configure ZITADEL as your *Custom JWT Provider* following the [MongoDB docs](https://docs.mongodb.com/charts/configure-auth-providers/) .

Configure the following values:

- Signing Algorithm: RS256
- Signing Key: JWK or JWKS URL
- JWKS: https\://$CUSTOM\_DOMAIN/oauth/v2/keys
- Audience: Your app's client ID which you copied when you created the ZITADEL app

Your settings should look similar to this:

![](https://raw.githubusercontent.com/zitadel/zitadel/41b11149c6997eddd7e38390912e12ff5f918a73/apps/docs/public/img/integrations/mongodb-charts-auth-provider-light.png)

## Embedding your Chart

Embed a chart into your application now, following the corresponding [MongoDB docs](https://docs.mongodb.com/charts/saas/embed-chart-jwt-auth/).

If you've done the [Angular Quickstart](https://zitadel.com/docs/examples/login/angular), your code could look something like this:

```html
<div id="chart"></div>
```

```css
/* chart.component.css */
div#chart {
    height: 500px;
}
```

```ts
// chart.component.ts

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.renderChart().catch(e => window.alert(e.message));
  }

  async renderChart() {
    const sdk = new ChartsEmbedSDK({
      baseUrl: "<YOUR CHARTS BASE URL HERE>",
      getUserToken: () => {
        return this.auth.getAccessToken()
      },
    });

    const chart = sdk.createChart({
      chartId: "<YOUR CHART ID HERE>"
    });
    await chart.render(<HTMLElement>document.getElementById("chart"));
  }
}
```
