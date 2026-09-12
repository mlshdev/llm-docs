> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/insupportedmediacategories](https://developer.apple.com/documentation/bundleresources/information-property-list/insupportedmediacategories)

# INSupportedMediaCategories

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · tvOS 14.0+ · visionOS 1.0+

Types of media supported by your app’s media-playing intents.

## Details

`INSupportedMediaCategories`

## Possible Values

- `INMediaCategoryAudiobooks`: Audiobooks
- `INMediaCategoryMusic`: Music
- `INMediaCategoryGeneral`: General
- `INMediaCategoryPodcasts`: Podcasts
- `INMediaCategoryRadio`: Radio

<a id="Discussion"></a>

## Discussion

Specify one or more media categories to allow Siri to invoke your app’s intent handling when a user asks to play media. Use `INMediaCategoryGeneral` for media that doesn’t fit into any of the other categories, like white noise or sound effects.

To specify this information in Xcode, add [INPlayMediaIntent](../../intents/inplaymediaintent.md) to your app’s list of Supported Intents. Then select the relevant media types in the list that appears.

## See Also

### Intents

- [INIntentsSupported](inintentssupported.md): The names of the intent classes your app handles directly.
- [INIntentsRestrictedWhileLocked](inintentsrestrictedwhilelocked.md): The names of the intent classes your app can’t handle when the user locks the device.
- [INIntentsRestrictedWhileProtectedDataUnavailable](inintentsrestrictedwhileprotecteddataunavailable.md): The names of the intent classes your app can’t handle when the user locks the device or the system blocks access to protected data.
- [NSFocusStatusUsageDescription](nsfocusstatususagedescription.md): A message that tells people why your app requests access to a person’s focus status.
