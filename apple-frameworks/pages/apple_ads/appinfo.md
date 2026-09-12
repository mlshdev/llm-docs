> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/appinfo](https://developer.apple.com/documentation/apple_ads/appinfo)

# AppInfo

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+

The response to an app search request.

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

- [AppInfoListResponse](appinfolistresponse.md): The response details of app search requests.
