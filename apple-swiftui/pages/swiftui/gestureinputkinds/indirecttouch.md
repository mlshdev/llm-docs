> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/gestureinputkinds/indirecttouch

# indirectTouch

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A person is touching content indirectly.

## Declaration

```swift
static let indirectTouch: GestureInputKinds
```

<a id="discussion"></a>

## Discussion

Examples:

- performing a multi-touch gesture on a trackpad’s surface,
- swiping on Siri Remote’s surface in tvOS,
- indirectly pinching content while looking at it in visionOS.

## See Also

### Gesture input options

- [all](all.md): All possible gesture input kinds, present and future.
- [directTouch](directtouch.md): A person is touching content directly.
- [pencil](pencil.md): A person is touching content directly with an Apple Pencil, or an other supported pencil device.
- [pointer](pointer.md): A person is pressing a mouse or a trackpad button while the pointer is pointing at content.
