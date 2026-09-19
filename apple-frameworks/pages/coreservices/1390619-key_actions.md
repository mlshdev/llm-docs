> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1390619-key_actions

# Key Actions

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Indicate the current key action.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [kUCKeyActionDown](1390619-key_actions/kuckeyactiondown.md): The user is pressing the key.
- [kUCKeyActionUp](1390619-key_actions/kuckeyactionup.md): The user is releasing the key.
- [kUCKeyActionAutoKey](1390619-key_actions/kuckeyactionautokey.md): The user has the key in an “auto-key” pressed state that is, the user is holding down the key for an extended period of time and is thereby generating multiple key strokes from the single key.
- [kUCKeyActionDisplay](1390619-key_actions/kuckeyactiondisplay.md): The user is requesting information for key display, as in the Key Caps application.
