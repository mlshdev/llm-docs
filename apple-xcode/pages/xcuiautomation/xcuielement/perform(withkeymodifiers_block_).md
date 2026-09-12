> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielement/perform(withkeymodifiers:block:)](https://developer.apple.com/documentation/xcuiautomation/xcuielement/perform(withkeymodifiers:block:))

# perform(withKeyModifiers:block:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS · Xcode 16.3+

Executes a block of code while holding a combination keystroke.

## Declaration

```swift
class func perform(withKeyModifiers flags: XCUIElement.KeyModifierFlags, block: () -> Void)
```

## Parameters

- `flags`: A set of modifier flags ([XCUIElement.KeyModifierFlags](keymodifierflags.md)) to use while executing the block.
- `block`: The block to execute.

<a id="Discussion"></a>

## Discussion

This method sets and holds the keyboard modifiers you provide while you call methods to click on, drag from, or type into elements in the block.

## See Also

### Combining keystrokes

- [typeKey(\_:modifierFlags:)](typekey%28__modifierflags_%29-6gaoi.md): Types a single key from the XCUIKeyboardKey enumeration with the specified modifier flags.
- [typeKey(\_:modifierFlags:)](typekey%28__modifierflags_%29-9ubn.md): Types a single key that a string represents with the flags you specify.
- [XCUIKeyboardKey](../xcuikeyboardkey.md): Constants to represent keys that have no typewritten equivalent.
- [XCUIElement.KeyModifierFlags](keymodifierflags.md): Flags for simulating combination keystrokes with keys, such as Control, Option, Shift, and Command.

# performWithKeyModifiers:block: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS · Xcode 16.3+

Executes a block of code while holding a combination keystroke.

## Declaration

```objectivec
+ (void) performWithKeyModifiers:(XCUIKeyModifierFlags) flags block:(void (^)()) block;
```

## Parameters

- `flags`: A set of modifier flags ([XCUIKeyModifierFlags](keymodifierflags.md)) to use while executing the block.
- `block`: The block to execute.

<a id="Discussion"></a>

## Discussion

This method sets and holds the keyboard modifiers you provide while you call methods to click on, drag from, or type into elements in the block.

## See Also

### Combining keystrokes

- [typeKey:modifierFlags:](typekey%28__modifierflags_%29-9ubn.md): Types a single key that a string represents with the flags you specify.
- [XCUIKeyboardKey](../xcuikeyboardkey.md): Constants to represent keys that have no typewritten equivalent.
- [XCUIKeyModifierFlags](keymodifierflags.md): Flags for simulating combination keystrokes with keys, such as Control, Option, Shift, and Command.
