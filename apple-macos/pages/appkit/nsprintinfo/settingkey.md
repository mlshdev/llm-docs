> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintinfo/settingkey](https://developer.apple.com/documentation/appkit/nsprintinfo/settingkey)

# NSPrintInfo.SettingKey (Swift)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

The type you use to specify a print info setting key.

## Declaration

```swift
typealias SettingKey = String
```

## See Also

### Accessing Core Printing Information

- [printSettings](printsettings.md): A mutable dictionary containing the print settings from Core Printing.
- [pmPrintSession()](pmprintsession%28%29.md): Returns a Core Printing object configured with the print info’s session information.
- [pmPageFormat()](pmpageformat%28%29.md): Returns a Core Printing object configured with the print info’s page format information.
- [pmPrintSettings()](pmprintsettings%28%29.md): Returns a Core Printing object configured with the print info’s print settings information
- [updateFromPMPageFormat()](updatefrompmpageformat%28%29.md): Synchronizes the print info’s page format information with information from its associated page format object.
- [updateFromPMPrintSettings()](updatefrompmprintsettings%28%29.md): Synchronizes the print info’s print settings information with information from its associated print settings object.
- [takeSettings(from:)](takesettings%28from_%29.md): Updates the print info with all the settings and attributes in the specified PDF info object.

# NSPrintInfoSettingKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

The type you use to specify a print info setting key.

## Declaration

```objectivec
typedef NSString * NSPrintInfoSettingKey;
```

## See Also

### Accessing Core Printing Information

- [printSettings](printsettings.md): A mutable dictionary containing the print settings from Core Printing.
- [PMPrintSession](pmprintsession%28%29.md): Returns a Core Printing object configured with the print info’s session information.
- [PMPageFormat](pmpageformat%28%29.md): Returns a Core Printing object configured with the print info’s page format information.
- [PMPrintSettings](pmprintsettings%28%29.md): Returns a Core Printing object configured with the print info’s print settings information
- [updateFromPMPageFormat](updatefrompmpageformat%28%29.md): Synchronizes the print info’s page format information with information from its associated page format object.
- [updateFromPMPrintSettings](updatefrompmprintsettings%28%29.md): Synchronizes the print info’s print settings information with information from its associated print settings object.
- [takeSettingsFromPDFInfo:](takesettings%28from_%29.md): Updates the print info with all the settings and attributes in the specified PDF info object.
