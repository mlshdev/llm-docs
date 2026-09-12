> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bekeymodifierflags](https://developer.apple.com/documentation/browserenginekit/bekeymodifierflags)

# BEKeyModifierFlags (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

An enumeration that records the state of the shift-modifier keys.

## Declaration

```swift
enum BEKeyModifierFlags
```

## Topics

### Getting caps-shift information

- [BEKeyModifierFlags.capsLock](bekeymodifierflags/capslock.md): A flag that indicates that the Caps Lock key is engaged.
- [BEKeyModifierFlags.shift](bekeymodifierflags/shift.md): A flag that indicates that the Shift key is depressed.
- [BEKeyModifierFlags.none](bekeymodifierflags/none.md): A flag that indicates no active key modifiers.

### Initializing the flags

- [init(rawValue:)](bekeymodifierflags/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Keyboard input

- [BEKeyEntry](bekeyentry.md): A class that represents a keyboard event in the text system.
- [BEKeyEntryContext](bekeyentrycontext.md): A class that describes a key event and the text document with which the event is associated.

# BEKeyModifierFlags (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

An enumeration that records the state of the shift-modifier keys.

## Declaration

```objectivec
enum BEKeyModifierFlags : NSInteger;
```

## Topics

### Getting caps-shift information

- [BEKeyModifierFlagCapsLock](bekeymodifierflags/capslock.md): A flag that indicates that the Caps Lock key is engaged.
- [BEKeyModifierFlagShift](bekeymodifierflags/shift.md): A flag that indicates that the Shift key is depressed.
- [BEKeyModifierFlagNone](bekeymodifierflags/none.md): A flag that indicates no active key modifiers.

## See Also

### Keyboard input

- [BEKeyEntry](bekeyentry.md): A class that represents a keyboard event in the text system.
- [BEKeyEntryContext](bekeyentrycontext.md): A class that describes a key event and the text document with which the event is associated.
