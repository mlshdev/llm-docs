> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/gestureinputkinds/directtouch](https://developer.apple.com/documentation/swiftui/gestureinputkinds/directtouch)

# directTouch

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A person is touching content directly.

## Declaration

```swift
static let directTouch: GestureInputKinds
```

<a id="discussion"></a>

## Discussion

Examples:

- touching a screen directly with fingers,
- directly touching or pinching content in visionOS.

> **Note**

> In visionOS, you can further customize what hand motions your gesture recognizes using [handActivationBehavior(\_:)](../gesture/handactivationbehavior%28__%29.md).

## See Also

### Gesture input options

- [all](all.md): All possible gesture input kinds, present and future.
- [indirectTouch](indirecttouch.md): A person is touching content indirectly.
- [pencil](pencil.md): A person is touching content directly with an Apple Pencil, or an other supported pencil device.
- [pointer](pointer.md): A person is pressing a mouse or a trackpad button while the pointer is pointing at content.
