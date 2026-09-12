> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckoperationgroup/expectedsendsize](https://developer.apple.com/documentation/cloudkit/ckoperationgroup/expectedsendsize)

# expectedSendSize (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The estimated size of traffic to upload to CloudKit.

## Declaration

```swift
var expectedSendSize: CKOperationGroup.TransferSize { get set }
```

<a id="discussion"></a>

## Discussion

This property informs the system about the amount of data your app can transfer. An order-of-magnitude estimate is better than no estimate, and accuracy helps performance. The system checks this value when it schedules discretionary network requests.

## See Also

### Configuring an Operation Group

- [defaultConfiguration](defaultconfiguration.md): The default configuration for operations in the group.
- [expectedReceiveSize](expectedreceivesize.md): The estimated size of traffic to download from CloudKit.
- [name](name.md): The operation group’s name.
- [operationGroupID](operationgroupid.md): The operation group’s unique identifier.
- [quantity](quantity.md): The number of operations in the operation group.
- [CKOperationGroup.TransferSize](transfersize.md): Constants that represent possible data transfer sizes.

# expectedSendSize (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The estimated size of traffic to upload to CloudKit.

## Declaration

```objectivec
@property (assign) CKOperationGroupTransferSize expectedSendSize;
```

<a id="discussion"></a>

## Discussion

This property informs the system about the amount of data your app can transfer. An order-of-magnitude estimate is better than no estimate, and accuracy helps performance. The system checks this value when it schedules discretionary network requests.

## See Also

### Configuring an Operation Group

- [defaultConfiguration](defaultconfiguration.md): The default configuration for operations in the group.
- [expectedReceiveSize](expectedreceivesize.md): The estimated size of traffic to download from CloudKit.
- [name](name.md): The operation group’s name.
- [operationGroupID](operationgroupid.md): The operation group’s unique identifier.
- [quantity](quantity.md): The number of operations in the operation group.
- [CKOperationGroupTransferSize](transfersize.md): Constants that represent possible data transfer sizes.
