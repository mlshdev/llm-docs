> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/fetchchangescontext](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/fetchchangescontext)

# CKSyncEngine.FetchChangesContext

**Framework:** CloudKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

The context of an attempt to fetch changes from the server.

## Declaration

```swift
struct FetchChangesContext
```

<a id="overview"></a>

## Overview

The sync engine might attempt to fetch changes from the server for many reasons. For example, if you call [fetchChanges(\_:)](fetchchanges%28__%29.md), it tries to fetch changes immediately. Or if it receives a push notification, it schedules an automatic sync and fetch changes when the scheduler task runs.

## Topics

### Instance Properties

- [options](fetchchangescontext/options.md): The options being used for this attempt to fetch changes.
- [reason](fetchchangescontext/reason.md): The reason why the sync engine is attempting to fetch changes.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
