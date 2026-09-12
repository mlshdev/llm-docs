> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/app-store-connect-api-2-3-release-notes](https://developer.apple.com/documentation/appstoreconnectapi/app-store-connect-api-2-3-release-notes)

# App Store Connect API 2.3 release notes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Article

Update your server-side code to use new features, and test your code against API changes.

<a id="New-features"></a>

### New features

- Getting an app’s price points and [List all price points for an in-app purchase](get-v2-inapppurchases-_id_-pricepoints.md) now support 900 price points.
- [List App Price Point Equalizations](get-v3-apppricepoints-_id_-equalizations.md) allows for setting equalized prices.
- Getting and managing an app’s price schedules   and [In-App purchase price schedules](in-app-purchase-price-schedules.md) support automatic prices, manual prices, and base territory configuration.
- Getting and managing an app’s availability, [In-app purchase availability](in-app-purchase-availability.md) and [Subscription availability](subscription-availability.md) supports configuring availability for apps, in-app purchases, and subscriptions.

<a id="Deprecations"></a>

### Deprecations

- The `List all price points for an app V1` endpoint is now deprecated and replaced with [List All Price Points for an App](get-v1-apps-_id_-apppricepoints.md).
- The `List all prices for an app` endpoint is now deprecated and replaced with [Read Price Schedule Information for an App](get-v1-apps-_id_-apppriceschedule.md).
- The `List all available territories for an app` endpoint is now deprecated and replaced with `GET-v1-appAvailabilities-{id}`.
- The `AppPricePointV2` object deprecated and replaced with [AppPricePointV3](apppricepointv3.md).
- The `List all price points for an app V1` endpoint is now deprecated and replaced with `List app price tiers`.
- The `Read app price tier information` endpoint is now deprecated and replaced with `Read App Price Point Information`.

> **Important**

>  If you use [Add a Scheduled Price Change to an App](post-v1-apppriceschedules.md) to add a scheduled price change to your App, you can’t use `AppPriceInlineCreate` to change your App’s price.

<a id="Note-to-Developers"></a>

### Note to Developers

On May 9, 2023, pricing for your existing apps and in-app purchases (excluding auto-renewable subscriptions) will be updated across all 175 storefronts to be equalized to your base country or region using publicly available exchange rate information. If you don’t specify a base country or region, Apple will use your current price in the United States as the basis to provide comparable prices in other countries or regions. Learn more about [app](https://developer.apple.com/help/app-store-connect/manage-app-pricing/set-a-price) or[in-app purchase pricing](https://developer.apple.com/help/app-store-connect/manage-in-app-purchases/set-a-price-for-an-in-app-purchase).

## See Also

### Versions

- [App Store Connect API 4.4.1 release notes](app-store-connect-api-4-4-1-release-notes.md): Update your server-side code to use new features, and test your code against API changes.
- [App Store Connect API 4.4 release notes](app-store-connect-api-4-4-release-notes.md): Update your server-side code to use new features, and test your code against API changes.
- [App Store Connect API 4.3.1 release notes](app-store-connect-api-4-3-1-release-notes.md): Update your server-side code to use new features, and test your code against API changes.
- [App Store Connect API 4.3 release notes](app-store-connect-api-4-3-release-notes.md): Update your server-side code to use new features, and test your code against API changes.
- [App Store Connect API 4.2 release notes](app-store-connect-api-4-2-release-notes.md): Update your server-side code to use new features, and test your code against API changes.
- [App Store Connect API 4.1 release notes](app-store-connect-api-4-1-release-notes.md): Update your server-side code to use new features, and test your code against API changes.
- [App Store Connect API 4.0 release notes](app-store-connect-api-4-0-release-notes.md): Update your server-side code to use new features, and test your code against API changes.
- [App Store Connect API 3.8 release notes](app-store-connect-api-3-8-release-notes.md): Update your server-side code to use new features, and test your code against API changes.
- [App Store Connect API 3.7 release notes](app-store-connect-api-3-7-release-notes.md): Update your server-side code to use new features, and test your code against API changes.
- [App Store Connect API 3.6 release notes](app-store-connect-api-3-6-release-notes.md): Update your server-side code to use new features, and test your code against API changes.
- [App Store Connect API 3.5 release notes](app-store-connect-api-3-5-release-notes.md): Update your server-side code to use new features, and test your code against API changes.
- [App Store Connect API 3.4 release notes](app-store-connect-api-3-4-release-notes.md): Update your server-side code to use new features, and test your code against API changes.
- [App Store Connect API 3.3 release notes](app-store-connect-api-3-3-release-notes.md): Update your server-side code to use new features, and test your code against API changes.
- [App Store Connect API 3.2 release notes](app-store-connect-api-3-2-release-notes.md): Update your server-side code to use new features, and test your code against API changes.
- [App Store Connect API 3.1 release notes](app-store-connect-api-3-1-release-notes.md): Update your server-side code to use new features, and test your code against API changes.
