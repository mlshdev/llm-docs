> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsclassdescription/tomanyrelationshipkeys](https://developer.apple.com/documentation/foundation/nsclassdescription/tomanyrelationshipkeys)

# toManyRelationshipKeys (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Overridden by subclasses to return the keys for the to-many relationship properties of instances of the described class.

## Declaration

```swift
var toManyRelationshipKeys: [String] { get }
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects containing the names of the to-many relationship properties of instances of the described class.

<a id="Discussion"></a>

## Discussion

To-many relationship properties are arrays of objects.

If you have an instance of the class the receiver describes, you can use the `NSObject` instance method [toManyRelationshipKeys](../../objectivec/nsobject-swift.class/tomanyrelationshipkeys.md) instead.

## See Also

### Related Documentation

- [attributeKeys](attributekeys.md): Overridden by subclasses to return the names of attributes of instances of the described class.

### Relationship keys

- [inverse(forRelationshipKey:)](inverse%28forrelationshipkey_%29.md): Overridden by subclasses to return the name of the inverse relationship from a relationship specified by a given key.
- [toOneRelationshipKeys](toonerelationshipkeys.md): Overridden by subclasses to return the keys for the to-one relationship properties of instances of the described class.

# toManyRelationshipKeys (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Overridden by subclasses to return the keys for the to-many relationship properties of instances of the described class.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * toManyRelationshipKeys;
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects containing the names of the to-many relationship properties of instances of the described class.

<a id="Discussion"></a>

## Discussion

To-many relationship properties are arrays of objects.

If you have an instance of the class the receiver describes, you can use the `NSObject` instance method [toManyRelationshipKeys](../../objectivec/nsobject-swift.class/tomanyrelationshipkeys.md) instead.

## See Also

### Related Documentation

- [attributeKeys](attributekeys.md): Overridden by subclasses to return the names of attributes of instances of the described class.

### Relationship keys

- [inverseForRelationshipKey:](inverse%28forrelationshipkey_%29.md): Overridden by subclasses to return the name of the inverse relationship from a relationship specified by a given key.
- [toOneRelationshipKeys](toonerelationshipkeys.md): Overridden by subclasses to return the keys for the to-one relationship properties of instances of the described class.
