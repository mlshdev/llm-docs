> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/setvalue(_:forkey:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/setvalue(_:forkey:))

# setValue(\_:forKey:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the property of the receiver specified by a given key to a given value.

## Declaration

```swift
func setValue(_ value: Any?, forKey key: String)
```

## Parameters

- `value`: The value for the property identified by `key`.
- `key`: The name of one of the receiver’s properties.

<a id="Discussion"></a>

## Discussion

If `key` identifies a to-one relationship, relate the object specified by `value` to the receiver, unrelating the previously related object if there was one. Given a collection object and a `key` that identifies a to-many relationship, relate the objects contained in the collection to the receiver, unrelating previously related objects if there were any.

The search pattern that `setValue:forKey:` uses is described in [Accessor Search Patterns](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/SearchImplementation.html#//apple_ref/doc/uid/20000955) in [Key-Value Coding Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/index.html#//apple_ref/doc/uid/10000107i).

In a reference-counted environment, if the instance variable is accessed directly, `value` is retained.

## See Also

### Setting Values

- [setValue(\_:forKeyPath:)](setvalue%28__forkeypath_%29.md): Sets the value for the property identified by a given key path to a given value.
- [setValuesForKeys(\_:)](setvaluesforkeys%28__%29.md): Sets properties of the receiver with values from a given dictionary, using its keys to identify the properties.
- [setNilValueForKey(\_:)](setnilvalueforkey%28__%29.md): Invoked by [setValue(\_:forKey:)](setvalue%28__forkey_%29.md) when it’s given a `nil` value for a scalar value (such as an `int` or `float`).
- [setValue(\_:forUndefinedKey:)](setvalue%28__forundefinedkey_%29.md): Invoked by [setValue(\_:forKey:)](setvalue%28__forkey_%29.md) when it finds no property for a given key.

# setValue:forKey: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the property of the receiver specified by a given key to a given value.

## Declaration

```objectivec
- (void) setValue:(id) value forKey:(NSString *) key;
```

## Parameters

- `value`: The value for the property identified by `key`.
- `key`: The name of one of the receiver’s properties.

<a id="Discussion"></a>

## Discussion

If `key` identifies a to-one relationship, relate the object specified by `value` to the receiver, unrelating the previously related object if there was one. Given a collection object and a `key` that identifies a to-many relationship, relate the objects contained in the collection to the receiver, unrelating previously related objects if there were any.

The search pattern that `setValue:forKey:` uses is described in [Accessor Search Patterns](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/SearchImplementation.html#//apple_ref/doc/uid/20000955) in [Key-Value Coding Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/index.html#//apple_ref/doc/uid/10000107i).

In a reference-counted environment, if the instance variable is accessed directly, `value` is retained.

## See Also

### Setting Values

- [setValue:forKeyPath:](setvalue%28__forkeypath_%29.md): Sets the value for the property identified by a given key path to a given value.
- [setValuesForKeysWithDictionary:](setvaluesforkeys%28__%29.md): Sets properties of the receiver with values from a given dictionary, using its keys to identify the properties.
- [setNilValueForKey:](setnilvalueforkey%28__%29.md): Invoked by [setValue:forKey:](setvalue%28__forkey_%29.md) when it’s given a `nil` value for a scalar value (such as an `int` or `float`).
- [setValue:forUndefinedKey:](setvalue%28__forundefinedkey_%29.md): Invoked by [setValue:forKey:](setvalue%28__forkey_%29.md) when it finds no property for a given key.
