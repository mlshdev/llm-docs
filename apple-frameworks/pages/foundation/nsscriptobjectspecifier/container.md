> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptobjectspecifier/container](https://developer.apple.com/documentation/foundation/nsscriptobjectspecifier/container)

# container (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the container specifier of the receiver.

## Declaration

```swift
var container: NSScriptObjectSpecifier? { get set }
```

## Parameters

- `objSpecifier`: The container specifier for the receiver.

## See Also

### Getting, testing, and setting containers

- [containerClassDescription](containerclassdescription.md): Sets the class description of the receiver’s container specifier to a given specifier.
- [containerIsObjectBeingTested](containerisobjectbeingtested.md): Sets whether the receiver’s container should be an object involved in a filter reference or the top-level object.
- [containerIsRangeContainerObject](containerisrangecontainerobject.md): Sets whether the receiver’s container is to be the container for a range specifier or a top-level object.

# containerSpecifier (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the container specifier of the receiver.

## Declaration

```objectivec
@property (retain, nullable) NSScriptObjectSpecifier * containerSpecifier;
```

## Parameters

- `objSpecifier`: The container specifier for the receiver.

## See Also

### Getting, testing, and setting containers

- [containerClassDescription](containerclassdescription.md): Sets the class description of the receiver’s container specifier to a given specifier.
- [containerIsObjectBeingTested](containerisobjectbeingtested.md): Sets whether the receiver’s container should be an object involved in a filter reference or the top-level object.
- [containerIsRangeContainerObject](containerisrangecontainerobject.md): Sets whether the receiver’s container is to be the container for a range specifier or a top-level object.
