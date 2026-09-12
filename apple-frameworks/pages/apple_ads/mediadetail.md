> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/mediadetail](https://developer.apple.com/documentation/apple_ads/mediadetail)

# MediaDetail

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 5.2+

The media detail object.

## Declaration

```
object MediaDetail
```

## Properties

- `adamId` — `int64`: Your unique App Store app identifier.
- `appName` — `string`: The name of an app.
- `artistName` — `string`: The name of the app author.
- `availableStorefronts` — `[string]`: Countries or regions where the app is available.
- `deviceClasses` — `[string]`: Device classes supported.
- `iconPictureUrl` — `string`: The URL of the image asset.
- `id` — `string`: A unique ID.
- `isPreOrder` — `boolean`: Indicates if the app is a pre-order.
- `primaryGenre` — `string`: The genre of the app.
- `primaryLanguage` — `string`:
- `secondaryGenre` — `string`:

## Relationships

### Inherited By

- [MediaDetailResponse](mediadetailresponse.md)

## See Also

### Response Objects

- [MediaDetailResponse](mediadetailresponse.md)
- [MediaLocaleDetail](medialocaledetail.md): The media locale detail object.
- [MediaLocaleDetailResponse](medialocaledetailresponse.md)
