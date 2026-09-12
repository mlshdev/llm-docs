> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcharactersethasmemberinplane(_:_:)](https://developer.apple.com/documentation/corefoundation/cfcharactersethasmemberinplane(_:_:))

# CFCharacterSetHasMemberInPlane(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Reports whether or not a character set contains at least one member character in the specified plane.

## Declaration

```swift
func CFCharacterSetHasMemberInPlane(_ theSet: CFCharacterSet!, _ thePlane: CFIndex) -> Bool
```

## Parameters

- `theSet`: The character set to examine.
- `thePlane`: The plane number to be checked for the membership. The valid value range is from 0 to 16. If the value is outside of the valid plane number range, the behavior is undefined.

<a id="return-value"></a>

## Return Value

`true` if at least one member character is in the specified plane, otherwise `false`.

## See Also

### Querying Character Sets

- [CFCharacterSetCreateBitmapRepresentation(\_:\_:)](cfcharactersetcreatebitmaprepresentation%28____%29.md): Creates a new immutable data with the bitmap representation from the given character set.
- [CFCharacterSetIsCharacterMember(\_:\_:)](cfcharactersetischaractermember%28____%29.md): Reports whether or not a given Unicode character is in a character set.
- [CFCharacterSetIsLongCharacterMember(\_:\_:)](cfcharactersetislongcharactermember%28____%29.md): Reports whether or not a given UTF-32 character is in a character set.
- [CFCharacterSetIsSupersetOfSet(\_:\_:)](cfcharactersetissupersetofset%28____%29.md): Reports whether or not a character set is a superset of another set.

# CFCharacterSetHasMemberInPlane (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Reports whether or not a character set contains at least one member character in the specified plane.

## Declaration

```objectivec
extern Boolean CFCharacterSetHasMemberInPlane(CFCharacterSetRef theSet, CFIndex thePlane);
```

## Parameters

- `theSet`: The character set to examine.
- `thePlane`: The plane number to be checked for the membership. The valid value range is from 0 to 16. If the value is outside of the valid plane number range, the behavior is undefined.

<a id="return-value"></a>

## Return Value

`true` if at least one member character is in the specified plane, otherwise `false`.

## See Also

### Querying Character Sets

- [CFCharacterSetCreateBitmapRepresentation](cfcharactersetcreatebitmaprepresentation%28____%29.md): Creates a new immutable data with the bitmap representation from the given character set.
- [CFCharacterSetIsCharacterMember](cfcharactersetischaractermember%28____%29.md): Reports whether or not a given Unicode character is in a character set.
- [CFCharacterSetIsLongCharacterMember](cfcharactersetislongcharactermember%28____%29.md): Reports whether or not a given UTF-32 character is in a character set.
- [CFCharacterSetIsSupersetOfSet](cfcharactersetissupersetofset%28____%29.md): Reports whether or not a character set is a superset of another set.
