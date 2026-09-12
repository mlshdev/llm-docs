> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltriangletessellationfactorshalf/edgetessellationfactor](https://developer.apple.com/documentation/metal/mtltriangletessellationfactorshalf/edgetessellationfactor)

# edgeTessellationFactor (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The edge tessellation factors, with each index value providing the tessellation factor for a particular edge.

## Declaration

```swift
var edgeTessellationFactor: (UInt16, UInt16, UInt16)
```

<a id="discussion"></a>

## Discussion

- The value in index 0 provides the tessellation factor for the upper-left edge of the patch.
- The value in index 1 provides the tessellation factor for the bottom edge of the patch.
- The value in index 2 provides the tessellation factor for the upper-right edge of the patch.

# edgeTessellationFactor (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The edge tessellation factors, with each index value providing the tessellation factor for a particular edge.

## Declaration

```objectivec
uint16_t edgeTessellationFactor[3];
```

<a id="discussion"></a>

## Discussion

- The value in index 0 provides the tessellation factor for the upper-left edge of the patch.
- The value in index 1 provides the tessellation factor for the bottom edge of the patch.
- The value in index 2 provides the tessellation factor for the upper-right edge of the patch.
