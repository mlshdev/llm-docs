> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/supportedmediacategories](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/supportedmediacategories)

# SupportedMediaCategories

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Types of media supported by an app extension’s media-playing intents.

## Details

`SupportedMediaCategories`

## Possible Values

- `INMediaCategoryAudiobooks`: Audiobooks
- `INMediaCategoryMusic`: Music
- `INMediaCategoryGeneral`: General
- `INMediaCategoryPodcasts`: Podcasts
- `INMediaCategoryRadio`: Radio

<a id="Discussion"></a>

## Discussion

Specify one or more media categories to allow Siri to invoke your app’s intent handling when a user asks to play media. Use `INMediaCategoryGeneral` for media that doesn’t fit into any of the other categories, like white noise or sound effects.

To specify this information in Xcode, add [INPlayMediaIntent](../../../../intents/inplaymediaintent.md) to your extension’s list of Supported Intents. Then select the relevant media types in the list that appears.

## See Also

### Intents

- [IntentsSupported](../intentssupported.md): The names of the intents that an extension supports.
