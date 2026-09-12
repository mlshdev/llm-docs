> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckoperationgroup](https://developer.apple.com/documentation/cloudkit/ckoperationgroup)

# CKOperationGroup (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An explicit association between two or more operations.

## Declaration

```swift
class CKOperationGroup
```

<a id="overview"></a>

## Overview

In certain situations, you might want to perform several CloudKit operations together. Grouping operations in CloudKit doesn’t ensure atomicity.

For example, when building a Calendar app, you group the following actions:

- Fetch records from CloudKit, which consists of numerous queries that fetch both new records and records with changes.
- Perform incremental fetches of records in response to a push notification.
- Update several records when the user saves a calendar event.

Associate operation groups with operations by setting their [group](ckoperation/group.md) property. Create a new operation group for each distinct user interaction.

## Topics

### Creating an Operation Group

- [init()](ckoperationgroup/init%28%29.md): Creates an operation group.
- [init(coder:)](ckoperationgroup/init%28coder_%29.md): Creates an operation group from a serialized instance.

### Configuring an Operation Group

- [defaultConfiguration](ckoperationgroup/defaultconfiguration.md): The default configuration for operations in the group.
- [expectedReceiveSize](ckoperationgroup/expectedreceivesize.md): The estimated size of traffic to download from CloudKit.
- [expectedSendSize](ckoperationgroup/expectedsendsize.md): The estimated size of traffic to upload to CloudKit.
- [name](ckoperationgroup/name.md): The operation group’s name.
- [operationGroupID](ckoperationgroup/operationgroupid.md): The operation group’s unique identifier.
- [quantity](ckoperationgroup/quantity.md): The number of operations in the operation group.
- [CKOperationGroup.TransferSize](ckoperationgroup/transfersize.md): Constants that represent possible data transfer sizes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Core objects

- [CKContainer](ckcontainer.md): A conduit to your app’s databases.
- [CKDatabase](ckdatabase.md): An object that represents a collection of record zones and subscriptions.

# CKOperationGroup (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An explicit association between two or more operations.

## Declaration

```objectivec
@interface CKOperationGroup : NSObject
```

<a id="overview"></a>

## Overview

In certain situations, you might want to perform several CloudKit operations together. Grouping operations in CloudKit doesn’t ensure atomicity.

For example, when building a Calendar app, you group the following actions:

- Fetch records from CloudKit, which consists of numerous queries that fetch both new records and records with changes.
- Perform incremental fetches of records in response to a push notification.
- Update several records when the user saves a calendar event.

Associate operation groups with operations by setting their [group](ckoperation/group.md) property. Create a new operation group for each distinct user interaction.

## Topics

### Creating an Operation Group

- [init](ckoperationgroup/init%28%29.md): Creates an operation group.
- [initWithCoder:](ckoperationgroup/init%28coder_%29.md): Creates an operation group from a serialized instance.

### Configuring an Operation Group

- [defaultConfiguration](ckoperationgroup/defaultconfiguration.md): The default configuration for operations in the group.
- [expectedReceiveSize](ckoperationgroup/expectedreceivesize.md): The estimated size of traffic to download from CloudKit.
- [expectedSendSize](ckoperationgroup/expectedsendsize.md): The estimated size of traffic to upload to CloudKit.
- [name](ckoperationgroup/name.md): The operation group’s name.
- [operationGroupID](ckoperationgroup/operationgroupid.md): The operation group’s unique identifier.
- [quantity](ckoperationgroup/quantity.md): The number of operations in the operation group.
- [CKOperationGroupTransferSize](ckoperationgroup/transfersize.md): Constants that represent possible data transfer sizes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Core objects

- [CKContainer](ckcontainer.md): A conduit to your app’s databases.
- [CKDatabase](ckdatabase.md): An object that represents a collection of record zones and subscriptions.
- [CKRecordValue](ckrecordvalue-c.protocol.md): The protocol that provides strong type-checking for objects that the CloudKit framework stores on the server.
