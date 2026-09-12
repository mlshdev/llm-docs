> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/initwithobjectsandkeys:](https://developer.apple.com/documentation/foundation/nsdictionary/initwithobjectsandkeys:)

# initWithObjectsAndKeys:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated dictionary with entries constructed from the specified set of values and keys.

## Declaration

```objectivec
- (instancetype) initWithObjectsAndKeys:(id) firstObject;
```

## Parameters

- `firstObject`: The first value to add to the new dictionary.

<a id="Discussion"></a>

## Discussion

After the `firstObject` value, pass the key for `firstObject`, then a null-terminated list of alternating values and keys. If any key is `nil`, an [NSInvalidArgumentException](../nsexceptionname/invalidargumentexception.md) is raised.

This method is similar to [initWithObjects:forKeys:](init%28objects_forkeys_%29.md), differing only in the way in which the key-value pairs are specified.

For example:

```objc
NSDictionary *dict = [[NSDictionary alloc] initWithObjectsAndKeys:
    @"value1", @"key1", @"value2", @"key2", nil];
```

## See Also

### Creating a Dictionary from Objects and Keys

- [dictionaryWithObjects:forKeys:](dictionarywithobjects_forkeys_.md): Creates a dictionary containing entries constructed from the contents of an array of keys and an array of values.
- [dictionaryWithObjects:forKeys:count:](dictionarywithobjects_forkeys_count_.md): Creates a dictionary containing a specified number of objects from a C array.
- [initWithObjects:forKeys:](init%28objects_forkeys_%29.md): Initializes a newly allocated dictionary with key-value pairs constructed from the provided arrays of keys and objects.
- [initWithObjects:forKeys:count:](init%28objects_forkeys_count_%29.md): Initializes a newly allocated dictionary with the specified number of key-value pairs constructed from the provided C arrays of keys and objects.
- [dictionaryWithObjectsAndKeys:](dictionarywithobjectsandkeys_.md): Creates a dictionary containing entries constructed from the specified set of values and keys.
- [dictionaryWithObject:forKey:](init%28object_forkey_%29.md): Creates a dictionary containing a given key and value.
