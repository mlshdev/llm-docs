> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistenthistorytrackingkey](https://developer.apple.com/documentation/coredata/nspersistenthistorytrackingkey)

# NSPersistentHistoryTrackingKey (Swift)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The key you use to enable persistent history tracking.

## Declaration

```swift
let NSPersistentHistoryTrackingKey: String
```

## Mentioned In

- [Consuming relevant store changes](consuming-relevant-store-changes.md)

<a id="Discussion"></a>

## Discussion

Persistent history tracking is off by default.

## See Also

### Maintaining a record of changes

- [currentPersistentHistoryToken(fromStores:)](nspersistentstorecoordinator/currentpersistenthistorytoken%28fromstores_%29.md): Returns a single persistent history token representing all of the specified stores.

# NSPersistentHistoryTrackingKey (Objective-C)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The key you use to enable persistent history tracking.

## Declaration

```objectivec
extern NSString * const NSPersistentHistoryTrackingKey;
```

## Mentioned In

- [Consuming relevant store changes](consuming-relevant-store-changes.md)

<a id="Discussion"></a>

## Discussion

Persistent history tracking is off by default.

## See Also

### Maintaining a record of changes

- [currentPersistentHistoryTokenFromStores:](nspersistentstorecoordinator/currentpersistenthistorytoken%28fromstores_%29.md): Returns a single persistent history token representing all of the specified stores.
