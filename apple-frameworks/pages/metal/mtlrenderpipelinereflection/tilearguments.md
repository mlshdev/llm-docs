> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinereflection/tilearguments](https://developer.apple.com/documentation/metal/mtlrenderpipelinereflection/tilearguments)

# tileArguments (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 16.0) · iPadOS 11.0+ (deprecated in 16.0) · Mac Catalyst 14.0+ (deprecated in 16.0) · macOS 11.0+ (deprecated in 13.0) · tvOS 14.5+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

An array of argument instances, each of which represent a parameter of the pipeline state’s tile shader.

> Use [tileBindings](tilebindings.md) instead.

## Declaration

```swift
var tileArguments: [MTLArgument]? { get }
```

<a id="discussion"></a>

## Discussion

The [MTLArgument](../mtlargument.md) elements in the array are in the same order as the tile shader’s declaration signature.

## See Also

### Deprecated

- [vertexArguments](vertexarguments.md): Deprecated. An array of argument instances, each of which represent a parameter of the pipeline state’s vertex shader.
- [fragmentArguments](fragmentarguments.md): Deprecated. An array of argument instances, each of which represent a parameter of the pipeline state’s fragment shader.

# tileArguments (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 16.0) · iPadOS 11.0+ (deprecated in 16.0) · Mac Catalyst 14.0+ (deprecated in 16.0) · macOS 11.0+ (deprecated in 13.0) · tvOS 14.5+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

An array of argument instances, each of which represent a parameter of the pipeline state’s tile shader.

> Use [tileBindings](tilebindings.md) instead.

## Declaration

```objectivec
@property (readonly, nullable) NSArray<MTLArgument *> * tileArguments;
```

<a id="discussion"></a>

## Discussion

The [MTLArgument](../mtlargument.md) elements in the array are in the same order as the tile shader’s declaration signature.

## See Also

### Deprecated

- [vertexArguments](vertexarguments.md): Deprecated. An array of argument instances, each of which represent a parameter of the pipeline state’s vertex shader.
- [fragmentArguments](fragmentarguments.md): Deprecated. An array of argument instances, each of which represent a parameter of the pipeline state’s fragment shader.
