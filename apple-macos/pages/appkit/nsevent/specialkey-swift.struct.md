> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/specialkey-swift.struct](https://developer.apple.com/documentation/appkit/nsevent/specialkey-swift.struct)

# NSEvent.SpecialKey

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.9+

Constants for reserved function keys on the keyboard.

## Declaration

```swift
struct SpecialKey
```

<a id="overview"></a>

## Overview

These constants correspond to unicode characters in the range (0xF700–0xF8FF) and are values you can use with the [characters](characters.md) and [charactersIgnoringModifiers](charactersignoringmodifiers.md) properties of the event. You can also use them in some parameters in the [keyEvent(with:location:modifierFlags:timestamp:windowNumber:context:characters:charactersIgnoringModifiers:isARepeat:keyCode:)](keyevent%28with_location_modifierflags_timestamp_windownumber_context_characters_charactersignoringmodifiers_isarepeat_keycode_%29.md) method of the event.

Note that the system handles some function keys at a lower level and your app never sees them. Examples include the Volume Up key, Volume Down key, Volume Mute key, Eject key, and Function key found on many Macs.

## Topics

### Getting Common Control Keys

- [backspace](specialkey-swift.struct/backspace.md): The backspace key.
- [carriageReturn](specialkey-swift.struct/carriagereturn.md): The carriage return key.
- [newline](specialkey-swift.struct/newline.md): The newline key.
- [enter](specialkey-swift.struct/enter.md): The enter key.
- [delete](specialkey-swift.struct/delete.md): The delete key.
- [deleteForward](specialkey-swift.struct/deleteforward.md): The delete forward key.
- [backTab](specialkey-swift.struct/backtab.md): The back tab key.
- [tab](specialkey-swift.struct/tab.md): The tab key.

### Getting the Navigation-Related Keys

- [upArrow](specialkey-swift.struct/uparrow.md): The up arrow key.
- [downArrow](specialkey-swift.struct/downarrow.md): The down arrow key.
- [leftArrow](specialkey-swift.struct/leftarrow.md): The left arrow key.
- [rightArrow](specialkey-swift.struct/rightarrow.md): The right arrow key.
- [pageUp](specialkey-swift.struct/pageup.md): The page up key.
- [pageDown](specialkey-swift.struct/pagedown.md): The page down key.
- [home](specialkey-swift.struct/home.md): The home key.
- [end](specialkey-swift.struct/end.md): The end key.
- [prev](specialkey-swift.struct/prev.md): The previous key.
- [next](specialkey-swift.struct/next.md): The next key.

### Getting Special Behavior Keys

- [begin](specialkey-swift.struct/begin.md): The begin key.
- [break](specialkey-swift.struct/break.md): The break key.
- [clearDisplay](specialkey-swift.struct/cleardisplay.md): The clear display key.
- [clearLine](specialkey-swift.struct/clearline.md): The clear line key.
- [deleteCharacter](specialkey-swift.struct/deletecharacter.md): The delete character key.
- [deleteLine](specialkey-swift.struct/deleteline.md): The delete line key.
- [execute](specialkey-swift.struct/execute.md): The execute key.
- [find](specialkey-swift.struct/find.md): The find key.
- [formFeed](specialkey-swift.struct/formfeed.md): The form feed key.
- [help](specialkey-swift.struct/help.md): The help key.
- [insert](specialkey-swift.struct/insert.md): The insert key.
- [insertCharacter](specialkey-swift.struct/insertcharacter.md): The insert character key.
- [insertLine](specialkey-swift.struct/insertline.md): The insert line key.
- [lineSeparator](specialkey-swift.struct/lineseparator.md): The line separator key.
- [menu](specialkey-swift.struct/menu.md): The menu key.
- [modeSwitch](specialkey-swift.struct/modeswitch.md): The mode switch key.
- [paragraphSeparator](specialkey-swift.struct/paragraphseparator.md): The paragraph separator key.
- [pause](specialkey-swift.struct/pause.md): The pause key.
- [print](specialkey-swift.struct/print.md): The print key.
- [printScreen](specialkey-swift.struct/printscreen.md): The print screen key.
- [redo](specialkey-swift.struct/redo.md): The redo key.
- [reset](specialkey-swift.struct/reset.md): The reset key.
- [scrollLock](specialkey-swift.struct/scrolllock.md): The scroll lock key.
- [select](specialkey-swift.struct/select.md): The select key.
- [stop](specialkey-swift.struct/stop.md): The stop key.
- [sysReq](specialkey-swift.struct/sysreq.md): The system request key.
- [system](specialkey-swift.struct/system.md): The system key.
- [undo](specialkey-swift.struct/undo.md): The undo key.
- [user](specialkey-swift.struct/user.md): The user key.

### Getting the Function Keys

- [f1](specialkey-swift.struct/f1.md): The F1 key.
- [f2](specialkey-swift.struct/f2.md): The F2 key.
- [f3](specialkey-swift.struct/f3.md): The F3 key.
- [f4](specialkey-swift.struct/f4.md): The F4 key.
- [f5](specialkey-swift.struct/f5.md): The F5 key.
- [f6](specialkey-swift.struct/f6.md): The F6 key.
- [f7](specialkey-swift.struct/f7.md): The F7 key.
- [f8](specialkey-swift.struct/f8.md): The F8 key.
- [f9](specialkey-swift.struct/f9.md): The F9 key.
- [f10](specialkey-swift.struct/f10.md): The F10 key.
- [f11](specialkey-swift.struct/f11.md): The F11 key.
- [f12](specialkey-swift.struct/f12.md): The F12 key.
- [f13](specialkey-swift.struct/f13.md): The F13 key.
- [f14](specialkey-swift.struct/f14.md): The F14 key.
- [f15](specialkey-swift.struct/f15.md): The F15 key.
- [f16](specialkey-swift.struct/f16.md): The F16 key.
- [f17](specialkey-swift.struct/f17.md): The F17 key.
- [f18](specialkey-swift.struct/f18.md): The F18 key.
- [f19](specialkey-swift.struct/f19.md): The F19 key.
- [f20](specialkey-swift.struct/f20.md): The F20 key.
- [f21](specialkey-swift.struct/f21.md): The F21 key.
- [f22](specialkey-swift.struct/f22.md): The F22 key.
- [f23](specialkey-swift.struct/f23.md): The F23 key.
- [f24](specialkey-swift.struct/f24.md): The F24 key.
- [f25](specialkey-swift.struct/f25.md): The F25 key.
- [f26](specialkey-swift.struct/f26.md): The F26 key.
- [f27](specialkey-swift.struct/f27.md): The F27 key.
- [f28](specialkey-swift.struct/f28.md): The F28 key.
- [f29](specialkey-swift.struct/f29.md): The F29 key.
- [f30](specialkey-swift.struct/f30.md): The F30 key.
- [f31](specialkey-swift.struct/f31.md): The F31 key.
- [f32](specialkey-swift.struct/f32.md): The F32 key.
- [f33](specialkey-swift.struct/f33.md): The F33 key.
- [f34](specialkey-swift.struct/f34.md): The F34 key.
- [f35](specialkey-swift.struct/f35.md): The F35 key.

### Getting the Key’s Value

- [unicodeScalar](specialkey-swift.struct/unicodescalar.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Getting key event information

- [characters](characters.md): The characters associated with a key-up or key-down event.
- [charactersIgnoringModifiers](charactersignoringmodifiers.md): The characters generated by a key event as if no modifier key (except for Shift) applies.
- [keyCode](keycode.md): The virtual code for the key associated with the event.
- [characters(byApplyingModifiers:)](characters%28byapplyingmodifiers_%29.md): Returns the new characters that result if you apply the specified modifier keys to the event.
- [keyRepeatDelay](keyrepeatdelay.md): The number of seconds someone must hold down a key before the first key repeat event occurs.
- [keyRepeatInterval](keyrepeatinterval.md): The number of seconds someone must hold down a key to generate key-repeat events after the initial delay.
- [specialKey](specialkey-swift.property.md): The code associated with a function key or other special key.
- [Function-Key Unicode Values](../function-key-unicode-values.md): Constants for reserved keyboard function keys that correspond to unicode characters.
- [isARepeat](isarepeat.md): A Boolean value that indicates whether the key event is a repeat.
