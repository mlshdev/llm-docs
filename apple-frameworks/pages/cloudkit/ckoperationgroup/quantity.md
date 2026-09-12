> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckoperationgroup/quantity](https://developer.apple.com/documentation/cloudkit/ckoperationgroup/quantity)

# quantity (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The number of operations in the operation group.

## Declaration

```swift
var quantity: Int { get set }
```

<a id="discussion"></a>

## Discussion

This property shows the number of operations that you expect to be in this operation group. It’s the developer’s responsibility to set this value.

## See Also

### Configuring an Operation Group

- [defaultConfiguration](defaultconfiguration.md): The default configuration for operations in the group.
- [expectedReceiveSize](expectedreceivesize.md): The estimated size of traffic to download from CloudKit.
- [expectedSendSize](expectedsendsize.md): The estimated size of traffic to upload to CloudKit.
- [name](name.md): The operation group’s name.
- [operationGroupID](operationgroupid.md): The operation group’s unique identifier.
- [CKOperationGroup.TransferSize](transfersize.md): Constants that represent possible data transfer sizes.

# quantity (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The number of operations in the operation group.

## Declaration

```objectivec
@property (assign) NSUInteger quantity;
```

<a id="discussion"></a>

## Discussion

This property shows the number of operations that you expect to be in this operation group. It’s the developer’s responsibility to set this value.

## See Also

### Configuring an Operation Group

- [defaultConfiguration](defaultconfiguration.md): The default configuration for operations in the group.
- [expectedReceiveSize](expectedreceivesize.md): The estimated size of traffic to download from CloudKit.
- [expectedSendSize](expectedsendsize.md): The estimated size of traffic to upload to CloudKit.
- [name](name.md): The operation group’s name.
- [operationGroupID](operationgroupid.md): The operation group’s unique identifier.
- [CKOperationGroupTransferSize](transfersize.md): Constants that represent possible data transfer sizes.
