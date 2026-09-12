> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinsertionindicator/displaymode-swift.property](https://developer.apple.com/documentation/appkit/nstextinsertionindicator/displaymode-swift.property)

# displayMode (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

A value that describes the display mode of an indicator.

## Declaration

```swift
var displayMode: NSTextInsertionIndicator.DisplayMode { get set }
```

<a id="Discussion"></a>

## Discussion

Set the [displayMode](displaymode-swift.property.md) to [NSTextInsertionIndicator.DisplayMode.automatic](displaymode-swift.enum/automatic.md) when your custom view becomes the first responder. When your custom view resigns first responder, set the [displayMode](displaymode-swift.property.md) to [NSTextInsertionIndicator.DisplayMode.hidden](displaymode-swift.enum/hidden.md) to indicate that key events aren’t sent to your view.

## See Also

### Setting the display mode

- [automaticModeOptions](automaticmodeoptions-swift.property.md): Options that affect the automatic display mode.
- [NSTextInsertionIndicator.AutomaticModeOptions](automaticmodeoptions-swift.struct.md): Options that affect the automatic display mode.
- [NSTextInsertionIndicator.DisplayMode](displaymode-swift.enum.md): Constants that determine how to display the system text cursor in a custom text UI.

# displayMode (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

A value that describes the display mode of an indicator.

## Declaration

```objectivec
@property NSTextInsertionIndicatorDisplayMode displayMode;
```

<a id="Discussion"></a>

## Discussion

Set the [displayMode](displaymode-swift.property.md) to [NSTextInsertionIndicatorDisplayModeAutomatic](displaymode-swift.enum/automatic.md) when your custom view becomes the first responder. When your custom view resigns first responder, set the [displayMode](displaymode-swift.property.md) to [NSTextInsertionIndicatorDisplayModeHidden](displaymode-swift.enum/hidden.md) to indicate that key events aren’t sent to your view.

## See Also

### Setting the display mode

- [automaticModeOptions](automaticmodeoptions-swift.property.md): Options that affect the automatic display mode.
- [NSTextInsertionIndicatorAutomaticModeOptions](automaticmodeoptions-swift.struct.md): Options that affect the automatic display mode.
- [NSTextInsertionIndicatorDisplayMode](displaymode-swift.enum.md): Constants that determine how to display the system text cursor in a custom text UI.
