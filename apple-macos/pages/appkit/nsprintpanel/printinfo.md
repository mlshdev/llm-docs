> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintpanel/printinfo](https://developer.apple.com/documentation/appkit/nsprintpanel/printinfo)

# printInfo (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The information associated with the running Print panel.

## Declaration

```swift
var printInfo: NSPrintInfo { get }
```

<a id="Discussion"></a>

## Discussion

The value in this property is `nil` if the Print panel is not currently running.

## See Also

### Accessing the Printing Information

- [NSPrintInfo](../nsprintinfo.md): An object that stores information that’s used to generate printed output.
- [NSPrintPanel.Result](result.md)

# printInfo (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The information associated with the running Print panel.

## Declaration

```objectivec
@property (strong, readonly) NSPrintInfo * printInfo;
```

<a id="Discussion"></a>

## Discussion

The value in this property is `nil` if the Print panel is not currently running.

## See Also

### Accessing the Printing Information

- [NSPrintInfo](../nsprintinfo.md): An object that stores information that’s used to generate printed output.
- [NSPrintPanelResult](result.md)
