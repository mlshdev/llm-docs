> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzfilehandlenetworkdeviceattachment/maximumtransmissionunit](https://developer.apple.com/documentation/virtualization/vzfilehandlenetworkdeviceattachment/maximumtransmissionunit)

# maximumTransmissionUnit (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

An integer value that indicates the maximum transmission unit (MTU) associated with this attachment.

## Declaration

```swift
var maximumTransmissionUnit: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The client side of the associated datagram socket must be properly configured with the appropriate values for `SO_SNDBUF`, and `SO_RCVBUF`. Set these using the `setsockopt(_:_:_:_:_:)` system call. The system expects the value of `SO_RCVBUF` to be at least double the value of `SO_SNDBUF`, and for optimal performance, the recommended value of `SO_RCVBUF` is four times the value of `SO_SNDBUF`.

The default MTU is 1500. The maximum MTU allowed is 65535, and the minimum MTU allowed is 1500. An invalid MTU value results in an invalid virtual machine configuration.

# maximumTransmissionUnit (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

An integer value that indicates the maximum transmission unit (MTU) associated with this attachment.

## Declaration

```objectivec
@property (readwrite) NSInteger maximumTransmissionUnit;
```

<a id="Discussion"></a>

## Discussion

The client side of the associated datagram socket must be properly configured with the appropriate values for `SO_SNDBUF`, and `SO_RCVBUF`. Set these using the `setsockopt(_:_:_:_:_:)` system call. The system expects the value of `SO_RCVBUF` to be at least double the value of `SO_SNDBUF`, and for optimal performance, the recommended value of `SO_RCVBUF` is four times the value of `SO_SNDBUF`.

The default MTU is 1500. The maximum MTU allowed is 65535, and the minimum MTU allowed is 1500. An invalid MTU value results in an invalid virtual machine configuration.
