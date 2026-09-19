> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/uckeytochartableindex/1390388-keytochartableoffsets

# keyToCharTableOffsets (Swift)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An array of offsets from the beginning of the `'uchr'` resource to each of the `UCKeyOutput` key-code-to-character tables in the `keyToCharData[]` array that follows this structure in the resource.

## Declaration

```swift
var keyToCharTableOffsets: UInt32
```

# keyToCharTableOffsets (Objective-C)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An array of offsets from the beginning of the `'uchr'` resource to each of the `UCKeyOutput` key-code-to-character tables in the `keyToCharData[]` array that follows this structure in the resource.

## Declaration

```objectivec
UInt32 keyToCharTableOffsets[1];
```
