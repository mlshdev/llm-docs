> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginesendchangescontext](https://developer.apple.com/documentation/cloudkit/cksyncenginesendchangescontext)

# CKSyncEngineSendChangesContext

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The context of an attempt to send changes to the server.

## Declaration

```objectivec
@interface CKSyncEngineSendChangesContext : NSObject
```

<a id="overview"></a>

## Overview

A sync engine has two ways to send changes to iCloud — periodically, in cooperation with the system scheduler, and manually, whenever your app invokes the [sendChangesWithCompletionHandler:](cksyncengine-4b4w9/sendchangeswithcompletionhandler_.md) method. This object provides information about a single attempt to send changes that includes both the reason for the attempt and any additional options in use by the attempt.

## Topics

### Accessing specific attributes

- [reason](cksyncenginesendchangescontext/reason.md): The reason for the send operation.
- [CKSyncEngineSyncReason](cksyncenginesyncreason.md): Describes the reason for a sync operation.
- [options](cksyncenginesendchangescontext/options.md): The additional options for the send operation.
- [CKSyncEngineSendChangesOptions](cksyncenginesendchangesoptions.md): A set of options to use with a send operation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Sending changes

- [syncEngine:nextRecordZoneChangeBatchForContext:](cksyncenginedelegate-3c38p/syncengine_nextrecordzonechangebatchforcontext_.md): Asks the delegate to provide the next set of record changes to send to the server.
- [CKSyncEngineRecordZoneChangeBatch](cksyncenginerecordzonechangebatch.md): An object that contains the record changes for a single send operation.
