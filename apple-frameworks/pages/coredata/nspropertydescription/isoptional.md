> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspropertydescription/isoptional](https://developer.apple.com/documentation/coredata/nspropertydescription/isoptional)

# isOptional (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the receiver is optional.

## Declaration

```swift
var isOptional: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver is optional, otherwise [false](https://developer.apple.com/documentation/swift/false). The optionality flag specifies whether a property’s value can be `nil` before an object can be saved to a persistent store.

<a id="Special-Considerations"></a>

### Special Considerations

Setting this property raises an exception if the receiver’s model has been used by an object graph manager.

## See Also

### Accessing Features of a Property

- [entity](entity.md): The entity description of the receiver.
- [isIndexed](isindexed.md): Deprecated. A Boolean value that indicates whether the receiver should be indexed for searching.
- [isTransient](istransient.md): A Boolean value that indicates whether the receiver is transient.
- [name](name.md): The name of the receiver.
- [userInfo](userinfo.md): The user info dictionary of the receiver.

# optional (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the receiver is optional.

## Declaration

```objectivec
@property (getter=isOptional) BOOL optional;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver is optional, otherwise [false](https://developer.apple.com/documentation/swift/false). The optionality flag specifies whether a property’s value can be `nil` before an object can be saved to a persistent store.

<a id="Special-Considerations"></a>

### Special Considerations

Setting this property raises an exception if the receiver’s model has been used by an object graph manager.

## See Also

### Accessing Features of a Property

- [entity](entity.md): The entity description of the receiver.
- [indexed](isindexed.md): Deprecated. A Boolean value that indicates whether the receiver should be indexed for searching.
- [transient](istransient.md): A Boolean value that indicates whether the receiver is transient.
- [name](name.md): The name of the receiver.
- [userInfo](userinfo.md): The user info dictionary of the receiver.
