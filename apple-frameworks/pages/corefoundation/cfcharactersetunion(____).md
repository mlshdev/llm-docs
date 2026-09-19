> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfcharactersetunion(_:_:)

# CFCharacterSetUnion(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Forms the union of two character sets.

## Declaration

```swift
func CFCharacterSetUnion(_ theSet: CFMutableCharacterSet!, _ theOtherSet: CFCharacterSet!)
```

## Parameters

- `theSet`: The source character set, modified by union with `theOtherSet`.
- `theOtherSet`: The character set with which the union is formed.

## See Also

### Logical Operations

- [CFCharacterSetIntersect(\_:\_:)](cfcharactersetintersect%28____%29.md): Forms an intersection of two character sets.
- [CFCharacterSetInvert(\_:)](cfcharactersetinvert%28__%29.md): Inverts the content of a given character set.

# CFCharacterSetUnion (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Forms the union of two character sets.

## Declaration

```objectivec
extern void CFCharacterSetUnion(CFMutableCharacterSetRef theSet, CFCharacterSetRef theOtherSet);
```

## Parameters

- `theSet`: The source character set, modified by union with `theOtherSet`.
- `theOtherSet`: The character set with which the union is formed.

## See Also

### Logical Operations

- [CFCharacterSetIntersect](cfcharactersetintersect%28____%29.md): Forms an intersection of two character sets.
- [CFCharacterSetInvert](cfcharactersetinvert%28__%29.md): Inverts the content of a given character set.
