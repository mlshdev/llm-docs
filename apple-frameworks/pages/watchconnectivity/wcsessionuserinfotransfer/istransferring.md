> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchconnectivity/wcsessionuserinfotransfer/istransferring

# isTransferring (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the data is still being transferred.

## Declaration

```swift
var isTransferring: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the data has not yet been transferred or [false](https://developer.apple.com/documentation/swift/false) if the transfer is complete.

## See Also

### Managing the Transfer Operation

- [cancel()](cancel%28%29.md): Cancels the data transfer.

# transferring (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the data is still being transferred.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isTransferring) BOOL transferring;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the data has not yet been transferred or [false](https://developer.apple.com/documentation/swift/false) if the transfer is complete.

## See Also

### Managing the Transfer Operation

- [cancel](cancel%28%29.md): Cancels the data transfer.
