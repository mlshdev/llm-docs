> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/currentpersistenthistorytoken(fromstores:)](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/currentpersistenthistorytoken(fromstores:))

# currentPersistentHistoryToken(fromStores:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Returns a single persistent history token representing all of the specified stores.

## Declaration

```swift
func currentPersistentHistoryToken(fromStores stores: [Any]?) -> NSPersistentHistoryToken?
```

## Parameters

- `stores`: The persistent stores of interest.

<a id="return-value"></a>

## Return Value

A persistent history token, or `nil` if the coordinator can’t create one.

<a id="Discussion"></a>

## Discussion

If you specify `nil` or provide an empty array, the coordinator attempts to create a token for all of its registered stores.

## See Also

### Maintaining a record of changes

- [NSPersistentHistoryTrackingKey](../nspersistenthistorytrackingkey.md): The key you use to enable persistent history tracking.

# currentPersistentHistoryTokenFromStores: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Returns a single persistent history token representing all of the specified stores.

## Declaration

```objectivec
- (NSPersistentHistoryToken *) currentPersistentHistoryTokenFromStores:(NSArray *) stores;
```

## Parameters

- `stores`: The persistent stores of interest.

<a id="return-value"></a>

## Return Value

A persistent history token, or `nil` if the coordinator can’t create one.

<a id="Discussion"></a>

## Discussion

If you specify `nil` or provide an empty array, the coordinator attempts to create a token for all of its registered stores.

## See Also

### Maintaining a record of changes

- [NSPersistentHistoryTrackingKey](../nspersistenthistorytrackingkey.md): The key you use to enable persistent history tracking.
