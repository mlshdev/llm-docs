> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/setvalue(_:forundefinedkey:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/setvalue(_:forundefinedkey:))

# setValue(\_:forUndefinedKey:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Invoked by [setValue(\_:forKey:)](setvalue%28__forkey_%29.md) when it finds no property for a given key.

## Declaration

```swift
func setValue(_ value: Any?, forUndefinedKey key: String)
```

## Parameters

- `value`: The value for the key identified by `key`.
- `key`: A string that is not equal to the name of any of the receiver’s properties.

<a id="Discussion"></a>

## Discussion

Subclasses can override this method to handle the request in some other way. The default implementation raises an `NSUndefinedKeyException`.

## See Also

### Related Documentation

- [value(forUndefinedKey:)](value%28forundefinedkey_%29.md): Invoked by [value(forKey:)](value%28forkey_%29.md) when it finds no property corresponding to a given key.

### Setting Values

- [setValue(\_:forKeyPath:)](setvalue%28__forkeypath_%29.md): Sets the value for the property identified by a given key path to a given value.
- [setValuesForKeys(\_:)](setvaluesforkeys%28__%29.md): Sets properties of the receiver with values from a given dictionary, using its keys to identify the properties.
- [setNilValueForKey(\_:)](setnilvalueforkey%28__%29.md): Invoked by [setValue(\_:forKey:)](setvalue%28__forkey_%29.md) when it’s given a `nil` value for a scalar value (such as an `int` or `float`).
- [setValue(\_:forKey:)](setvalue%28__forkey_%29.md): Sets the property of the receiver specified by a given key to a given value.

# setValue:forUndefinedKey: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Invoked by [setValue:forKey:](setvalue%28__forkey_%29.md) when it finds no property for a given key.

## Declaration

```objectivec
- (void) setValue:(id) value forUndefinedKey:(NSString *) key;
```

## Parameters

- `value`: The value for the key identified by `key`.
- `key`: A string that is not equal to the name of any of the receiver’s properties.

<a id="Discussion"></a>

## Discussion

Subclasses can override this method to handle the request in some other way. The default implementation raises an `NSUndefinedKeyException`.

## See Also

### Related Documentation

- [valueForUndefinedKey:](value%28forundefinedkey_%29.md): Invoked by [valueForKey:](value%28forkey_%29.md) when it finds no property corresponding to a given key.

### Setting Values

- [setValue:forKeyPath:](setvalue%28__forkeypath_%29.md): Sets the value for the property identified by a given key path to a given value.
- [setValuesForKeysWithDictionary:](setvaluesforkeys%28__%29.md): Sets properties of the receiver with values from a given dictionary, using its keys to identify the properties.
- [setNilValueForKey:](setnilvalueforkey%28__%29.md): Invoked by [setValue:forKey:](setvalue%28__forkey_%29.md) when it’s given a `nil` value for a scalar value (such as an `int` or `float`).
- [setValue:forKey:](setvalue%28__forkey_%29.md): Sets the property of the receiver specified by a given key to a given value.
