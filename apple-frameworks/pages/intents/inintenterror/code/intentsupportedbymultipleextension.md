> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inintenterror/code/intentsupportedbymultipleextension](https://developer.apple.com/documentation/intents/inintenterror/code/intentsupportedbymultipleextension)

# INIntentError.Code.intentSupportedByMultipleExtension (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

An intent was supported by more than one Intents extension in the same app. An app may have multiple Intents extensions, but each one must support a unique set of intents.

## Declaration

```swift
case intentSupportedByMultipleExtension
```

## See Also

### Extension Errors

- [INIntentError.Code.extensionLaunchingTimeout](extensionlaunchingtimeout.md): The extension failed to launch in a timely manner.
- [INIntentError.Code.extensionBringUpFailed](extensionbringupfailed.md): There was an error while trying to communicate with the extension.
- [INIntentError.Code.noAppAvailable](noappavailable.md)
- [INIntentError.Code.restrictedIntentsNotSupportedByExtension](restrictedintentsnotsupportedbyextension.md): An intent was listed in the `IntentsRestrictedWhileLocked` key of the app’s `Info.plist`, but not in the `IntentsSupported` key. All intents in the `IntentsRestrictedWhileLocked` key must also be present in the `IntentsSupported` key.
- [INIntentError.Code.noHandlerProvidedForIntent](nohandlerprovidedforintent.md): No object was provided to handle the specified intent. If your extension declares support for an intent in its `Info.plist` file, the [handler(for:)](../../inintenthandlerproviding/handler%28for_%29.md) method of its [INExtension](../../inextension.md) object must provide a corresponding handler object.
- [INIntentError.Code.invalidIntentName](invalidintentname.md): The extension declared support for a nonexistent intent. Check your extension’s `Info.plist` file to make sure all intent names are spelled correctly.

# INIntentErrorIntentSupportedByMultipleExtension (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

An intent was supported by more than one Intents extension in the same app. An app may have multiple Intents extensions, but each one must support a unique set of intents.

## Declaration

```objectivec
INIntentErrorIntentSupportedByMultipleExtension
```

## See Also

### Extension Errors

- [INIntentErrorExtensionLaunchingTimeout](extensionlaunchingtimeout.md): The extension failed to launch in a timely manner.
- [INIntentErrorExtensionBringUpFailed](extensionbringupfailed.md): There was an error while trying to communicate with the extension.
- [INIntentErrorNoAppAvailable](noappavailable.md)
- [INIntentErrorRestrictedIntentsNotSupportedByExtension](restrictedintentsnotsupportedbyextension.md): An intent was listed in the `IntentsRestrictedWhileLocked` key of the app’s `Info.plist`, but not in the `IntentsSupported` key. All intents in the `IntentsRestrictedWhileLocked` key must also be present in the `IntentsSupported` key.
- [INIntentErrorNoHandlerProvidedForIntent](nohandlerprovidedforintent.md): No object was provided to handle the specified intent. If your extension declares support for an intent in its `Info.plist` file, the [handlerForIntent:](../../inintenthandlerproviding/handler%28for_%29.md) method of its [INExtension](../../inextension.md) object must provide a corresponding handler object.
- [INIntentErrorInvalidIntentName](invalidintentname.md): The extension declared support for a nonexistent intent. Check your extension’s `Info.plist` file to make sure all intent names are spelled correctly.
