> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlight/setattribute(_:forkey:)](https://developer.apple.com/documentation/scenekit/scnlight/setattribute(_:forkey:))

# setAttribute(\_:forKey:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Sets the value for a lighting attribute.

> Use properties instead. The property corresponding to each deprecated attribute is listed in [Lighting Attribute Keys](../lighting-attribute-keys.md).

## Declaration

```swift
func setAttribute(_ attribute: Any?, forKey key: String)
```

## Parameters

- `attribute`: The value for the lighting attribute.
- `key`: A constant specifying a lighting attribute. See [Lighting Attribute Keys](../lighting-attribute-keys.md) for available keys and their possible values.

<a id="Discussion"></a>

## Discussion

A light’s [type](type.md) property determines its set of available attributes.

You can also set or animate changes to the values of lighting attributes using [Key-value coding](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/KeyValueCoding.html#//apple_ref/doc/uid/TP40008195-CH25). The key path for each lighting attribute is listed in [Lighting Attribute Keys](../lighting-attribute-keys.md).

## See Also

### Managing Light Attributes

- [name](name.md): A name associated with the light.
- [attribute(forKey:)](attribute%28forkey_%29.md): Deprecated. Returns the value of a lighting attribute.
- [Lighting Attribute Keys](../lighting-attribute-keys.md): Keys for specifying the behavior of a light using the [attribute(forKey:)](attribute%28forkey_%29.md) and [setAttribute(\_:forKey:)](setattribute%28__forkey_%29.md) methods.

# setAttribute:forKey: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+ (deprecated in 10.10)

Sets the value for a lighting attribute.

> Use properties instead. The property corresponding to each deprecated attribute is listed in [Lighting Attribute Keys](../lighting-attribute-keys.md).

## Declaration

```objectivec
- (void) setAttribute:(id) attribute forKey:(NSString *) key;
```

## Parameters

- `attribute`: The value for the lighting attribute.
- `key`: A constant specifying a lighting attribute. See [Lighting Attribute Keys](../lighting-attribute-keys.md) for available keys and their possible values.

<a id="Discussion"></a>

## Discussion

A light’s [type](type.md) property determines its set of available attributes.

You can also set or animate changes to the values of lighting attributes using [Key-value coding](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/KeyValueCoding.html#//apple_ref/doc/uid/TP40008195-CH25). The key path for each lighting attribute is listed in [Lighting Attribute Keys](../lighting-attribute-keys.md).

## See Also

### Managing Light Attributes

- [name](name.md): A name associated with the light.
- [attributeForKey:](attribute%28forkey_%29.md): Deprecated. Returns the value of a lighting attribute.
- [Lighting Attribute Keys](../lighting-attribute-keys.md): Keys for specifying the behavior of a light using the [attributeForKey:](attribute%28forkey_%29.md) and [setAttribute:forKey:](setattribute%28__forkey_%29.md) methods.
