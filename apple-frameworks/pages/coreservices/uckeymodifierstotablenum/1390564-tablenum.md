> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/uckeymodifierstotablenum/1390564-tablenum](https://developer.apple.com/documentation/coreservices/uckeymodifierstotablenum/1390564-tablenum)

# tableNum (Swift)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An array of unsigned 8-bit integers that map modifier bit combinations to table numbers. These values are indexes into the `keyToCharTableOffsets` array in a [UCKeyToCharTableIndex](../uckeytochartableindex.md)structure; these, in turn, are offsets to the actual key-code-to character tables, which follow the `UCKeyToCharTableIndex` structure in the `'uchr'` resource.

## Declaration

```swift
var tableNum: UInt8
```

# tableNum (Objective-C)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An array of unsigned 8-bit integers that map modifier bit combinations to table numbers. These values are indexes into the `keyToCharTableOffsets` array in a [UCKeyToCharTableIndex](../uckeytochartableindex.md)structure; these, in turn, are offsets to the actual key-code-to character tables, which follow the `UCKeyToCharTableIndex` structure in the `'uchr'` resource.

## Declaration

```objectivec
UInt8 tableNum[1];
```
