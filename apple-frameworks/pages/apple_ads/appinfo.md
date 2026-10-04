> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/appinfo

# AppInfo

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+ (deprecated in 5.2)

The response to an app search request.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
object AppInfo
```

## Properties

- `adamId` — `int64`: Your unique [App Store Connect](https://appstoreconnect.apple.com) app identifier.
- `appName` — `string`: The name of the app.
- `countryOrRegionCodes` — `[string]`: A list of ISO alpha-2 country code strings.
- `developerName` — `string`: The developer name for the app.

## See Also

### Search Apps Request and Response Objects

- [AppInfoListResponse](appinfolistresponse.md): Deprecated. The response details of app search requests.
