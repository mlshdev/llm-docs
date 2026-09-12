> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapcontent/annotationsubtitles(_:)](https://developer.apple.com/documentation/mapkit/mapcontent/annotationsubtitles(_:))

# annotationSubtitles(\_:)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Sets the visibility of subtitles for markers and annotations.

## Declaration

```swift
@MainActor @preconcurrency func annotationSubtitles(_ visibility: Visibility) -> some MapContent

```

## Parameters

- `visibility`: One of the `Visibility` settings. The default is [Visibility.automatic](https://developer.apple.com/documentation/swiftui/visibility/automatic), which results in the subtitle being visible only when the annotation is in a selected state.

<a id="return-value"></a>

## Return Value

Returns [MapContent](../mapcontent.md) whose subtitles have the visibility setting you specified.

## See Also

### Setting the visibility of the title and subtitle

- [annotationTitles(\_:)](annotationtitles%28__%29.md): Sets the visibility of titles for markers and annotations.
