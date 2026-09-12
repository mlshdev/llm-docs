> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptobjectspecifier/containerisrangecontainerobject](https://developer.apple.com/documentation/foundation/nsscriptobjectspecifier/containerisrangecontainerobject)

# containerIsRangeContainerObject (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets whether the receiver’s container is to be the container for a range specifier or a top-level object.

## Declaration

```swift
var containerIsRangeContainerObject: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the receiver’s container specifier is `nil` and `flag` is [true](https://developer.apple.com/documentation/swift/true), sets the receiver’s container to be the container for a range specifier. If the receiver’s container specifier is `nil` and `flag` is [false](https://developer.apple.com/documentation/swift/false), sets the receiver’s container to be the top-level object.

If `flag` is [true](https://developer.apple.com/documentation/swift/true), [containerIsObjectBeingTested](containerisobjectbeingtested.md) should not also be invoked with an argument of [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Getting, testing, and setting containers

- [containerClassDescription](containerclassdescription.md): Sets the class description of the receiver’s container specifier to a given specifier.
- [containerIsObjectBeingTested](containerisobjectbeingtested.md): Sets whether the receiver’s container should be an object involved in a filter reference or the top-level object.
- [container](container.md): Sets the container specifier of the receiver.

# containerIsRangeContainerObject (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets whether the receiver’s container is to be the container for a range specifier or a top-level object.

## Declaration

```objectivec
@property BOOL containerIsRangeContainerObject;
```

<a id="Discussion"></a>

## Discussion

If the receiver’s container specifier is `nil` and `flag` is [true](https://developer.apple.com/documentation/swift/true), sets the receiver’s container to be the container for a range specifier. If the receiver’s container specifier is `nil` and `flag` is [false](https://developer.apple.com/documentation/swift/false), sets the receiver’s container to be the top-level object.

If `flag` is [true](https://developer.apple.com/documentation/swift/true), [containerIsObjectBeingTested](containerisobjectbeingtested.md) should not also be invoked with an argument of [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Getting, testing, and setting containers

- [containerClassDescription](containerclassdescription.md): Sets the class description of the receiver’s container specifier to a given specifier.
- [containerIsObjectBeingTested](containerisobjectbeingtested.md): Sets whether the receiver’s container should be an object involved in a filter reference or the top-level object.
- [containerSpecifier](container.md): Sets the container specifier of the receiver.
