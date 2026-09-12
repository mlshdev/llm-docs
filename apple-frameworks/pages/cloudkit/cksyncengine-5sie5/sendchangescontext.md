> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/sendchangescontext](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/sendchangescontext)

# CKSyncEngine.SendChangesContext

**Framework:** CloudKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

The context of an attempt to send changes to the server.

## Declaration

```swift
struct SendChangesContext
```

<a id="overview"></a>

## Overview

A sync engine has two ways to send changes to iCloud — periodically, in cooperation with the system scheduler, and manually, whenever your app invokes the [sendChanges(\_:)](sendchanges%28__%29.md) method. This type provides information about a single attempt to send changes that includes both the reason for the attempt and any additional options in use by the attempt.

## Topics

### Accessing specific attributes

- [reason](sendchangescontext/reason.md): The reason for the send operation.
- [CKSyncEngine.SyncReason](syncreason.md): Describes the reason for a sync operation.
- [CKSyncEngineSyncReason](../cksyncenginesyncreason.md): Describes the reason for a sync operation.
- [options](sendchangescontext/options.md): The options being used for this attempt to send changes.
- [CKSyncEngine.SendChangesOptions](sendchangesoptions.md): A set of options to use when sending changes to the server.

### Debugging the context

- [description](sendchangescontext/description.md): The textual description of the context that’s suitable for logging.

### Default Implementations

- [CustomStringConvertible Implementations](sendchangescontext/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sending changes

- [nextRecordZoneChangeBatch(\_:syncEngine:)](../cksyncenginedelegate-1q7g8/nextrecordzonechangebatch%28__syncengine_%29.md): Asks the delegate to provide the next set of record changes to send to the server.
- [CKSyncEngine.RecordZoneChangeBatch](recordzonechangebatch.md): A type that contains the record changes for a single send operation.
