> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginedelegate-1q7g8](https://developer.apple.com/documentation/cloudkit/cksyncenginedelegate-1q7g8)

# CKSyncEngineDelegate

**Framework:** CloudKit  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

An interface for providing record data to a sync engine and customizing that engine’s behavior.

## Declaration

```swift
protocol CKSyncEngineDelegate : AnyObject, Sendable
```

<a id="overview"></a>

## Overview

> **Important**

> [CKSyncEngine](cksyncengine-5sie5.md) delivers events serially, which means the delegate doesn’t receive the next event until it finishes handling the current one. To maintain this ordering, don’t call sync engine methods from your delegate that may cause the engine to generate additional events. For example, don’t invoke [fetchChanges(\_:)](cksyncengine-5sie5/fetchchanges%28__%29.md) or [sendChanges(\_:)](cksyncengine-5sie5/sendchanges%28__%29.md) from within [handleEvent(\_:syncEngine:)](cksyncenginedelegate-1q7g8/handleevent%28__syncengine_%29.md).

## Topics

### Handling sync events

- [handleEvent(\_:syncEngine:)](cksyncenginedelegate-1q7g8/handleevent%28__syncengine_%29.md): Tells the delegate to handle the specified sync event.
- [CKSyncEngine.Event](cksyncengine-5sie5/event.md): Describes an event that occurs during a sync operation.
- [CKSyncEngineEventType](cksyncengineeventtype.md): Describes an event that occurs during a sync operation.

### Sending changes

- [nextRecordZoneChangeBatch(\_:syncEngine:)](cksyncenginedelegate-1q7g8/nextrecordzonechangebatch%28__syncengine_%29.md): Asks the delegate to provide the next set of record changes to send to the server.
- [CKSyncEngine.SendChangesContext](cksyncengine-5sie5/sendchangescontext.md): The context of an attempt to send changes to the server.
- [CKSyncEngine.RecordZoneChangeBatch](cksyncengine-5sie5/recordzonechangebatch.md): A type that contains the record changes for a single send operation.

### Instance Methods

- [nextFetchChangesOptions(\_:syncEngine:)](cksyncenginedelegate-1q7g8/nextfetchchangesoptions%28__syncengine_%29.md): Returns a custom set of options for [CKSyncEngine](cksyncengine-5sie5.md) to use while fetching changes.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
