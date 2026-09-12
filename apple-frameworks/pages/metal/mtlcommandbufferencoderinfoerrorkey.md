> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbufferencoderinfoerrorkey](https://developer.apple.com/documentation/metal/mtlcommandbufferencoderinfoerrorkey)

# MTLCommandBufferEncoderInfoErrorKey (Swift)

**Framework:** Metal  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A key to a command buffer error’s user information dictionary that retrieves additional information about a GPU’s runtime error.

## Declaration

```swift
let MTLCommandBufferEncoderInfoErrorKey: String
```

<a id="discussion"></a>

## Discussion

You can retrieve an [MTLCommandBufferEncoderInfo](mtlcommandbufferencoderinfo.md) instance from the [userInfo](../foundation/nserror/userinfo.md) dictionary of a command buffer’s [error](mtlcommandbuffer/error.md) property.

## See Also

### Getting error details

- [error](mtlcommandbuffer/error.md): A description of an error when the GPU encounters an issue as it runs the command buffer.
- [errorOptions](mtlcommandbuffer/erroroptions.md): Settings that determine which information the command buffer records about execution errors, and how it does it.
- [MTLCommandBufferEncoderInfo](mtlcommandbufferencoderinfo.md): A container that provides additional information about a runtime failure a GPU encounters as it runs the commands in a command buffer.

# MTLCommandBufferEncoderInfoErrorKey (Objective-C)

**Framework:** Metal  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A key to a command buffer error’s user information dictionary that retrieves additional information about a GPU’s runtime error.

## Declaration

```objectivec
extern NSErrorUserInfoKey const MTLCommandBufferEncoderInfoErrorKey;
```

<a id="discussion"></a>

## Discussion

You can retrieve an [MTLCommandBufferEncoderInfo](mtlcommandbufferencoderinfo.md) instance from the [userInfo](../foundation/nserror/userinfo.md) dictionary of a command buffer’s [error](mtlcommandbuffer/error.md) property.

## See Also

### Getting error details

- [error](mtlcommandbuffer/error.md): A description of an error when the GPU encounters an issue as it runs the command buffer.
- [errorOptions](mtlcommandbuffer/erroroptions.md): Settings that determine which information the command buffer records about execution errors, and how it does it.
- [MTLCommandBufferEncoderInfo](mtlcommandbufferencoderinfo.md): A container that provides additional information about a runtime failure a GPU encounters as it runs the commands in a command buffer.
