> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrollindicatorvisibility/never](https://developer.apple.com/documentation/swiftui/scrollindicatorvisibility/never)

# never

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Scroll indicators should never be visible.

## Declaration

```swift
static var never: ScrollIndicatorVisibility { get }
```

<a id="discussion"></a>

## Discussion

This value behaves like [hidden](hidden.md), but overrides scrollable views that choose to keep their indicators visible. When using this value, provide an alternative method of scrolling. The typical horizontal swipe gesture might not be available, depending on the current input device.

## See Also

### Getting visibilties

- [automatic](automatic.md): Scroll indicator visibility depends on the policies of the component accepting the visibility configuration.
- [hidden](hidden.md): Hide the scroll indicators.
- [visible](visible.md): Show the scroll indicators.
