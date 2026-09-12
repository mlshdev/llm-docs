> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/toonerelationshipkeys](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/toonerelationshipkeys)

# toOneRelationshipKeys (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The keys for the to-one relationship properties of the receiver, if any.

## Declaration

```swift
var toOneRelationshipKeys: [String] { get }
```

## See Also

### Working with Class Descriptions

- [attributeKeys](attributekeys.md): An array of `NSString` objects containing the names of immutable values that instances of the receiver’s class contain.
- [classDescription](classdescription.md): An object containing information about the attributes and relationships of the receiver’s class.
- [inverse(forRelationshipKey:)](inverse%28forrelationshipkey_%29.md): For a given key that defines the name of the relationship from the receiver’s class to another class, returns the name of the relationship from the other class to the receiver’s class.
- [toManyRelationshipKeys](tomanyrelationshipkeys.md): An array containing the keys for the to-many relationship properties of the receiver.

# toOneRelationshipKeys (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The keys for the to-one relationship properties of the receiver, if any.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * toOneRelationshipKeys;
```

## See Also

### Working with Class Descriptions

- [attributeKeys](attributekeys.md): An array of `NSString` objects containing the names of immutable values that instances of the receiver’s class contain.
- [classDescription](classdescription.md): An object containing information about the attributes and relationships of the receiver’s class.
- [inverseForRelationshipKey:](inverse%28forrelationshipkey_%29.md): For a given key that defines the name of the relationship from the receiver’s class to another class, returns the name of the relationship from the other class to the receiver’s class.
- [toManyRelationshipKeys](tomanyrelationshipkeys.md): An array containing the keys for the to-many relationship properties of the receiver.
