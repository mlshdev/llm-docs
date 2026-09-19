> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlintersectionfunctionbufferarguments/intersectionfunctionstride

# intersectionFunctionStride (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
var intersectionFunctionStride: UInt64
```

<a id="discussion"></a>

## Discussion

The stride between intersection function entries in intersectionFunctionBuffer. The stride needs to be either 0 or aligned to 8 bytes. Note that only the first 12 bits of this value are used by Metal.

# intersectionFunctionStride (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
uint64_t intersectionFunctionStride;
```

<a id="discussion"></a>

## Discussion

The stride between intersection function entries in intersectionFunctionBuffer. The stride needs to be either 0 or aligned to 8 bytes. Note that only the first 12 bits of this value are used by Metal.
