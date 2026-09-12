> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phpickerfilter-swift.struct/playbackstyle(_:)](https://developer.apple.com/documentation/photosui/phpickerfilter-swift.struct/playbackstyle(_:))

# playbackStyle(\_:)

**Framework:** PhotosUI  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS

Creates a new filter by using the playback style you specify.

## Declaration

```swift
static func playbackStyle(_ playbackStyle: PHAsset.PlaybackStyle) -> PHPickerFilter
```

## Parameters

- `playbackStyle`: The asset playback style.

<a id="return-value"></a>

## Return Value

A new filter with the playback style you specify.

## See Also

### Creating Filters

- [all(of:)](all%28of_%29.md): Creates a new filter that includes only the filters you specify.
- [not(\_:)](not%28__%29.md): Creates a new filter that excludes the filter you specify.
