> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckoperationgroup/transfersize](https://developer.apple.com/documentation/cloudkit/ckoperationgroup/transfersize)

# CKOperationGroup.TransferSize (Swift)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Constants that represent possible data transfer sizes.

## Declaration

```swift
enum TransferSize
```

## Topics

### Transfer Sizes

- [CKOperationGroup.TransferSize.kilobytes](transfersize/kilobytes.md): A transfer size that represents 1 or more kilobytes.
- [CKOperationGroup.TransferSize.megabytes](transfersize/megabytes.md): A transfer size that represents 1 or more megabytes.
- [CKOperationGroup.TransferSize.gigabytes](transfersize/gigabytes.md): A transfer size that represents 1 or more gigabytes.
- [CKOperationGroup.TransferSize.tensOfMegabytes](transfersize/tensofmegabytes.md): A transfer size that represents tens of megabytes.
- [CKOperationGroup.TransferSize.tensOfGigabytes](transfersize/tensofgigabytes.md): A transfer size that represents tens of gigabytes.
- [CKOperationGroup.TransferSize.hundredsOfMegabytes](transfersize/hundredsofmegabytes.md): A transfer size that represents hundreds of megabytes.
- [CKOperationGroup.TransferSize.hundredsOfGigabytes](transfersize/hundredsofgigabytes.md): A transfer size that represents hundreds of gigabytes.
- [CKOperationGroup.TransferSize.unknown](transfersize/unknown.md): An unknown transfer size.

### Initializers

- [init(rawValue:)](transfersize/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring an Operation Group

- [defaultConfiguration](defaultconfiguration.md): The default configuration for operations in the group.
- [expectedReceiveSize](expectedreceivesize.md): The estimated size of traffic to download from CloudKit.
- [expectedSendSize](expectedsendsize.md): The estimated size of traffic to upload to CloudKit.
- [name](name.md): The operation group’s name.
- [operationGroupID](operationgroupid.md): The operation group’s unique identifier.
- [quantity](quantity.md): The number of operations in the operation group.

# CKOperationGroupTransferSize (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Constants that represent possible data transfer sizes.

## Declaration

```objectivec
enum CKOperationGroupTransferSize : NSInteger;
```

## Topics

### Transfer Sizes

- [CKOperationGroupTransferSizeKilobytes](transfersize/kilobytes.md): A transfer size that represents 1 or more kilobytes.
- [CKOperationGroupTransferSizeMegabytes](transfersize/megabytes.md): A transfer size that represents 1 or more megabytes.
- [CKOperationGroupTransferSizeGigabytes](transfersize/gigabytes.md): A transfer size that represents 1 or more gigabytes.
- [CKOperationGroupTransferSizeTensOfMegabytes](transfersize/tensofmegabytes.md): A transfer size that represents tens of megabytes.
- [CKOperationGroupTransferSizeTensOfGigabytes](transfersize/tensofgigabytes.md): A transfer size that represents tens of gigabytes.
- [CKOperationGroupTransferSizeHundredsOfMegabytes](transfersize/hundredsofmegabytes.md): A transfer size that represents hundreds of megabytes.
- [CKOperationGroupTransferSizeHundredsOfGigabytes](transfersize/hundredsofgigabytes.md): A transfer size that represents hundreds of gigabytes.
- [CKOperationGroupTransferSizeUnknown](transfersize/unknown.md): An unknown transfer size.

## See Also

### Configuring an Operation Group

- [defaultConfiguration](defaultconfiguration.md): The default configuration for operations in the group.
- [expectedReceiveSize](expectedreceivesize.md): The estimated size of traffic to download from CloudKit.
- [expectedSendSize](expectedsendsize.md): The estimated size of traffic to upload to CloudKit.
- [name](name.md): The operation group’s name.
- [operationGroupID](operationgroupid.md): The operation group’s unique identifier.
- [quantity](quantity.md): The number of operations in the operation group.
