> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/textinputdictationbehavior/automatic

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

A platform-appropriate default text input dictation behavior.

## Declaration

```swift
static let automatic: TextInputDictationBehavior
```

<a id="discussion"></a>

## Discussion

The automatic behavior uses a [TextInputDictationActivation](../textinputdictationactivation.md) value of [onLook](../textinputdictationactivation/onlook.md) for visionOS apps and [onSelect](../textinputdictationactivation/onselect.md) for iOS apps.

## See Also

### Getting behavior values

- [inline(activation:)](inline%28activation_%29.md): Adds a dictation microphone in the search bar.
- [preventDictation](preventdictation.md): Prevents the search bar from having a dictation microphone.
