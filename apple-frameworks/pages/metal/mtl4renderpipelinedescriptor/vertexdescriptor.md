> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4renderpipelinedescriptor/vertexdescriptor](https://developer.apple.com/documentation/metal/mtl4renderpipelinedescriptor/vertexdescriptor)

# vertexDescriptor (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures an optional vertex descriptor for the vertex input.

## Declaration

```swift
@NSCopying var vertexDescriptor: MTLVertexDescriptor? { get set }
```

<a id="discussion"></a>

## Discussion

A vertex descriptor specifies the layout of your vertex data, allowing your vertex shaders to access the content in your vertex arrays via the `[[stage_in]]` attribute in Metal Shading Language.

# vertexDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures an optional vertex descriptor for the vertex input.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) MTLVertexDescriptor * vertexDescriptor;
```

<a id="discussion"></a>

## Discussion

A vertex descriptor specifies the layout of your vertex data, allowing your vertex shaders to access the content in your vertex arrays via the `[[stage_in]]` attribute in Metal Shading Language.
