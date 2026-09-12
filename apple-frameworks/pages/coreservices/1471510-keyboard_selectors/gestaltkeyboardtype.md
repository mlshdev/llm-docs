> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471510-keyboard_selectors/gestaltkeyboardtype](https://developer.apple.com/documentation/coreservices/1471510-keyboard_selectors/gestaltkeyboardtype)

# gestaltKeyboardType

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
gestaltKeyboardType = 'kbd '
```

<a id="discussion"></a>

## Discussion

The selector you pass to the `Gestalt` function to determine the type of the keyboard.

If the Apple Desktop Bus (ADB) is in use, there may be multiple keyboards or other ADB devices attached to the machine. The `gestaltKeyboardType` selector identifies only the type of the keyboard on which the last keystroke occurred. 

You cannot use this selector to find out what ADB devices are connected. For that, you can use the Apple Desktop Bus Manager. Note that the ADB keyboard types described by `Gestalt` do not necessarily map directly to ADB device handler IDs.

Future support for the `gestaltKeyboardType` selector is not guaranteed. To determine the type of the keyboard last touched without using `Gestalt`, check the system global variable `KbdType`.

If the Gestalt Manager does not recognize the keyboard type, it returns an error.
