> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimage/setpurgeablestate(_:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimage/setpurgeablestate(_:))

# setPurgeableState(\_:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Set (or query) the purgeable state of the image’s underlying texture.

## Declaration

```swift
func setPurgeableState(_ state: MPSPurgeableState) -> MPSPurgeableState
```

## Parameters

- `state`: The desired purgeable state of the image’s underlying texture.

<a id="return-value"></a>

## Return Value

Returns the prior purgeable state of the image’s underlying texture.

<a id="Discussion"></a>

## Discussion

This method behaves the same as the [setPurgeableState(\_:)](../../metal/mtlresource/setpurgeablestate%28__%29.md) method of the [MTLResource](../../metal/mtlresource.md) class, except that the state might be [MPSPurgeableState.allocationDeferred](../mpspurgeablestate/allocationdeferred.md), which means there is no underlying texture to mark as volatile or non-volatile. Attempts to set a purgeable state on [MTLTexture](../../metal/mtltexture.md) objects that have not yet been allocated will be ignored.

## See Also

### Methods

- [MPSPurgeableState](../mpspurgeablestate.md): The purgeable state of an image’s underlying texture.

# setPurgeableState: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Set (or query) the purgeable state of the image’s underlying texture.

## Declaration

```objectivec
- (MPSPurgeableState) setPurgeableState:(MPSPurgeableState) state;
```

## Parameters

- `state`: The desired purgeable state of the image’s underlying texture.

<a id="return-value"></a>

## Return Value

Returns the prior purgeable state of the image’s underlying texture.

<a id="Discussion"></a>

## Discussion

This method behaves the same as the [setPurgeableState:](../../metal/mtlresource/setpurgeablestate%28__%29.md) method of the [MTLResource](../../metal/mtlresource.md) class, except that the state might be [MPSPurgeableStateAllocationDeferred](../mpspurgeablestate/allocationdeferred.md), which means there is no underlying texture to mark as volatile or non-volatile. Attempts to set a purgeable state on [MTLTexture](../../metal/mtltexture.md) objects that have not yet been allocated will be ignored.

## See Also

### Methods

- [MPSPurgeableState](../mpspurgeablestate.md): The purgeable state of an image’s underlying texture.
