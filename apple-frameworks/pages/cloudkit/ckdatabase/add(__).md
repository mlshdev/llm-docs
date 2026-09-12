> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabase/add(_:)](https://developer.apple.com/documentation/cloudkit/ckdatabase/add(_:))

# add(\_:) (Swift)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Executes the specified operation in the current database.

## Declaration

```swift
func add(_ operation: CKDatabaseOperation)
```

## Parameters

- `operation`: The operation to execute.

<a id="discussion"></a>

## Discussion

Configure the operation fully before you call this method. Prior to the operation executing, CloudKit sets its [database](../ckdatabaseoperation/database.md) property to the current database. The operation executes at the priority and quality of service (QoS) that you specify using the [queuePriority](../../foundation/operation/queuepriority-swift.property.md) and [qualityOfService](../../foundation/operation/qualityofservice.md) properties.

# addOperation: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Executes the specified operation in the current database.

## Declaration

```objectivec
- (void) addOperation:(CKDatabaseOperation *) operation;
```

## Parameters

- `operation`: The operation to execute.

<a id="discussion"></a>

## Discussion

Configure the operation fully before you call this method. Prior to the operation executing, CloudKit sets its [database](../ckdatabaseoperation/database.md) property to the current database. The operation executes at the priority and quality of service (QoS) that you specify using the [queuePriority](../../foundation/operation/queuepriority-swift.property.md) and [qualityOfService](../../foundation/operation/qualityofservice.md) properties.
