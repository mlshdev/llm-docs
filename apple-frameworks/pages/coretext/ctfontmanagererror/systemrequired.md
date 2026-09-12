> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontmanagererror/systemrequired](https://developer.apple.com/documentation/coretext/ctfontmanagererror/systemrequired)

# CTFontManagerError.systemRequired (Swift)

**Framework:** Core Text  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An error that indicates the file is required by the system and can’t be unregistered.

## Declaration

```swift
case systemRequired
```

## See Also

### Constants

- [CTFontManagerError.fileNotFound](filenotfound.md): An error that indicates the file doesn’t exist at the specified URL.
- [CTFontManagerError.insufficientPermissions](insufficientpermissions.md): An error that indicates insufficient permissions to access the file.
- [CTFontManagerError.unrecognizedFormat](unrecognizedformat.md): An error that indicates the file’s format is unrecognized or unsupported.
- [CTFontManagerError.invalidFontData](invalidfontdata.md): An error that indicates the file contains invalid font data that could cause system problems.
- [CTFontManagerError.alreadyRegistered](alreadyregistered.md): An error that indicates the file is already registered in the specified scope.
- [CTFontManagerError.exceededResourceLimit](exceededresourcelimit.md): An error that indicates an operation failure due to a system limitation.
- [CTFontManagerError.assetNotFound](assetnotfound.md): An error that indicates the asset isn’t found.
- [CTFontManagerError.notRegistered](notregistered.md): An error that indicates the file isn’t registered in the specified scope.
- [CTFontManagerError.inUse](inuse.md): An error that indicates the font file is actively in use and can’t be unregistered.
- [CTFontManagerError.registrationFailed](registrationfailed.md): An error that indicates the file can’t be processed due to an unexpected FontProvider error.
- [CTFontManagerError.missingEntitlement](missingentitlement.md): An error that indicates the file can’t be processed because the provider doesn’t have a necessary entitlement.
- [CTFontManagerError.insufficientInfo](insufficientinfo.md): An error that indicates the font descriptor doesn’t have the necessary information to specify a font file.
- [CTFontManagerError.cancelledByUser](cancelledbyuser.md): An error that indicates the user cancelled the operation.
- [CTFontManagerError.duplicatedName](duplicatedname.md): An error that indicates the file can’t register because of a duplicate font name.
- [CTFontManagerError.invalidFilePath](invalidfilepath.md): An error that indicates the file isn’t in an allowed location, which must be either in the app’s bundle or an on-demand resource.

# kCTFontManagerErrorSystemRequired (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An error that indicates the file is required by the system and can’t be unregistered.

## Declaration

```objectivec
kCTFontManagerErrorSystemRequired
```

## See Also

### Constants

- [kCTFontManagerErrorFileNotFound](filenotfound.md): An error that indicates the file doesn’t exist at the specified URL.
- [kCTFontManagerErrorInsufficientPermissions](insufficientpermissions.md): An error that indicates insufficient permissions to access the file.
- [kCTFontManagerErrorUnrecognizedFormat](unrecognizedformat.md): An error that indicates the file’s format is unrecognized or unsupported.
- [kCTFontManagerErrorInvalidFontData](invalidfontdata.md): An error that indicates the file contains invalid font data that could cause system problems.
- [kCTFontManagerErrorAlreadyRegistered](alreadyregistered.md): An error that indicates the file is already registered in the specified scope.
- [kCTFontManagerErrorExceededResourceLimit](exceededresourcelimit.md): An error that indicates an operation failure due to a system limitation.
- [kCTFontManagerErrorAssetNotFound](assetnotfound.md): An error that indicates the asset isn’t found.
- [kCTFontManagerErrorNotRegistered](notregistered.md): An error that indicates the file isn’t registered in the specified scope.
- [kCTFontManagerErrorInUse](inuse.md): An error that indicates the font file is actively in use and can’t be unregistered.
- [kCTFontManagerErrorRegistrationFailed](registrationfailed.md): An error that indicates the file can’t be processed due to an unexpected FontProvider error.
- [kCTFontManagerErrorMissingEntitlement](missingentitlement.md): An error that indicates the file can’t be processed because the provider doesn’t have a necessary entitlement.
- [kCTFontManagerErrorInsufficientInfo](insufficientinfo.md): An error that indicates the font descriptor doesn’t have the necessary information to specify a font file.
- [kCTFontManagerErrorCancelledByUser](cancelledbyuser.md): An error that indicates the user cancelled the operation.
- [kCTFontManagerErrorDuplicatedName](duplicatedname.md): An error that indicates the file can’t register because of a duplicate font name.
- [kCTFontManagerErrorInvalidFilePath](invalidfilepath.md): An error that indicates the file isn’t in an allowed location, which must be either in the app’s bundle or an on-demand resource.
