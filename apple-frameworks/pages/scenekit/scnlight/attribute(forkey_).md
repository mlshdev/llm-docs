> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlight/attribute(forkey:)](https://developer.apple.com/documentation/scenekit/scnlight/attribute(forkey:))

# attribute(forKey:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns the value of a lighting attribute.

> Use properties instead. The property corresponding to each deprecated attribute is listed in [Lighting Attribute Keys](../lighting-attribute-keys.md).

## Declaration

```swift
func attribute(forKey key: String) -> Any?
```

## Parameters

- `key`: A constant specifying a lighting attribute. See [Lighting Attribute Keys](../lighting-attribute-keys.md) for available keys and their possible values.

<a id="return-value"></a>

## Return Value

The value of the lighting attribute, or `nil` if no such attribute exists.

<a id="Discussion"></a>

## Discussion

A light’s [type](type.md) property determines its set of available attributes.

You can also get the values of lighting attributes using [Key-value coding](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/KeyValueCoding.html#//apple_ref/doc/uid/TP40008195-CH25). The key path for each lighting attribute is listed in [Lighting Attribute Keys](../lighting-attribute-keys.md).

## See Also

### Managing Light Attributes

- [name](name.md): A name associated with the light.
- [setAttribute(\_:forKey:)](setattribute%28__forkey_%29.md): Deprecated. Sets the value for a lighting attribute.
- [Lighting Attribute Keys](../lighting-attribute-keys.md): Keys for specifying the behavior of a light using the [attribute(forKey:)](attribute%28forkey_%29.md) and [setAttribute(\_:forKey:)](setattribute%28__forkey_%29.md) methods.

# attributeForKey: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+ (deprecated in 10.10)

Returns the value of a lighting attribute.

> Use properties instead. The property corresponding to each deprecated attribute is listed in [Lighting Attribute Keys](../lighting-attribute-keys.md).

## Declaration

```objectivec
- (id) attributeForKey:(NSString *) key;
```

## Parameters

- `key`: A constant specifying a lighting attribute. See [Lighting Attribute Keys](../lighting-attribute-keys.md) for available keys and their possible values.

<a id="return-value"></a>

## Return Value

The value of the lighting attribute, or `nil` if no such attribute exists.

<a id="Discussion"></a>

## Discussion

A light’s [type](type.md) property determines its set of available attributes.

You can also get the values of lighting attributes using [Key-value coding](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/KeyValueCoding.html#//apple_ref/doc/uid/TP40008195-CH25). The key path for each lighting attribute is listed in [Lighting Attribute Keys](../lighting-attribute-keys.md).

## See Also

### Managing Light Attributes

- [name](name.md): A name associated with the light.
- [setAttribute:forKey:](setattribute%28__forkey_%29.md): Deprecated. Sets the value for a lighting attribute.
- [Lighting Attribute Keys](../lighting-attribute-keys.md): Keys for specifying the behavior of a light using the [attributeForKey:](attribute%28forkey_%29.md) and [setAttribute:forKey:](setattribute%28__forkey_%29.md) methods.
