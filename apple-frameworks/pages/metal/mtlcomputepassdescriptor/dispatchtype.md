> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepassdescriptor/dispatchtype](https://developer.apple.com/documentation/metal/mtlcomputepassdescriptor/dispatchtype)

# dispatchType (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The strategy for dispatching any compute commands encoded in the compute pass.

## Declaration

```swift
var dispatchType: MTLDispatchType { get set }
```

<a id="discussion"></a>

## Discussion

The default dispatch type is [MTLDispatchType.serial](../mtldispatchtype/serial.md).

# dispatchType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The strategy for dispatching any compute commands encoded in the compute pass.

## Declaration

```objectivec
@property (nonatomic) MTLDispatchType dispatchType;
```

<a id="discussion"></a>

## Discussion

The default dispatch type is [MTLDispatchTypeSerial](../mtldispatchtype/serial.md).
