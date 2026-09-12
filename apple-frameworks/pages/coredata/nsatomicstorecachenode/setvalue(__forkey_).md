> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsatomicstorecachenode/setvalue(_:forkey:)](https://developer.apple.com/documentation/coredata/nsatomicstorecachenode/setvalue(_:forkey:))

# setValue(\_:forKey:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the value for the given key.

## Declaration

```swift
func setValue(_ value: Any?, forKey key: String)
```

## Parameters

- `value`: The value for the property identified by `key`.
- `key`: The name of a property.

<a id="Discussion"></a>

## Discussion

The default implementation forwards the request to the [propertyCache](propertycache.md) dictionary if `key` matches a property name of the entity for this cache node. If `key` does not represent a property, the standard [setValue(\_:forKey:)](../../objectivec/nsobject-swift.class/setvalue%28__forkey_%29.md) implementation is used.

## See Also

### Managing Node Data

- [objectID](objectid.md): The managed object ID of the node.
- [propertyCache](propertycache.md): The property cache dictionary of the node.
- [value(forKey:)](value%28forkey_%29.md): Returns the value for a given key.

# setValue:forKey: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the value for the given key.

## Declaration

```objectivec
- (void) setValue:(id) value forKey:(NSString *) key;
```

## Parameters

- `value`: The value for the property identified by `key`.
- `key`: The name of a property.

<a id="Discussion"></a>

## Discussion

The default implementation forwards the request to the [propertyCache](propertycache.md) dictionary if `key` matches a property name of the entity for this cache node. If `key` does not represent a property, the standard [setValue:forKey:](../../objectivec/nsobject-swift.class/setvalue%28__forkey_%29.md) implementation is used.

## See Also

### Managing Node Data

- [objectID](objectid.md): The managed object ID of the node.
- [propertyCache](propertycache.md): The property cache dictionary of the node.
- [valueForKey:](value%28forkey_%29.md): Returns the value for a given key.
