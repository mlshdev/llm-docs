> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inintenterror](https://developer.apple.com/documentation/intents/inintenterror)

# INIntentError

**Framework:** Intents  
**Kind:** Structure  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Errors returned by SiriKit.

## Declaration

```swift
struct INIntentError
```

## Topics

### Encoding Errors

- [decodingGeneric](inintenterror/decodinggeneric.md)
- [encodingFailed](inintenterror/encodingfailed.md)
- [encodingGeneric](inintenterror/encodinggeneric.md)

### Image Errors

- [imageGeneric](inintenterror/imagegeneric.md)
- [imageLoadingFailed](inintenterror/imageloadingfailed.md)
- [imageNoServiceAvailable](inintenterror/imagenoserviceavailable.md)
- [imageServiceFailure](inintenterror/imageservicefailure.md)
- [imageProxyInvalid](inintenterror/imageproxyinvalid.md)
- [imageProxyLoop](inintenterror/imageproxyloop.md)
- [imageProxyTimeout](inintenterror/imageproxytimeout.md)
- [imageRetrievalFailed](inintenterror/imageretrievalfailed.md)
- [imageStorageFailed](inintenterror/imagestoragefailed.md)
- [imageScalingFailed](inintenterror/imagescalingfailed.md)
- [permissionDenied](inintenterror/permissiondenied.md)

### App Intent Errors

- [noAppIntent](inintenterror/noappintent.md)
- [unableToCreateAppIntentRepresentation](inintenterror/unabletocreateappintentrepresentation.md)

### Voice Shortcut Errors

- [voiceShortcutCreationFailed](inintenterror/voiceshortcutcreationfailed.md)
- [voiceShortcutDeleteFailed](inintenterror/voiceshortcutdeletefailed.md)
- [voiceShortcutGetFailed](inintenterror/voiceshortcutgetfailed.md)

### Interaction Errors

- [interactionOperationNotSupported](inintenterror/interactionoperationnotsupported.md): The [INInteraction](ininteraction.md) object could not be donated or deleted because those capabilities are not supported on the current device.
- [donatingInteraction](inintenterror/donatinginteraction.md): The [INInteraction](ininteraction.md) object could not be donated to the system.
- [deletingAllInteractions](inintenterror/deletingallinteractions.md): The system was unable to delete all donated [INInteraction](ininteraction.md) objects.
- [deletingInteractionWithIdentifiers](inintenterror/deletinginteractionwithidentifiers.md): The system was unable to delete the specified set of [INInteraction](ininteraction.md) objects.
- [deletingInteractionWithGroupIdentifier](inintenterror/deletinginteractionwithgroupidentifier.md): The system was unable to delete the [INInteraction](ininteraction.md) objects using their group identifier.

### Extension Errors

- [intentSupportedByMultipleExtension](inintenterror/intentsupportedbymultipleextension.md): An intent was supported by more than one Intents extension in the same app.
- [restrictedIntentsNotSupportedByExtension](inintenterror/restrictedintentsnotsupportedbyextension.md): An intent was listed in the `IntentsRestrictedWhileLocked` key of the app’s `Info.plist`, but not in the `IntentsSupported` key.
- [noHandlerProvidedForIntent](inintenterror/nohandlerprovidedforintent.md): No object was provided to handle the specified intent.
- [invalidIntentName](inintenterror/invalidintentname.md): The extension declared support for a nonexistent intent.
- [noAppAvailable](inintenterror/noappavailable.md)
- [extensionLaunchingTimeout](inintenterror/extensionlaunchingtimeout.md): The extension failed to launch in a timely manner.
- [extensionBringUpFailed](inintenterror/extensionbringupfailed.md): There was an error while trying to communicate with the extension.

### Other Errors

- [invalidUserVocabularyFileLocation](inintenterror/invaliduservocabularyfilelocation.md): An invalid location was specified for the user vocabulary file.
- [requestTimedOut](inintenterror/requesttimedout.md): The underlying request timed out.
- [missingInformation](inintenterror/missinginformation.md)

### General Error

- [errorDomain](inintenterror/errordomain.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [INIntentError.Code](inintenterror/code.md): Constants for error codes returned by the framework.
- [INIntentErrorDomain](inintenterrordomain.md): The error domain for the Intents framework.
