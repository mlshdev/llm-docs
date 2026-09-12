> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckoperationgroup/defaultconfiguration](https://developer.apple.com/documentation/cloudkit/ckoperationgroup/defaultconfiguration)

# defaultConfiguration (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The default configuration for operations in the group.

## Declaration

```swift
@NSCopying var defaultConfiguration: CKOperation.Configuration! { get set }
```

<a id="discussion"></a>

## Discussion

If an operation in the group has its own configuration, that configuration’s values override the default configuration’s values. For more information, see [CKOperation.Configuration](../ckoperation/configuration-swift.class.md).

## See Also

### Configuring an Operation Group

- [expectedReceiveSize](expectedreceivesize.md): The estimated size of traffic to download from CloudKit.
- [expectedSendSize](expectedsendsize.md): The estimated size of traffic to upload to CloudKit.
- [name](name.md): The operation group’s name.
- [operationGroupID](operationgroupid.md): The operation group’s unique identifier.
- [quantity](quantity.md): The number of operations in the operation group.
- [CKOperationGroup.TransferSize](transfersize.md): Constants that represent possible data transfer sizes.

# defaultConfiguration (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The default configuration for operations in the group.

## Declaration

```objectivec
@property (copy, null_resettable) CKOperationConfiguration * defaultConfiguration;
```

<a id="discussion"></a>

## Discussion

If an operation in the group has its own configuration, that configuration’s values override the default configuration’s values. For more information, see [CKOperationConfiguration](../ckoperation/configuration-swift.class.md).

## See Also

### Configuring an Operation Group

- [expectedReceiveSize](expectedreceivesize.md): The estimated size of traffic to download from CloudKit.
- [expectedSendSize](expectedsendsize.md): The estimated size of traffic to upload to CloudKit.
- [name](name.md): The operation group’s name.
- [operationGroupID](operationgroupid.md): The operation group’s unique identifier.
- [quantity](quantity.md): The number of operations in the operation group.
- [CKOperationGroupTransferSize](transfersize.md): Constants that represent possible data transfer sizes.
