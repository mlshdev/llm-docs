> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspdfpanel/defaultfilename](https://developer.apple.com/documentation/appkit/nspdfpanel/defaultfilename)

# defaultFileName (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

The initial value for the user-editable filename shown in the name field of the PDF panel.

## Declaration

```swift
var defaultFileName: String { get set }
```

<a id="Discussion"></a>

## Discussion

The `defaultFileName` string should never include a file extension. By default, the string’s value is “Untitled” (or its equivalent for the current locale).

## See Also

### Managing the Contents of a PDF Panel

- [accessoryController](accessorycontroller.md): A view controller for the accessory view that the panel can present.
- [options](options-swift.property.md): A set of configuration options that determine the accessory views the PDF panel should display.

# defaultFileName (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

The initial value for the user-editable filename shown in the name field of the PDF panel.

## Declaration

```objectivec
@property (copy) NSString * defaultFileName;
```

<a id="Discussion"></a>

## Discussion

The `defaultFileName` string should never include a file extension. By default, the string’s value is “Untitled” (or its equivalent for the current locale).

## See Also

### Managing the Contents of a PDF Panel

- [accessoryController](accessorycontroller.md): A view controller for the accessory view that the panel can present.
- [options](options-swift.property.md): A set of configuration options that determine the accessory views the PDF panel should display.
