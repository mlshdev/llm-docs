> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspropertydescription/isindexed](https://developer.apple.com/documentation/coredata/nspropertydescription/isindexed)

# isIndexed (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 11.0) · iPadOS 3.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.0)

A Boolean value that indicates whether the receiver should be indexed for searching.

> Use NSEntityDescription.indexes instead

## Declaration

```swift
var isIndexed: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver should be indexed for searching, otherwise [false](https://developer.apple.com/documentation/swift/false). Object stores can optionally use this information upon store creation for operations such as defining indexes.

<a id="Special-Considerations"></a>

### Special Considerations

Setting this property raises an exception if the receiver’s model has been used by an object graph manager.

## See Also

### Accessing Features of a Property

- [entity](entity.md): The entity description of the receiver.
- [isOptional](isoptional.md): A Boolean value that indicates whether the receiver is optional.
- [isTransient](istransient.md): A Boolean value that indicates whether the receiver is transient.
- [name](name.md): The name of the receiver.
- [userInfo](userinfo.md): The user info dictionary of the receiver.

# indexed (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 11.0) · iPadOS 3.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.0)

A Boolean value that indicates whether the receiver should be indexed for searching.

> Use NSEntityDescription.indexes instead

## Declaration

```objectivec
@property (getter=isIndexed) BOOL indexed;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver should be indexed for searching, otherwise [false](https://developer.apple.com/documentation/swift/false). Object stores can optionally use this information upon store creation for operations such as defining indexes.

<a id="Special-Considerations"></a>

### Special Considerations

Setting this property raises an exception if the receiver’s model has been used by an object graph manager.

## See Also

### Accessing Features of a Property

- [entity](entity.md): The entity description of the receiver.
- [optional](isoptional.md): A Boolean value that indicates whether the receiver is optional.
- [transient](istransient.md): A Boolean value that indicates whether the receiver is transient.
- [name](name.md): The name of the receiver.
- [userInfo](userinfo.md): The user info dictionary of the receiver.
