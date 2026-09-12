> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsclassdescription/attributekeys](https://developer.apple.com/documentation/foundation/nsclassdescription/attributekeys)

# attributeKeys (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Overridden by subclasses to return the names of attributes of instances of the described class.

## Declaration

```swift
var attributeKeys: [String] { get }
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects containing the names of attributes of instances of the described class.

<a id="Discussion"></a>

## Discussion

For example, a class description that describes Movie objects could return the attribute keys `title`, `dateReleased`, and `rating`.

If you have an instance of the class the receiver describes, you can use the `NSObject` instance method [attributeKeys](../../objectivec/nsobject-swift.class/attributekeys.md) instead.

## See Also

### Related Documentation

- [toManyRelationshipKeys](tomanyrelationshipkeys.md): Overridden by subclasses to return the keys for the to-many relationship properties of instances of the described class.
- [toOneRelationshipKeys](toonerelationshipkeys.md): Overridden by subclasses to return the keys for the to-one relationship properties of instances of the described class.

# attributeKeys (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Overridden by subclasses to return the names of attributes of instances of the described class.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * attributeKeys;
```

<a id="return-value"></a>

## Return Value

An array of `NSString` objects containing the names of attributes of instances of the described class.

<a id="Discussion"></a>

## Discussion

For example, a class description that describes Movie objects could return the attribute keys `title`, `dateReleased`, and `rating`.

If you have an instance of the class the receiver describes, you can use the `NSObject` instance method [attributeKeys](../../objectivec/nsobject-swift.class/attributekeys.md) instead.

## See Also

### Related Documentation

- [toManyRelationshipKeys](tomanyrelationshipkeys.md): Overridden by subclasses to return the keys for the to-many relationship properties of instances of the described class.
- [toOneRelationshipKeys](toonerelationshipkeys.md): Overridden by subclasses to return the keys for the to-one relationship properties of instances of the described class.
