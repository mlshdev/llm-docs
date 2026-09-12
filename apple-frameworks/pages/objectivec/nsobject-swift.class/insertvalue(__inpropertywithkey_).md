> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/insertvalue(_:inpropertywithkey:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/insertvalue(_:inpropertywithkey:))

# insertValue(\_:inPropertyWithKey:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS

Inserts an object in the collection specified by the passed key.

## Declaration

```swift
func insertValue(_ value: Any, inPropertyWithKey key: String)
```

<a id="Discussion"></a>

## Discussion

The method `insertIn<Key>:` is used if it exists. Otherwise, raises an `NSUndefinedKeyException`. This is part of Cocoa’s scripting support for inserting newly-created objects into containers without explicitly specifying a location.

## See Also

### Access by name, key, or ID

- [value(withName:inPropertyWithKey:)](value%28withname_inpropertywithkey_%29.md): Retrieves a named object from the collection specified by the passed key.
- [value(withUniqueID:inPropertyWithKey:)](value%28withuniqueid_inpropertywithkey_%29.md): Retrieves an object by ID from the collection specified by the passed key.

# insertValue:inPropertyWithKey: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS

Inserts an object in the collection specified by the passed key.

## Declaration

```objectivec
- (void) insertValue:(id) value inPropertyWithKey:(NSString *) key;
```

<a id="Discussion"></a>

## Discussion

The method `insertIn<Key>:` is used if it exists. Otherwise, raises an `NSUndefinedKeyException`. This is part of Cocoa’s scripting support for inserting newly-created objects into containers without explicitly specifying a location.

## See Also

### Access by name, key, or ID

- [valueWithName:inPropertyWithKey:](value%28withname_inpropertywithkey_%29.md): Retrieves a named object from the collection specified by the passed key.
- [valueWithUniqueID:inPropertyWithKey:](value%28withuniqueid_inpropertywithkey_%29.md): Retrieves an object by ID from the collection specified by the passed key.
