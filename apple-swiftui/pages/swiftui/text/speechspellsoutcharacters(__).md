> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/speechspellsoutcharacters(_:)](https://developer.apple.com/documentation/swiftui/text/speechspellsoutcharacters(_:))

# speechSpellsOutCharacters(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Sets whether VoiceOver should speak the contents of the text view character by character.

## Declaration

```swift
func speechSpellsOutCharacters(_ value: Bool = true) -> Text
```

## Parameters

- `value`: A Boolean value that when `true` indicates VoiceOver should speak text as individual characters. Defaults to `true`.

<a id="discussion"></a>

## Discussion

Use this modifier when you want VoiceOver to speak text as individual letters, character by character. This is important for text that is not meant to be spoken together, like:

- An acronym that isn’t a word, like APPL, spoken as “A-P-P-L”.
- A number representing a series of digits, like 25, spoken as “two-five” rather than “twenty-five”.

## See Also

### Configuring voiceover

- [speechAdjustedPitch(\_:)](speechadjustedpitch%28__%29.md): Raises or lowers the pitch of spoken text.
- [speechAlwaysIncludesPunctuation(\_:)](speechalwaysincludespunctuation%28__%29.md): Sets whether VoiceOver should always speak all punctuation in the text view.
- [speechAnnouncementsQueued(\_:)](speechannouncementsqueued%28__%29.md): Controls whether to queue pending announcements behind existing speech rather than interrupting speech in progress.
