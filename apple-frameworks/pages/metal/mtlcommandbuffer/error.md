> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffer/error](https://developer.apple.com/documentation/metal/mtlcommandbuffer/error)

# error (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A description of an error when the GPU encounters an issue as it runs the command buffer.

## Declaration

```swift
var error: (any Error)? { get }
```

## Mentioned In

- [Preparing your Metal app to run in the background](../preparing-your-metal-app-to-run-in-the-background.md)

<a id="discussion"></a>

## Discussion

You typically check this property during development to get more information about a runtime issue. The property remains `nil` unless the GPU can’t successfully run the command buffer.

An error’s [userInfo](../../foundation/nserror/userinfo.md) dictionary property contains additional information if the command buffer’s [errorOptions](erroroptions.md) property includes [encoderExecutionStatus](../mtlcommandbuffererroroption/encoderexecutionstatus.md). You can retrieve an [MTLCommandBufferEncoderInfo](../mtlcommandbufferencoderinfo.md) instance from the dictionary by accessing it with [MTLCommandBufferEncoderInfoErrorKey](../mtlcommandbufferencoderinfoerrorkey.md).

## See Also

### Getting error details

- [errorOptions](erroroptions.md): Settings that determine which information the command buffer records about execution errors, and how it does it.
- [MTLCommandBufferEncoderInfo](../mtlcommandbufferencoderinfo.md): A container that provides additional information about a runtime failure a GPU encounters as it runs the commands in a command buffer.
- [MTLCommandBufferEncoderInfoErrorKey](../mtlcommandbufferencoderinfoerrorkey.md): A key to a command buffer error’s user information dictionary that retrieves additional information about a GPU’s runtime error.

# error (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A description of an error when the GPU encounters an issue as it runs the command buffer.

## Declaration

```objectivec
@property (readonly, nullable) NSError * error;
```

## Mentioned In

- [Preparing your Metal app to run in the background](../preparing-your-metal-app-to-run-in-the-background.md)

<a id="discussion"></a>

## Discussion

You typically check this property during development to get more information about a runtime issue. The property remains `nil` unless the GPU can’t successfully run the command buffer.

An error’s [userInfo](../../foundation/nserror/userinfo.md) dictionary property contains additional information if the command buffer’s [errorOptions](erroroptions.md) property includes [MTLCommandBufferErrorOptionEncoderExecutionStatus](../mtlcommandbuffererroroption/encoderexecutionstatus.md). You can retrieve an [MTLCommandBufferEncoderInfo](../mtlcommandbufferencoderinfo.md) instance from the dictionary by accessing it with [MTLCommandBufferEncoderInfoErrorKey](../mtlcommandbufferencoderinfoerrorkey.md).

## See Also

### Getting error details

- [errorOptions](erroroptions.md): Settings that determine which information the command buffer records about execution errors, and how it does it.
- [MTLCommandBufferEncoderInfo](../mtlcommandbufferencoderinfo.md): A container that provides additional information about a runtime failure a GPU encounters as it runs the commands in a command buffer.
- [MTLCommandBufferEncoderInfoErrorKey](../mtlcommandbufferencoderinfoerrorkey.md): A key to a command buffer error’s user information dictionary that retrieves additional information about a GPU’s runtime error.
