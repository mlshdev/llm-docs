> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inintenterror/intentsupportedbymultipleextension](https://developer.apple.com/documentation/intents/inintenterror/intentsupportedbymultipleextension)

# intentSupportedByMultipleExtension

**Framework:** Intents  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

An intent was supported by more than one Intents extension in the same app.

## Declaration

```swift
static var intentSupportedByMultipleExtension: INIntentError.Code { get }
```

<a id="Discussion"></a>

## Discussion

An app may have multiple Intents extensions, but each one must support a unique set of intents.

## See Also

### Extension Errors

- [restrictedIntentsNotSupportedByExtension](restrictedintentsnotsupportedbyextension.md): An intent was listed in the `IntentsRestrictedWhileLocked` key of the app’s `Info.plist`, but not in the `IntentsSupported` key.
- [noHandlerProvidedForIntent](nohandlerprovidedforintent.md): No object was provided to handle the specified intent.
- [invalidIntentName](invalidintentname.md): The extension declared support for a nonexistent intent.
- [noAppAvailable](noappavailable.md)
- [extensionLaunchingTimeout](extensionlaunchingtimeout.md): The extension failed to launch in a timely manner.
- [extensionBringUpFailed](extensionbringupfailed.md): There was an error while trying to communicate with the extension.
