> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowresizability/automatic](https://developer.apple.com/documentation/swiftui/windowresizability/automatic)

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 13.0+ · visionOS 1.0+

The automatic window resizability.

## Declaration

```swift
static var automatic: WindowResizability { get set }
```

<a id="discussion"></a>

## Discussion

When you use automatic resizability, SwiftUI applies a resizing strategy that’s appropriate for the scene type:

- Windows from [WindowGroup](../windowgroup.md), [Window](../window.md), and [DocumentGroup](../documentgroup.md) scene declarations use the [contentMinSize](contentminsize.md) strategy.
- A window from a [Settings](../settings.md) scene declaration uses the [contentSize](contentsize.md) strategy.
- Windows on visionOS with a window style of [volumetric](../windowstyle/volumetric.md) use the [contentSize](contentsize.md) strategy.

Automatic resizability is the default if you don’t specify another value using the [windowResizability(\_:)](../scene/windowresizability%28__%29.md) scene modifier.

## See Also

### Getting the resizability

- [contentMinSize](contentminsize.md): A window resizability that’s partially derived from the window’s content.
- [contentSize](contentsize.md): A window resizability that’s derived from the window’s content.
