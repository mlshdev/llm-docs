> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/inintentsrestrictedwhileprotecteddataunavailable](https://developer.apple.com/documentation/bundleresources/information-property-list/inintentsrestrictedwhileprotecteddataunavailable)

# INIntentsRestrictedWhileProtectedDataUnavailable

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · tvOS 14.0+ · visionOS 1.0+

The names of the intent classes your app can’t handle when the user locks the device or the system blocks access to protected data.

## Details

`INIntentsRestrictedWhileProtectedDataUnavailable`

<a id="Discussion"></a>

## Discussion

To specify this information in Xcode, add the intent class name to your app target’s Supported Intents in the Project Editor. Then set the Authentication level to Restricted While Locked or Protected Data Unavailable.

## See Also

### Intents

- [INIntentsSupported](inintentssupported.md): The names of the intent classes your app handles directly.
- [INIntentsRestrictedWhileLocked](inintentsrestrictedwhilelocked.md): The names of the intent classes your app can’t handle when the user locks the device.
- [INSupportedMediaCategories](insupportedmediacategories.md): Types of media supported by your app’s media-playing intents.
- [NSFocusStatusUsageDescription](nsfocusstatususagedescription.md): A message that tells people why your app requests access to a person’s focus status.
