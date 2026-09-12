> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/inverse(forrelationshipkey:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/inverse(forrelationshipkey:))

# inverse(forRelationshipKey:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS

For a given key that defines the name of the relationship from the receiver’s class to another class, returns the name of the relationship from the other class to the receiver’s class.

## Declaration

```swift
func inverse(forRelationshipKey relationshipKey: String) -> String?
```

## Parameters

- `relationshipKey`: The name of the relationship from the receiver’s class to another class.

<a id="return-value"></a>

## Return Value

The name of the relationship that is the inverse of the receiver’s relationship named `relationshipKey`.

<a id="Discussion"></a>

## Discussion

`NSObject`’s implementation of `inverseForRelationshipKey:` simply invokes `[[self classDescription] inverseForRelationshipKey:relationshipKey]`.  To make use of the default implementation, you must therefore implement and register a suitable class description—see [NSClassDescription](../../foundation/nsclassdescription.md).

For example, suppose an Employee class has a relationship named `department` to a Department class, and that Department has a relationship called `employees` to Employee. The statement:

```objc
employee inverseForRelationshipKey:@"department"];
```

returns the string `employees`.

## See Also

### Working with Class Descriptions

- [attributeKeys](attributekeys.md): An array of `NSString` objects containing the names of immutable values that instances of the receiver’s class contain.
- [classDescription](classdescription.md): An object containing information about the attributes and relationships of the receiver’s class.
- [toManyRelationshipKeys](tomanyrelationshipkeys.md): An array containing the keys for the to-many relationship properties of the receiver.
- [toOneRelationshipKeys](toonerelationshipkeys.md): The keys for the to-one relationship properties of the receiver, if any.

# inverseForRelationshipKey: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS

For a given key that defines the name of the relationship from the receiver’s class to another class, returns the name of the relationship from the other class to the receiver’s class.

## Declaration

```objectivec
- (NSString *) inverseForRelationshipKey:(NSString *) relationshipKey;
```

## Parameters

- `relationshipKey`: The name of the relationship from the receiver’s class to another class.

<a id="return-value"></a>

## Return Value

The name of the relationship that is the inverse of the receiver’s relationship named `relationshipKey`.

<a id="Discussion"></a>

## Discussion

`NSObject`’s implementation of `inverseForRelationshipKey:` simply invokes `[[self classDescription] inverseForRelationshipKey:relationshipKey]`.  To make use of the default implementation, you must therefore implement and register a suitable class description—see [NSClassDescription](../../foundation/nsclassdescription.md).

For example, suppose an Employee class has a relationship named `department` to a Department class, and that Department has a relationship called `employees` to Employee. The statement:

```objc
employee inverseForRelationshipKey:@"department"];
```

returns the string `employees`.

## See Also

### Working with Class Descriptions

- [attributeKeys](attributekeys.md): An array of `NSString` objects containing the names of immutable values that instances of the receiver’s class contain.
- [classDescription](classdescription.md): An object containing information about the attributes and relationships of the receiver’s class.
- [toManyRelationshipKeys](tomanyrelationshipkeys.md): An array containing the keys for the to-many relationship properties of the receiver.
- [toOneRelationshipKeys](toonerelationshipkeys.md): The keys for the to-one relationship properties of the receiver, if any.
