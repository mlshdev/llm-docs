> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuikeyboardkey](https://developer.apple.com/documentation/xcuiautomation/xcuikeyboardkey)

# XCUIKeyboardKey (Swift)

**Framework:** XCUIAutomation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Constants to represent keys that have no typewritten equivalent.

## Declaration

```swift
struct XCUIKeyboardKey
```

<a id="Discussion"></a>

## Discussion

These constants represent the set of modifier, navigation, function, and other keys on most keyboards.

## Topics

### Modifier keys

- [command](xcuikeyboardkey/command.md): A constant that represents the Command key.
- [control](xcuikeyboardkey/control.md): A constant that represents the Control key.
- [option](xcuikeyboardkey/option.md): A constant that represents the Option key.
- [shift](xcuikeyboardkey/shift.md): A constant that represents the Shift key.
- [rightCommand](xcuikeyboardkey/rightcommand.md): A constant that represents the right Command key.
- [rightControl](xcuikeyboardkey/rightcontrol.md): A constant that represents the right Control key.
- [rightOption](xcuikeyboardkey/rightoption.md): A constant that represents the right Option key.
- [rightShift](xcuikeyboardkey/rightshift.md): A constant that represents the right Shift key.

### Navigation keys

- [upArrow](xcuikeyboardkey/uparrow.md): A constant that represents the Up Arrow key.
- [downArrow](xcuikeyboardkey/downarrow.md): A constant that represents the Down Arrow key.
- [leftArrow](xcuikeyboardkey/leftarrow.md): A constant that represents the Left Arrow key.
- [rightArrow](xcuikeyboardkey/rightarrow.md): A constant that represents the Right Arrow key.
- [home](xcuikeyboardkey/home.md): A constant that represents the Home key.
- [end](xcuikeyboardkey/end.md): A constant that represents the End key.
- [pageUp](xcuikeyboardkey/pageup.md): A constant that represents the Page Up key.
- [pageDown](xcuikeyboardkey/pagedown.md): A constant that represents the Page Down key.
- [help](xcuikeyboardkey/help.md): A constant that represents the Help key.

### Function keys

- [secondaryFn](xcuikeyboardkey/secondaryfn.md): A constant that represents the Function key.
- [F1](xcuikeyboardkey/f1.md): A constant that represents the F1 key.
- [F2](xcuikeyboardkey/f2.md): A constant that represents the F2 key.
- [F3](xcuikeyboardkey/f3.md): A constant that represents the F3 key.
- [F4](xcuikeyboardkey/f4.md): A constant that represents the F4 key.
- [F5](xcuikeyboardkey/f5.md): A constant that represents the F5 key.
- [F6](xcuikeyboardkey/f6.md): A constant that represents the F6 key.
- [F7](xcuikeyboardkey/f7.md): A constant that represents the F7 key.
- [F8](xcuikeyboardkey/f8.md): A constant that represents the F8 key.
- [F9](xcuikeyboardkey/f9.md): A constant that represents the F9 key.
- [F10](xcuikeyboardkey/f10.md): A constant that represents the F10 key.
- [F11](xcuikeyboardkey/f11.md): A constant that represents the F11 key.
- [F12](xcuikeyboardkey/f12.md): A constant that represents the F12 key.
- [F13](xcuikeyboardkey/f13.md): A constant that represents the F13 key.
- [F14](xcuikeyboardkey/f14.md): A constant that represents the F14 key.
- [F15](xcuikeyboardkey/f15.md): A constant that represents the F15 key.
- [F16](xcuikeyboardkey/f16.md): A constant that represents the F16 key.
- [F17](xcuikeyboardkey/f17.md): A constant that represents the F17 key.
- [F18](xcuikeyboardkey/f18.md): A constant that represents the F18 key.
- [F19](xcuikeyboardkey/f19.md): A constant that represents the F19 key.

### Text-editing keys

- [capsLock](xcuikeyboardkey/capslock.md): A constant that represents the Caps Lock key.
- [delete](xcuikeyboardkey/delete.md): A constant that represents the Delete key.
- [forwardDelete](xcuikeyboardkey/forwarddelete.md): A constant that represents the Forward Delete key.
- [space](xcuikeyboardkey/space.md): A constant that represents the Space bar.
- [tab](xcuikeyboardkey/tab.md): A constant that represents the Tab key.

### Other keys

- [clear](xcuikeyboardkey/clear.md): A constant that represents the Clear key.
- [enter](xcuikeyboardkey/enter.md): A constant that represents the Enter key.
- [escape](xcuikeyboardkey/escape.md): A constant that represents the Escape key.
- [return](xcuikeyboardkey/return.md): A constant that represents the Return key.

### Initializers

- [init(\_:)](xcuikeyboardkey/init%28__%29.md): Initializes a constant with a string that represents a keyboard key.
- [init(rawValue:)](xcuikeyboardkey/init%28rawvalue_%29.md): Initializes a constant with a string that represents a keyboard key.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Combining keystrokes

- [typeKey(\_:modifierFlags:)](xcuielement/typekey%28__modifierflags_%29-6gaoi.md): Types a single key from the XCUIKeyboardKey enumeration with the specified modifier flags.
- [typeKey(\_:modifierFlags:)](xcuielement/typekey%28__modifierflags_%29-9ubn.md): Types a single key that a string represents with the flags you specify.
- [perform(withKeyModifiers:block:)](xcuielement/perform%28withkeymodifiers_block_%29.md): Executes a block of code while holding a combination keystroke.
- [XCUIElement.KeyModifierFlags](xcuielement/keymodifierflags.md): Flags for simulating combination keystrokes with keys, such as Control, Option, Shift, and Command.

# XCUIKeyboardKey (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Constants to represent keys that have no typewritten equivalent.

## Declaration

```objectivec
typedef NSString * XCUIKeyboardKey;
```

<a id="Discussion"></a>

## Discussion

These constants represent the set of modifier, navigation, function, and other keys on most keyboards.

## Topics

### Modifier keys

- [XCUIKeyboardKeyCommand](xcuikeyboardkey/command.md): A constant that represents the Command key.
- [XCUIKeyboardKeyControl](xcuikeyboardkey/control.md): A constant that represents the Control key.
- [XCUIKeyboardKeyOption](xcuikeyboardkey/option.md): A constant that represents the Option key.
- [XCUIKeyboardKeyShift](xcuikeyboardkey/shift.md): A constant that represents the Shift key.
- [XCUIKeyboardKeyRightCommand](xcuikeyboardkey/rightcommand.md): A constant that represents the right Command key.
- [XCUIKeyboardKeyRightControl](xcuikeyboardkey/rightcontrol.md): A constant that represents the right Control key.
- [XCUIKeyboardKeyRightOption](xcuikeyboardkey/rightoption.md): A constant that represents the right Option key.
- [XCUIKeyboardKeyRightShift](xcuikeyboardkey/rightshift.md): A constant that represents the right Shift key.

### Navigation keys

- [XCUIKeyboardKeyUpArrow](xcuikeyboardkey/uparrow.md): A constant that represents the Up Arrow key.
- [XCUIKeyboardKeyDownArrow](xcuikeyboardkey/downarrow.md): A constant that represents the Down Arrow key.
- [XCUIKeyboardKeyLeftArrow](xcuikeyboardkey/leftarrow.md): A constant that represents the Left Arrow key.
- [XCUIKeyboardKeyRightArrow](xcuikeyboardkey/rightarrow.md): A constant that represents the Right Arrow key.
- [XCUIKeyboardKeyHome](xcuikeyboardkey/home.md): A constant that represents the Home key.
- [XCUIKeyboardKeyEnd](xcuikeyboardkey/end.md): A constant that represents the End key.
- [XCUIKeyboardKeyPageUp](xcuikeyboardkey/pageup.md): A constant that represents the Page Up key.
- [XCUIKeyboardKeyPageDown](xcuikeyboardkey/pagedown.md): A constant that represents the Page Down key.
- [XCUIKeyboardKeyHelp](xcuikeyboardkey/help.md): A constant that represents the Help key.

### Function keys

- [XCUIKeyboardKeySecondaryFn](xcuikeyboardkey/secondaryfn.md): A constant that represents the Function key.
- [XCUIKeyboardKeyF1](xcuikeyboardkey/f1.md): A constant that represents the F1 key.
- [XCUIKeyboardKeyF2](xcuikeyboardkey/f2.md): A constant that represents the F2 key.
- [XCUIKeyboardKeyF3](xcuikeyboardkey/f3.md): A constant that represents the F3 key.
- [XCUIKeyboardKeyF4](xcuikeyboardkey/f4.md): A constant that represents the F4 key.
- [XCUIKeyboardKeyF5](xcuikeyboardkey/f5.md): A constant that represents the F5 key.
- [XCUIKeyboardKeyF6](xcuikeyboardkey/f6.md): A constant that represents the F6 key.
- [XCUIKeyboardKeyF7](xcuikeyboardkey/f7.md): A constant that represents the F7 key.
- [XCUIKeyboardKeyF8](xcuikeyboardkey/f8.md): A constant that represents the F8 key.
- [XCUIKeyboardKeyF9](xcuikeyboardkey/f9.md): A constant that represents the F9 key.
- [XCUIKeyboardKeyF10](xcuikeyboardkey/f10.md): A constant that represents the F10 key.
- [XCUIKeyboardKeyF11](xcuikeyboardkey/f11.md): A constant that represents the F11 key.
- [XCUIKeyboardKeyF12](xcuikeyboardkey/f12.md): A constant that represents the F12 key.
- [XCUIKeyboardKeyF13](xcuikeyboardkey/f13.md): A constant that represents the F13 key.
- [XCUIKeyboardKeyF14](xcuikeyboardkey/f14.md): A constant that represents the F14 key.
- [XCUIKeyboardKeyF15](xcuikeyboardkey/f15.md): A constant that represents the F15 key.
- [XCUIKeyboardKeyF16](xcuikeyboardkey/f16.md): A constant that represents the F16 key.
- [XCUIKeyboardKeyF17](xcuikeyboardkey/f17.md): A constant that represents the F17 key.
- [XCUIKeyboardKeyF18](xcuikeyboardkey/f18.md): A constant that represents the F18 key.
- [XCUIKeyboardKeyF19](xcuikeyboardkey/f19.md): A constant that represents the F19 key.

### Text-editing keys

- [XCUIKeyboardKeyCapsLock](xcuikeyboardkey/capslock.md): A constant that represents the Caps Lock key.
- [XCUIKeyboardKeyDelete](xcuikeyboardkey/delete.md): A constant that represents the Delete key.
- [XCUIKeyboardKeyForwardDelete](xcuikeyboardkey/forwarddelete.md): A constant that represents the Forward Delete key.
- [XCUIKeyboardKeySpace](xcuikeyboardkey/space.md): A constant that represents the Space bar.
- [XCUIKeyboardKeyTab](xcuikeyboardkey/tab.md): A constant that represents the Tab key.

### Other keys

- [XCUIKeyboardKeyClear](xcuikeyboardkey/clear.md): A constant that represents the Clear key.
- [XCUIKeyboardKeyEnter](xcuikeyboardkey/enter.md): A constant that represents the Enter key.
- [XCUIKeyboardKeyEscape](xcuikeyboardkey/escape.md): A constant that represents the Escape key.
- [XCUIKeyboardKeyReturn](xcuikeyboardkey/return.md): A constant that represents the Return key.

## See Also

### Combining keystrokes

- [typeKey:modifierFlags:](xcuielement/typekey%28__modifierflags_%29-9ubn.md): Types a single key that a string represents with the flags you specify.
- [performWithKeyModifiers:block:](xcuielement/perform%28withkeymodifiers_block_%29.md): Executes a block of code while holding a combination keystroke.
- [XCUIKeyModifierFlags](xcuielement/keymodifierflags.md): Flags for simulating combination keystrokes with keys, such as Control, Option, Shift, and Command.
