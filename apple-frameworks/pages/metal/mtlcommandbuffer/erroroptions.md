> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffer/erroroptions](https://developer.apple.com/documentation/metal/mtlcommandbuffer/erroroptions)

# errorOptions (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Settings that determine which information the command buffer records about execution errors, and how it does it.

## Declaration

```swift
var errorOptions: MTLCommandBufferErrorOption { get }
```

<a id="discussion"></a>

## Discussion

The property reflects the [errorOptions](../mtlcommandbufferdescriptor/erroroptions.md) property of the [MTLCommandBufferDescriptor](../mtlcommandbufferdescriptor.md) instance at the time you create the command buffer.

## See Also

### Getting error details

- [error](error.md): A description of an error when the GPU encounters an issue as it runs the command buffer.
- [MTLCommandBufferEncoderInfo](../mtlcommandbufferencoderinfo.md): A container that provides additional information about a runtime failure a GPU encounters as it runs the commands in a command buffer.
- [MTLCommandBufferEncoderInfoErrorKey](../mtlcommandbufferencoderinfoerrorkey.md): A key to a command buffer error’s user information dictionary that retrieves additional information about a GPU’s runtime error.

# errorOptions (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Settings that determine which information the command buffer records about execution errors, and how it does it.

## Declaration

```objectivec
@property (readonly) MTLCommandBufferErrorOption errorOptions;
```

<a id="discussion"></a>

## Discussion

The property reflects the [errorOptions](../mtlcommandbufferdescriptor/erroroptions.md) property of the [MTLCommandBufferDescriptor](../mtlcommandbufferdescriptor.md) instance at the time you create the command buffer.

## See Also

### Getting error details

- [error](error.md): A description of an error when the GPU encounters an issue as it runs the command buffer.
- [MTLCommandBufferEncoderInfo](../mtlcommandbufferencoderinfo.md): A container that provides additional information about a runtime failure a GPU encounters as it runs the commands in a command buffer.
- [MTLCommandBufferEncoderInfoErrorKey](../mtlcommandbufferencoderinfoerrorkey.md): A key to a command buffer error’s user information dictionary that retrieves additional information about a GPU’s runtime error.
