> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspropertydescription/userinfo](https://developer.apple.com/documentation/coredata/nspropertydescription/userinfo)

# userInfo (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The user info dictionary of the receiver.

## Declaration

```swift
var userInfo: [AnyHashable : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

Setting the user info raises an exception if the receiver’s model has been used by an object graph manager.

## See Also

### Accessing Features of a Property

- [entity](entity.md): The entity description of the receiver.
- [isIndexed](isindexed.md): Deprecated. A Boolean value that indicates whether the receiver should be indexed for searching.
- [isOptional](isoptional.md): A Boolean value that indicates whether the receiver is optional.
- [isTransient](istransient.md): A Boolean value that indicates whether the receiver is transient.
- [name](name.md): The name of the receiver.

# userInfo (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The user info dictionary of the receiver.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSDictionary * userInfo;
```

<a id="Discussion"></a>

## Discussion

Setting the user info raises an exception if the receiver’s model has been used by an object graph manager.

## See Also

### Accessing Features of a Property

- [entity](entity.md): The entity description of the receiver.
- [indexed](isindexed.md): Deprecated. A Boolean value that indicates whether the receiver should be indexed for searching.
- [optional](isoptional.md): A Boolean value that indicates whether the receiver is optional.
- [transient](istransient.md): A Boolean value that indicates whether the receiver is transient.
- [name](name.md): The name of the receiver.
