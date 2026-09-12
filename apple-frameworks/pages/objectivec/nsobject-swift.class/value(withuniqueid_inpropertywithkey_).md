> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/value(withuniqueid:inpropertywithkey:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/value(withuniqueid:inpropertywithkey:))

# value(withUniqueID:inPropertyWithKey:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS

Retrieves an object by ID from the collection specified by the passed key.

## Declaration

```swift
func value(withUniqueID uniqueID: Any, inPropertyWithKey key: String) -> Any?
```

<a id="Discussion"></a>

## Discussion

The method `valueIn<Key>WithUniqueID:` is invoked if it exists. Otherwise, raises an `NSUndefinedKeyException`. The declared type of `uniqueID` in the constructed method must be `id`, `NSNumber *`, `NSString *`, or one of the scalar types that can be encapsulated by `NSNumber`.

## See Also

### Access by name, key, or ID

- [insertValue(\_:inPropertyWithKey:)](insertvalue%28__inpropertywithkey_%29.md): Inserts an object in the collection specified by the passed key.
- [value(withName:inPropertyWithKey:)](value%28withname_inpropertywithkey_%29.md): Retrieves a named object from the collection specified by the passed key.

# valueWithUniqueID:inPropertyWithKey: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS

Retrieves an object by ID from the collection specified by the passed key.

## Declaration

```objectivec
- (id) valueWithUniqueID:(id) uniqueID inPropertyWithKey:(NSString *) key;
```

<a id="Discussion"></a>

## Discussion

The method `valueIn<Key>WithUniqueID:` is invoked if it exists. Otherwise, raises an `NSUndefinedKeyException`. The declared type of `uniqueID` in the constructed method must be `id`, `NSNumber *`, `NSString *`, or one of the scalar types that can be encapsulated by `NSNumber`.

## See Also

### Access by name, key, or ID

- [insertValue:inPropertyWithKey:](insertvalue%28__inpropertywithkey_%29.md): Inserts an object in the collection specified by the passed key.
- [valueWithName:inPropertyWithKey:](value%28withname_inpropertywithkey_%29.md): Retrieves a named object from the collection specified by the passed key.
