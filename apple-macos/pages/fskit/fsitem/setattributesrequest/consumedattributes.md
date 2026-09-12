> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsitem/setattributesrequest/consumedattributes](https://developer.apple.com/documentation/fskit/fsitem/setattributesrequest/consumedattributes)

# consumedAttributes (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The attributes successfully used by the file system.

## Declaration

```swift
var consumedAttributes: FSItem.Attribute { get set }
```

<a id="discussion"></a>

## Discussion

This property is a bit field in Objective-C and an [OptionSet](https://developer.apple.com/documentation/swift/optionset) in Swift.

## See Also

### Inspecting used attributes

- [wasAttributeConsumed(\_:)](wasattributeconsumed%28__%29.md): A method that indicates whether the file system used the given attribute.
- [FSItem.Attribute](../attribute.md): A value that indicates a set of item attributes to get or set.

# consumedAttributes (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The attributes successfully used by the file system.

## Declaration

```objectivec
@property (nonatomic) FSItemAttribute consumedAttributes;
```

<a id="discussion"></a>

## Discussion

This property is a bit field in Objective-C and an [OptionSet](https://developer.apple.com/documentation/swift/optionset) in Swift.

## See Also

### Inspecting used attributes

- [wasAttributeConsumed:](wasattributeconsumed%28__%29.md): A method that indicates whether the file system used the given attribute.
- [FSItemAttribute](../attribute.md): A value that indicates a set of item attributes to get or set.
