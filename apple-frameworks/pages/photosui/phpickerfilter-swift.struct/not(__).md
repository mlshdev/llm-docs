> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phpickerfilter-swift.struct/not(_:)](https://developer.apple.com/documentation/photosui/phpickerfilter-swift.struct/not(_:))

# not(\_:)

**Framework:** PhotosUI  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS

Creates a new filter that excludes the filter you specify.

## Declaration

```swift
static func not(_ filter: PHPickerFilter) -> PHPickerFilter
```

## Parameters

- `filter`: The filter to exclude from the new filter.

<a id="return-value"></a>

## Return Value

A new filter that excludes the filter you specify.

## See Also

### Creating Filters

- [playbackStyle(\_:)](playbackstyle%28__%29.md): Creates a new filter by using the playback style you specify.
- [all(of:)](all%28of_%29.md): Creates a new filter that includes only the filters you specify.
