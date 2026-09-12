> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/handletakevalue(_:forunboundkey:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/handletakevalue(_:forunboundkey:))

# handleTakeValue(\_:forUnboundKey:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 2.0) · iPadOS 2.0+ (deprecated in 2.0) · Mac Catalyst 2.0+ (deprecated in 2.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Invoked by [takeValue(\_:forKey:)](takevalue%28__forkey_%29.md) when it finds no property binding for `key`.

> Use [setValue(\_:forUndefinedKey:)](setvalue%28__forundefinedkey_%29.md) instead.

## Declaration

```swift
func handleTakeValue(_ value: Any?, forUnboundKey key: String)
```

## See Also

### Deprecated Methods

- [useStoredAccessor()](usestoredaccessor%28%29.md): Deprecated. Returns `true` if the stored value methods [storedValue(forKey:)](storedvalue%28forkey_%29.md) and [takeStoredValue(\_:forKey:)](takestoredvalue%28__forkey_%29.md) should use private accessor methods in preference to public accessors.
- [handleQuery(withUnboundKey:)](handlequery%28withunboundkey_%29.md): Deprecated. Invoked by [value(forKey:)](value%28forkey_%29.md) when it finds no property corresponding to `key`.
- [storedValue(forKey:)](storedvalue%28forkey_%29.md): Deprecated. Returns the property identified by a given key.
- [takeStoredValue(\_:forKey:)](takestoredvalue%28__forkey_%29.md): Deprecated. Sets the value of the property identified by a given key.
- [takeValues(from:)](takevalues%28from_%29.md): Deprecated. Sets properties of the receiver with values from a given dictionary, using its keys to identify the properties
- [takeValue(\_:forKeyPath:)](takevalue%28__forkeypath_%29.md): Deprecated. Sets the value for the property identified by `keyPath` to `value`.
- [takeValue(\_:forKey:)](takevalue%28__forkey_%29.md): Deprecated. Sets the value for the property identified by `key` to `value`.
- [unableToSetNil(forKey:)](unabletosetnil%28forkey_%29.md): Deprecated. Invoked if `key` is represented by a scalar attribute.
- [values(forKeys:)](values%28forkeys_%29.md): Deprecated. Returns a dictionary containing as keys the property names in `keys`, with corresponding values being the corresponding property values.

# handleTakeValue:forUnboundKey: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 2.0) · iPadOS 2.0+ (deprecated in 2.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.3) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Invoked by [takeValue:forKey:](takevalue%28__forkey_%29.md) when it finds no property binding for `key`.

> Use [setValue:forUndefinedKey:](setvalue%28__forundefinedkey_%29.md) instead.

## Declaration

```objectivec
- (void) handleTakeValue:(id) value forUnboundKey:(NSString *) key;
```

## See Also

### Deprecated Methods

- [useStoredAccessor](usestoredaccessor%28%29.md): Deprecated. Returns `true` if the stored value methods [storedValueForKey:](storedvalue%28forkey_%29.md) and [takeStoredValue:forKey:](takestoredvalue%28__forkey_%29.md) should use private accessor methods in preference to public accessors.
- [handleQueryWithUnboundKey:](handlequery%28withunboundkey_%29.md): Deprecated. Invoked by [valueForKey:](value%28forkey_%29.md) when it finds no property corresponding to `key`.
- [storedValueForKey:](storedvalue%28forkey_%29.md): Deprecated. Returns the property identified by a given key.
- [takeStoredValue:forKey:](takestoredvalue%28__forkey_%29.md): Deprecated. Sets the value of the property identified by a given key.
- [takeValuesFromDictionary:](takevalues%28from_%29.md): Deprecated. Sets properties of the receiver with values from a given dictionary, using its keys to identify the properties
- [takeValue:forKeyPath:](takevalue%28__forkeypath_%29.md): Deprecated. Sets the value for the property identified by `keyPath` to `value`.
- [takeValue:forKey:](takevalue%28__forkey_%29.md): Deprecated. Sets the value for the property identified by `key` to `value`.
- [unableToSetNilForKey:](unabletosetnil%28forkey_%29.md): Deprecated. Invoked if `key` is represented by a scalar attribute.
- [valuesForKeys:](values%28forkeys_%29.md): Deprecated. Returns a dictionary containing as keys the property names in `keys`, with corresponding values being the corresponding property values.
