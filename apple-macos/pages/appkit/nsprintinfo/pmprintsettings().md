> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintinfo/pmprintsettings()](https://developer.apple.com/documentation/appkit/nsprintinfo/pmprintsettings())

# pmPrintSettings() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a Core Printing object configured with the print info’s print settings information

## Declaration

```swift
func pmPrintSettings() -> UnsafeMutableRawPointer
```

<a id="return-value"></a>

## Return Value

A pointer to a [PMPrintSettings](../../applicationservices/pmprintsettings.md) object, an opaque data type used to store information such as the number of copies and the range of pages in a printing session. You should not call `PMRelease` to release the returned object, except to balance calls to `PMRetain` that your code also issued.

<a id="Discussion"></a>

## Discussion

The information in the returned `PMPrintSettings` object is consistent with the receiver’s print settings at the time this method is called. Subsequent changes to the receiving `NSPrintInfo` object do not result in changes to the information in the `PMPrintSettings` data type.

If you make changes to the data in the `PMPrintSettings` object, you should invoke the [updateFromPMPrintSettings()](updatefrompmprintsettings%28%29.md) method to synchronize those changes with the `NSPrintInfo` object that created the object.

## See Also

### Accessing Core Printing Information

- [printSettings](printsettings.md): A mutable dictionary containing the print settings from Core Printing.
- [NSPrintInfo.SettingKey](settingkey.md): The type you use to specify a print info setting key.
- [pmPrintSession()](pmprintsession%28%29.md): Returns a Core Printing object configured with the print info’s session information.
- [pmPageFormat()](pmpageformat%28%29.md): Returns a Core Printing object configured with the print info’s page format information.
- [updateFromPMPageFormat()](updatefrompmpageformat%28%29.md): Synchronizes the print info’s page format information with information from its associated page format object.
- [updateFromPMPrintSettings()](updatefrompmprintsettings%28%29.md): Synchronizes the print info’s print settings information with information from its associated print settings object.
- [takeSettings(from:)](takesettings%28from_%29.md): Updates the print info with all the settings and attributes in the specified PDF info object.

# PMPrintSettings (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a Core Printing object configured with the print info’s print settings information

## Declaration

```objectivec
- (void *) PMPrintSettings;
```

<a id="return-value"></a>

## Return Value

A pointer to a [PMPrintSettings](../../applicationservices/pmprintsettings.md) object, an opaque data type used to store information such as the number of copies and the range of pages in a printing session. You should not call `PMRelease` to release the returned object, except to balance calls to `PMRetain` that your code also issued.

<a id="Discussion"></a>

## Discussion

The information in the returned `PMPrintSettings` object is consistent with the receiver’s print settings at the time this method is called. Subsequent changes to the receiving `NSPrintInfo` object do not result in changes to the information in the `PMPrintSettings` data type.

If you make changes to the data in the `PMPrintSettings` object, you should invoke the [updateFromPMPrintSettings](updatefrompmprintsettings%28%29.md) method to synchronize those changes with the `NSPrintInfo` object that created the object.

## See Also

### Accessing Core Printing Information

- [printSettings](printsettings.md): A mutable dictionary containing the print settings from Core Printing.
- [NSPrintInfoSettingKey](settingkey.md): The type you use to specify a print info setting key.
- [PMPrintSession](pmprintsession%28%29.md): Returns a Core Printing object configured with the print info’s session information.
- [PMPageFormat](pmpageformat%28%29.md): Returns a Core Printing object configured with the print info’s page format information.
- [updateFromPMPageFormat](updatefrompmpageformat%28%29.md): Synchronizes the print info’s page format information with information from its associated page format object.
- [updateFromPMPrintSettings](updatefrompmprintsettings%28%29.md): Synchronizes the print info’s print settings information with information from its associated print settings object.
- [takeSettingsFromPDFInfo:](takesettings%28from_%29.md): Updates the print info with all the settings and attributes in the specified PDF info object.
