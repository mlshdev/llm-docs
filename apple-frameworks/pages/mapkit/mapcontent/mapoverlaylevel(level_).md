> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapcontent/mapoverlaylevel(level:)](https://developer.apple.com/documentation/mapkit/mapcontent/mapoverlaylevel(level:))

# mapOverlayLevel(level:)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Specifies the position of overlays relative to other map content.

## Declaration

```swift
@MainActor @preconcurrency func mapOverlayLevel(level: MKOverlayLevel) -> some MapContent

```

## Parameters

- `level`: One of the [MKOverlayLevel](../mkoverlaylevel.md) levels.

<a id="return-value"></a>

## Return Value

Returns [MapContent](../mapcontent.md) with overlays drawn with the positioning level you specified.
