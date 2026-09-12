> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordvalue-c.protocol](https://developer.apple.com/documentation/cloudkit/ckrecordvalue-c.protocol)

# CKRecordValue

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The protocol that provides strong type-checking for objects that the CloudKit framework stores on the server.

## Declaration

```objectivec
@protocol CKRecordValue <NSObject>
```

<a id="overview"></a>

## Overview

CloudKit supports the following classes that adopt this protocol:

- [NSString](../foundation/nsstring.md)
- [NSNumber](../foundation/nsnumber.md)
- [NSArray](../foundation/nsarray.md)
- [NSDate](../foundation/nsdate.md)
- [NSData](../foundation/nsdata.md)
- [CKReference](ckrecord/reference.md)
- [CKAsset](ckasset.md)
- [CLLocation](../corelocation/cllocation.md)

Don’t adopt this protocol in your custom classes. CloudKit doesn’t support writing custom data types to the server. Attempting to do so results in an error.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [CKAsset](ckasset.md)
- [CKReference](ckrecord/reference.md)

## See Also

### Core objects

- [CKContainer](ckcontainer.md): A conduit to your app’s databases.
- [CKDatabase](ckdatabase.md): An object that represents a collection of record zones and subscriptions.
- [CKOperationGroup](ckoperationgroup.md): An explicit association between two or more operations.
