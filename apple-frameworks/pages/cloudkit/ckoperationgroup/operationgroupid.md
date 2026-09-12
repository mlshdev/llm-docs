> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckoperationgroup/operationgroupid](https://developer.apple.com/documentation/cloudkit/ckoperationgroup/operationgroupid)

# operationGroupID (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The operation group’s unique identifier.

## Declaration

```swift
var operationGroupID: String { get }
```

<a id="discussion"></a>

## Discussion

The framework generates this value and it’s unique to this operation group. The system sends this identifier to CloudKit, which can use it to identify server-side logs for [CKOperationGroup](../ckoperationgroup.md).

## See Also

### Configuring an Operation Group

- [defaultConfiguration](defaultconfiguration.md): The default configuration for operations in the group.
- [expectedReceiveSize](expectedreceivesize.md): The estimated size of traffic to download from CloudKit.
- [expectedSendSize](expectedsendsize.md): The estimated size of traffic to upload to CloudKit.
- [name](name.md): The operation group’s name.
- [quantity](quantity.md): The number of operations in the operation group.
- [CKOperationGroup.TransferSize](transfersize.md): Constants that represent possible data transfer sizes.

# operationGroupID (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The operation group’s unique identifier.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * operationGroupID;
```

<a id="discussion"></a>

## Discussion

The framework generates this value and it’s unique to this operation group. The system sends this identifier to CloudKit, which can use it to identify server-side logs for [CKOperationGroup](../ckoperationgroup.md).

## See Also

### Configuring an Operation Group

- [defaultConfiguration](defaultconfiguration.md): The default configuration for operations in the group.
- [expectedReceiveSize](expectedreceivesize.md): The estimated size of traffic to download from CloudKit.
- [expectedSendSize](expectedsendsize.md): The estimated size of traffic to upload to CloudKit.
- [name](name.md): The operation group’s name.
- [quantity](quantity.md): The number of operations in the operation group.
- [CKOperationGroupTransferSize](transfersize.md): Constants that represent possible data transfer sizes.
