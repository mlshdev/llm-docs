> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/focusinteractions/activate](https://developer.apple.com/documentation/swiftui/focusinteractions/activate)

# activate

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The view has a primary action that can be activated via focus gestures.

## Declaration

```swift
static let activate: FocusInteractions
```

<a id="discussion"></a>

## Discussion

On macOS and iOS, focus-driven activation interactions are only possible when all-controls keyboard navigation is enabled. On tvOS and watchOS, focus-driven activation interactions are always possible.

## See Also

### Creating the interaction types

- [automatic](automatic.md): The view supports whatever focus-driven interactions are commonly expected for interactive content on the current platform.
- [edit](edit.md): The view captures input from non-spatial sources like a keyboard or Digital Crown.
