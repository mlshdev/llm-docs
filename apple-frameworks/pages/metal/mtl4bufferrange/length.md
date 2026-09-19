> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4bufferrange/length

# length (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
var length: UInt64
```

<a id="discussion"></a>

## Discussion

Length of the region which begins at the given address. If the length is not known, a value of (uint64_t)-1 represents the range from the given address to the end of the buffer.

# length (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
uint64_t length;
```

<a id="discussion"></a>

## Discussion

Length of the region which begins at the given address. If the length is not known, a value of (uint64_t)-1 represents the range from the given address to the end of the buffer.
