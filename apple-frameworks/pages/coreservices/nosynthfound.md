> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/nosynthfound](https://developer.apple.com/documentation/coreservices/nosynthfound)

# noSynthFound

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Could not find the specified speech synthesizer

## Declaration

```swift
var noSynthFound: Int { get }
```

## See Also

### Result Codes

- [synthOpenFailed](synthopenfailed.md): Could not open another speech synthesizerchannel
- [synthNotReady](synthnotready.md): Speech synthesizer is still busy speaking
- [bufTooSmall](buftoosmall.md): Output buffer is too small to hold result
- [voiceNotFound](voicenotfound.md): Voice resource not found
- [incompatibleVoice](incompatiblevoice.md): Specified voice cannot be used with synthesizer
- [badDictFormat](baddictformat.md): Pronunciation dictionary format error
- [badInputText](badinputtext.md): Raw phoneme text contains invalid characters
