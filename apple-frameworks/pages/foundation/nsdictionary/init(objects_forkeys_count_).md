> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/init(objects:forkeys:count:)](https://developer.apple.com/documentation/foundation/nsdictionary/init(objects:forkeys:count:))

# init(objects:forKeys:count:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated dictionary with the specified number of key-value pairs constructed from the provided C arrays of keys and objects.

## Declaration

```swift
init(objects: UnsafePointer<AnyObject>?, forKeys keys: UnsafePointer<any NSCopying>?, count cnt: Int)
```

## Parameters

- `objects`: A C array of values for the new dictionary.
- `keys`: A C array of keys for the new dictionary. Each key is copied (using [copy(with:)](../nscopying/copy%28with_%29.md); keys must conform to the `NSCopying` protocol), and the copy is added to the new dictionary.
- `cnt`: The number of elements to use from the `keys` and `objects` arrays. `count` must not exceed the number of elements in `objects` or `keys`.

<a id="Discussion"></a>

## Discussion

This method steps through the `objects` and `keys` arrays, creating entries in the new dictionary as it goes. An `NSInvalidArgumentException` is raised if a key or value object is `nil`.

This method is a designated initializer of `NSDictionary`.

## See Also

### Related Documentation

- [init()](init%28%29.md): Initializes a newly allocated dictionary.

### Creating a Dictionary from Objects and Keys

- [init(objects:forKeys:)](init%28objects_forkeys_%29.md): Initializes a newly allocated dictionary with key-value pairs constructed from the provided arrays of keys and objects.
- [init(object:forKey:)](init%28object_forkey_%29.md): Creates a dictionary containing a given key and value.

# initWithObjects:forKeys:count: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated dictionary with the specified number of key-value pairs constructed from the provided C arrays of keys and objects.

## Declaration

```objectivec
- (instancetype) initWithObjects:(ObjectType const[]) objects forKeys:(id<NSCopying> const[]) keys count:(NSUInteger) cnt;
```

## Parameters

- `objects`: A C array of values for the new dictionary.
- `keys`: A C array of keys for the new dictionary. Each key is copied (using [copyWithZone:](../nscopying/copy%28with_%29.md); keys must conform to the `NSCopying` protocol), and the copy is added to the new dictionary.
- `cnt`: The number of elements to use from the `keys` and `objects` arrays. `count` must not exceed the number of elements in `objects` or `keys`.

<a id="Discussion"></a>

## Discussion

This method steps through the `objects` and `keys` arrays, creating entries in the new dictionary as it goes. An `NSInvalidArgumentException` is raised if a key or value object is `nil`.

This method is a designated initializer of `NSDictionary`.

## See Also

### Related Documentation

- [initWithObjectsAndKeys:](initwithobjectsandkeys_.md): Initializes a newly allocated dictionary with entries constructed from the specified set of values and keys.
- [init](init%28%29.md): Initializes a newly allocated dictionary.
- [dictionaryWithObjects:forKeys:count:](dictionarywithobjects_forkeys_count_.md): Creates a dictionary containing a specified number of objects from a C array.

### Creating a Dictionary from Objects and Keys

- [dictionaryWithObjects:forKeys:](dictionarywithobjects_forkeys_.md): Creates a dictionary containing entries constructed from the contents of an array of keys and an array of values.
- [dictionaryWithObjects:forKeys:count:](dictionarywithobjects_forkeys_count_.md): Creates a dictionary containing a specified number of objects from a C array.
- [initWithObjects:forKeys:](init%28objects_forkeys_%29.md): Initializes a newly allocated dictionary with key-value pairs constructed from the provided arrays of keys and objects.
- [dictionaryWithObjectsAndKeys:](dictionarywithobjectsandkeys_.md): Creates a dictionary containing entries constructed from the specified set of values and keys.
- [initWithObjectsAndKeys:](initwithobjectsandkeys_.md): Initializes a newly allocated dictionary with entries constructed from the specified set of values and keys.
- [dictionaryWithObject:forKey:](init%28object_forkey_%29.md): Creates a dictionary containing a given key and value.
