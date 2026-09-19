> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/managedsettings/mediasettings/maximummovierating-swift.type.property

# maximumMovieRating

**Framework:** Managed Settings  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The metadata for the setting that controls the maximum movie rating.

## Declaration

```swift
static let maximumMovieRating: BoundedSettingMetadata<Int>
```

<a id="discussion"></a>

## Discussion

The default value is `1000` and the bounds are `0...1000`.

## See Also

### Limiting movie and TV show ratings

- [maximumMovieRating](maximummovierating-swift.property.md): The maximum movie rating the user may view.
- [maximumTVShowRating](maximumtvshowrating-swift.property.md): The maximum TV show rating that the user may view.
- [maximumTVShowRating](maximumtvshowrating-swift.type.property.md): The metadata for the setting that controls the maximum TV show rating.
