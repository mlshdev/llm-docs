> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielement/typekey(_:modifierflags:)-9ubn](https://developer.apple.com/documentation/xcuiautomation/xcuielement/typekey(_:modifierflags:)-9ubn)

# typeKey(\_:modifierFlags:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · Xcode 16.3+

Types a single key that a string represents with the flags you specify.

## Declaration

```swift
@MainActor func typeKey(_ key: String, modifierFlags flags: XCUIElement.KeyModifierFlags)
```

## Parameters

- `key`: A string representation of the key to type, or a constant from [XCUIKeyboardKey](../xcuikeyboardkey.md) for a key that doesn’t have a single-key string equivalent.
- `flags`: A set of modifier flags ([XCUIElement.KeyModifierFlags](keymodifierflags.md)) to use when typing the key.

<a id="Discussion"></a>

## Discussion

Although `key` is a string, it must represent a single key on a physical keyboard. Strings that resolve to multiple keys raise an error at runtime.

In addition to literal string key representations like `"a"`, `"6"`, and `"["`, keys such as arrow keys, Command, Control, Option, and function keys can be typed using the constants in [XCUIKeyboardKey](../xcuikeyboardkey.md).

## See Also

### Combining keystrokes

- [typeKey(\_:modifierFlags:)](typekey%28__modifierflags_%29-6gaoi.md): Types a single key from the XCUIKeyboardKey enumeration with the specified modifier flags.
- [XCUIKeyboardKey](../xcuikeyboardkey.md): Constants to represent keys that have no typewritten equivalent.
- [perform(withKeyModifiers:block:)](perform%28withkeymodifiers_block_%29.md): Executes a block of code while holding a combination keystroke.
- [XCUIElement.KeyModifierFlags](keymodifierflags.md): Flags for simulating combination keystrokes with keys, such as Control, Option, Shift, and Command.

# typeKey:modifierFlags: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · Xcode 16.3+

Types a single key that a string represents with the flags you specify.

## Declaration

```objectivec
- (void) typeKey:(NSString *) key modifierFlags:(XCUIKeyModifierFlags) flags;
```

## Parameters

- `key`: A string representation of the key to type, or a constant from [XCUIKeyboardKey](../xcuikeyboardkey.md) for a key that doesn’t have a single-key string equivalent.
- `flags`: A set of modifier flags ([XCUIKeyModifierFlags](keymodifierflags.md)) to use when typing the key.

<a id="Discussion"></a>

## Discussion

Although `key` is a string, it must represent a single key on a physical keyboard. Strings that resolve to multiple keys raise an error at runtime.

In addition to literal string key representations like `"a"`, `"6"`, and `"["`, keys such as arrow keys, Command, Control, Option, and function keys can be typed using the constants in [XCUIKeyboardKey](../xcuikeyboardkey.md).

## See Also

### Combining keystrokes

- [XCUIKeyboardKey](../xcuikeyboardkey.md): Constants to represent keys that have no typewritten equivalent.
- [performWithKeyModifiers:block:](perform%28withkeymodifiers_block_%29.md): Executes a block of code while holding a combination keystroke.
- [XCUIKeyModifierFlags](keymodifierflags.md): Flags for simulating combination keystrokes with keys, such as Control, Option, Shift, and Command.
