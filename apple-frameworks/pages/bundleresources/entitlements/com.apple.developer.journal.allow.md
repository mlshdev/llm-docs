> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.journal.allow](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.journal.allow)

# com.apple.developer.journal.allow

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 17.2+ · iPadOS 17.2+

An entitlement that enables an app to present the journaling suggestions picker.

## Details

`com.apple.developer.journal.allow`

## Possible Values

- `suggestions`:

<a id="Discussion"></a>

## Discussion

The [Journaling Suggestions](https://developer.apple.com/documentation/journalingsuggestions) framework can’t present the [JournalingSuggestionsPicker](https://developer.apple.com/documentation/journalingsuggestions/journalingsuggestionspicker) for apps without this entitlement in their code signature. Add this entitlement to your app by enabling the Journaling Suggestions capability in Xcode.

![Screenshot of the Capabilities pane in Xcode with the Journaling Suggestions capability selected.](https://developer.apple.com/images/com.apple.bundleresources/media-4309269@2x.png)

For more information about presenting journaling suggestions in your app, see [Presenting the suggestions picker and processing a selection](https://developer.apple.com/documentation/journalingsuggestions/presenting-the-suggestions-picker-and-processing-a-selection).
