> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspropertydescription/name](https://developer.apple.com/documentation/coredata/nspropertydescription/name)

# name (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The name of the receiver.

## Declaration

```swift
var name: String { get set }
```

<a id="Discussion"></a>

## Discussion

A property name cannot be the same as any no-parameter method name of `NSObject` or `NSManagedObject`. Since there are hundreds of methods on `NSObject` which may conflict with property names, you should avoid very general words (like “font”, and “color”) and words or phrases that overlap with Cocoa paradigms (such as “isEditing” and “objectSpecifier”).

<a id="Special-Considerations"></a>

### Special Considerations

Setting the name raises an exception if the receiver’s model has been used by an object graph manager.

## See Also

### Accessing Features of a Property

- [entity](entity.md): The entity description of the receiver.
- [isIndexed](isindexed.md): Deprecated. A Boolean value that indicates whether the receiver should be indexed for searching.
- [isOptional](isoptional.md): A Boolean value that indicates whether the receiver is optional.
- [isTransient](istransient.md): A Boolean value that indicates whether the receiver is transient.
- [userInfo](userinfo.md): The user info dictionary of the receiver.

# name (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The name of the receiver.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * name;
```

<a id="Discussion"></a>

## Discussion

A property name cannot be the same as any no-parameter method name of `NSObject` or `NSManagedObject`. Since there are hundreds of methods on `NSObject` which may conflict with property names, you should avoid very general words (like “font”, and “color”) and words or phrases that overlap with Cocoa paradigms (such as “isEditing” and “objectSpecifier”).

<a id="Special-Considerations"></a>

### Special Considerations

Setting the name raises an exception if the receiver’s model has been used by an object graph manager.

## See Also

### Accessing Features of a Property

- [entity](entity.md): The entity description of the receiver.
- [indexed](isindexed.md): Deprecated. A Boolean value that indicates whether the receiver should be indexed for searching.
- [optional](isoptional.md): A Boolean value that indicates whether the receiver is optional.
- [transient](istransient.md): A Boolean value that indicates whether the receiver is transient.
- [userInfo](userinfo.md): The user info dictionary of the receiver.
