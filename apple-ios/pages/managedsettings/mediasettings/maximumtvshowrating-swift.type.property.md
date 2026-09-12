> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/mediasettings/maximumtvshowrating-swift.type.property](https://developer.apple.com/documentation/managedsettings/mediasettings/maximumtvshowrating-swift.type.property)

# maximumTVShowRating

**Framework:** Managed Settings  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The metadata for the setting that controls the maximum TV show rating.

## Declaration

```swift
static let maximumTVShowRating: BoundedSettingMetadata<Int>
```

<a id="discussion"></a>

## Discussion

The default value is `1000` and the bounds are `0...1000`.

## See Also

### Limiting movie and TV show ratings

- [maximumMovieRating](maximummovierating-swift.property.md): The maximum movie rating the user may view.
- [maximumTVShowRating](maximumtvshowrating-swift.property.md): The maximum TV show rating that the user may view.
- [maximumMovieRating](maximummovierating-swift.type.property.md): The metadata for the setting that controls the maximum movie rating.
