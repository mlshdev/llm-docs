> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/uctextbreaktype](https://developer.apple.com/documentation/coreservices/uctextbreaktype)

# UCTextBreakType (Swift)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specifies kinds of text boundaries.

## Declaration

```swift
typealias UCTextBreakType = UInt32
```

## Topics

### Constants

- [kUCTextBreakCharMask](kuctextbreakcharmask.md): If the bit specified by this mask is set, boundaries of characters may be located (with surrogate pairs treated as a single character).
- [kUCTextBreakClusterMask](kuctextbreakclustermask.md)
- [kUCTextBreakWordMask](kuctextbreakwordmask.md): If the bit specified by this mask is set, boundaries of words may be located. This can be used to determine what to highlight as the result of a double-click.
- [kUCTextBreakLineMask](kuctextbreaklinemask.md): If the bit specified by this mask is set, potential line breaks may be located.

# UCTextBreakType (Objective-C)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specifies kinds of text boundaries.

## Declaration

```objectivec
typedef UInt32 UCTextBreakType;
```

## Topics

### Constants

- [kUCTextBreakCharMask](1390433-anonymous/kuctextbreakcharmask.md): If the bit specified by this mask is set, boundaries of characters may be located (with surrogate pairs treated as a single character).
- [kUCTextBreakClusterMask](1390433-anonymous/kuctextbreakclustermask.md)
- [kUCTextBreakWordMask](1390433-anonymous/kuctextbreakwordmask.md): If the bit specified by this mask is set, boundaries of words may be located. This can be used to determine what to highlight as the result of a double-click.
- [kUCTextBreakLineMask](1390433-anonymous/kuctextbreaklinemask.md): If the bit specified by this mask is set, potential line breaks may be located.
