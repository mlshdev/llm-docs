> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcharactersetremovecharactersinstring(_:_:)](https://developer.apple.com/documentation/corefoundation/cfcharactersetremovecharactersinstring(_:_:))

# CFCharacterSetRemoveCharactersInString(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes the characters in a given string from a character set.

## Declaration

```swift
func CFCharacterSetRemoveCharactersInString(_ theSet: CFMutableCharacterSet!, _ theString: CFString!)
```

## Parameters

- `theSet`: The character set to modify.
- `theString`: A string containing the characters to remove from `theSet`.

## See Also

### Removing Characters

- [CFCharacterSetRemoveCharactersInRange(\_:\_:)](cfcharactersetremovecharactersinrange%28____%29.md): Removes a given range of Unicode characters from a character set.

# CFCharacterSetRemoveCharactersInString (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes the characters in a given string from a character set.

## Declaration

```objectivec
extern void CFCharacterSetRemoveCharactersInString(CFMutableCharacterSetRef theSet, CFStringRef theString);
```

## Parameters

- `theSet`: The character set to modify.
- `theString`: A string containing the characters to remove from `theSet`.

## See Also

### Removing Characters

- [CFCharacterSetRemoveCharactersInRange](cfcharactersetremovecharactersinrange%28____%29.md): Removes a given range of Unicode characters from a character set.
