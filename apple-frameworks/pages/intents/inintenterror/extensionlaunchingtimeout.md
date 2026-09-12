> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inintenterror/extensionlaunchingtimeout](https://developer.apple.com/documentation/intents/inintenterror/extensionlaunchingtimeout)

# extensionLaunchingTimeout

**Framework:** Intents  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The extension failed to launch in a timely manner.

## Declaration

```swift
static var extensionLaunchingTimeout: INIntentError.Code { get }
```

## See Also

### Extension Errors

- [intentSupportedByMultipleExtension](intentsupportedbymultipleextension.md): An intent was supported by more than one Intents extension in the same app.
- [restrictedIntentsNotSupportedByExtension](restrictedintentsnotsupportedbyextension.md): An intent was listed in the `IntentsRestrictedWhileLocked` key of the app’s `Info.plist`, but not in the `IntentsSupported` key.
- [noHandlerProvidedForIntent](nohandlerprovidedforintent.md): No object was provided to handle the specified intent.
- [invalidIntentName](invalidintentname.md): The extension declared support for a nonexistent intent.
- [noAppAvailable](noappavailable.md)
- [extensionBringUpFailed](extensionbringupfailed.md): There was an error while trying to communicate with the extension.
