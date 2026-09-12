> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscache/setobject(_:forkey:cost:)](https://developer.apple.com/documentation/foundation/nscache/setobject(_:forkey:cost:))

# setObject(\_:forKey:cost:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the value of the specified key in the cache, and associates the key-value pair with the specified cost.

## Declaration

```swift
func setObject(_ obj: ObjectType, forKey key: KeyType, cost g: Int)
```

## Parameters

- `obj`: The object to store in the cache.
- `key`: The key with which to associate the value.
- `g`: The cost with which to associate the key-value pair.

<a id="Discussion"></a>

## Discussion

The `cost` value is used to compute a sum encompassing the costs of all the objects in the cache. When memory is limited or when the total cost of the cache eclipses the maximum allowed total cost, the cache could begin an eviction process to remove some of its elements. However, this eviction process is not in a guaranteed order. As a consequence, if you try to manipulate the cost values to achieve some specific behavior, the consequences could be detrimental to your program. Typically, the obvious cost is the size of the value in bytes. If that information is not readily available, you should not go through the trouble of trying to compute it, as doing so will drive up the cost of using the cache. Pass in `0` for the cost value if you otherwise have nothing useful to pass, or simply use the `setObject:forKey:` method, which does not require a `cost` value to be passed in.

Unlike an `NSMutableDictionary` object, a cache does not copy the key objects that are put into it.

## See Also

### Related Documentation

- [totalCostLimit](totalcostlimit.md): The maximum total cost that the cache can hold before it starts evicting objects.

### Adding and Removing Cached Values

- [setObject(\_:forKey:)](setobject%28__forkey_%29.md): Sets the value of the specified key in the cache.
- [removeObject(forKey:)](removeobject%28forkey_%29.md): Removes the value of the specified key in the cache.
- [removeAllObjects()](removeallobjects%28%29.md): Empties the cache.

# setObject:forKey:cost: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the value of the specified key in the cache, and associates the key-value pair with the specified cost.

## Declaration

```objectivec
- (void) setObject:(ObjectType) obj forKey:(KeyType) key cost:(NSUInteger) g;
```

## Parameters

- `obj`: The object to store in the cache.
- `key`: The key with which to associate the value.
- `g`: The cost with which to associate the key-value pair.

<a id="Discussion"></a>

## Discussion

The `cost` value is used to compute a sum encompassing the costs of all the objects in the cache. When memory is limited or when the total cost of the cache eclipses the maximum allowed total cost, the cache could begin an eviction process to remove some of its elements. However, this eviction process is not in a guaranteed order. As a consequence, if you try to manipulate the cost values to achieve some specific behavior, the consequences could be detrimental to your program. Typically, the obvious cost is the size of the value in bytes. If that information is not readily available, you should not go through the trouble of trying to compute it, as doing so will drive up the cost of using the cache. Pass in `0` for the cost value if you otherwise have nothing useful to pass, or simply use the `setObject:forKey:` method, which does not require a `cost` value to be passed in.

Unlike an `NSMutableDictionary` object, a cache does not copy the key objects that are put into it.

## See Also

### Related Documentation

- [totalCostLimit](totalcostlimit.md): The maximum total cost that the cache can hold before it starts evicting objects.

### Adding and Removing Cached Values

- [setObject:forKey:](setobject%28__forkey_%29.md): Sets the value of the specified key in the cache.
- [removeObjectForKey:](removeobject%28forkey_%29.md): Removes the value of the specified key in the cache.
- [removeAllObjects](removeallobjects%28%29.md): Empties the cache.
