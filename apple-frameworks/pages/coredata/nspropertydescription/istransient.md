> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspropertydescription/istransient](https://developer.apple.com/documentation/coredata/nspropertydescription/istransient)

# isTransient (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the receiver is transient.

## Declaration

```swift
var isTransient: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver is transient, otherwise [false](https://developer.apple.com/documentation/swift/false). The transient flag specifies whether or not a property’s value is ignored when an object is saved to a persistent store. Transient properties are not saved to the persistent store, but are still managed for undo, redo, validation, and so on.

<a id="Special-Considerations"></a>

### Special Considerations

Setting this property raises an exception if the receiver’s model has been used by an object graph manager.

## See Also

### Accessing Features of a Property

- [entity](entity.md): The entity description of the receiver.
- [isIndexed](isindexed.md): Deprecated. A Boolean value that indicates whether the receiver should be indexed for searching.
- [isOptional](isoptional.md): A Boolean value that indicates whether the receiver is optional.
- [name](name.md): The name of the receiver.
- [userInfo](userinfo.md): The user info dictionary of the receiver.

# transient (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the receiver is transient.

## Declaration

```objectivec
@property (getter=isTransient) BOOL transient;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver is transient, otherwise [false](https://developer.apple.com/documentation/swift/false). The transient flag specifies whether or not a property’s value is ignored when an object is saved to a persistent store. Transient properties are not saved to the persistent store, but are still managed for undo, redo, validation, and so on.

<a id="Special-Considerations"></a>

### Special Considerations

Setting this property raises an exception if the receiver’s model has been used by an object graph manager.

## See Also

### Accessing Features of a Property

- [entity](entity.md): The entity description of the receiver.
- [indexed](isindexed.md): Deprecated. A Boolean value that indicates whether the receiver should be indexed for searching.
- [optional](isoptional.md): A Boolean value that indicates whether the receiver is optional.
- [name](name.md): The name of the receiver.
- [userInfo](userinfo.md): The user info dictionary of the receiver.
