> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsatomicstorecachenode/value(forkey:)](https://developer.apple.com/documentation/coredata/nsatomicstorecachenode/value(forkey:))

# value(forKey:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the value for a given key.

## Declaration

```swift
func value(forKey key: String) -> Any?
```

## Parameters

- `key`: The name of a property.

<a id="return-value"></a>

## Return Value

The value for the property named `key`. For an attribute, the return value is an instance of an attribute type supported by Core Data (see [NSAttributeDescription](../nsattributedescription.md)); for a to-one relationship, the return value must be another cache node instance; for a to-many relationship, the return value must be an collection of the related cache nodes.

<a id="Discussion"></a>

## Discussion

The default implementation forwards the request to the [propertyCache](propertycache.md) dictionary if `key` matches a property name of the entity for the cache node. If `key` does not represent a property, the standard [value(forKey:)](../../objectivec/nsobject-swift.class/value%28forkey_%29.md) implementation is used.

## See Also

### Managing Node Data

- [objectID](objectid.md): The managed object ID of the node.
- [propertyCache](propertycache.md): The property cache dictionary of the node.
- [setValue(\_:forKey:)](setvalue%28__forkey_%29.md): Sets the value for the given key.

# valueForKey: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the value for a given key.

## Declaration

```objectivec
- (id) valueForKey:(NSString *) key;
```

## Parameters

- `key`: The name of a property.

<a id="return-value"></a>

## Return Value

The value for the property named `key`. For an attribute, the return value is an instance of an attribute type supported by Core Data (see [NSAttributeDescription](../nsattributedescription.md)); for a to-one relationship, the return value must be another cache node instance; for a to-many relationship, the return value must be an collection of the related cache nodes.

<a id="Discussion"></a>

## Discussion

The default implementation forwards the request to the [propertyCache](propertycache.md) dictionary if `key` matches a property name of the entity for the cache node. If `key` does not represent a property, the standard [valueForKey:](../../objectivec/nsobject-swift.class/value%28forkey_%29.md) implementation is used.

## See Also

### Managing Node Data

- [objectID](objectid.md): The managed object ID of the node.
- [propertyCache](propertycache.md): The property cache dictionary of the node.
- [setValue:forKey:](setvalue%28__forkey_%29.md): Sets the value for the given key.
