> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresourcestatecommandencoder/update(_:)](https://developer.apple.com/documentation/metal/mtlresourcestatecommandencoder/update(_:))

# update(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes a command that instructs the GPU to update a fence, which signals passes waiting on the fence.

## Declaration

```swift
func update(_ fence: any MTLFence)
```

```swift
optional func update(_ fence: any MTLFence)
```

## Parameters

- `fence`: An [MTLFence](../mtlfence.md) instance to update.

<a id="discussion"></a>

## Discussion

Fences maintain order to prevent GPU data hazards as the GPU runs various passes within the same command queue. This encoded command notifies any passes waiting for `fence`.

The GPU driver evaluates the fences that apply to the pass and the commands that depend on those fences when your app commits the enclosing [MTLCommandBuffer](../mtlcommandbuffer.md).

## See Also

### Performing fence operations

- [wait(for:)](wait%28for_%29.md): Encodes a command that instructs the GPU to pause before starting the resource state commands until another pass updates a fence.

# updateFence: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes a command that instructs the GPU to update a fence, which signals passes waiting on the fence.

## Declaration

```objectivec
- (void) updateFence:(id<MTLFence>) fence;
```

## Parameters

- `fence`: An [MTLFence](../mtlfence.md) instance to update.

<a id="discussion"></a>

## Discussion

Fences maintain order to prevent GPU data hazards as the GPU runs various passes within the same command queue. This encoded command notifies any passes waiting for `fence`.

The GPU driver evaluates the fences that apply to the pass and the commands that depend on those fences when your app commits the enclosing [MTLCommandBuffer](../mtlcommandbuffer.md).

## See Also

### Performing fence operations

- [waitForFence:](wait%28for_%29.md): Encodes a command that instructs the GPU to pause before starting the resource state commands until another pass updates a fence.
