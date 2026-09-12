> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintinfo/updatefrompmpageformat()](https://developer.apple.com/documentation/appkit/nsprintinfo/updatefrompmpageformat())

# updateFromPMPageFormat() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Synchronizes the print info’s page format information with information from its associated page format object.

## Declaration

```swift
func updateFromPMPageFormat()
```

<a id="Discussion"></a>

## Discussion

You should use this method after making changes to the `PMPageFormat` object obtained from the receiver. Each `NSPrintInfo` object keeps track of the object returned from its [pmPageFormat()](pmpageformat%28%29.md) method and obtains any updated information from the object directly. You only need to synchronize the objects once when you have made all of the desired changes.

## See Also

### Accessing Core Printing Information

- [printSettings](printsettings.md): A mutable dictionary containing the print settings from Core Printing.
- [NSPrintInfo.SettingKey](settingkey.md): The type you use to specify a print info setting key.
- [pmPrintSession()](pmprintsession%28%29.md): Returns a Core Printing object configured with the print info’s session information.
- [pmPageFormat()](pmpageformat%28%29.md): Returns a Core Printing object configured with the print info’s page format information.
- [pmPrintSettings()](pmprintsettings%28%29.md): Returns a Core Printing object configured with the print info’s print settings information
- [updateFromPMPrintSettings()](updatefrompmprintsettings%28%29.md): Synchronizes the print info’s print settings information with information from its associated print settings object.
- [takeSettings(from:)](takesettings%28from_%29.md): Updates the print info with all the settings and attributes in the specified PDF info object.

# updateFromPMPageFormat (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Synchronizes the print info’s page format information with information from its associated page format object.

## Declaration

```objectivec
- (void) updateFromPMPageFormat;
```

<a id="Discussion"></a>

## Discussion

You should use this method after making changes to the `PMPageFormat` object obtained from the receiver. Each `NSPrintInfo` object keeps track of the object returned from its [PMPageFormat](pmpageformat%28%29.md) method and obtains any updated information from the object directly. You only need to synchronize the objects once when you have made all of the desired changes.

## See Also

### Accessing Core Printing Information

- [printSettings](printsettings.md): A mutable dictionary containing the print settings from Core Printing.
- [NSPrintInfoSettingKey](settingkey.md): The type you use to specify a print info setting key.
- [PMPrintSession](pmprintsession%28%29.md): Returns a Core Printing object configured with the print info’s session information.
- [PMPageFormat](pmpageformat%28%29.md): Returns a Core Printing object configured with the print info’s page format information.
- [PMPrintSettings](pmprintsettings%28%29.md): Returns a Core Printing object configured with the print info’s print settings information
- [updateFromPMPrintSettings](updatefrompmprintsettings%28%29.md): Synchronizes the print info’s print settings information with information from its associated print settings object.
- [takeSettingsFromPDFInfo:](takesettings%28from_%29.md): Updates the print info with all the settings and attributes in the specified PDF info object.
