> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontmanagererror](https://developer.apple.com/documentation/coretext/ctfontmanagererror)

# CTFontManagerError (Swift)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Errors that prevent unregistration of fonts for a specified font file URL.

## Declaration

```swift
enum CTFontManagerError
```

## Topics

### Constants

- [CTFontManagerError.fileNotFound](ctfontmanagererror/filenotfound.md): An error that indicates the file doesn’t exist at the specified URL.
- [CTFontManagerError.insufficientPermissions](ctfontmanagererror/insufficientpermissions.md): An error that indicates insufficient permissions to access the file.
- [CTFontManagerError.unrecognizedFormat](ctfontmanagererror/unrecognizedformat.md): An error that indicates the file’s format is unrecognized or unsupported.
- [CTFontManagerError.invalidFontData](ctfontmanagererror/invalidfontdata.md): An error that indicates the file contains invalid font data that could cause system problems.
- [CTFontManagerError.alreadyRegistered](ctfontmanagererror/alreadyregistered.md): An error that indicates the file is already registered in the specified scope.
- [CTFontManagerError.exceededResourceLimit](ctfontmanagererror/exceededresourcelimit.md): An error that indicates an operation failure due to a system limitation.
- [CTFontManagerError.assetNotFound](ctfontmanagererror/assetnotfound.md): An error that indicates the asset isn’t found.
- [CTFontManagerError.notRegistered](ctfontmanagererror/notregistered.md): An error that indicates the file isn’t registered in the specified scope.
- [CTFontManagerError.inUse](ctfontmanagererror/inuse.md): An error that indicates the font file is actively in use and can’t be unregistered.
- [CTFontManagerError.systemRequired](ctfontmanagererror/systemrequired.md): An error that indicates the file is required by the system and can’t be unregistered.
- [CTFontManagerError.registrationFailed](ctfontmanagererror/registrationfailed.md): An error that indicates the file can’t be processed due to an unexpected FontProvider error.
- [CTFontManagerError.missingEntitlement](ctfontmanagererror/missingentitlement.md): An error that indicates the file can’t be processed because the provider doesn’t have a necessary entitlement.
- [CTFontManagerError.insufficientInfo](ctfontmanagererror/insufficientinfo.md): An error that indicates the font descriptor doesn’t have the necessary information to specify a font file.
- [CTFontManagerError.cancelledByUser](ctfontmanagererror/cancelledbyuser.md): An error that indicates the user cancelled the operation.
- [CTFontManagerError.duplicatedName](ctfontmanagererror/duplicatedname.md): An error that indicates the file can’t register because of a duplicate font name.
- [CTFontManagerError.invalidFilePath](ctfontmanagererror/invalidfilepath.md): An error that indicates the file isn’t in an allowed location, which must be either in the app’s bundle or an on-demand resource.
- [CTFontManagerError.unsupportedScope](ctfontmanagererror/unsupportedscope.md): An error that indicates the specified scope isn’t supported.

### Initializers

- [init(rawValue:)](ctfontmanagererror/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [CTFontDescriptorMatchingState](ctfontdescriptormatchingstate.md): Constants that track the progress of font descriptor matching.
- [CTFontManagerAutoActivationSetting](ctfontmanagerautoactivationsetting.md): Sets the auto-activation for the specified bundle identifier.
- [CTFontManagerScope](ctfontmanagerscope.md): Constants that define the scope for font registration.
- [CTLineBoundsOptions](ctlineboundsoptions.md): Options for getting the bounds of a line of text.
- [CTRubyAlignment](ctrubyalignment.md): Constants that specify how to align the ruby text and the base text relative to each other when they have different lengths.
- [CTRubyOverhang](ctrubyoverhang.md): Constants that specify whether, and on which side, ruby text can overhang adjacent text if it’s wider than the base text.
- [CTRubyPosition](ctrubyposition.md): Constants that specify the position of the ruby text relative to to the base text.

# CTFontManagerError (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Errors that prevent unregistration of fonts for a specified font file URL.

## Declaration

```objectivec
enum CTFontManagerError : CFIndex;
```

## Topics

### Constants

- [kCTFontManagerErrorFileNotFound](ctfontmanagererror/filenotfound.md): An error that indicates the file doesn’t exist at the specified URL.
- [kCTFontManagerErrorInsufficientPermissions](ctfontmanagererror/insufficientpermissions.md): An error that indicates insufficient permissions to access the file.
- [kCTFontManagerErrorUnrecognizedFormat](ctfontmanagererror/unrecognizedformat.md): An error that indicates the file’s format is unrecognized or unsupported.
- [kCTFontManagerErrorInvalidFontData](ctfontmanagererror/invalidfontdata.md): An error that indicates the file contains invalid font data that could cause system problems.
- [kCTFontManagerErrorAlreadyRegistered](ctfontmanagererror/alreadyregistered.md): An error that indicates the file is already registered in the specified scope.
- [kCTFontManagerErrorExceededResourceLimit](ctfontmanagererror/exceededresourcelimit.md): An error that indicates an operation failure due to a system limitation.
- [kCTFontManagerErrorAssetNotFound](ctfontmanagererror/assetnotfound.md): An error that indicates the asset isn’t found.
- [kCTFontManagerErrorNotRegistered](ctfontmanagererror/notregistered.md): An error that indicates the file isn’t registered in the specified scope.
- [kCTFontManagerErrorInUse](ctfontmanagererror/inuse.md): An error that indicates the font file is actively in use and can’t be unregistered.
- [kCTFontManagerErrorSystemRequired](ctfontmanagererror/systemrequired.md): An error that indicates the file is required by the system and can’t be unregistered.
- [kCTFontManagerErrorRegistrationFailed](ctfontmanagererror/registrationfailed.md): An error that indicates the file can’t be processed due to an unexpected FontProvider error.
- [kCTFontManagerErrorMissingEntitlement](ctfontmanagererror/missingentitlement.md): An error that indicates the file can’t be processed because the provider doesn’t have a necessary entitlement.
- [kCTFontManagerErrorInsufficientInfo](ctfontmanagererror/insufficientinfo.md): An error that indicates the font descriptor doesn’t have the necessary information to specify a font file.
- [kCTFontManagerErrorCancelledByUser](ctfontmanagererror/cancelledbyuser.md): An error that indicates the user cancelled the operation.
- [kCTFontManagerErrorDuplicatedName](ctfontmanagererror/duplicatedname.md): An error that indicates the file can’t register because of a duplicate font name.
- [kCTFontManagerErrorInvalidFilePath](ctfontmanagererror/invalidfilepath.md): An error that indicates the file isn’t in an allowed location, which must be either in the app’s bundle or an on-demand resource.
- [kCTFontManagerErrorUnsupportedScope](ctfontmanagererror/unsupportedscope.md): An error that indicates the specified scope isn’t supported.

## See Also

### Enumerations

- [CTFontDescriptorMatchingState](ctfontdescriptormatchingstate.md): Constants that track the progress of font descriptor matching.
- [CTFontManagerAutoActivationSetting](ctfontmanagerautoactivationsetting.md): Sets the auto-activation for the specified bundle identifier.
- [CTFontManagerScope](ctfontmanagerscope.md): Constants that define the scope for font registration.
- [CTLineBoundsOptions](ctlineboundsoptions.md): Options for getting the bounds of a line of text.
- [CTRubyAlignment](ctrubyalignment.md): Constants that specify how to align the ruby text and the base text relative to each other when they have different lengths.
- [CTRubyOverhang](ctrubyoverhang.md): Constants that specify whether, and on which side, ruby text can overhang adjacent text if it’s wider than the base text.
- [CTRubyPosition](ctrubyposition.md): Constants that specify the position of the ruby text relative to to the base text.
