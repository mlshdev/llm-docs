> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsscriptobjectspecifier/containerisobjectbeingtested

# containerIsObjectBeingTested (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets whether the receiver’s container should be an object involved in a filter reference or the top-level object.

## Declaration

```swift
var containerIsObjectBeingTested: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the receiver’s container specifier is `nil` and `flag` is [true](https://developer.apple.com/documentation/swift/true), sets the receiver’s container to be an object involved in a filter reference (for example, `whose color is blue`). If the receiver’s container specifier is `nil` and `flag` is [false](https://developer.apple.com/documentation/swift/false), sets the receiver’s container to be the top-level object.

If `flag` is [true](https://developer.apple.com/documentation/swift/true) [containerIsRangeContainerObject](containerisrangecontainerobject.md) should not also be invoked with an argument of [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Getting, testing, and setting containers

- [containerClassDescription](containerclassdescription.md): Sets the class description of the receiver’s container specifier to a given specifier.
- [containerIsRangeContainerObject](containerisrangecontainerobject.md): Sets whether the receiver’s container is to be the container for a range specifier or a top-level object.
- [container](container.md): Sets the container specifier of the receiver.

# containerIsObjectBeingTested (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets whether the receiver’s container should be an object involved in a filter reference or the top-level object.

## Declaration

```objectivec
@property BOOL containerIsObjectBeingTested;
```

<a id="Discussion"></a>

## Discussion

If the receiver’s container specifier is `nil` and `flag` is [true](https://developer.apple.com/documentation/swift/true), sets the receiver’s container to be an object involved in a filter reference (for example, `whose color is blue`). If the receiver’s container specifier is `nil` and `flag` is [false](https://developer.apple.com/documentation/swift/false), sets the receiver’s container to be the top-level object.

If `flag` is [true](https://developer.apple.com/documentation/swift/true) [containerIsRangeContainerObject](containerisrangecontainerobject.md) should not also be invoked with an argument of [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Getting, testing, and setting containers

- [containerClassDescription](containerclassdescription.md): Sets the class description of the receiver’s container specifier to a given specifier.
- [containerIsRangeContainerObject](containerisrangecontainerobject.md): Sets whether the receiver’s container is to be the container for a range specifier or a top-level object.
- [containerSpecifier](container.md): Sets the container specifier of the receiver.
