> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsclassdescription/inverse(forrelationshipkey:)](https://developer.apple.com/documentation/foundation/nsclassdescription/inverse(forrelationshipkey:))

# inverse(forRelationshipKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Overridden by subclasses to return the name of the inverse relationship from a relationship specified by a given key.

## Declaration

```swift
func inverse(forRelationshipKey relationshipKey: String) -> String?
```

<a id="return-value"></a>

## Return Value

The name of the inverse relationship from the relationship specified by `relationshipKey`.

<a id="Discussion"></a>

## Discussion

For a given key that defines the name of the relationship from the receiver’s class to another class, returns the name of the relationship from the other class to the receiver’s class. For example, suppose an Employee class has a relationship named `department` to a Department class, and that Department has a relationship named `employees` to Employee. The statement:

```objc
[employee inverseForRelationshipKey:@"department"];
```

returns the string `employees`.

If you have an instance of the class the receiver describes, you can use the `NSObject` instance method [inverse(forRelationshipKey:)](../../objectivec/nsobject-swift.class/inverse%28forrelationshipkey_%29.md) instead.

## See Also

### Relationship keys

- [toManyRelationshipKeys](tomanyrelationshipkeys.md): Overridden by subclasses to return the keys for the to-many relationship properties of instances of the described class.
- [toOneRelationshipKeys](toonerelationshipkeys.md): Overridden by subclasses to return the keys for the to-one relationship properties of instances of the described class.

# inverseForRelationshipKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Overridden by subclasses to return the name of the inverse relationship from a relationship specified by a given key.

## Declaration

```objectivec
- (NSString *) inverseForRelationshipKey:(NSString *) relationshipKey;
```

<a id="return-value"></a>

## Return Value

The name of the inverse relationship from the relationship specified by `relationshipKey`.

<a id="Discussion"></a>

## Discussion

For a given key that defines the name of the relationship from the receiver’s class to another class, returns the name of the relationship from the other class to the receiver’s class. For example, suppose an Employee class has a relationship named `department` to a Department class, and that Department has a relationship named `employees` to Employee. The statement:

```objc
[employee inverseForRelationshipKey:@"department"];
```

returns the string `employees`.

If you have an instance of the class the receiver describes, you can use the `NSObject` instance method [inverseForRelationshipKey:](../../objectivec/nsobject-swift.class/inverse%28forrelationshipkey_%29.md) instead.

## See Also

### Relationship keys

- [toManyRelationshipKeys](tomanyrelationshipkeys.md): Overridden by subclasses to return the keys for the to-many relationship properties of instances of the described class.
- [toOneRelationshipKeys](toonerelationshipkeys.md): Overridden by subclasses to return the keys for the to-one relationship properties of instances of the described class.
