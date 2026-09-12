> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/mediasettings/maximumtvshowrating-swift.property](https://developer.apple.com/documentation/managedsettings/mediasettings/maximumtvshowrating-swift.property)

# maximumTVShowRating

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The maximum TV show rating that the user may view.

## Declaration

```swift
var maximumTVShowRating: Int? { get set }
```

<a id="discussion"></a>

## Discussion

If your app doesn’t configure this setting, the value is `nil`. The following list provides U.S. descriptions for the ratings:

- `1000`: All
- `600`: TM-MA
- `500`: TV-14
- `400`: TV-PG
- `300`: TV-G
- `200`: TV-Y7
- `100`: TV-Y
- `0`: None

## See Also

### Limiting movie and TV show ratings

- [maximumMovieRating](maximummovierating-swift.property.md): The maximum movie rating the user may view.
- [maximumMovieRating](maximummovierating-swift.type.property.md): The metadata for the setting that controls the maximum movie rating.
- [maximumTVShowRating](maximumtvshowrating-swift.type.property.md): The metadata for the setting that controls the maximum TV show rating.
