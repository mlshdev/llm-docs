> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcharactersetissupersetofset(_:_:)](https://developer.apple.com/documentation/corefoundation/cfcharactersetissupersetofset(_:_:))

# CFCharacterSetIsSupersetOfSet(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Reports whether or not a character set is a superset of another set.

## Declaration

```swift
func CFCharacterSetIsSupersetOfSet(_ theSet: CFCharacterSet!, _ theOtherset: CFCharacterSet!) -> Bool
```

## Parameters

- `theSet`: The character set to be checked for the membership of `theOtherSet`.
- `theOtherset`: The character set to be checked whether or not it is a subset of `theSet`.

<a id="return-value"></a>

## Return Value

`true` if `theSet` is a superset of `theOtherSet`, otherwise `false`.

## See Also

### Querying Character Sets

- [CFCharacterSetCreateBitmapRepresentation(\_:\_:)](cfcharactersetcreatebitmaprepresentation%28____%29.md): Creates a new immutable data with the bitmap representation from the given character set.
- [CFCharacterSetHasMemberInPlane(\_:\_:)](cfcharactersethasmemberinplane%28____%29.md): Reports whether or not a character set contains at least one member character in the specified plane.
- [CFCharacterSetIsCharacterMember(\_:\_:)](cfcharactersetischaractermember%28____%29.md): Reports whether or not a given Unicode character is in a character set.
- [CFCharacterSetIsLongCharacterMember(\_:\_:)](cfcharactersetislongcharactermember%28____%29.md): Reports whether or not a given UTF-32 character is in a character set.

# CFCharacterSetIsSupersetOfSet (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Reports whether or not a character set is a superset of another set.

## Declaration

```objectivec
extern Boolean CFCharacterSetIsSupersetOfSet(CFCharacterSetRef theSet, CFCharacterSetRef theOtherset);
```

## Parameters

- `theSet`: The character set to be checked for the membership of `theOtherSet`.
- `theOtherset`: The character set to be checked whether or not it is a subset of `theSet`.

<a id="return-value"></a>

## Return Value

`true` if `theSet` is a superset of `theOtherSet`, otherwise `false`.

## See Also

### Querying Character Sets

- [CFCharacterSetCreateBitmapRepresentation](cfcharactersetcreatebitmaprepresentation%28____%29.md): Creates a new immutable data with the bitmap representation from the given character set.
- [CFCharacterSetHasMemberInPlane](cfcharactersethasmemberinplane%28____%29.md): Reports whether or not a character set contains at least one member character in the specified plane.
- [CFCharacterSetIsCharacterMember](cfcharactersetischaractermember%28____%29.md): Reports whether or not a given Unicode character is in a character set.
- [CFCharacterSetIsLongCharacterMember](cfcharactersetislongcharactermember%28____%29.md): Reports whether or not a given UTF-32 character is in a character set.
