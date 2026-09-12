> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinereflection/vertexarguments](https://developer.apple.com/documentation/metal/mtlrenderpipelinereflection/vertexarguments)

# vertexArguments (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

An array of argument instances, each of which represent a parameter of the pipeline state’s vertex shader.

> Use [vertexBindings](vertexbindings.md) instead.

## Declaration

```swift
var vertexArguments: [MTLArgument]? { get }
```

<a id="discussion"></a>

## Discussion

The [MTLArgument](../mtlargument.md) elements in the array are in the same order as the vertex shader’s declaration signature.

## See Also

### Deprecated

- [fragmentArguments](fragmentarguments.md): Deprecated. An array of argument instances, each of which represent a parameter of the pipeline state’s fragment shader.
- [tileArguments](tilearguments.md): Deprecated. An array of argument instances, each of which represent a parameter of the pipeline state’s tile shader.

# vertexArguments (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

An array of argument instances, each of which represent a parameter of the pipeline state’s vertex shader.

> Use [vertexBindings](vertexbindings.md) instead.

## Declaration

```objectivec
@property (readonly, nullable) NSArray<MTLArgument *> * vertexArguments;
```

<a id="discussion"></a>

## Discussion

The [MTLArgument](../mtlargument.md) elements in the array are in the same order as the vertex shader’s declaration signature.

## See Also

### Deprecated

- [fragmentArguments](fragmentarguments.md): Deprecated. An array of argument instances, each of which represent a parameter of the pipeline state’s fragment shader.
- [tileArguments](tilearguments.md): Deprecated. An array of argument instances, each of which represent a parameter of the pipeline state’s tile shader.
