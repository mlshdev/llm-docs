> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4copysparsetexturemappingoperation/sourceslice](https://developer.apple.com/documentation/metal/mtl4copysparsetexturemappingoperation/sourceslice)

# sourceSlice (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The index of the array slice in the texture source of the copy operation.

## Declaration

```swift
var sourceSlice: Int
```

<a id="discussion"></a>

## Discussion

Provide `0` in this member if the texture type is not an array.

# sourceSlice (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The index of the array slice in the texture source of the copy operation.

## Declaration

```objectivec
NSUInteger sourceSlice;
```

<a id="discussion"></a>

## Discussion

Provide `0` in this member if the texture type is not an array.
