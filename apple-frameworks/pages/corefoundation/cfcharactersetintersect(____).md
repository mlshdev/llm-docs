> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcharactersetintersect(_:_:)](https://developer.apple.com/documentation/corefoundation/cfcharactersetintersect(_:_:))

# CFCharacterSetIntersect(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Forms an intersection of two character sets.

## Declaration

```swift
func CFCharacterSetIntersect(_ theSet: CFMutableCharacterSet!, _ theOtherSet: CFCharacterSet!)
```

## Parameters

- `theSet`: The source character set, modified by intersection with `theOtherSet`.
- `theOtherSet`: The character set with which the intersection is formed.

## See Also

### Logical Operations

- [CFCharacterSetInvert(\_:)](cfcharactersetinvert%28__%29.md): Inverts the content of a given character set.
- [CFCharacterSetUnion(\_:\_:)](cfcharactersetunion%28____%29.md): Forms the union of two character sets.

# CFCharacterSetIntersect (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Forms an intersection of two character sets.

## Declaration

```objectivec
extern void CFCharacterSetIntersect(CFMutableCharacterSetRef theSet, CFCharacterSetRef theOtherSet);
```

## Parameters

- `theSet`: The source character set, modified by intersection with `theOtherSet`.
- `theOtherSet`: The character set with which the intersection is formed.

## See Also

### Logical Operations

- [CFCharacterSetInvert](cfcharactersetinvert%28__%29.md): Inverts the content of a given character set.
- [CFCharacterSetUnion](cfcharactersetunion%28____%29.md): Forms the union of two character sets.
