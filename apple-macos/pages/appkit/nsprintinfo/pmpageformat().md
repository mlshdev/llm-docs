> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintinfo/pmpageformat()](https://developer.apple.com/documentation/appkit/nsprintinfo/pmpageformat())

# pmPageFormat() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a Core Printing object configured with the print info’s page format information.

## Declaration

```swift
func pmPageFormat() -> UnsafeMutableRawPointer
```

<a id="return-value"></a>

## Return Value

A pointer to a [PMPageFormat](../../applicationservices/pmpageformat.md) object, an opaque data type that stores information such as the paper size, orientation, and scale of pages in a printing session. You should not call `PMRelease` to release the returned object, except to balance calls to `PMRetain` that your code also issued.

<a id="Discussion"></a>

## Discussion

The information in the returned `PMPageFormat` object is consistent with the receiver’s page format information at the time this method is called. Subsequent changes to the receiving `NSPrintInfo` object do not result in changes to the information in the `PMPageFormat` object.

If you make changes to the data in the `PMPageFormat` object, you should invoke the [updateFromPMPageFormat()](updatefrompmpageformat%28%29.md) method to synchronize those changes with the `NSPrintInfo` object that created the object.

## See Also

### Accessing Core Printing Information

- [printSettings](printsettings.md): A mutable dictionary containing the print settings from Core Printing.
- [NSPrintInfo.SettingKey](settingkey.md): The type you use to specify a print info setting key.
- [pmPrintSession()](pmprintsession%28%29.md): Returns a Core Printing object configured with the print info’s session information.
- [pmPrintSettings()](pmprintsettings%28%29.md): Returns a Core Printing object configured with the print info’s print settings information
- [updateFromPMPageFormat()](updatefrompmpageformat%28%29.md): Synchronizes the print info’s page format information with information from its associated page format object.
- [updateFromPMPrintSettings()](updatefrompmprintsettings%28%29.md): Synchronizes the print info’s print settings information with information from its associated print settings object.
- [takeSettings(from:)](takesettings%28from_%29.md): Updates the print info with all the settings and attributes in the specified PDF info object.

# PMPageFormat (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a Core Printing object configured with the print info’s page format information.

## Declaration

```objectivec
- (void *) PMPageFormat;
```

<a id="return-value"></a>

## Return Value

A pointer to a [PMPageFormat](../../applicationservices/pmpageformat.md) object, an opaque data type that stores information such as the paper size, orientation, and scale of pages in a printing session. You should not call `PMRelease` to release the returned object, except to balance calls to `PMRetain` that your code also issued.

<a id="Discussion"></a>

## Discussion

The information in the returned `PMPageFormat` object is consistent with the receiver’s page format information at the time this method is called. Subsequent changes to the receiving `NSPrintInfo` object do not result in changes to the information in the `PMPageFormat` object.

If you make changes to the data in the `PMPageFormat` object, you should invoke the [updateFromPMPageFormat](updatefrompmpageformat%28%29.md) method to synchronize those changes with the `NSPrintInfo` object that created the object.

## See Also

### Accessing Core Printing Information

- [printSettings](printsettings.md): A mutable dictionary containing the print settings from Core Printing.
- [NSPrintInfoSettingKey](settingkey.md): The type you use to specify a print info setting key.
- [PMPrintSession](pmprintsession%28%29.md): Returns a Core Printing object configured with the print info’s session information.
- [PMPrintSettings](pmprintsettings%28%29.md): Returns a Core Printing object configured with the print info’s print settings information
- [updateFromPMPageFormat](updatefrompmpageformat%28%29.md): Synchronizes the print info’s page format information with information from its associated page format object.
- [updateFromPMPrintSettings](updatefrompmprintsettings%28%29.md): Synchronizes the print info’s print settings information with information from its associated print settings object.
- [takeSettingsFromPDFInfo:](takesettings%28from_%29.md): Updates the print info with all the settings and attributes in the specified PDF info object.
