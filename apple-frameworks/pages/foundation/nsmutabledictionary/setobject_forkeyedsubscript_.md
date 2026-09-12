> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutabledictionary/setobject:forkeyedsubscript:](https://developer.apple.com/documentation/foundation/nsmutabledictionary/setobject:forkeyedsubscript:)

# setObject:forKeyedSubscript:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a given key-value pair to the dictionary.

## Declaration

```objectivec
- (void) setObject:(ObjectType) obj forKeyedSubscript:(id<NSCopying>) key;
```

## Parameters

- `obj`: The value for `key`. A strong reference to the object is maintained by the dictionary.

  Passing `nil` will cause any object corresponding to `key` to be removed from the dictionary.
- `key`: The key for `obj`. The key is copied (using [copyWithZone:](../nscopying/copy%28with_%29.md); keys must conform to the `NSCopying` protocol). If `key` already exists in the dictionary, `anObject` takes its place.

  > **Important**

  >  Raises an [NSInvalidArgumentException](../nsexceptionname/invalidargumentexception.md) if `key` is `nil`.

<a id="Discussion"></a>

## Discussion

This method has the same behavior as the [setObject:forKey:](setobject%28__forkey_%29.md) method.

You shouldn’t need to call this method directly. Instead, this method is called when setting an object for a key using subscripting.

```objc
id value = @"someValue";
mutableDictionary[@"someKey"] = value;
```

## See Also

### Related Documentation

- [removeObjectForKey:](removeobject%28forkey_%29.md): Removes a given key and its associated value from the dictionary.
- [objectForKeyedSubscript:](../nsdictionary/subscript%28__%29-52n56.md): Returns the value associated with a given key.

### Adding Entries to a Mutable Dictionary

- [setObject:forKey:](setobject%28__forkey_%29.md): Adds a given key-value pair to the dictionary.
- [setValue:forKey:](setvalue%28__forkey_%29.md): Adds a given key-value pair to the dictionary.
- [addEntriesFromDictionary:](addentries%28from_%29.md): Adds to the receiving dictionary the entries from another dictionary.
- [setDictionary:](setdictionary%28__%29.md): Sets the contents of the receiving dictionary to entries in a given dictionary.
