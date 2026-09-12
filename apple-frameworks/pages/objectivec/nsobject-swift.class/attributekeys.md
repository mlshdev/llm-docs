> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/attributekeys](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/attributekeys)

# attributeKeys (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

An array of `NSString` objects containing the names of immutable values that instances of the receiver’s class contain.

## Declaration

```swift
var attributeKeys: [String] { get }
```

<a id="Discussion"></a>

## Discussion

`NSObject`’s implementation of `attributeKeys` simply calls `[[self classDescription] attributeKeys]`. To make use of the default implementation, you must therefore implement and register a suitable class description—see [NSClassDescription](../../foundation/nsclassdescription.md).

## See Also

### Working with Class Descriptions

- [classDescription](classdescription.md): An object containing information about the attributes and relationships of the receiver’s class.
- [inverse(forRelationshipKey:)](inverse%28forrelationshipkey_%29.md): For a given key that defines the name of the relationship from the receiver’s class to another class, returns the name of the relationship from the other class to the receiver’s class.
- [toManyRelationshipKeys](tomanyrelationshipkeys.md): An array containing the keys for the to-many relationship properties of the receiver.
- [toOneRelationshipKeys](toonerelationshipkeys.md): The keys for the to-one relationship properties of the receiver, if any.

# attributeKeys (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

An array of `NSString` objects containing the names of immutable values that instances of the receiver’s class contain.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * attributeKeys;
```

<a id="Discussion"></a>

## Discussion

`NSObject`’s implementation of `attributeKeys` simply calls `[[self classDescription] attributeKeys]`. To make use of the default implementation, you must therefore implement and register a suitable class description—see [NSClassDescription](../../foundation/nsclassdescription.md).

## See Also

### Working with Class Descriptions

- [classDescription](classdescription.md): An object containing information about the attributes and relationships of the receiver’s class.
- [inverseForRelationshipKey:](inverse%28forrelationshipkey_%29.md): For a given key that defines the name of the relationship from the receiver’s class to another class, returns the name of the relationship from the other class to the receiver’s class.
- [toManyRelationshipKeys](tomanyrelationshipkeys.md): An array containing the keys for the to-many relationship properties of the receiver.
- [toOneRelationshipKeys](toonerelationshipkeys.md): The keys for the to-one relationship properties of the receiver, if any.
