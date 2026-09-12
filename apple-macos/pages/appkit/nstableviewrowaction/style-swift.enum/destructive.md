> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewrowaction/style-swift.enum/destructive](https://developer.apple.com/documentation/appkit/nstableviewrowaction/style-swift.enum/destructive)

# NSTableViewRowAction.Style.destructive (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.11+

Apply a style that indicates that the action might change or delete data. This style changes the value of the [backgroundColor](../backgroundcolor.md) property to an appropriate value to reflect the destructive action. After creating the action object, you can change the background color as needed. Destructive actions require a longer swipe to activate, and trigger an animation when a table row is deleted.

## Declaration

```swift
case destructive
```

## See Also

### Constants

- [NSTableViewRowAction.Style.regular](regular.md): Apply the default style to the button. This style does not apply any special coloring to the button.

# NSTableViewRowActionStyleDestructive (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.11+

Apply a style that indicates that the action might change or delete data. This style changes the value of the [backgroundColor](../backgroundcolor.md) property to an appropriate value to reflect the destructive action. After creating the action object, you can change the background color as needed. Destructive actions require a longer swipe to activate, and trigger an animation when a table row is deleted.

## Declaration

```objectivec
NSTableViewRowActionStyleDestructive
```

## See Also

### Constants

- [NSTableViewRowActionStyleRegular](regular.md): Apply the default style to the button. This style does not apply any special coloring to the button.
