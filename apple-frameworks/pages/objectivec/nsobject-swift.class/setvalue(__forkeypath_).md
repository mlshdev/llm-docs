> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/setvalue(_:forkeypath:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/setvalue(_:forkeypath:))

# setValue(\_:forKeyPath:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the value for the property identified by a given key path to a given value.

## Declaration

```swift
func setValue(_ value: Any?, forKeyPath keyPath: String)
```

## Parameters

- `value`: The value for the property identified by `keyPath`.
- `keyPath`: A key path of the form relationship.property (with one or more relationships): for example “department.name” or “department.manager.lastName.”

<a id="Discussion"></a>

## Discussion

The default implementation of this method gets the destination object for each relationship using [value(forKey:)](value%28forkey_%29.md), and sends the final object a [setValue(\_:forKey:)](setvalue%28__forkey_%29.md) message.

<a id="Special-Considerations"></a>

### Special Considerations

When using this method, and the destination object does not implement an accessor for the value, the default behavior is for that object to retain `value` rather than copy or assign `value`.

## See Also

### Related Documentation

- [value(forKeyPath:)](value%28forkeypath_%29.md): Returns the value for the derived property identified by a given key path.

### Setting Values

- [setValuesForKeys(\_:)](setvaluesforkeys%28__%29.md): Sets properties of the receiver with values from a given dictionary, using its keys to identify the properties.
- [setNilValueForKey(\_:)](setnilvalueforkey%28__%29.md): Invoked by [setValue(\_:forKey:)](setvalue%28__forkey_%29.md) when it’s given a `nil` value for a scalar value (such as an `int` or `float`).
- [setValue(\_:forKey:)](setvalue%28__forkey_%29.md): Sets the property of the receiver specified by a given key to a given value.
- [setValue(\_:forUndefinedKey:)](setvalue%28__forundefinedkey_%29.md): Invoked by [setValue(\_:forKey:)](setvalue%28__forkey_%29.md) when it finds no property for a given key.

# setValue:forKeyPath: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the value for the property identified by a given key path to a given value.

## Declaration

```objectivec
- (void) setValue:(id) value forKeyPath:(NSString *) keyPath;
```

## Parameters

- `value`: The value for the property identified by `keyPath`.
- `keyPath`: A key path of the form relationship.property (with one or more relationships): for example “department.name” or “department.manager.lastName.”

<a id="Discussion"></a>

## Discussion

The default implementation of this method gets the destination object for each relationship using [valueForKey:](value%28forkey_%29.md), and sends the final object a [setValue:forKey:](setvalue%28__forkey_%29.md) message.

<a id="Special-Considerations"></a>

### Special Considerations

When using this method, and the destination object does not implement an accessor for the value, the default behavior is for that object to retain `value` rather than copy or assign `value`.

## See Also

### Related Documentation

- [valueForKeyPath:](value%28forkeypath_%29.md): Returns the value for the derived property identified by a given key path.

### Setting Values

- [setValuesForKeysWithDictionary:](setvaluesforkeys%28__%29.md): Sets properties of the receiver with values from a given dictionary, using its keys to identify the properties.
- [setNilValueForKey:](setnilvalueforkey%28__%29.md): Invoked by [setValue:forKey:](setvalue%28__forkey_%29.md) when it’s given a `nil` value for a scalar value (such as an `int` or `float`).
- [setValue:forKey:](setvalue%28__forkey_%29.md): Sets the property of the receiver specified by a given key to a given value.
- [setValue:forUndefinedKey:](setvalue%28__forundefinedkey_%29.md): Invoked by [setValue:forKey:](setvalue%28__forkey_%29.md) when it finds no property for a given key.
