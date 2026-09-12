> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutabledictionary/setobject(_:forkey:)](https://developer.apple.com/documentation/foundation/nsmutabledictionary/setobject(_:forkey:))

# setObject(\_:forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a given key-value pair to the dictionary.

## Declaration

```swift
func setObject(_ anObject: Any, forKey aKey: any NSCopying)
```

## Parameters

- `anObject`: The value for `aKey`. A strong reference to the object is maintained by the dictionary.

  > **Important**

  >  Raises an [invalidArgumentException](../nsexceptionname/invalidargumentexception.md) if `anObject` is `nil`. If you need to represent a `nil` value in the dictionary, use [NSNull](../nsnull.md).
- `aKey`: The key for `value`. The key is copied (using [copy(with:)](../nscopying/copy%28with_%29.md); keys must conform to the `NSCopying` protocol). If `aKey` already exists in the dictionary, `anObject` takes its place.

  > **Important**

  >  Raises an [invalidArgumentException](../nsexceptionname/invalidargumentexception.md) if `aKey` is `nil`.

## See Also

### Related Documentation

- [removeObject(forKey:)](removeobject%28forkey_%29.md): Removes a given key and its associated value from the dictionary.

### Adding Entries to a Mutable Dictionary

- [setValue(\_:forKey:)](setvalue%28__forkey_%29.md): Adds a given key-value pair to the dictionary.
- [addEntries(from:)](addentries%28from_%29.md): Adds to the receiving dictionary the entries from another dictionary.
- [setDictionary(\_:)](setdictionary%28__%29.md): Sets the contents of the receiving dictionary to entries in a given dictionary.

# setObject:forKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a given key-value pair to the dictionary.

## Declaration

```objectivec
- (void) setObject:(ObjectType) anObject forKey:(id<NSCopying>) aKey;
```

## Parameters

- `anObject`: The value for `aKey`. A strong reference to the object is maintained by the dictionary.

  > **Important**

  >  Raises an [NSInvalidArgumentException](../nsexceptionname/invalidargumentexception.md) if `anObject` is `nil`. If you need to represent a `nil` value in the dictionary, use [NSNull](../nsnull.md).
- `aKey`: The key for `value`. The key is copied (using [copyWithZone:](../nscopying/copy%28with_%29.md); keys must conform to the `NSCopying` protocol). If `aKey` already exists in the dictionary, `anObject` takes its place.

  > **Important**

  >  Raises an [NSInvalidArgumentException](../nsexceptionname/invalidargumentexception.md) if `aKey` is `nil`.

## See Also

### Related Documentation

- [removeObjectForKey:](removeobject%28forkey_%29.md): Removes a given key and its associated value from the dictionary.
- [setObject:forKeyedSubscript:](setobject_forkeyedsubscript_.md): Adds a given key-value pair to the dictionary.

### Adding Entries to a Mutable Dictionary

- [setObject:forKeyedSubscript:](setobject_forkeyedsubscript_.md): Adds a given key-value pair to the dictionary.
- [setValue:forKey:](setvalue%28__forkey_%29.md): Adds a given key-value pair to the dictionary.
- [addEntriesFromDictionary:](addentries%28from_%29.md): Adds to the receiving dictionary the entries from another dictionary.
- [setDictionary:](setdictionary%28__%29.md): Sets the contents of the receiving dictionary to entries in a given dictionary.
