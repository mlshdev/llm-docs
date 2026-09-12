> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielement/typekey(_:modifierflags:)-6gaoi](https://developer.apple.com/documentation/xcuiautomation/xcuielement/typekey(_:modifierflags:)-6gaoi)

# typeKey(\_:modifierFlags:)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · Swift 4.0+ · Xcode 16.3+

Types a single key from the XCUIKeyboardKey enumeration with the specified modifier flags.

## Declaration

```swift
@MainActor @nonobjc @preconcurrency func typeKey(_ key: XCUIKeyboardKey, modifierFlags: XCUIElement.KeyModifierFlags)
```

## See Also

### Combining keystrokes

- [typeKey(\_:modifierFlags:)](typekey%28__modifierflags_%29-9ubn.md): Types a single key that a string represents with the flags you specify.
- [XCUIKeyboardKey](../xcuikeyboardkey.md): Constants to represent keys that have no typewritten equivalent.
- [perform(withKeyModifiers:block:)](perform%28withkeymodifiers_block_%29.md): Executes a block of code while holding a combination keystroke.
- [XCUIElement.KeyModifierFlags](keymodifierflags.md): Flags for simulating combination keystrokes with keys, such as Control, Option, Shift, and Command.
