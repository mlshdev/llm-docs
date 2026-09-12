> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcharactersetaddcharactersinstring(_:_:)](https://developer.apple.com/documentation/corefoundation/cfcharactersetaddcharactersinstring(_:_:))

# CFCharacterSetAddCharactersInString(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds the characters in a given string to a character set.

## Declaration

```swift
func CFCharacterSetAddCharactersInString(_ theSet: CFMutableCharacterSet!, _ theString: CFString!)
```

## Parameters

- `theSet`: The character set to modify.
- `theString`: A string containing the characters to add to `theSet`.

## See Also

### Adding Characters

- [CFCharacterSetAddCharactersInRange(\_:\_:)](cfcharactersetaddcharactersinrange%28____%29.md): Adds a given range to a character set.

# CFCharacterSetAddCharactersInString (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds the characters in a given string to a character set.

## Declaration

```objectivec
extern void CFCharacterSetAddCharactersInString(CFMutableCharacterSetRef theSet, CFStringRef theString);
```

## Parameters

- `theSet`: The character set to modify.
- `theString`: A string containing the characters to add to `theSet`.

## See Also

### Adding Characters

- [CFCharacterSetAddCharactersInRange](cfcharactersetaddcharactersinrange%28____%29.md): Adds a given range to a character set.
