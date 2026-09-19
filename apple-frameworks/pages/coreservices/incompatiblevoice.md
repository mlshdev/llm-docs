> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/incompatiblevoice

# incompatibleVoice

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specified voice cannot be used with synthesizer

## Declaration

```swift
var incompatibleVoice: Int { get }
```

## See Also

### Result Codes

- [noSynthFound](nosynthfound.md): Could not find the specified speech synthesizer
- [synthOpenFailed](synthopenfailed.md): Could not open another speech synthesizerchannel
- [synthNotReady](synthnotready.md): Speech synthesizer is still busy speaking
- [bufTooSmall](buftoosmall.md): Output buffer is too small to hold result
- [voiceNotFound](voicenotfound.md): Voice resource not found
- [badDictFormat](baddictformat.md): Pronunciation dictionary format error
- [badInputText](badinputtext.md): Raw phoneme text contains invalid characters
