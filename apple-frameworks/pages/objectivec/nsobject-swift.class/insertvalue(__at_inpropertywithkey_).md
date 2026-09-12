> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/insertvalue(_:at:inpropertywithkey:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/insertvalue(_:at:inpropertywithkey:))

# insertValue(\_:at:inPropertyWithKey:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS

Inserts an object at the specified index in the collection specified by the passed key.

## Declaration

```swift
func insertValue(_ value: Any, at index: Int, inPropertyWithKey key: String)
```

<a id="Discussion"></a>

## Discussion

The method `insertIn<Key>:atIndex:` is invoked if it exists. If no corresponding scripting-KVC-compliant method (`insertIn<Key>:atIndex:` ) is found, this method invokes `mutableArrayValueForKey:` and mutates the result.

> **Note**

>  Prior to OS X version 10.4, this method did not invoke `-mutableArrayValueForKey:`.

## See Also

### Indexed access

- [removeValue(at:fromPropertyWithKey:)](removevalue%28at_frompropertywithkey_%29.md): Removes the object at the specified index from the collection specified by the passed key.
- [replaceValue(at:inPropertyWithKey:withValue:)](replacevalue%28at_inpropertywithkey_withvalue_%29.md): Replaces the object at the specified index in the collection specified by the passed key.
- [value(at:inPropertyWithKey:)](value%28at_inpropertywithkey_%29.md): Retrieves an indexed object from the collection specified by the passed key.

# insertValue:atIndex:inPropertyWithKey: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS

Inserts an object at the specified index in the collection specified by the passed key.

## Declaration

```objectivec
- (void) insertValue:(id) value atIndex:(NSUInteger) index inPropertyWithKey:(NSString *) key;
```

<a id="Discussion"></a>

## Discussion

The method `insertIn<Key>:atIndex:` is invoked if it exists. If no corresponding scripting-KVC-compliant method (`insertIn<Key>:atIndex:` ) is found, this method invokes `mutableArrayValueForKey:` and mutates the result.

> **Note**

>  Prior to OS X version 10.4, this method did not invoke `-mutableArrayValueForKey:`.

## See Also

### Indexed access

- [removeValueAtIndex:fromPropertyWithKey:](removevalue%28at_frompropertywithkey_%29.md): Removes the object at the specified index from the collection specified by the passed key.
- [replaceValueAtIndex:inPropertyWithKey:withValue:](replacevalue%28at_inpropertywithkey_withvalue_%29.md): Replaces the object at the specified index in the collection specified by the passed key.
- [valueAtIndex:inPropertyWithKey:](value%28at_inpropertywithkey_%29.md): Retrieves an indexed object from the collection specified by the passed key.
