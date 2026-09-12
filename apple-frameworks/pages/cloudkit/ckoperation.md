> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckoperation](https://developer.apple.com/documentation/cloudkit/ckoperation)

# CKOperation (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The abstract base class for all operations that execute in a database.

## Declaration

```swift
class CKOperation
```

## Mentioned In

- [Encrypting User Data](encrypting-user-data.md)
- [Deciding whether CloudKit is right for your app](deciding-whether-cloudkit-is-right-for-your-app.md)

<a id="overview"></a>

## Overview

All CloudKit operations descend from `CKOperation`, which provides the infrastructure for executing tasks in one of your app’s containers. Don’t subclass or create instances of this class directly. Instead, create instances of one of its concrete subclasses.

Use the properties of this class to configure the behavior of the operation before submitting it to a queue or executing it directly. CloudKit operations involve communicating with the iCloud servers to send and receive data. You can use the properties of this class to configure the behavior of those network requests to ensure the best performance for your app.

> **Important**

> `CKOperation` objects have a default quality of service level of [QualityOfService.default](../foundation/qualityofservice/default.md) (see [qualityOfService](../foundation/operation/qualityofservice.md)). Operations with this service level are discretionary, and the system schedules them for an optimal time according to battery level and other factors. On iPhone, discretionary activities pause when the device is in Low Power Mode. For information about quality of service levels, see [Prioritize Work with Quality of Service Classes](https://developer.apple.com/library/archive/documentation/Performance/Conceptual/EnergyGuide-iOS/PrioritizeWorkWithQoS.html#//apple_ref/doc/uid/TP40015243-CH39) in [Energy Efficiency Guide for iOS Apps](https://developer.apple.com/library/archive/documentation/Performance/Conceptual/EnergyGuide-iOS/index.html#//apple_ref/doc/uid/TP40015243) and [Prioritize Work at the Task Level](https://developer.apple.com/library/archive/documentation/Performance/Conceptual/power_efficiency_guidelines_osx/PrioritizeWorkAtTheTaskLevel.html#//apple_ref/doc/uid/TP40013929-CH35) in [Energy Efficiency Guide for Mac Apps](https://developer.apple.com/library/archive/documentation/Performance/Conceptual/power_efficiency_guidelines_osx/index.html#//apple_ref/doc/uid/TP40013929).

<a id="Long-Lived-Operations"></a>

### Long-Lived Operations

A *long-lived operation* is an operation that continues to run after the user closes the app. To specify a long-lived operation, set [isLongLived](ckoperation/islonglived.md) to [true](https://developer.apple.com/documentation/swift/true), provide a completion handler, and execute the operation. To get the identifiers of all running long-lived operations, use the [allLongLivedOperationIDs()](ckcontainer/alllonglivedoperationids%28%29.md) method that [CKContainer](ckcontainer.md) provides. To get a specific long-lived operation, use the [longLivedOperation(for:)](ckcontainer/longlivedoperation%28for_%29.md) method. Make sure you set the completion handler of a long-lived operation before you execute it so that the system can notify you when it completes and you can process the results. Do not execute an operation, change it to long-lived, and execute it again as a long-lived operation.

**Swift**

```swift
container.fetchAllLongLivedOperationIDs(completionHandler: { (operationIDs, error) in
    if let error = error {
        print("Error fetching long lived operations: \(error)")
        // Handle error
        return
    }
    guard let identifiers = operationIDs else { return }
    for operationID in identifiers {
        container.fetchLongLivedOperation(withID: operationID, completionHandler: { (operation, error) in
            if let error = error {
                print("Error fetching operation: \(operationID)\n\(error)")
                // Handle error
                return
            }
            guard let operation = operation else { return }
            // Add callback handlers to operation
            container.add(operation)
        })
    }
})
```

**Objective-C**

```objc
[container fetchAllLongLivedOperationIDsWithCompletionHandler:^(NSArray<NSString *> *_Nullable operationIDs, NSError *_Nullable error) {
    if (error) {
        // Handle error
        return
    }
    for (NSString *operationID in operationIDs) {
        [container fetchLongLivedOperationWithID:operationID completionHandler:^(CKOperation *_Nullable operation, NSError *_Nullable error) {
            if (error) {
                // Handle error
                return
            }
            // Add callback handlers to operation
            [container addOperation:operation];
        }];
    }
}];
```

The following is the typical life cycle of a long-lived operation:

1. The app creates a long-lived operation and executes it. The daemon starts saving and sending the callbacks to the running app.
2. The app exits. The daemon continues running the long-lived operation and saves the callbacks.
3. The app launches and fetches the long-lived operation. If the operation is running or if it completed within the previous 24 hours, the daemon returns a proxy for the long-lived operation. If the operation completed more than 24 hours previously, the daemon may stop returning it in fetch requests.
4. The app runs the long-lived operation again. The daemon sends the app all the saved callbacks (it doesn’t actually rerun the operation), and continues saving the callbacks and sending them to the running app.
5. The app receives the completion callback or the app cancels the operation. The daemon stops including the operation in future fetch results.

## Topics

### Creating an Operation

- [init()](ckoperation/init%28%29.md): Creates an operation.

### Identifying the Operation

- [operationID](ckoperation/operationid-8auuc.md): A unique identifier for a long-lived operation.
- [CKOperation.ID](ckoperation/id.md): A type that represents the ID of an operation.

### Managing the Operation’s Configuration

- [configuration](ckoperation/configuration-swift.property.md): The operation’s configuration.
- [CKOperation.Configuration](ckoperation/configuration-swift.class.md): An object that describes how a CloudKit operation behaves.
- [group](ckoperation/group.md): The operation’s group.
- [longLivedOperationWasPersistedBlock](ckoperation/longlivedoperationwaspersistedblock.md): The closure to execute when the server begins to store callbacks for the long-lived operation.

### Deprecated

- [Deprecated Symbols](ckoperation-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [Operation](../foundation/operation.md)

### Inherited By

- [CKAcceptSharesOperation](ckacceptsharesoperation.md)
- [CKDatabaseOperation](ckdatabaseoperation.md)
- [CKDiscoverAllUserIdentitiesOperation](ckdiscoveralluseridentitiesoperation.md)
- [CKDiscoverUserIdentitiesOperation](ckdiscoveruseridentitiesoperation.md)
- [CKFetchShareMetadataOperation](ckfetchsharemetadataoperation.md)
- [CKFetchShareParticipantsOperation](ckfetchshareparticipantsoperation.md)
- [CKShareRequestAccessOperation](cksharerequestaccessoperation.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CKOperation (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The abstract base class for all operations that execute in a database.

## Declaration

```objectivec
@interface CKOperation : NSOperation
```

## Mentioned In

- [Encrypting User Data](encrypting-user-data.md)
- [Deciding whether CloudKit is right for your app](deciding-whether-cloudkit-is-right-for-your-app.md)

<a id="overview"></a>

## Overview

All CloudKit operations descend from `CKOperation`, which provides the infrastructure for executing tasks in one of your app’s containers. Don’t subclass or create instances of this class directly. Instead, create instances of one of its concrete subclasses.

Use the properties of this class to configure the behavior of the operation before submitting it to a queue or executing it directly. CloudKit operations involve communicating with the iCloud servers to send and receive data. You can use the properties of this class to configure the behavior of those network requests to ensure the best performance for your app.

> **Important**

> `CKOperation` objects have a default quality of service level of [NSQualityOfServiceDefault](../foundation/qualityofservice/default.md) (see [qualityOfService](../foundation/operation/qualityofservice.md)). Operations with this service level are discretionary, and the system schedules them for an optimal time according to battery level and other factors. On iPhone, discretionary activities pause when the device is in Low Power Mode. For information about quality of service levels, see [Prioritize Work with Quality of Service Classes](https://developer.apple.com/library/archive/documentation/Performance/Conceptual/EnergyGuide-iOS/PrioritizeWorkWithQoS.html#//apple_ref/doc/uid/TP40015243-CH39) in [Energy Efficiency Guide for iOS Apps](https://developer.apple.com/library/archive/documentation/Performance/Conceptual/EnergyGuide-iOS/index.html#//apple_ref/doc/uid/TP40015243) and [Prioritize Work at the Task Level](https://developer.apple.com/library/archive/documentation/Performance/Conceptual/power_efficiency_guidelines_osx/PrioritizeWorkAtTheTaskLevel.html#//apple_ref/doc/uid/TP40013929-CH35) in [Energy Efficiency Guide for Mac Apps](https://developer.apple.com/library/archive/documentation/Performance/Conceptual/power_efficiency_guidelines_osx/index.html#//apple_ref/doc/uid/TP40013929).

<a id="Long-Lived-Operations"></a>

### Long-Lived Operations

A *long-lived operation* is an operation that continues to run after the user closes the app. To specify a long-lived operation, set [longLived](ckoperation/islonglived.md) to [true](https://developer.apple.com/documentation/swift/true), provide a completion handler, and execute the operation. To get the identifiers of all running long-lived operations, use the [allLongLivedOperationIDs()](ckcontainer/alllonglivedoperationids%28%29.md) method that [CKContainer](ckcontainer.md) provides. To get a specific long-lived operation, use the [longLivedOperation(for:)](ckcontainer/longlivedoperation%28for_%29.md) method. Make sure you set the completion handler of a long-lived operation before you execute it so that the system can notify you when it completes and you can process the results. Do not execute an operation, change it to long-lived, and execute it again as a long-lived operation.

**Swift**

```swift
container.fetchAllLongLivedOperationIDs(completionHandler: { (operationIDs, error) in
    if let error = error {
        print("Error fetching long lived operations: \(error)")
        // Handle error
        return
    }
    guard let identifiers = operationIDs else { return }
    for operationID in identifiers {
        container.fetchLongLivedOperation(withID: operationID, completionHandler: { (operation, error) in
            if let error = error {
                print("Error fetching operation: \(operationID)\n\(error)")
                // Handle error
                return
            }
            guard let operation = operation else { return }
            // Add callback handlers to operation
            container.add(operation)
        })
    }
})
```

**Objective-C**

```objc
[container fetchAllLongLivedOperationIDsWithCompletionHandler:^(NSArray<NSString *> *_Nullable operationIDs, NSError *_Nullable error) {
    if (error) {
        // Handle error
        return
    }
    for (NSString *operationID in operationIDs) {
        [container fetchLongLivedOperationWithID:operationID completionHandler:^(CKOperation *_Nullable operation, NSError *_Nullable error) {
            if (error) {
                // Handle error
                return
            }
            // Add callback handlers to operation
            [container addOperation:operation];
        }];
    }
}];
```

The following is the typical life cycle of a long-lived operation:

1. The app creates a long-lived operation and executes it. The daemon starts saving and sending the callbacks to the running app.
2. The app exits. The daemon continues running the long-lived operation and saves the callbacks.
3. The app launches and fetches the long-lived operation. If the operation is running or if it completed within the previous 24 hours, the daemon returns a proxy for the long-lived operation. If the operation completed more than 24 hours previously, the daemon may stop returning it in fetch requests.
4. The app runs the long-lived operation again. The daemon sends the app all the saved callbacks (it doesn’t actually rerun the operation), and continues saving the callbacks and sending them to the running app.
5. The app receives the completion callback or the app cancels the operation. The daemon stops including the operation in future fetch results.

## Topics

### Creating an Operation

- [init](ckoperation/init%28%29.md): Creates an operation.

### Identifying the Operation

- [operationID](ckoperation/operationid-3eujz.md): A unique identifier for a long-lived operation.
- [CKOperationID](ckoperationid.md): A type that represents the ID of an operation.

### Managing the Operation’s Configuration

- [configuration](ckoperation/configuration-swift.property.md): The operation’s configuration.
- [CKOperationConfiguration](ckoperation/configuration-swift.class.md): An object that describes how a CloudKit operation behaves.
- [group](ckoperation/group.md): The operation’s group.
- [longLivedOperationWasPersistedBlock](ckoperation/longlivedoperationwaspersistedblock.md): The closure to execute when the server begins to store callbacks for the long-lived operation.

### Deprecated

- [Deprecated Symbols](ckoperation-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [NSOperation](../foundation/operation.md)

### Inherited By

- [CKAcceptSharesOperation](ckacceptsharesoperation.md)
- [CKDatabaseOperation](ckdatabaseoperation.md)
- [CKDiscoverAllUserIdentitiesOperation](ckdiscoveralluseridentitiesoperation.md)
- [CKDiscoverUserIdentitiesOperation](ckdiscoveruseridentitiesoperation.md)
- [CKFetchShareMetadataOperation](ckfetchsharemetadataoperation.md)
- [CKFetchShareParticipantsOperation](ckfetchshareparticipantsoperation.md)
- [CKShareRequestAccessOperation](cksharerequestaccessoperation.md)
