> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appcustomproductpagelocalizationinlinecreate](https://developer.apple.com/documentation/appstoreconnectapi/appcustomproductpagelocalizationinlinecreate)

# AppCustomProductPageLocalizationInlineCreate

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

An inline object for specifying a language-specific localization when creating a custom product page version.

## Declaration

```
object AppCustomProductPageLocalizationInlineCreate
```

## Properties

- `attributes` — `AppCustomProductPageLocalizationInlineCreate.Attributes` (required):
- `id` — `string`:
- `relationships` — `AppCustomProductPageLocalizationInlineCreate.Relationships`:
- `type` — `string` (required): **Allowed values:** `appCustomProductPageLocalizations`

## Topics

### Objects

- [AppCustomProductPageLocalizationInlineCreate.Attributes](appcustomproductpagelocalizationinlinecreate/attributes-data.dictionary.md): Attributes that describe an app custom product page localization inline create resource.
- [AppCustomProductPageLocalizationInlineCreate.Relationships](appcustomproductpagelocalizationinlinecreate/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [AppKeyword](appkeyword.md): A search keyword associated with an App Store listing or custom product page for discoverability.
- [AppKeywordsResponse](appkeywordsresponse.md): A response containing a list of search keywords for an App Store listing.
- [AppCustomProductPageLocalization](appcustomproductpagelocalization.md): The localized promotional text, keywords, and screenshots for a custom App Store product page in a specific language.
- [AppCustomProductPageLocalizationCreateRequest](appcustomproductpagelocalizationcreaterequest.md): The request body you use to create an app custom product page localization.
- [AppCustomProductPageLocalizationResponse](appcustomproductpagelocalizationresponse.md): A response containing a single localization for a custom App Store product page.
- [AppCustomProductPageLocalizationUpdateRequest](appcustomproductpagelocalizationupdaterequest.md): The request body you use to update an app custom product page localization.
- [AppCustomProductPageLocalizationsResponse](appcustomproductpagelocalizationsresponse.md): A response containing a list of localizations for a custom App Store product page.
- [AppCustomProductPageLocalizationAppPreviewSetsLinkagesResponse](appcustomproductpagelocalizationapppreviewsetslinkagesresponse.md): A response containing the resource identifiers of app preview sets associated with a custom product page localization.
- [AppCustomProductPageLocalizationAppScreenshotSetsLinkagesResponse](appcustomproductpagelocalizationappscreenshotsetslinkagesresponse.md): A response containing the resource identifiers of screenshot sets associated with a custom product page localization.
- [AppCustomProductPageLocalizationSearchKeywordsLinkagesRequest](appcustomproductpagelocalizationsearchkeywordslinkagesrequest.md): The request body you use to create a relationship between a custom product page localization and a search keyword.
- [AppCustomProductPageLocalizationSearchKeywordsLinkagesResponse](appcustomproductpagelocalizationsearchkeywordslinkagesresponse.md): A response containing the resource identifiers of search keywords associated with a custom product page localization.
