> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4updatesparsetexturemappingoperation/textureslice](https://developer.apple.com/documentation/metal/mtl4updatesparsetexturemappingoperation/textureslice)

# textureSlice (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The index of the array slice in the texture to update.

## Declaration

```swift
var textureSlice: Int
```

<a id="discussion"></a>

## Discussion

Provide `0` in this member if the texture type is not an array.

# textureSlice (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The index of the array slice in the texture to update.

## Declaration

```objectivec
NSUInteger textureSlice;
```

<a id="discussion"></a>

## Discussion

Provide `0` in this member if the texture type is not an array.
