> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/mediasettings/maximummovierating-swift.property](https://developer.apple.com/documentation/managedsettings/mediasettings/maximummovierating-swift.property)

# maximumMovieRating

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The maximum movie rating the user may view.

## Declaration

```swift
var maximumMovieRating: Int? { get set }
```

## Mentioned In

- [Confirming the effective TV and movie ratings](../readingmedia.md)

<a id="discussion"></a>

## Discussion

If your app doesn’t configure this setting, the value is `nil`. The following list provides U.S. descriptions for the ratings:

- `1000`: All
- `500`: NC-17
- `400`: R
- `300`: PG-13
- `200`: PG
- `100`: G
- `0`: None

## See Also

### Limiting movie and TV show ratings

- [maximumTVShowRating](maximumtvshowrating-swift.property.md): The maximum TV show rating that the user may view.
- [maximumMovieRating](maximummovierating-swift.type.property.md): The metadata for the setting that controls the maximum movie rating.
- [maximumTVShowRating](maximumtvshowrating-swift.type.property.md): The metadata for the setting that controls the maximum TV show rating.
