> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/replacevalue(at:inpropertywithkey:withvalue:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/replacevalue(at:inpropertywithkey:withvalue:))

# replaceValue(at:inPropertyWithKey:withValue:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS

Replaces the object at the specified index in the collection specified by the passed key.

## Declaration

```swift
func replaceValue(at index: Int, inPropertyWithKey key: String, withValue value: Any)
```

<a id="Discussion"></a>

## Discussion

The method `replaceIn<Key>:atIndex:` is invoked if it exists. If no corresponding scripting-KVC-compliant method (`-replaceIn<Key>atIndex:`) is found, this method invokes `-mutableArrayValueForKey:` and mutates the result.

> **Note**

>  Prior to OS X version 10.4, this method did not invoke `-mutableArrayValueForKey:`.

## See Also

### Indexed access

- [insertValue(\_:at:inPropertyWithKey:)](insertvalue%28__at_inpropertywithkey_%29.md): Inserts an object at the specified index in the collection specified by the passed key.
- [removeValue(at:fromPropertyWithKey:)](removevalue%28at_frompropertywithkey_%29.md): Removes the object at the specified index from the collection specified by the passed key.
- [value(at:inPropertyWithKey:)](value%28at_inpropertywithkey_%29.md): Retrieves an indexed object from the collection specified by the passed key.

# replaceValueAtIndex:inPropertyWithKey:withValue: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS

Replaces the object at the specified index in the collection specified by the passed key.

## Declaration

```objectivec
- (void) replaceValueAtIndex:(NSUInteger) index inPropertyWithKey:(NSString *) key withValue:(id) value;
```

<a id="Discussion"></a>

## Discussion

The method `replaceIn<Key>:atIndex:` is invoked if it exists. If no corresponding scripting-KVC-compliant method (`-replaceIn<Key>atIndex:`) is found, this method invokes `-mutableArrayValueForKey:` and mutates the result.

> **Note**

>  Prior to OS X version 10.4, this method did not invoke `-mutableArrayValueForKey:`.

## See Also

### Indexed access

- [insertValue:atIndex:inPropertyWithKey:](insertvalue%28__at_inpropertywithkey_%29.md): Inserts an object at the specified index in the collection specified by the passed key.
- [removeValueAtIndex:fromPropertyWithKey:](removevalue%28at_frompropertywithkey_%29.md): Removes the object at the specified index from the collection specified by the passed key.
- [valueAtIndex:inPropertyWithKey:](value%28at_inpropertywithkey_%29.md): Retrieves an indexed object from the collection specified by the passed key.
