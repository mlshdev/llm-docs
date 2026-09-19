> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1560017-anonymous/nosynthfound

# noSynthFound

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Could not find the specified speech synthesizer

## Declaration

```objectivec
noSynthFound = -240
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
