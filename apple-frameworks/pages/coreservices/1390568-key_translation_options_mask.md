> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1390568-key_translation_options_mask

# Key Translation Options Mask

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specifies the mask for the bit that controls dead-key processing state.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [kUCKeyTranslateNoDeadKeysMask](1390568-key_translation_options_mask/kuckeytranslatenodeadkeysmask.md): The mask for the bit that turns off dead-key processing. This prevents setting any new dead-key states, but allows completion of any dead-key states currently in effect.
