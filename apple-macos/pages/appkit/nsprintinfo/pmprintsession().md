> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintinfo/pmprintsession()](https://developer.apple.com/documentation/appkit/nsprintinfo/pmprintsession())

# pmPrintSession() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a Core Printing object configured with the print info’s session information.

## Declaration

```swift
func pmPrintSession() -> UnsafeMutableRawPointer
```

<a id="return-value"></a>

## Return Value

A pointer to a [PMPrintSession](../../applicationservices/pmprintsession.md) object, an opaque type that stores information about a print job. You should not call `PMRelease` to release the returned object, except to balance calls to `PMRetain` that your code also issued.

<a id="Discussion"></a>

## Discussion

The information in the returned `PMPrintSession` object is consistent with the receiver’s session information at the time this method is called. Subsequent changes to the receiving `NSPrintInfo` object do not result in changes to the information in the `PMPrintSession` object.

## See Also

### Accessing Core Printing Information

- [printSettings](printsettings.md): A mutable dictionary containing the print settings from Core Printing.
- [NSPrintInfo.SettingKey](settingkey.md): The type you use to specify a print info setting key.
- [pmPageFormat()](pmpageformat%28%29.md): Returns a Core Printing object configured with the print info’s page format information.
- [pmPrintSettings()](pmprintsettings%28%29.md): Returns a Core Printing object configured with the print info’s print settings information
- [updateFromPMPageFormat()](updatefrompmpageformat%28%29.md): Synchronizes the print info’s page format information with information from its associated page format object.
- [updateFromPMPrintSettings()](updatefrompmprintsettings%28%29.md): Synchronizes the print info’s print settings information with information from its associated print settings object.
- [takeSettings(from:)](takesettings%28from_%29.md): Updates the print info with all the settings and attributes in the specified PDF info object.

# PMPrintSession (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a Core Printing object configured with the print info’s session information.

## Declaration

```objectivec
- (void *) PMPrintSession;
```

<a id="return-value"></a>

## Return Value

A pointer to a [PMPrintSession](../../applicationservices/pmprintsession.md) object, an opaque type that stores information about a print job. You should not call `PMRelease` to release the returned object, except to balance calls to `PMRetain` that your code also issued.

<a id="Discussion"></a>

## Discussion

The information in the returned `PMPrintSession` object is consistent with the receiver’s session information at the time this method is called. Subsequent changes to the receiving `NSPrintInfo` object do not result in changes to the information in the `PMPrintSession` object.

## See Also

### Accessing Core Printing Information

- [printSettings](printsettings.md): A mutable dictionary containing the print settings from Core Printing.
- [NSPrintInfoSettingKey](settingkey.md): The type you use to specify a print info setting key.
- [PMPageFormat](pmpageformat%28%29.md): Returns a Core Printing object configured with the print info’s page format information.
- [PMPrintSettings](pmprintsettings%28%29.md): Returns a Core Printing object configured with the print info’s print settings information
- [updateFromPMPageFormat](updatefrompmpageformat%28%29.md): Synchronizes the print info’s page format information with information from its associated page format object.
- [updateFromPMPrintSettings](updatefrompmprintsettings%28%29.md): Synchronizes the print info’s print settings information with information from its associated print settings object.
- [takeSettingsFromPDFInfo:](takesettings%28from_%29.md): Updates the print info with all the settings and attributes in the specified PDF info object.
