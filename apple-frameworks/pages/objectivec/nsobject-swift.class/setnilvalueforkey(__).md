> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/setnilvalueforkey(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/setnilvalueforkey(_:))

# setNilValueForKey(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Invoked by [setValue(\_:forKey:)](setvalue%28__forkey_%29.md) when it’s given a `nil` value for a scalar value (such as an `int` or `float`).

## Declaration

```swift
func setNilValueForKey(_ key: String)
```

## Parameters

- `key`: The name of one of the receiver’s properties.

<a id="Discussion"></a>

## Discussion

Subclasses can override this method to handle the request in some other way, such as by substituting `0` or a sentinel value for `nil` and invoking [setValue(\_:forKey:)](setvalue%28__forkey_%29.md) again or setting the variable directly. The default implementation raises an `NSInvalidArgumentException`.

## See Also

### Setting Values

- [setValue(\_:forKeyPath:)](setvalue%28__forkeypath_%29.md): Sets the value for the property identified by a given key path to a given value.
- [setValuesForKeys(\_:)](setvaluesforkeys%28__%29.md): Sets properties of the receiver with values from a given dictionary, using its keys to identify the properties.
- [setValue(\_:forKey:)](setvalue%28__forkey_%29.md): Sets the property of the receiver specified by a given key to a given value.
- [setValue(\_:forUndefinedKey:)](setvalue%28__forundefinedkey_%29.md): Invoked by [setValue(\_:forKey:)](setvalue%28__forkey_%29.md) when it finds no property for a given key.

# setNilValueForKey: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Invoked by [setValue:forKey:](setvalue%28__forkey_%29.md) when it’s given a `nil` value for a scalar value (such as an `int` or `float`).

## Declaration

```objectivec
- (void) setNilValueForKey:(NSString *) key;
```

## Parameters

- `key`: The name of one of the receiver’s properties.

<a id="Discussion"></a>

## Discussion

Subclasses can override this method to handle the request in some other way, such as by substituting `0` or a sentinel value for `nil` and invoking [setValue:forKey:](setvalue%28__forkey_%29.md) again or setting the variable directly. The default implementation raises an `NSInvalidArgumentException`.

## See Also

### Setting Values

- [setValue:forKeyPath:](setvalue%28__forkeypath_%29.md): Sets the value for the property identified by a given key path to a given value.
- [setValuesForKeysWithDictionary:](setvaluesforkeys%28__%29.md): Sets properties of the receiver with values from a given dictionary, using its keys to identify the properties.
- [setValue:forKey:](setvalue%28__forkey_%29.md): Sets the property of the receiver specified by a given key to a given value.
- [setValue:forUndefinedKey:](setvalue%28__forundefinedkey_%29.md): Invoked by [setValue:forKey:](setvalue%28__forkey_%29.md) when it finds no property for a given key.
