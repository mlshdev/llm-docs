> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvertexbufferlayoutdescriptor/steprate](https://developer.apple.com/documentation/metal/mtlvertexbufferlayoutdescriptor/steprate)

# stepRate (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The interval at which the vertex and its attributes are presented to the vertex function.

## Declaration

```swift
var stepRate: Int { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `1`. The `stepRate` value, in conjunction with the [stepFunction](stepfunction.md) property, determines how often the function fetches new attribute data. The `stepRate` property is generally used when `stepFunction` is [MTLVertexStepFunction.perInstance](../mtlvertexstepfunction/perinstance.md). If `stepRate` is equal to `1`, new attribute data is fetched for every instance; if `stepRate` is equal to `2`, new attribute data is fetched for every two instances, and so forth.

## See Also

### Organizing the vertex buffer layout

- [stepFunction](stepfunction.md): The circumstances under which the vertex and its attributes are presented to the vertex function.
- [stride](stride.md): The number of bytes between the first byte of two consecutive vertices in a buffer.
- [MTLVertexStepFunction](../mtlvertexstepfunction.md): The frequency with which the vertex function or post-tessellation vertex function fetches attribute data.

# stepRate (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The interval at which the vertex and its attributes are presented to the vertex function.

## Declaration

```objectivec
@property (nonatomic, assign) NSUInteger stepRate;
```

<a id="discussion"></a>

## Discussion

The default value is `1`. The `stepRate` value, in conjunction with the [stepFunction](stepfunction.md) property, determines how often the function fetches new attribute data. The `stepRate` property is generally used when `stepFunction` is [MTLVertexStepFunctionPerInstance](../mtlvertexstepfunction/perinstance.md). If `stepRate` is equal to `1`, new attribute data is fetched for every instance; if `stepRate` is equal to `2`, new attribute data is fetched for every two instances, and so forth.

## See Also

### Organizing the vertex buffer layout

- [stepFunction](stepfunction.md): The circumstances under which the vertex and its attributes are presented to the vertex function.
- [stride](stride.md): The number of bytes between the first byte of two consecutive vertices in a buffer.
- [MTLVertexStepFunction](../mtlvertexstepfunction.md): The frequency with which the vertex function or post-tessellation vertex function fetches attribute data.
