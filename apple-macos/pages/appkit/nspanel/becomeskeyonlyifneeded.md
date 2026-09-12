> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspanel/becomeskeyonlyifneeded](https://developer.apple.com/documentation/appkit/nspanel/becomeskeyonlyifneeded)

# becomesKeyOnlyIfNeeded (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the receiver becomes the key window only when needed.

## Declaration

```swift
var becomesKeyOnlyIfNeeded: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the panel becomes the key window only when keyboard input is required; the value is [false](https://developer.apple.com/documentation/swift/false) when the panel becomes key when it’s clicked. The default value is [false](https://developer.apple.com/documentation/swift/false).

This behavior is not set by default. You should consider setting it only if most user interface elements in the panel aren’t text fields, and if the choices that can be made by entering text can also be made in another way (such as by clicking an item in a list).

If the panel is a non-activating panel, then it becomes key only if the hit view returns [true](https://developer.apple.com/documentation/swift/true) from [needsPanelToBecomeKey](../nsview/needspaneltobecomekey.md). This way, a non-activating panel can control whether it takes keyboard focus.

## See Also

### Related Documentation

- [needsPanelToBecomeKey](../nsview/needspaneltobecomekey.md): A Boolean value indicating whether the view needs its panel to become the key window before it can handle keyboard input and navigation.

### Configuring Panels

- [isFloatingPanel](isfloatingpanel.md): A Boolean value that indicates whether the receiver is a floating panel.
- [worksWhenModal](workswhenmodal.md): A Boolean value that indicates whether the panel receives keyboard and mouse events even when some other window is being run modally.

# becomesKeyOnlyIfNeeded (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the receiver becomes the key window only when needed.

## Declaration

```objectivec
@property BOOL becomesKeyOnlyIfNeeded;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the panel becomes the key window only when keyboard input is required; the value is [false](https://developer.apple.com/documentation/swift/false) when the panel becomes key when it’s clicked. The default value is [false](https://developer.apple.com/documentation/swift/false).

This behavior is not set by default. You should consider setting it only if most user interface elements in the panel aren’t text fields, and if the choices that can be made by entering text can also be made in another way (such as by clicking an item in a list).

If the panel is a non-activating panel, then it becomes key only if the hit view returns [true](https://developer.apple.com/documentation/swift/true) from [needsPanelToBecomeKey](../nsview/needspaneltobecomekey.md). This way, a non-activating panel can control whether it takes keyboard focus.

## See Also

### Related Documentation

- [needsPanelToBecomeKey](../nsview/needspaneltobecomekey.md): A Boolean value indicating whether the view needs its panel to become the key window before it can handle keyboard input and navigation.

### Configuring Panels

- [floatingPanel](isfloatingpanel.md): A Boolean value that indicates whether the receiver is a floating panel.
- [worksWhenModal](workswhenmodal.md): A Boolean value that indicates whether the panel receives keyboard and mouse events even when some other window is being run modally.
