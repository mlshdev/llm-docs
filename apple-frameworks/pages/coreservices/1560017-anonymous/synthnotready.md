> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1560017-anonymous/synthnotready](https://developer.apple.com/documentation/coreservices/1560017-anonymous/synthnotready)

# synthNotReady

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Speech synthesizer is still busy speaking

## Declaration

```objectivec
synthNotReady = -242
```

## See Also

### Result Codes

- [noSynthFound](nosynthfound.md): Could not find the specified speech synthesizer
- [synthOpenFailed](synthopenfailed.md): Could not open another speech synthesizerchannel
- [bufTooSmall](buftoosmall.md): Output buffer is too small to hold result
- [voiceNotFound](voicenotfound.md): Voice resource not found
- [incompatibleVoice](incompatiblevoice.md): Specified voice cannot be used with synthesizer
- [badDictFormat](baddictformat.md): Pronunciation dictionary format error
- [badInputText](badinputtext.md): Raw phoneme text contains invalid characters
