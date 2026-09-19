> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/objectivec/nsobject-swift.class/value(withname:inpropertywithkey:)

# value(withName:inPropertyWithKey:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS

Retrieves a named object from the collection specified by the passed key.

## Declaration

```swift
func value(withName name: String, inPropertyWithKey key: String) -> Any?
```

<a id="Discussion"></a>

## Discussion

The method `valueIn<Key>WithName:` is used if it exists. Otherwise, raises an `NSUndefinedKeyException`.

## See Also

### Access by name, key, or ID

- [insertValue(\_:inPropertyWithKey:)](insertvalue%28__inpropertywithkey_%29.md): Inserts an object in the collection specified by the passed key.
- [value(withUniqueID:inPropertyWithKey:)](value%28withuniqueid_inpropertywithkey_%29.md): Retrieves an object by ID from the collection specified by the passed key.

# valueWithName:inPropertyWithKey: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS

Retrieves a named object from the collection specified by the passed key.

## Declaration

```objectivec
- (id) valueWithName:(NSString *) name inPropertyWithKey:(NSString *) key;
```

<a id="Discussion"></a>

## Discussion

The method `valueIn<Key>WithName:` is used if it exists. Otherwise, raises an `NSUndefinedKeyException`.

## See Also

### Access by name, key, or ID

- [insertValue:inPropertyWithKey:](insertvalue%28__inpropertywithkey_%29.md): Inserts an object in the collection specified by the passed key.
- [valueWithUniqueID:inPropertyWithKey:](value%28withuniqueid_inpropertywithkey_%29.md): Retrieves an object by ID from the collection specified by the passed key.
