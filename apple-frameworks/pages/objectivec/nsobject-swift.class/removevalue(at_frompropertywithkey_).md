> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/removevalue(at:frompropertywithkey:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/removevalue(at:frompropertywithkey:))

# removeValue(at:fromPropertyWithKey:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS

Removes the object at the specified index from the collection specified by the passed key.

## Declaration

```swift
func removeValue(at index: Int, fromPropertyWithKey key: String)
```

<a id="Discussion"></a>

## Discussion

The method `removeFrom<Key>AtIndex:` is invoked if it exists. If no corresponding scripting-KVC-compliant method (`-removeFrom<Key>AtIndex:`) is found, this method invokes `-mutableArrayValueForKey:` and mutates the result.

> **Note**

>  Prior to OS X version 10.4, this method did not invoke `-mutableArrayValueForKey:`.

## See Also

### Indexed access

- [insertValue(\_:at:inPropertyWithKey:)](insertvalue%28__at_inpropertywithkey_%29.md): Inserts an object at the specified index in the collection specified by the passed key.
- [replaceValue(at:inPropertyWithKey:withValue:)](replacevalue%28at_inpropertywithkey_withvalue_%29.md): Replaces the object at the specified index in the collection specified by the passed key.
- [value(at:inPropertyWithKey:)](value%28at_inpropertywithkey_%29.md): Retrieves an indexed object from the collection specified by the passed key.

# removeValueAtIndex:fromPropertyWithKey: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS

Removes the object at the specified index from the collection specified by the passed key.

## Declaration

```objectivec
- (void) removeValueAtIndex:(NSUInteger) index fromPropertyWithKey:(NSString *) key;
```

<a id="Discussion"></a>

## Discussion

The method `removeFrom<Key>AtIndex:` is invoked if it exists. If no corresponding scripting-KVC-compliant method (`-removeFrom<Key>AtIndex:`) is found, this method invokes `-mutableArrayValueForKey:` and mutates the result.

> **Note**

>  Prior to OS X version 10.4, this method did not invoke `-mutableArrayValueForKey:`.

## See Also

### Indexed access

- [insertValue:atIndex:inPropertyWithKey:](insertvalue%28__at_inpropertywithkey_%29.md): Inserts an object at the specified index in the collection specified by the passed key.
- [replaceValueAtIndex:inPropertyWithKey:withValue:](replacevalue%28at_inpropertywithkey_withvalue_%29.md): Replaces the object at the specified index in the collection specified by the passed key.
- [valueAtIndex:inPropertyWithKey:](value%28at_inpropertywithkey_%29.md): Retrieves an indexed object from the collection specified by the passed key.
