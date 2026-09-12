> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inintenterror/restrictedintentsnotsupportedbyextension](https://developer.apple.com/documentation/intents/inintenterror/restrictedintentsnotsupportedbyextension)

# restrictedIntentsNotSupportedByExtension

**Framework:** Intents  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

An intent was listed in the `IntentsRestrictedWhileLocked` key of the app’s `Info.plist`, but not in the `IntentsSupported` key.

## Declaration

```swift
static var restrictedIntentsNotSupportedByExtension: INIntentError.Code { get }
```

<a id="Discussion"></a>

## Discussion

All intents in the `IntentsRestrictedWhileLocked` key must also be present in the `IntentsSupported` key.

## See Also

### Extension Errors

- [intentSupportedByMultipleExtension](intentsupportedbymultipleextension.md): An intent was supported by more than one Intents extension in the same app.
- [noHandlerProvidedForIntent](nohandlerprovidedforintent.md): No object was provided to handle the specified intent.
- [invalidIntentName](invalidintentname.md): The extension declared support for a nonexistent intent.
- [noAppAvailable](noappavailable.md)
- [extensionLaunchingTimeout](extensionlaunchingtimeout.md): The extension failed to launch in a timely manner.
- [extensionBringUpFailed](extensionbringupfailed.md): There was an error while trying to communicate with the extension.
