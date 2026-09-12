> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspropertydescription/entity](https://developer.apple.com/documentation/coredata/nspropertydescription/entity)

# entity (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The entity description of the receiver.

## Declaration

```swift
unowned(unsafe) var entity: NSEntityDescription { get }
```

## See Also

### Related Documentation

- [Core Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075)
- [properties](../nsentitydescription/properties.md): An array containing the properties of the receiver.

### Accessing Features of a Property

- [isIndexed](isindexed.md): Deprecated. A Boolean value that indicates whether the receiver should be indexed for searching.
- [isOptional](isoptional.md): A Boolean value that indicates whether the receiver is optional.
- [isTransient](istransient.md): A Boolean value that indicates whether the receiver is transient.
- [name](name.md): The name of the receiver.
- [userInfo](userinfo.md): The user info dictionary of the receiver.

# entity (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The entity description of the receiver.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NSEntityDescription * entity;
```

## See Also

### Related Documentation

- [Core Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075)
- [properties](../nsentitydescription/properties.md): An array containing the properties of the receiver.

### Accessing Features of a Property

- [indexed](isindexed.md): Deprecated. A Boolean value that indicates whether the receiver should be indexed for searching.
- [optional](isoptional.md): A Boolean value that indicates whether the receiver is optional.
- [transient](istransient.md): A Boolean value that indicates whether the receiver is transient.
- [name](name.md): The name of the receiver.
- [userInfo](userinfo.md): The user info dictionary of the receiver.
