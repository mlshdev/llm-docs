> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/setvaluesforkeys(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/setvaluesforkeys(_:))

# setValuesForKeys(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets properties of the receiver with values from a given dictionary, using its keys to identify the properties.

## Declaration

```swift
func setValuesForKeys(_ keyedValues: [String : Any])
```

## Parameters

- `keyedValues`: A dictionary whose keys identify properties in the receiver. The values of the properties in the receiver are set to the corresponding values in the dictionary.

<a id="Discussion"></a>

## Discussion

The default implementation invokes [setValue(\_:forKey:)](setvalue%28__forkey_%29.md) for each key-value pair, substituting `nil` for `NSNull` values in `keyedValues`.

## See Also

### Related Documentation

- [dictionaryWithValues(forKeys:)](dictionarywithvalues%28forkeys_%29.md): Returns a dictionary containing the property values identified by each of the keys in a given array.

### Setting Values

- [setValue(\_:forKeyPath:)](setvalue%28__forkeypath_%29.md): Sets the value for the property identified by a given key path to a given value.
- [setNilValueForKey(\_:)](setnilvalueforkey%28__%29.md): Invoked by [setValue(\_:forKey:)](setvalue%28__forkey_%29.md) when it’s given a `nil` value for a scalar value (such as an `int` or `float`).
- [setValue(\_:forKey:)](setvalue%28__forkey_%29.md): Sets the property of the receiver specified by a given key to a given value.
- [setValue(\_:forUndefinedKey:)](setvalue%28__forundefinedkey_%29.md): Invoked by [setValue(\_:forKey:)](setvalue%28__forkey_%29.md) when it finds no property for a given key.

# setValuesForKeysWithDictionary: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets properties of the receiver with values from a given dictionary, using its keys to identify the properties.

## Declaration

```objectivec
- (void) setValuesForKeysWithDictionary:(NSDictionary<NSString *,id> *) keyedValues;
```

## Parameters

- `keyedValues`: A dictionary whose keys identify properties in the receiver. The values of the properties in the receiver are set to the corresponding values in the dictionary.

<a id="Discussion"></a>

## Discussion

The default implementation invokes [setValue:forKey:](setvalue%28__forkey_%29.md) for each key-value pair, substituting `nil` for `NSNull` values in `keyedValues`.

## See Also

### Related Documentation

- [dictionaryWithValuesForKeys:](dictionarywithvalues%28forkeys_%29.md): Returns a dictionary containing the property values identified by each of the keys in a given array.

### Setting Values

- [setValue:forKeyPath:](setvalue%28__forkeypath_%29.md): Sets the value for the property identified by a given key path to a given value.
- [setNilValueForKey:](setnilvalueforkey%28__%29.md): Invoked by [setValue:forKey:](setvalue%28__forkey_%29.md) when it’s given a `nil` value for a scalar value (such as an `int` or `float`).
- [setValue:forKey:](setvalue%28__forkey_%29.md): Sets the property of the receiver specified by a given key to a given value.
- [setValue:forUndefinedKey:](setvalue%28__forundefinedkey_%29.md): Invoked by [setValue:forKey:](setvalue%28__forkey_%29.md) when it finds no property for a given key.
