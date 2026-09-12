> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapcontent/tint(_:)](https://developer.apple.com/documentation/mapkit/mapcontent/tint(_:))

# tint(\_:)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

The tint shape style to apply to map content.

## Declaration

```swift
@MainActor @preconcurrency func tint<S>(_ tint: S) -> some MapContent where S : ShapeStyle

```

## Parameters

- `tint`: The tint to apply.

<a id="return-value"></a>

## Return Value

Returns [MapContent](../mapcontent.md) with overlays drawn with the [ShapeStyle](https://developer.apple.com/documentation/swiftui/shapestyle) you specified.

## See Also

### Setting the content style

- [foregroundStyle(\_:)](foregroundstyle%28__%29.md): Specifies the shape style used to fill content in drawing map overlays.
