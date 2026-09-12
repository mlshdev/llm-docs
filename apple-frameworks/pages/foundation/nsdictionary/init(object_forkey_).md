> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/init(object:forkey:)](https://developer.apple.com/documentation/foundation/nsdictionary/init(object:forkey:))

# init(object:forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a dictionary containing a given key and value.

## Declaration

```swift
convenience init(object: Any, forKey key: any NSCopying)
```

## Parameters

- `object`: The value corresponding to `aKey`.

  If this value is `nil`, an [invalidArgumentException](../nsexceptionname/invalidargumentexception.md) is raised.
- `key`: The key for `anObject`.

  If this value is `nil`, an [invalidArgumentException](../nsexceptionname/invalidargumentexception.md) is raised.

<a id="return-value"></a>

## Return Value

A new dictionary containing a single object, `object`, for a single key, `aKey`.

## See Also

### Creating a Dictionary from Objects and Keys

- [init(objects:forKeys:)](init%28objects_forkeys_%29.md): Initializes a newly allocated dictionary with key-value pairs constructed from the provided arrays of keys and objects.
- [init(objects:forKeys:count:)](init%28objects_forkeys_count_%29.md): Initializes a newly allocated dictionary with the specified number of key-value pairs constructed from the provided C arrays of keys and objects.

# dictionaryWithObject:forKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a dictionary containing a given key and value.

## Declaration

```objectivec
+ (instancetype) dictionaryWithObject:(ObjectType) object forKey:(id<NSCopying>) key;
```

## Parameters

- `object`: The value corresponding to `aKey`.

  If this value is `nil`, an [NSInvalidArgumentException](../nsexceptionname/invalidargumentexception.md) is raised.
- `key`: The key for `anObject`.

  If this value is `nil`, an [NSInvalidArgumentException](../nsexceptionname/invalidargumentexception.md) is raised.

<a id="return-value"></a>

## Return Value

A new dictionary containing a single object, `object`, for a single key, `aKey`.

## See Also

### Related Documentation

- [dictionaryWithObjects:forKeys:](dictionarywithobjects_forkeys_.md): Creates a dictionary containing entries constructed from the contents of an array of keys and an array of values.
- [dictionaryWithObjectsAndKeys:](dictionarywithobjectsandkeys_.md): Creates a dictionary containing entries constructed from the specified set of values and keys.
- [dictionaryWithObjects:forKeys:count:](dictionarywithobjects_forkeys_count_.md): Creates a dictionary containing a specified number of objects from a C array.

### Creating a Dictionary from Objects and Keys

- [dictionaryWithObjects:forKeys:](dictionarywithobjects_forkeys_.md): Creates a dictionary containing entries constructed from the contents of an array of keys and an array of values.
- [dictionaryWithObjects:forKeys:count:](dictionarywithobjects_forkeys_count_.md): Creates a dictionary containing a specified number of objects from a C array.
- [initWithObjects:forKeys:](init%28objects_forkeys_%29.md): Initializes a newly allocated dictionary with key-value pairs constructed from the provided arrays of keys and objects.
- [initWithObjects:forKeys:count:](init%28objects_forkeys_count_%29.md): Initializes a newly allocated dictionary with the specified number of key-value pairs constructed from the provided C arrays of keys and objects.
- [dictionaryWithObjectsAndKeys:](dictionarywithobjectsandkeys_.md): Creates a dictionary containing entries constructed from the specified set of values and keys.
- [initWithObjectsAndKeys:](initwithobjectsandkeys_.md): Initializes a newly allocated dictionary with entries constructed from the specified set of values and keys.
