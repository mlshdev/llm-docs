> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1390507-key_translation_options_flag](https://developer.apple.com/documentation/coreservices/1390507-key_translation_options_flag)

# Key Translation Options Flag

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Indicates the dead-key processing state.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [kUCKeyTranslateNoDeadKeysBit](1390507-key_translation_options_flag/kuckeytranslatenodeadkeysbit.md): The bit number of the bit that turns off dead-key processing. This prevents setting any new dead-key states, but allows completion of any dead-key states currently in effect.
