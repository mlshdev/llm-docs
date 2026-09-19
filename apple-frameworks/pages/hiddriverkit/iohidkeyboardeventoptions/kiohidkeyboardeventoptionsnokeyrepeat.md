> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hiddriverkit/iohidkeyboardeventoptions/kiohidkeyboardeventoptionsnokeyrepeat

# kIOHIDKeyboardEventOptionsNoKeyRepeat

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit · macOS

An option for not applying the default key repeat logic to the event.

## Declaration

```objectivec
kIOHIDKeyboardEventOptionsNoKeyRepeat
```

<a id="Discussion"></a>

## Discussion

The default behavior for keyboard events is to repeat keys if the user holds down the key for the amount of time defined in system preferences. Use this option to disable this behavior for the event.
