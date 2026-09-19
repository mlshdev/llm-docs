> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photosui/phpickerfilter-swift.struct/all(of:)

# all(of:)

**Framework:** PhotosUI  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS

Creates a new filter that includes only the filters you specify.

## Declaration

```swift
static func all(of subfilters: [PHPickerFilter]) -> PHPickerFilter
```

## Parameters

- `subfilters`: The array of filters to include.

<a id="return-value"></a>

## Return Value

A new filter that contains the list of filters you specify.

## See Also

### Creating Filters

- [playbackStyle(\_:)](playbackstyle%28__%29.md): Creates a new filter by using the playback style you specify.
- [not(\_:)](not%28__%29.md): Creates a new filter that excludes the filter you specify.
