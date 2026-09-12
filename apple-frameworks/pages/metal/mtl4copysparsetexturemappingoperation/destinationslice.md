> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4copysparsetexturemappingoperation/destinationslice](https://developer.apple.com/documentation/metal/mtl4copysparsetexturemappingoperation/destinationslice)

# destinationSlice (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The index of the array slice in the destination texture to copy into.

## Declaration

```swift
var destinationSlice: Int
```

<a id="discussion"></a>

## Discussion

Provide `0` in this member if the texture type is not an array.

# destinationSlice (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The index of the array slice in the destination texture to copy into.

## Declaration

```objectivec
NSUInteger destinationSlice;
```

<a id="discussion"></a>

## Discussion

Provide `0` in this member if the texture type is not an array.
