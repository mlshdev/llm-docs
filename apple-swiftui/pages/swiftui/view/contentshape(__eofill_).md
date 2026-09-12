> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/contentshape(_:eofill:)](https://developer.apple.com/documentation/swiftui/view/contentshape(_:eofill:))

# contentShape(\_:eoFill:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Defines the content shape for hit testing.

## Declaration

```swift
nonisolated func contentShape<S>(_ shape: S, eoFill: Bool = false) -> some View where S : Shape

```

## Parameters

- `shape`: The hit testing shape for the view.
- `eoFill`: A Boolean that indicates whether the shape is interpreted with the even-odd winding number rule.

<a id="return-value"></a>

## Return Value

A view that uses the given shape for hit testing.

## See Also

### Controlling hit testing

- [allowsTightening(\_:)](allowstightening%28__%29.md): Sets whether text in this view can compress the space between characters when necessary to fit text in a line.
- [contentShape(\_:\_:eoFill:)](contentshape%28____eofill_%29.md): Sets the content shape for this view.
- [ContentShapeKinds](../contentshapekinds.md): A kind for the content shape of a view.
