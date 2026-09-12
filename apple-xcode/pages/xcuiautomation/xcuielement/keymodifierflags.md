> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielement/keymodifierflags](https://developer.apple.com/documentation/xcuiautomation/xcuielement/keymodifierflags)

# XCUIElement.KeyModifierFlags (Swift)

**Framework:** XCUIAutomation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Flags for simulating combination keystrokes with keys, such as Control, Option, Shift, and Command.

## Declaration

```swift
struct KeyModifierFlags
```

<a id="overview"></a>

## Overview

Use these flags with the [typeKey(\_:modifierFlags:)](typekey%28__modifierflags_%29-6gaoi.md) and [perform(withKeyModifiers:block:)](perform%28withkeymodifiers_block_%29.md) methods to simulate combination keystrokes while an action occurs.

## Topics

### Flags for combination keys

- [command](keymodifierflags/command.md): The Command key in a combination keystroke.
- [control](keymodifierflags/control.md): The Control key in a combination keystroke.
- [option](keymodifierflags/option.md): The Option key in a combination keystroke.
- [shift](keymodifierflags/shift.md): The Shift key in a combination keystroke.
- [capsLock](keymodifierflags/capslock.md): The Caps Lock key in a combination keystroke.
- [function](keymodifierflags/function.md): The Function key in a combination keystroke.

### Initializers

- [init(rawValue:)](keymodifierflags/init%28rawvalue_%29.md): Creates a flag that represents a key in a combination keystroke with the specified raw value.

### Legacy flags for combination keys

- [alphaShift](keymodifierflags/alphashift.md): The Caps Lock key in a combination keystroke.
- [alternate](keymodifierflags/alternate.md): The Option key in a combination keystroke.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Combining keystrokes

- [typeKey(\_:modifierFlags:)](typekey%28__modifierflags_%29-6gaoi.md): Types a single key from the XCUIKeyboardKey enumeration with the specified modifier flags.
- [typeKey(\_:modifierFlags:)](typekey%28__modifierflags_%29-9ubn.md): Types a single key that a string represents with the flags you specify.
- [XCUIKeyboardKey](../xcuikeyboardkey.md): Constants to represent keys that have no typewritten equivalent.
- [perform(withKeyModifiers:block:)](perform%28withkeymodifiers_block_%29.md): Executes a block of code while holding a combination keystroke.

# XCUIKeyModifierFlags (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Flags for simulating combination keystrokes with keys, such as Control, Option, Shift, and Command.

## Declaration

```objectivec
enum XCUIKeyModifierFlags : NSUInteger;
```

<a id="overview"></a>

## Overview

Use these flags with the [typeKey(\_:modifierFlags:)](typekey%28__modifierflags_%29-6gaoi.md) and [performWithKeyModifiers:block:](perform%28withkeymodifiers_block_%29.md) methods to simulate combination keystrokes while an action occurs.

## Topics

### Flags for combination keys

- [XCUIKeyModifierCommand](keymodifierflags/command.md): The Command key in a combination keystroke.
- [XCUIKeyModifierControl](keymodifierflags/control.md): The Control key in a combination keystroke.
- [XCUIKeyModifierOption](keymodifierflags/option.md): The Option key in a combination keystroke.
- [XCUIKeyModifierShift](keymodifierflags/shift.md): The Shift key in a combination keystroke.
- [XCUIKeyModifierCapsLock](keymodifierflags/capslock.md): The Caps Lock key in a combination keystroke.
- [XCUIKeyModifierFunction](keymodifierflags/function.md): The Function key in a combination keystroke.

### Legacy flags for combination keys

- [XCUIKeyModifierAlphaShift](keymodifierflags/alphashift.md): The Caps Lock key in a combination keystroke.
- [XCUIKeyModifierAlternate](keymodifierflags/alternate.md): The Option key in a combination keystroke.

### Enumeration Cases

- [XCUIKeyModifierNone](../xcuikeymodifierflags/xcuikeymodifiernone.md): Indicates no key modifier.

## See Also

### Combining keystrokes

- [typeKey:modifierFlags:](typekey%28__modifierflags_%29-9ubn.md): Types a single key that a string represents with the flags you specify.
- [XCUIKeyboardKey](../xcuikeyboardkey.md): Constants to represent keys that have no typewritten equivalent.
- [performWithKeyModifiers:block:](perform%28withkeymodifiers_block_%29.md): Executes a block of code while holding a combination keystroke.
