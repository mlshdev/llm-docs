> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/speechadjustedpitch(_:)](https://developer.apple.com/documentation/swiftui/view/speechadjustedpitch(_:))

# speechAdjustedPitch(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Raises or lowers the pitch of spoken text.

## Declaration

```swift
nonisolated func speechAdjustedPitch(_ value: Double) -> some View

```

## Parameters

- `value`: The amount to raise or lower the pitch. Values between `-1` and `0` result in a lower pitch while values between `0` and `1` result in a higher pitch. The method clamps values to the range `-1` to `1`.

<a id="discussion"></a>

## Discussion

Use this modifier when you want to change the pitch of spoken text. The value indicates how much higher or lower to change the pitch.

## See Also

### Configuring VoiceOver

- [speechAlwaysIncludesPunctuation(\_:)](speechalwaysincludespunctuation%28__%29.md): Sets whether VoiceOver should always speak all punctuation in the text view.
- [speechAnnouncementsQueued(\_:)](speechannouncementsqueued%28__%29.md): Controls whether to queue pending announcements behind existing speech rather than interrupting speech in progress.
- [speechSpellsOutCharacters(\_:)](speechspellsoutcharacters%28__%29.md): Sets whether VoiceOver should speak the contents of the text view character by character.
