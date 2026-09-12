> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iohidkeyboardeventoptions/kiohidkeyboardeventoptionsnokeyrepeat](https://developer.apple.com/documentation/hiddriverkit/iohidkeyboardeventoptions/kiohidkeyboardeventoptionsnokeyrepeat)

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
