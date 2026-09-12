> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/value(at:inpropertywithkey:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/value(at:inpropertywithkey:))

# value(at:inPropertyWithKey:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS

Retrieves an indexed object from the collection specified by the passed key.

## Declaration

```swift
func value(at index: Int, inPropertyWithKey key: String) -> Any?
```

<a id="Discussion"></a>

## Discussion

This actually works with a single-value key as well if `index` is 0. The method `valueIn<Key>AtIndex:` is used if it exists.

## See Also

### Indexed access

- [insertValue(\_:at:inPropertyWithKey:)](insertvalue%28__at_inpropertywithkey_%29.md): Inserts an object at the specified index in the collection specified by the passed key.
- [removeValue(at:fromPropertyWithKey:)](removevalue%28at_frompropertywithkey_%29.md): Removes the object at the specified index from the collection specified by the passed key.
- [replaceValue(at:inPropertyWithKey:withValue:)](replacevalue%28at_inpropertywithkey_withvalue_%29.md): Replaces the object at the specified index in the collection specified by the passed key.

# valueAtIndex:inPropertyWithKey: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS

Retrieves an indexed object from the collection specified by the passed key.

## Declaration

```objectivec
- (id) valueAtIndex:(NSUInteger) index inPropertyWithKey:(NSString *) key;
```

<a id="Discussion"></a>

## Discussion

This actually works with a single-value key as well if `index` is 0. The method `valueIn<Key>AtIndex:` is used if it exists.

## See Also

### Indexed access

- [insertValue:atIndex:inPropertyWithKey:](insertvalue%28__at_inpropertywithkey_%29.md): Inserts an object at the specified index in the collection specified by the passed key.
- [removeValueAtIndex:fromPropertyWithKey:](removevalue%28at_frompropertywithkey_%29.md): Removes the object at the specified index from the collection specified by the passed key.
- [replaceValueAtIndex:inPropertyWithKey:withValue:](replacevalue%28at_inpropertywithkey_withvalue_%29.md): Replaces the object at the specified index in the collection specified by the passed key.
