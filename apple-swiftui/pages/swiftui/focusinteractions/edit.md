> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/focusinteractions/edit](https://developer.apple.com/documentation/swiftui/focusinteractions/edit)

# edit

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The view captures input from non-spatial sources like a keyboard or Digital Crown.

## Declaration

```swift
static let edit: FocusInteractions
```

<a id="discussion"></a>

## Discussion

Views that support focus-driven editing interactions become focused when the user taps or clicks on them, or when the user issues a focus movement command.

## See Also

### Creating the interaction types

- [automatic](automatic.md): The view supports whatever focus-driven interactions are commonly expected for interactive content on the current platform.
- [activate](activate.md): The view has a primary action that can be activated via focus gestures.
