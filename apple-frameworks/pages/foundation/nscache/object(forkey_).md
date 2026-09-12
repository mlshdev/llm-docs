> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscache/object(forkey:)](https://developer.apple.com/documentation/foundation/nscache/object(forkey:))

# object(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value associated with a given key.

## Declaration

```swift
func object(forKey key: KeyType) -> ObjectType?
```

## Parameters

- `key`: An object identifying the value.

<a id="return-value"></a>

## Return Value

The value associated with `key`, or `nil` if no value is associated with `key`.

## See Also

### Related Documentation

- [removeObject(forKey:)](removeobject%28forkey_%29.md): Removes the value of the specified key in the cache.
- [setObject(\_:forKey:cost:)](setobject%28__forkey_cost_%29.md): Sets the value of the specified key in the cache, and associates the key-value pair with the specified cost.
- [setObject(\_:forKey:)](setobject%28__forkey_%29.md): Sets the value of the specified key in the cache.

# objectForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value associated with a given key.

## Declaration

```objectivec
- (ObjectType) objectForKey:(KeyType) key;
```

## Parameters

- `key`: An object identifying the value.

<a id="return-value"></a>

## Return Value

The value associated with `key`, or `nil` if no value is associated with `key`.

## See Also

### Related Documentation

- [removeObjectForKey:](removeobject%28forkey_%29.md): Removes the value of the specified key in the cache.
- [setObject:forKey:cost:](setobject%28__forkey_cost_%29.md): Sets the value of the specified key in the cache, and associates the key-value pair with the specified cost.
- [setObject:forKey:](setobject%28__forkey_%29.md): Sets the value of the specified key in the cache.
