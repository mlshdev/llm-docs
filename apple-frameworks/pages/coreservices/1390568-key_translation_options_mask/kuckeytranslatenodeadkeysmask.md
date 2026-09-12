> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1390568-key_translation_options_mask/kuckeytranslatenodeadkeysmask](https://developer.apple.com/documentation/coreservices/1390568-key_translation_options_mask/kuckeytranslatenodeadkeysmask)

# kUCKeyTranslateNoDeadKeysMask

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The mask for the bit that turns off dead-key processing. This prevents setting any new dead-key states, but allows completion of any dead-key states currently in effect.

## Declaration

```objectivec
kUCKeyTranslateNoDeadKeysMask = 1L << kUCKeyTranslateNoDeadKeysBit
```
