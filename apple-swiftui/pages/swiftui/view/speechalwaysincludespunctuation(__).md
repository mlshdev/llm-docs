> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/speechalwaysincludespunctuation(_:)](https://developer.apple.com/documentation/swiftui/view/speechalwaysincludespunctuation(_:))

# speechAlwaysIncludesPunctuation(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Sets whether VoiceOver should always speak all punctuation in the text view.

## Declaration

```swift
nonisolated func speechAlwaysIncludesPunctuation(_ value: Bool = true) -> some View

```

## Parameters

- `value`: A Boolean value that you set to `true` if VoiceOver should speak all punctuation in the text. Defaults to `true`.

<a id="discussion"></a>

## Discussion

Use this modifier to control whether the system speaks punctuation characters in the text. You might use this for code or other text where the punctuation is relevant, or where you want VoiceOver to speak a verbatim transcription of the text you provide. For example, given the text:

```swift
Text("All the world's a stage, " +
     "And all the men and women merely players;")
     .speechAlwaysIncludesPunctuation()
```

VoiceOver would speak “All the world apostrophe s a stage comma and all the men and women merely players semicolon”.

By default, VoiceOver voices punctuation based on surrounding context.

## See Also

### Configuring VoiceOver

- [speechAdjustedPitch(\_:)](speechadjustedpitch%28__%29.md): Raises or lowers the pitch of spoken text.
- [speechAnnouncementsQueued(\_:)](speechannouncementsqueued%28__%29.md): Controls whether to queue pending announcements behind existing speech rather than interrupting speech in progress.
- [speechSpellsOutCharacters(\_:)](speechspellsoutcharacters%28__%29.md): Sets whether VoiceOver should speak the contents of the text view character by character.
