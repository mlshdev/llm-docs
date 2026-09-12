> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton/autoenablesitems](https://developer.apple.com/documentation/appkit/nspopupbutton/autoenablesitems)

# autoenablesItems (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the button enables and disables its items every time a user event occurs.

## Declaration

```swift
var autoenablesItems: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), user events cause the button to enable and disable its items automatically according to the NSMenuValidation protocol specification.

## See Also

### Setting the type of menu

- [pullsDown](pullsdown.md): A Boolean value indicating whether the button displays a pull-down or pop-up menu.

# autoenablesItems (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the button enables and disables its items every time a user event occurs.

## Declaration

```objectivec
@property BOOL autoenablesItems;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), user events cause the button to enable and disable its items automatically according to the NSMenuValidation protocol specification.

## See Also

### Setting the type of menu

- [pullsDown](pullsdown.md): A Boolean value indicating whether the button displays a pull-down or pop-up menu.
