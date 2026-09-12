> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcharactersetislongcharactermember(_:_:)](https://developer.apple.com/documentation/corefoundation/cfcharactersetislongcharactermember(_:_:))

# CFCharacterSetIsLongCharacterMember(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Reports whether or not a given UTF-32 character is in a character set.

## Declaration

```swift
func CFCharacterSetIsLongCharacterMember(_ theSet: CFCharacterSet!, _ theChar: UTF32Char) -> Bool
```

## Parameters

- `theSet`: The character set to examine.
- `theChar`: The UTF-32 character for which to test against the character set.

<a id="return-value"></a>

## Return Value

`true` if `theSet` contains `theChar`, otherwise `false`.

## See Also

### Querying Character Sets

- [CFCharacterSetCreateBitmapRepresentation(\_:\_:)](cfcharactersetcreatebitmaprepresentation%28____%29.md): Creates a new immutable data with the bitmap representation from the given character set.
- [CFCharacterSetHasMemberInPlane(\_:\_:)](cfcharactersethasmemberinplane%28____%29.md): Reports whether or not a character set contains at least one member character in the specified plane.
- [CFCharacterSetIsCharacterMember(\_:\_:)](cfcharactersetischaractermember%28____%29.md): Reports whether or not a given Unicode character is in a character set.
- [CFCharacterSetIsSupersetOfSet(\_:\_:)](cfcharactersetissupersetofset%28____%29.md): Reports whether or not a character set is a superset of another set.

# CFCharacterSetIsLongCharacterMember (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Reports whether or not a given UTF-32 character is in a character set.

## Declaration

```objectivec
extern Boolean CFCharacterSetIsLongCharacterMember(CFCharacterSetRef theSet, UTF32Char theChar);
```

## Parameters

- `theSet`: The character set to examine.
- `theChar`: The UTF-32 character for which to test against the character set.

<a id="return-value"></a>

## Return Value

`true` if `theSet` contains `theChar`, otherwise `false`.

## See Also

### Querying Character Sets

- [CFCharacterSetCreateBitmapRepresentation](cfcharactersetcreatebitmaprepresentation%28____%29.md): Creates a new immutable data with the bitmap representation from the given character set.
- [CFCharacterSetHasMemberInPlane](cfcharactersethasmemberinplane%28____%29.md): Reports whether or not a character set contains at least one member character in the specified plane.
- [CFCharacterSetIsCharacterMember](cfcharactersetischaractermember%28____%29.md): Reports whether or not a given Unicode character is in a character set.
- [CFCharacterSetIsSupersetOfSet](cfcharactersetissupersetofset%28____%29.md): Reports whether or not a character set is a superset of another set.
