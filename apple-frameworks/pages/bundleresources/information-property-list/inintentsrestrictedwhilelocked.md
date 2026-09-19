> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/information-property-list/inintentsrestrictedwhilelocked

# INIntentsRestrictedWhileLocked

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · tvOS 14.0+ · visionOS 1.0+

The names of the intent classes your app can’t handle when the user locks the device.

## Details

`INIntentsRestrictedWhileLocked`

<a id="Discussion"></a>

## Discussion

To specify this information in Xcode, add the intent class name to your app target’s Supported Intents in the Project Editor. Then set the Authentication level to Restricted While Locked.

## See Also

### Intents

- [INIntentsSupported](inintentssupported.md): The names of the intent classes your app handles directly.
- [INIntentsRestrictedWhileProtectedDataUnavailable](inintentsrestrictedwhileprotecteddataunavailable.md): The names of the intent classes your app can’t handle when the user locks the device or the system blocks access to protected data.
- [INSupportedMediaCategories](insupportedmediacategories.md): Types of media supported by your app’s media-playing intents.
- [NSFocusStatusUsageDescription](nsfocusstatususagedescription.md): A message that tells people why your app requests access to a person’s focus status.
