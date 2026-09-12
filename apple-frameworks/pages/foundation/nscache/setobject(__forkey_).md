> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscache/setobject(_:forkey:)](https://developer.apple.com/documentation/foundation/nscache/setobject(_:forkey:))

# setObject(\_:forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the value of the specified key in the cache.

## Declaration

```swift
func setObject(_ obj: ObjectType, forKey key: KeyType)
```

## Parameters

- `obj`: The object to be stored in the cache.
- `key`: The key with which to associate the value.

<a id="Discussion"></a>

## Discussion

Unlike an `NSMutableDictionary` object, a cache does not copy the key objects that are put into it.

## See Also

### Adding and Removing Cached Values

- [setObject(\_:forKey:cost:)](setobject%28__forkey_cost_%29.md): Sets the value of the specified key in the cache, and associates the key-value pair with the specified cost.
- [removeObject(forKey:)](removeobject%28forkey_%29.md): Removes the value of the specified key in the cache.
- [removeAllObjects()](removeallobjects%28%29.md): Empties the cache.

# setObject:forKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the value of the specified key in the cache.

## Declaration

```objectivec
- (void) setObject:(ObjectType) obj forKey:(KeyType) key;
```

## Parameters

- `obj`: The object to be stored in the cache.
- `key`: The key with which to associate the value.

<a id="Discussion"></a>

## Discussion

Unlike an `NSMutableDictionary` object, a cache does not copy the key objects that are put into it.

## See Also

### Adding and Removing Cached Values

- [setObject:forKey:cost:](setobject%28__forkey_cost_%29.md): Sets the value of the specified key in the cache, and associates the key-value pair with the specified cost.
- [removeObjectForKey:](removeobject%28forkey_%29.md): Removes the value of the specified key in the cache.
- [removeAllObjects](removeallobjects%28%29.md): Empties the cache.
