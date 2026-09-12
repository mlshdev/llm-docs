> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/classdescription](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/classdescription)

# classDescription (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

An object containing information about the attributes and relationships of the receiver’s class.

## Declaration

```swift
@NSCopying var classDescription: NSClassDescription { get }
```

## See Also

### Working with Class Descriptions

- [attributeKeys](attributekeys.md): An array of `NSString` objects containing the names of immutable values that instances of the receiver’s class contain.
- [inverse(forRelationshipKey:)](inverse%28forrelationshipkey_%29.md): For a given key that defines the name of the relationship from the receiver’s class to another class, returns the name of the relationship from the other class to the receiver’s class.
- [toManyRelationshipKeys](tomanyrelationshipkeys.md): An array containing the keys for the to-many relationship properties of the receiver.
- [toOneRelationshipKeys](toonerelationshipkeys.md): The keys for the to-one relationship properties of the receiver, if any.

# classDescription (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

An object containing information about the attributes and relationships of the receiver’s class.

## Declaration

```objectivec
@property (copy, readonly) NSClassDescription * classDescription;
```

## See Also

### Working with Class Descriptions

- [attributeKeys](attributekeys.md): An array of `NSString` objects containing the names of immutable values that instances of the receiver’s class contain.
- [inverseForRelationshipKey:](inverse%28forrelationshipkey_%29.md): For a given key that defines the name of the relationship from the receiver’s class to another class, returns the name of the relationship from the other class to the receiver’s class.
- [toManyRelationshipKeys](tomanyrelationshipkeys.md): An array containing the keys for the to-many relationship properties of the receiver.
- [toOneRelationshipKeys](toonerelationshipkeys.md): The keys for the to-one relationship properties of the receiver, if any.
