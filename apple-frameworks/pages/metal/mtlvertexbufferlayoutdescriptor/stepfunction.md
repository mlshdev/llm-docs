> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvertexbufferlayoutdescriptor/stepfunction](https://developer.apple.com/documentation/metal/mtlvertexbufferlayoutdescriptor/stepfunction)

# stepFunction (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The circumstances under which the vertex and its attributes are presented to the vertex function.

## Declaration

```swift
var stepFunction: MTLVertexStepFunction { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [MTLVertexStepFunction.perVertex](../mtlvertexstepfunction/pervertex.md).

If `stepFunction` is [MTLVertexStepFunction.perVertex](../mtlvertexstepfunction/pervertex.md), the function fetches new attribute data based on the `[[ vertex_id ]]` attribute qualifier. The function fetches new attribute data each time a new vertex is processed. In this case, `stepRate` needs to be set to `1`, which is its default value.

If `stepFunction` is [MTLVertexStepFunction.perInstance](../mtlvertexstepfunction/perinstance.md), the function fetches new attribute data based on the `[[ instance_id ]]` attribute qualifier.  In this case, `stepRate` needs to be greater than `0` and its value determines how often the function fetches new attribute data.

If `stepFunction` is [MTLVertexStepFunction.constant](../mtlvertexstepfunction/constant.md), the function fetches attribute data just once, and that attribute data is used for every vertex. In this case,`stepRate` needs to be set to `0`.

## See Also

### Related Documentation

- [Metal Shading Language Guide](https://developer.apple.com/library/archive/documentation/Metal/Reference/MetalShadingLanguageGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014364)
- [Metal Programming Guide](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014221)

### Organizing the vertex buffer layout

- [stepRate](steprate.md): The interval at which the vertex and its attributes are presented to the vertex function.
- [stride](stride.md): The number of bytes between the first byte of two consecutive vertices in a buffer.
- [MTLVertexStepFunction](../mtlvertexstepfunction.md): The frequency with which the vertex function or post-tessellation vertex function fetches attribute data.

# stepFunction (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The circumstances under which the vertex and its attributes are presented to the vertex function.

## Declaration

```objectivec
@property (nonatomic, assign) MTLVertexStepFunction stepFunction;
```

<a id="discussion"></a>

## Discussion

The default value is [MTLVertexStepFunctionPerVertex](../mtlvertexstepfunction/pervertex.md).

If `stepFunction` is [MTLVertexStepFunctionPerVertex](../mtlvertexstepfunction/pervertex.md), the function fetches new attribute data based on the `[[ vertex_id ]]` attribute qualifier. The function fetches new attribute data each time a new vertex is processed. In this case, `stepRate` needs to be set to `1`, which is its default value.

If `stepFunction` is [MTLVertexStepFunctionPerInstance](../mtlvertexstepfunction/perinstance.md), the function fetches new attribute data based on the `[[ instance_id ]]` attribute qualifier.  In this case, `stepRate` needs to be greater than `0` and its value determines how often the function fetches new attribute data.

If `stepFunction` is [MTLVertexStepFunctionConstant](../mtlvertexstepfunction/constant.md), the function fetches attribute data just once, and that attribute data is used for every vertex. In this case,`stepRate` needs to be set to `0`.

## See Also

### Related Documentation

- [Metal Shading Language Guide](https://developer.apple.com/library/archive/documentation/Metal/Reference/MetalShadingLanguageGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014364)
- [Metal Programming Guide](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014221)

### Organizing the vertex buffer layout

- [stepRate](steprate.md): The interval at which the vertex and its attributes are presented to the vertex function.
- [stride](stride.md): The number of bytes between the first byte of two consecutive vertices in a buffer.
- [MTLVertexStepFunction](../mtlvertexstepfunction.md): The frequency with which the vertex function or post-tessellation vertex function fetches attribute data.
