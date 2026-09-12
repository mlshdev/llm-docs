> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/function-key-unicode-values](https://developer.apple.com/documentation/appkit/function-key-unicode-values)

# Function-Key Unicode Values (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Constants for reserved keyboard function keys that correspond to unicode characters.

<a id="overview"></a>

## Overview

These constants correspond to unicode characters in the range (0xF700–0xF8FF) and are values you can use with the [characters](nsevent/characters.md) and [charactersIgnoringModifiers](nsevent/charactersignoringmodifiers.md) properties of the event. You can also use them in some parameters in the [keyEvent(with:location:modifierFlags:timestamp:windowNumber:context:characters:charactersIgnoringModifiers:isARepeat:keyCode:)](nsevent/keyevent%28with_location_modifierflags_timestamp_windownumber_context_characters_charactersignoringmodifiers_isarepeat_keycode_%29.md) method of the event.

Note that the system handles some function keys at a lower level and your app never sees them. Examples include the Volume Up key, Volume Down key, Volume Mute key, Eject key, and Function key found on many Macs.

## Topics

### Getting Common Control Keys

- [NSDeleteFunctionKey](nsdeletefunctionkey.md): The forward delete key.

### Getting the Navigation-Related Keys

- [NSUpArrowFunctionKey](nsuparrowfunctionkey.md): The up arrow key.
- [NSDownArrowFunctionKey](nsdownarrowfunctionkey.md): The down arrow key.
- [NSLeftArrowFunctionKey](nsleftarrowfunctionkey.md): The left arrow key.
- [NSRightArrowFunctionKey](nsrightarrowfunctionkey.md): The right arrow key.
- [NSPageUpFunctionKey](nspageupfunctionkey.md): The page up key.
- [NSPageDownFunctionKey](nspagedownfunctionkey.md): The page down key.
- [NSHomeFunctionKey](nshomefunctionkey.md): The home key.
- [NSEndFunctionKey](nsendfunctionkey.md): The end key.
- [NSPrevFunctionKey](nsprevfunctionkey.md): Previous key.
- [NSNextFunctionKey](nsnextfunctionkey.md): The next key.

### Getting Special Behavior Keys

- [NSBeginFunctionKey](nsbeginfunctionkey.md): The begin key.
- [NSBreakFunctionKey](nsbreakfunctionkey.md): The break key.
- [NSClearDisplayFunctionKey](nscleardisplayfunctionkey.md): The clear display key.
- [NSClearLineFunctionKey](nsclearlinefunctionkey.md): The clear or num lock key.
- [NSDeleteCharFunctionKey](nsdeletecharfunctionkey.md): The delete character key.
- [NSDeleteLineFunctionKey](nsdeletelinefunctionkey.md): The delete line key.
- [NSExecuteFunctionKey](nsexecutefunctionkey.md): The execute key.
- [NSFindFunctionKey](nsfindfunctionkey.md): The find key.
- [NSHelpFunctionKey](nshelpfunctionkey.md): The help key.
- [NSInsertFunctionKey](nsinsertfunctionkey.md): The insert key.
- [NSInsertCharFunctionKey](nsinsertcharfunctionkey.md): The insert character key.
- [NSInsertLineFunctionKey](nsinsertlinefunctionkey.md): The insert line key.
- [NSMenuFunctionKey](nsmenufunctionkey.md): The menu key.
- [NSModeSwitchFunctionKey](nsmodeswitchfunctionkey.md): The mode switch key.
- [NSPauseFunctionKey](nspausefunctionkey.md): The pause key.
- [NSPrintFunctionKey](nsprintfunctionkey.md): The print key.
- [NSPrintScreenFunctionKey](nsprintscreenfunctionkey.md): The print screen key.
- [NSRedoFunctionKey](nsredofunctionkey.md): The redo key.
- [NSResetFunctionKey](nsresetfunctionkey.md): The reset key.
- [NSScrollLockFunctionKey](nsscrolllockfunctionkey.md): The scroll lock key.
- [NSSelectFunctionKey](nsselectfunctionkey.md): The select key.
- [NSStopFunctionKey](nsstopfunctionkey.md): The stop key.
- [NSSysReqFunctionKey](nssysreqfunctionkey.md): The system request key.
- [NSSystemFunctionKey](nssystemfunctionkey.md): The system key.
- [NSUndoFunctionKey](nsundofunctionkey.md): The undo key.
- [NSUserFunctionKey](nsuserfunctionkey.md): The user key.

### Getting the Function Keys

- [NSF1FunctionKey](nsf1functionkey.md): The F1 key.
- [NSF2FunctionKey](nsf2functionkey.md): The F2 key.
- [NSF3FunctionKey](nsf3functionkey.md): The F3 key.
- [NSF4FunctionKey](nsf4functionkey.md): The F4 key.
- [NSF5FunctionKey](nsf5functionkey.md): The F5 key.
- [NSF6FunctionKey](nsf6functionkey.md): The F6 key.
- [NSF7FunctionKey](nsf7functionkey.md): The F7 key.
- [NSF8FunctionKey](nsf8functionkey.md): The F8 key.
- [NSF9FunctionKey](nsf9functionkey.md): The F9 key.
- [NSF10FunctionKey](nsf10functionkey.md): The F10 key.
- [NSF11FunctionKey](nsf11functionkey.md): The F11 key.
- [NSF12FunctionKey](nsf12functionkey.md): The F12 key.
- [NSF13FunctionKey](nsf13functionkey.md): The F13 key.
- [NSF14FunctionKey](nsf14functionkey.md): The F14 key.
- [NSF15FunctionKey](nsf15functionkey.md): The F15 key.
- [NSF16FunctionKey](nsf16functionkey.md): The F16 key.
- [NSF17FunctionKey](nsf17functionkey.md): The F17 key.
- [NSF18FunctionKey](nsf18functionkey.md): The F18 key.
- [NSF19FunctionKey](nsf19functionkey.md): The F19 key.
- [NSF20FunctionKey](nsf20functionkey.md): The F20 key.
- [NSF21FunctionKey](nsf21functionkey.md): The F21 key.
- [NSF22FunctionKey](nsf22functionkey.md): The F22 key.
- [NSF23FunctionKey](nsf23functionkey.md): The F23 key.
- [NSF24FunctionKey](nsf24functionkey.md): The F24 key.
- [NSF25FunctionKey](nsf25functionkey.md): The F25 key.
- [NSF26FunctionKey](nsf26functionkey.md): The F26 key.
- [NSF27FunctionKey](nsf27functionkey.md): The F27 key.
- [NSF28FunctionKey](nsf28functionkey.md): The F28 key.
- [NSF29FunctionKey](nsf29functionkey.md): The F29 key.
- [NSF30FunctionKey](nsf30functionkey.md): The F30 key.
- [NSF31FunctionKey](nsf31functionkey.md): The F31 key.
- [NSF32FunctionKey](nsf32functionkey.md): The F32 key.
- [NSF33FunctionKey](nsf33functionkey.md): The F33 key.
- [NSF34FunctionKey](nsf34functionkey.md): The F34 key.
- [NSF35FunctionKey](nsf35functionkey.md): The F35 key.

## See Also

### Getting key event information

- [characters](nsevent/characters.md): The characters associated with a key-up or key-down event.
- [charactersIgnoringModifiers](nsevent/charactersignoringmodifiers.md): The characters generated by a key event as if no modifier key (except for Shift) applies.
- [keyCode](nsevent/keycode.md): The virtual code for the key associated with the event.
- [characters(byApplyingModifiers:)](nsevent/characters%28byapplyingmodifiers_%29.md): Returns the new characters that result if you apply the specified modifier keys to the event.
- [keyRepeatDelay](nsevent/keyrepeatdelay.md): The number of seconds someone must hold down a key before the first key repeat event occurs.
- [keyRepeatInterval](nsevent/keyrepeatinterval.md): The number of seconds someone must hold down a key to generate key-repeat events after the initial delay.
- [specialKey](nsevent/specialkey-swift.property.md): The code associated with a function key or other special key.
- [NSEvent.SpecialKey](nsevent/specialkey-swift.struct.md): Constants for reserved function keys on the keyboard.
- [isARepeat](nsevent/isarepeat.md): A Boolean value that indicates whether the key event is a repeat.

# Function-Key Unicode Values (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Constants for reserved keyboard function keys that correspond to unicode characters.

<a id="overview"></a>

## Overview

These constants correspond to unicode characters in the range (0xF700–0xF8FF) and are values you can use with the [characters](nsevent/characters.md) and [charactersIgnoringModifiers](nsevent/charactersignoringmodifiers.md) properties of the event. You can also use them in some parameters in the [keyEventWithType:location:modifierFlags:timestamp:windowNumber:context:characters:charactersIgnoringModifiers:isARepeat:keyCode:](nsevent/keyevent%28with_location_modifierflags_timestamp_windownumber_context_characters_charactersignoringmodifiers_isarepeat_keycode_%29.md) method of the event.

Note that the system handles some function keys at a lower level and your app never sees them. Examples include the Volume Up key, Volume Down key, Volume Mute key, Eject key, and Function key found on many Macs.

## Topics

### Getting Common Control Keys

- [NSDeleteFunctionKey](nsdeletefunctionkey.md): The forward delete key.

### Getting the Navigation-Related Keys

- [NSUpArrowFunctionKey](nsuparrowfunctionkey.md): The up arrow key.
- [NSDownArrowFunctionKey](nsdownarrowfunctionkey.md): The down arrow key.
- [NSLeftArrowFunctionKey](nsleftarrowfunctionkey.md): The left arrow key.
- [NSRightArrowFunctionKey](nsrightarrowfunctionkey.md): The right arrow key.
- [NSPageUpFunctionKey](nspageupfunctionkey.md): The page up key.
- [NSPageDownFunctionKey](nspagedownfunctionkey.md): The page down key.
- [NSHomeFunctionKey](nshomefunctionkey.md): The home key.
- [NSEndFunctionKey](nsendfunctionkey.md): The end key.
- [NSPrevFunctionKey](nsprevfunctionkey.md): Previous key.
- [NSNextFunctionKey](nsnextfunctionkey.md): The next key.

### Getting Special Behavior Keys

- [NSBeginFunctionKey](nsbeginfunctionkey.md): The begin key.
- [NSBreakFunctionKey](nsbreakfunctionkey.md): The break key.
- [NSClearDisplayFunctionKey](nscleardisplayfunctionkey.md): The clear display key.
- [NSClearLineFunctionKey](nsclearlinefunctionkey.md): The clear or num lock key.
- [NSDeleteCharFunctionKey](nsdeletecharfunctionkey.md): The delete character key.
- [NSDeleteLineFunctionKey](nsdeletelinefunctionkey.md): The delete line key.
- [NSExecuteFunctionKey](nsexecutefunctionkey.md): The execute key.
- [NSFindFunctionKey](nsfindfunctionkey.md): The find key.
- [NSHelpFunctionKey](nshelpfunctionkey.md): The help key.
- [NSInsertFunctionKey](nsinsertfunctionkey.md): The insert key.
- [NSInsertCharFunctionKey](nsinsertcharfunctionkey.md): The insert character key.
- [NSInsertLineFunctionKey](nsinsertlinefunctionkey.md): The insert line key.
- [NSMenuFunctionKey](nsmenufunctionkey.md): The menu key.
- [NSModeSwitchFunctionKey](nsmodeswitchfunctionkey.md): The mode switch key.
- [NSPauseFunctionKey](nspausefunctionkey.md): The pause key.
- [NSPrintFunctionKey](nsprintfunctionkey.md): The print key.
- [NSPrintScreenFunctionKey](nsprintscreenfunctionkey.md): The print screen key.
- [NSRedoFunctionKey](nsredofunctionkey.md): The redo key.
- [NSResetFunctionKey](nsresetfunctionkey.md): The reset key.
- [NSScrollLockFunctionKey](nsscrolllockfunctionkey.md): The scroll lock key.
- [NSSelectFunctionKey](nsselectfunctionkey.md): The select key.
- [NSStopFunctionKey](nsstopfunctionkey.md): The stop key.
- [NSSysReqFunctionKey](nssysreqfunctionkey.md): The system request key.
- [NSSystemFunctionKey](nssystemfunctionkey.md): The system key.
- [NSUndoFunctionKey](nsundofunctionkey.md): The undo key.
- [NSUserFunctionKey](nsuserfunctionkey.md): The user key.

### Getting the Function Keys

- [NSF1FunctionKey](nsf1functionkey.md): The F1 key.
- [NSF2FunctionKey](nsf2functionkey.md): The F2 key.
- [NSF3FunctionKey](nsf3functionkey.md): The F3 key.
- [NSF4FunctionKey](nsf4functionkey.md): The F4 key.
- [NSF5FunctionKey](nsf5functionkey.md): The F5 key.
- [NSF6FunctionKey](nsf6functionkey.md): The F6 key.
- [NSF7FunctionKey](nsf7functionkey.md): The F7 key.
- [NSF8FunctionKey](nsf8functionkey.md): The F8 key.
- [NSF9FunctionKey](nsf9functionkey.md): The F9 key.
- [NSF10FunctionKey](nsf10functionkey.md): The F10 key.
- [NSF11FunctionKey](nsf11functionkey.md): The F11 key.
- [NSF12FunctionKey](nsf12functionkey.md): The F12 key.
- [NSF13FunctionKey](nsf13functionkey.md): The F13 key.
- [NSF14FunctionKey](nsf14functionkey.md): The F14 key.
- [NSF15FunctionKey](nsf15functionkey.md): The F15 key.
- [NSF16FunctionKey](nsf16functionkey.md): The F16 key.
- [NSF17FunctionKey](nsf17functionkey.md): The F17 key.
- [NSF18FunctionKey](nsf18functionkey.md): The F18 key.
- [NSF19FunctionKey](nsf19functionkey.md): The F19 key.
- [NSF20FunctionKey](nsf20functionkey.md): The F20 key.
- [NSF21FunctionKey](nsf21functionkey.md): The F21 key.
- [NSF22FunctionKey](nsf22functionkey.md): The F22 key.
- [NSF23FunctionKey](nsf23functionkey.md): The F23 key.
- [NSF24FunctionKey](nsf24functionkey.md): The F24 key.
- [NSF25FunctionKey](nsf25functionkey.md): The F25 key.
- [NSF26FunctionKey](nsf26functionkey.md): The F26 key.
- [NSF27FunctionKey](nsf27functionkey.md): The F27 key.
- [NSF28FunctionKey](nsf28functionkey.md): The F28 key.
- [NSF29FunctionKey](nsf29functionkey.md): The F29 key.
- [NSF30FunctionKey](nsf30functionkey.md): The F30 key.
- [NSF31FunctionKey](nsf31functionkey.md): The F31 key.
- [NSF32FunctionKey](nsf32functionkey.md): The F32 key.
- [NSF33FunctionKey](nsf33functionkey.md): The F33 key.
- [NSF34FunctionKey](nsf34functionkey.md): The F34 key.
- [NSF35FunctionKey](nsf35functionkey.md): The F35 key.

## See Also

### Getting key event information

- [characters](nsevent/characters.md): The characters associated with a key-up or key-down event.
- [charactersIgnoringModifiers](nsevent/charactersignoringmodifiers.md): The characters generated by a key event as if no modifier key (except for Shift) applies.
- [keyCode](nsevent/keycode.md): The virtual code for the key associated with the event.
- [charactersByApplyingModifiers:](nsevent/characters%28byapplyingmodifiers_%29.md): Returns the new characters that result if you apply the specified modifier keys to the event.
- [keyRepeatDelay](nsevent/keyrepeatdelay.md): The number of seconds someone must hold down a key before the first key repeat event occurs.
- [keyRepeatInterval](nsevent/keyrepeatinterval.md): The number of seconds someone must hold down a key to generate key-repeat events after the initial delay.
- [ARepeat](nsevent/isarepeat.md): A Boolean value that indicates whether the key event is a repeat.
