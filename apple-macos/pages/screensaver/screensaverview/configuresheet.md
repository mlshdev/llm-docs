> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/screensaver/screensaverview/configuresheet](https://developer.apple.com/documentation/screensaver/screensaverview/configuresheet)

# configureSheet (Swift)

**Framework:** Screen Saver  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The window that contains the controls to configure the screen saver.

## Declaration

```swift
var configureSheet: NSWindow? { get }
```

<a id="Discussion"></a>

## Discussion

The system runs this window as a sheet, so include buttons that allow the user to end the modal session in which the sheet runs. When the user dismisses the sheet, the controller in charge of the sheet must end the document modal session by calling the [NSApplication](../../appkit/nsapplication.md) method [endSheet(\_:)](../../appkit/nsapplication/endsheet%28__%29.md) with the sheet’s window as the argument.

## See Also

### Accessing the configuration sheet

- [hasConfigureSheet](hasconfiguresheet.md): A Boolean value that indicates whether the screen saver has an associated configuration sheet.

# configureSheet (Objective-C)

**Framework:** Screen Saver  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The window that contains the controls to configure the screen saver.

## Declaration

```objectivec
@property (strong, readonly) NSWindow * configureSheet;
```

<a id="Discussion"></a>

## Discussion

The system runs this window as a sheet, so include buttons that allow the user to end the modal session in which the sheet runs. When the user dismisses the sheet, the controller in charge of the sheet must end the document modal session by calling the [NSApplication](../../appkit/nsapplication.md) method [endSheet:](../../appkit/nsapplication/endsheet%28__%29.md) with the sheet’s window as the argument.

## See Also

### Accessing the configuration sheet

- [hasConfigureSheet](hasconfiguresheet.md): A Boolean value that indicates whether the screen saver has an associated configuration sheet.
