> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunction/stageinputattributes](https://developer.apple.com/documentation/metal/mtlfunction/stageinputattributes)

# stageInputAttributes (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

An array that describes the input attributes to the function.

## Declaration

```swift
var stageInputAttributes: [MTLAttribute]? { get }
```

## See Also

### Retrieving function attributes

- [vertexAttributes](vertexattributes.md): An array that describes the vertex input attributes to a vertex function.

# stageInputAttributes (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

An array that describes the input attributes to the function.

## Declaration

```objectivec
@property (readonly, nullable) NSArray<MTLAttribute *> * stageInputAttributes;
```

## See Also

### Retrieving function attributes

- [vertexAttributes](vertexattributes.md): An array that describes the vertex input attributes to a vertex function.
