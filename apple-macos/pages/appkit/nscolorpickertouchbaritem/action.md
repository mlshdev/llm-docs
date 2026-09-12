> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpickertouchbaritem/action](https://developer.apple.com/documentation/appkit/nscolorpickertouchbaritem/action)

# action (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

The selector on the target object that is invoked when a user interacts with the color picker.

## Declaration

```swift
var action: Selector? { get set }
```

## See Also

### Obtaining the selected color

- [color](color.md): The picker’s currently selected color.
- [target](target.md): An object that is notified when a user interacts with the color picker.

# action (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

The selector on the target object that is invoked when a user interacts with the color picker.

## Declaration

```objectivec
@property (nullable) SEL action;
```

## See Also

### Obtaining the selected color

- [color](color.md): The picker’s currently selected color.
- [target](target.md): An object that is notified when a user interacts with the color picker.
