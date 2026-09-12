> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsubiquitouskeyvaluestore/removeobject(forkey:)](https://developer.apple.com/documentation/foundation/nsubiquitouskeyvaluestore/removeobject(forkey:))

# removeObject(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 9.0+

Removes the value for the specified key from the iCloud key-value store.

## Declaration

```swift
func removeObject(forKey aKey: String)
```

## Parameters

- `aKey`: The key with the value you want to remove.

<a id="discussion"></a>

## Discussion

This method removes the specified key and value from the in-memory version of the store’s data. The next time the system synchronizes the data, it removes the key from the on-disk storage and iCloud server. If the key is not in the key-value store, this method does nothing.

# removeObjectForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 9.0+

Removes the value for the specified key from the iCloud key-value store.

## Declaration

```objectivec
- (void) removeObjectForKey:(NSString *) aKey;
```

## Parameters

- `aKey`: The key with the value you want to remove.

<a id="discussion"></a>

## Discussion

This method removes the specified key and value from the in-memory version of the store’s data. The next time the system synchronizes the data, it removes the key from the on-disk storage and iCloud server. If the key is not in the key-value store, this method does nothing.
