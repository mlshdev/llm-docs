> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffererroroption/encoderexecutionstatus](https://developer.apple.com/documentation/metal/mtlcommandbuffererroroption/encoderexecutionstatus)

# encoderExecutionStatus (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An option that instructs a command buffer to save additional details about a GPU runtime error.

## Declaration

```swift
static var encoderExecutionStatus: MTLCommandBufferErrorOption { get }
```

<a id="discussion"></a>

## Discussion

You can set this option to a command buffer descriptor’s [errorOptions](../mtlcommandbufferdescriptor/erroroptions.md) property.

> **Note**

>  Enabling this option can slightly reduce your app’s CPU runtime performance.

# MTLCommandBufferErrorOptionEncoderExecutionStatus (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An option that instructs a command buffer to save additional details about a GPU runtime error.

## Declaration

```objectivec
MTLCommandBufferErrorOptionEncoderExecutionStatus
```

<a id="discussion"></a>

## Discussion

You can set this option to a command buffer descriptor’s [errorOptions](../mtlcommandbufferdescriptor/erroroptions.md) property.

> **Note**

>  Enabling this option can slightly reduce your app’s CPU runtime performance.

## See Also

### Buffer error options

- [MTLCommandBufferErrorOptionNone](mtlcommandbuffererroroptionnone.md): An option that clears a command buffer’s error options.
