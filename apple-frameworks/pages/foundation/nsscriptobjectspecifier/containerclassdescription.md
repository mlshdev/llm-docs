> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptobjectspecifier/containerclassdescription](https://developer.apple.com/documentation/foundation/nsscriptobjectspecifier/containerclassdescription)

# containerClassDescription (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the class description of the receiver’s container specifier to a given specifier.

## Declaration

```swift
var containerClassDescription: NSScriptClassDescription? { get set }
```

## Parameters

- `classDescription`: The class description of the receiver’s container specifier.

## See Also

### Getting, testing, and setting containers

- [containerIsObjectBeingTested](containerisobjectbeingtested.md): Sets whether the receiver’s container should be an object involved in a filter reference or the top-level object.
- [containerIsRangeContainerObject](containerisrangecontainerobject.md): Sets whether the receiver’s container is to be the container for a range specifier or a top-level object.
- [container](container.md): Sets the container specifier of the receiver.

# containerClassDescription (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the class description of the receiver’s container specifier to a given specifier.

## Declaration

```objectivec
@property (retain, nullable) NSScriptClassDescription * containerClassDescription;
```

## Parameters

- `classDescription`: The class description of the receiver’s container specifier.

## See Also

### Getting, testing, and setting containers

- [containerIsObjectBeingTested](containerisobjectbeingtested.md): Sets whether the receiver’s container should be an object involved in a filter reference or the top-level object.
- [containerIsRangeContainerObject](containerisrangecontainerobject.md): Sets whether the receiver’s container is to be the container for a range specifier or a top-level object.
- [containerSpecifier](container.md): Sets the container specifier of the receiver.
