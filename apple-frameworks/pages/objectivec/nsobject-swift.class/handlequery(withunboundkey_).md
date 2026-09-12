> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/handlequery(withunboundkey:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/handlequery(withunboundkey:))

# handleQuery(withUnboundKey:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 2.0) · iPadOS 2.0+ (deprecated in 2.0) · Mac Catalyst 2.0+ (deprecated in 2.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Invoked by [value(forKey:)](value%28forkey_%29.md) when it finds no property corresponding to `key`.

> Use [value(forUndefinedKey:)](value%28forundefinedkey_%29.md) instead.

## Declaration

```swift
func handleQuery(withUnboundKey key: String) -> Any?
```

## See Also

### Deprecated Methods

- [useStoredAccessor()](usestoredaccessor%28%29.md): Deprecated. Returns `true` if the stored value methods [storedValue(forKey:)](storedvalue%28forkey_%29.md) and [takeStoredValue(\_:forKey:)](takestoredvalue%28__forkey_%29.md) should use private accessor methods in preference to public accessors.
- [handleTakeValue(\_:forUnboundKey:)](handletakevalue%28__forunboundkey_%29.md): Deprecated. Invoked by [takeValue(\_:forKey:)](takevalue%28__forkey_%29.md) when it finds no property binding for `key`.
- [storedValue(forKey:)](storedvalue%28forkey_%29.md): Deprecated. Returns the property identified by a given key.
- [takeStoredValue(\_:forKey:)](takestoredvalue%28__forkey_%29.md): Deprecated. Sets the value of the property identified by a given key.
- [takeValues(from:)](takevalues%28from_%29.md): Deprecated. Sets properties of the receiver with values from a given dictionary, using its keys to identify the properties
- [takeValue(\_:forKeyPath:)](takevalue%28__forkeypath_%29.md): Deprecated. Sets the value for the property identified by `keyPath` to `value`.
- [takeValue(\_:forKey:)](takevalue%28__forkey_%29.md): Deprecated. Sets the value for the property identified by `key` to `value`.
- [unableToSetNil(forKey:)](unabletosetnil%28forkey_%29.md): Deprecated. Invoked if `key` is represented by a scalar attribute.
- [values(forKeys:)](values%28forkeys_%29.md): Deprecated. Returns a dictionary containing as keys the property names in `keys`, with corresponding values being the corresponding property values.

# handleQueryWithUnboundKey: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 2.0) · iPadOS 2.0+ (deprecated in 2.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.3) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Invoked by [valueForKey:](value%28forkey_%29.md) when it finds no property corresponding to `key`.

> Use [valueForUndefinedKey:](value%28forundefinedkey_%29.md) instead.

## Declaration

```objectivec
- (id) handleQueryWithUnboundKey:(NSString *) key;
```

## See Also

### Deprecated Methods

- [useStoredAccessor](usestoredaccessor%28%29.md): Deprecated. Returns `true` if the stored value methods [storedValueForKey:](storedvalue%28forkey_%29.md) and [takeStoredValue:forKey:](takestoredvalue%28__forkey_%29.md) should use private accessor methods in preference to public accessors.
- [handleTakeValue:forUnboundKey:](handletakevalue%28__forunboundkey_%29.md): Deprecated. Invoked by [takeValue:forKey:](takevalue%28__forkey_%29.md) when it finds no property binding for `key`.
- [storedValueForKey:](storedvalue%28forkey_%29.md): Deprecated. Returns the property identified by a given key.
- [takeStoredValue:forKey:](takestoredvalue%28__forkey_%29.md): Deprecated. Sets the value of the property identified by a given key.
- [takeValuesFromDictionary:](takevalues%28from_%29.md): Deprecated. Sets properties of the receiver with values from a given dictionary, using its keys to identify the properties
- [takeValue:forKeyPath:](takevalue%28__forkeypath_%29.md): Deprecated. Sets the value for the property identified by `keyPath` to `value`.
- [takeValue:forKey:](takevalue%28__forkey_%29.md): Deprecated. Sets the value for the property identified by `key` to `value`.
- [unableToSetNilForKey:](unabletosetnil%28forkey_%29.md): Deprecated. Invoked if `key` is represented by a scalar attribute.
- [valuesForKeys:](values%28forkeys_%29.md): Deprecated. Returns a dictionary containing as keys the property names in `keys`, with corresponding values being the corresponding property values.
