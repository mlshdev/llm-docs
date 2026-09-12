> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscache/removeobject(forkey:)](https://developer.apple.com/documentation/foundation/nscache/removeobject(forkey:))

# removeObject(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the value of the specified key in the cache.

## Declaration

```swift
func removeObject(forKey key: KeyType)
```

## Parameters

- `key`: The key identifying the value to be removed.

## See Also

### Adding and Removing Cached Values

- [setObject(\_:forKey:)](setobject%28__forkey_%29.md): Sets the value of the specified key in the cache.
- [setObject(\_:forKey:cost:)](setobject%28__forkey_cost_%29.md): Sets the value of the specified key in the cache, and associates the key-value pair with the specified cost.
- [removeAllObjects()](removeallobjects%28%29.md): Empties the cache.

# removeObjectForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the value of the specified key in the cache.

## Declaration

```objectivec
- (void) removeObjectForKey:(KeyType) key;
```

## Parameters

- `key`: The key identifying the value to be removed.

## See Also

### Adding and Removing Cached Values

- [setObject:forKey:](setobject%28__forkey_%29.md): Sets the value of the specified key in the cache.
- [setObject:forKey:cost:](setobject%28__forkey_cost_%29.md): Sets the value of the specified key in the cache, and associates the key-value pair with the specified cost.
- [removeAllObjects](removeallobjects%28%29.md): Empties the cache.
