> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inintenterror/code](https://developer.apple.com/documentation/intents/inintenterror/code)

# INIntentError.Code (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Constants for error codes returned by the framework.

## Declaration

```swift
enum Code
```

## Topics

### Encoding Errors

- [INIntentError.Code.decodingGeneric](code/decodinggeneric.md)
- [INIntentError.Code.encodingFailed](code/encodingfailed.md)
- [INIntentError.Code.encodingGeneric](code/encodinggeneric.md)

### Image Errors

- [INIntentError.Code.imageGeneric](code/imagegeneric.md)
- [INIntentError.Code.imageLoadingFailed](code/imageloadingfailed.md)
- [INIntentError.Code.imageNoServiceAvailable](code/imagenoserviceavailable.md)
- [INIntentError.Code.imageServiceFailure](code/imageservicefailure.md)
- [INIntentError.Code.imageProxyInvalid](code/imageproxyinvalid.md)
- [INIntentError.Code.imageProxyLoop](code/imageproxyloop.md)
- [INIntentError.Code.imageProxyTimeout](code/imageproxytimeout.md)
- [INIntentError.Code.imageRetrievalFailed](code/imageretrievalfailed.md)
- [INIntentError.Code.imageStorageFailed](code/imagestoragefailed.md)
- [INIntentError.Code.imageScalingFailed](code/imagescalingfailed.md)
- [INIntentError.Code.permissionDenied](code/permissiondenied.md)

### Voice Shortcut Errors

- [INIntentError.Code.voiceShortcutCreationFailed](code/voiceshortcutcreationfailed.md)
- [INIntentError.Code.voiceShortcutDeleteFailed](code/voiceshortcutdeletefailed.md)
- [INIntentError.Code.voiceShortcutGetFailed](code/voiceshortcutgetfailed.md)

### Interaction Errors

- [INIntentError.Code.interactionOperationNotSupported](code/interactionoperationnotsupported.md): The [INInteraction](../ininteraction.md) object could not be donated or deleted because those capabilities are not supported on the current device.
- [INIntentError.Code.donatingInteraction](code/donatinginteraction.md): The INInteraction object could not be donated to the system.
- [INIntentError.Code.deletingAllInteractions](code/deletingallinteractions.md): The system was unable to delete all donated INInteraction objects.
- [INIntentError.Code.deletingInteractionWithIdentifiers](code/deletinginteractionwithidentifiers.md): The system was unable to delete the specified set of INInteraction objects.
- [INIntentError.Code.deletingInteractionWithGroupIdentifier](code/deletinginteractionwithgroupidentifier.md): The system was unable to delete the INInteraction objects using their group identifier.

### Extension Errors

- [INIntentError.Code.extensionLaunchingTimeout](code/extensionlaunchingtimeout.md): The extension failed to launch in a timely manner.
- [INIntentError.Code.extensionBringUpFailed](code/extensionbringupfailed.md): There was an error while trying to communicate with the extension.
- [INIntentError.Code.noAppAvailable](code/noappavailable.md)
- [INIntentError.Code.intentSupportedByMultipleExtension](code/intentsupportedbymultipleextension.md): An intent was supported by more than one Intents extension in the same app. An app may have multiple Intents extensions, but each one must support a unique set of intents.
- [INIntentError.Code.restrictedIntentsNotSupportedByExtension](code/restrictedintentsnotsupportedbyextension.md): An intent was listed in the `IntentsRestrictedWhileLocked` key of the app’s `Info.plist`, but not in the `IntentsSupported` key. All intents in the `IntentsRestrictedWhileLocked` key must also be present in the `IntentsSupported` key.
- [INIntentError.Code.noHandlerProvidedForIntent](code/nohandlerprovidedforintent.md): No object was provided to handle the specified intent. If your extension declares support for an intent in its `Info.plist` file, the [handler(for:)](../inintenthandlerproviding/handler%28for_%29.md) method of its [INExtension](../inextension.md) object must provide a corresponding handler object.
- [INIntentError.Code.invalidIntentName](code/invalidintentname.md): The extension declared support for a nonexistent intent. Check your extension’s `Info.plist` file to make sure all intent names are spelled correctly.

### Other Errors

- [INIntentError.Code.requestTimedOut](code/requesttimedout.md): The underlying request timed out.
- [INIntentError.Code.invalidUserVocabularyFileLocation](code/invaliduservocabularyfilelocation.md): An invalid location was specified for the user vocabulary file.
- [INIntentError.Code.missingInformation](code/missinginformation.md)

### Enumeration Cases

- [INIntentError.Code.noAppIntent](code/noappintent.md)
- [INIntentError.Code.unableToCreateAppIntentRepresentation](code/unabletocreateappintentrepresentation.md)

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [INIntentError](../inintenterror.md): Errors returned by SiriKit.
- [INIntentErrorDomain](../inintenterrordomain.md): The error domain for the Intents framework.

# INIntentErrorCode (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Constants for error codes returned by the framework.

## Declaration

```objectivec
enum INIntentErrorCode : NSInteger;
```

## Topics

### Encoding Errors

- [INIntentErrorDecodingGeneric](code/decodinggeneric.md)
- [INIntentErrorEncodingFailed](code/encodingfailed.md)
- [INIntentErrorEncodingGeneric](code/encodinggeneric.md)

### Image Errors

- [INIntentErrorImageGeneric](code/imagegeneric.md)
- [INIntentErrorImageLoadingFailed](code/imageloadingfailed.md)
- [INIntentErrorImageNoServiceAvailable](code/imagenoserviceavailable.md)
- [INIntentErrorImageServiceFailure](code/imageservicefailure.md)
- [INIntentErrorImageProxyInvalid](code/imageproxyinvalid.md)
- [INIntentErrorImageProxyLoop](code/imageproxyloop.md)
- [INIntentErrorImageProxyTimeout](code/imageproxytimeout.md)
- [INIntentErrorImageRetrievalFailed](code/imageretrievalfailed.md)
- [INIntentErrorImageStorageFailed](code/imagestoragefailed.md)
- [INIntentErrorImageScalingFailed](code/imagescalingfailed.md)
- [INIntentErrorPermissionDenied](code/permissiondenied.md)

### Voice Shortcut Errors

- [INIntentErrorVoiceShortcutCreationFailed](code/voiceshortcutcreationfailed.md)
- [INIntentErrorVoiceShortcutDeleteFailed](code/voiceshortcutdeletefailed.md)
- [INIntentErrorVoiceShortcutGetFailed](code/voiceshortcutgetfailed.md)

### Interaction Errors

- [INIntentErrorInteractionOperationNotSupported](code/interactionoperationnotsupported.md): The [INInteraction](../ininteraction.md) object could not be donated or deleted because those capabilities are not supported on the current device.
- [INIntentErrorDonatingInteraction](code/donatinginteraction.md): The INInteraction object could not be donated to the system.
- [INIntentErrorDeletingAllInteractions](code/deletingallinteractions.md): The system was unable to delete all donated INInteraction objects.
- [INIntentErrorDeletingInteractionWithIdentifiers](code/deletinginteractionwithidentifiers.md): The system was unable to delete the specified set of INInteraction objects.
- [INIntentErrorDeletingInteractionWithGroupIdentifier](code/deletinginteractionwithgroupidentifier.md): The system was unable to delete the INInteraction objects using their group identifier.

### Extension Errors

- [INIntentErrorExtensionLaunchingTimeout](code/extensionlaunchingtimeout.md): The extension failed to launch in a timely manner.
- [INIntentErrorExtensionBringUpFailed](code/extensionbringupfailed.md): There was an error while trying to communicate with the extension.
- [INIntentErrorNoAppAvailable](code/noappavailable.md)
- [INIntentErrorIntentSupportedByMultipleExtension](code/intentsupportedbymultipleextension.md): An intent was supported by more than one Intents extension in the same app. An app may have multiple Intents extensions, but each one must support a unique set of intents.
- [INIntentErrorRestrictedIntentsNotSupportedByExtension](code/restrictedintentsnotsupportedbyextension.md): An intent was listed in the `IntentsRestrictedWhileLocked` key of the app’s `Info.plist`, but not in the `IntentsSupported` key. All intents in the `IntentsRestrictedWhileLocked` key must also be present in the `IntentsSupported` key.
- [INIntentErrorNoHandlerProvidedForIntent](code/nohandlerprovidedforintent.md): No object was provided to handle the specified intent. If your extension declares support for an intent in its `Info.plist` file, the [handlerForIntent:](../inintenthandlerproviding/handler%28for_%29.md) method of its [INExtension](../inextension.md) object must provide a corresponding handler object.
- [INIntentErrorInvalidIntentName](code/invalidintentname.md): The extension declared support for a nonexistent intent. Check your extension’s `Info.plist` file to make sure all intent names are spelled correctly.

### Other Errors

- [INIntentErrorRequestTimedOut](code/requesttimedout.md): The underlying request timed out.
- [INIntentErrorInvalidUserVocabularyFileLocation](code/invaliduservocabularyfilelocation.md): An invalid location was specified for the user vocabulary file.
- [INIntentErrorMissingInformation](code/missinginformation.md)

### Enumeration Cases

- [INIntentErrorNoAppIntent](code/noappintent.md)
- [INIntentErrorUnableToCreateAppIntentRepresentation](code/unabletocreateappintentrepresentation.md)

## See Also

### Errors

- [INIntentErrorDomain](../inintenterrordomain.md): The error domain for the Intents framework.
