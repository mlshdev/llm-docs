> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlfunction/vertexattributes

# vertexAttributes (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An array that describes the vertex input attributes to a vertex function.

## Declaration

```swift
var vertexAttributes: [MTLVertexAttribute]? { get }
```

## See Also

### Retrieving function attributes

- [stageInputAttributes](stageinputattributes.md): An array that describes the input attributes to the function.

# vertexAttributes (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An array that describes the vertex input attributes to a vertex function.

## Declaration

```objectivec
@property (readonly, nullable) NSArray<MTLVertexAttribute *> * vertexAttributes;
```

## See Also

### Retrieving function attributes

- [stageInputAttributes](stageinputattributes.md): An array that describes the input attributes to the function.
