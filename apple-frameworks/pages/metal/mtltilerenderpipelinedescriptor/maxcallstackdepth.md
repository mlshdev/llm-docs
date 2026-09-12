> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltilerenderpipelinedescriptor/maxcallstackdepth](https://developer.apple.com/documentation/metal/mtltilerenderpipelinedescriptor/maxcallstackdepth)

# maxCallStackDepth (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The maximum call stack depth for indirect function calls in tile shaders.

## Declaration

```swift
var maxCallStackDepth: Int { get set }
```

<a id="discussion"></a>

## Discussion

The property’s default value is `1`. Change its value if you use recursive functions in your tile dispatch.

The maximum call stack depth applies only to indirect function calls in your shader, and affects the upper bound of stack memory for each thread. Indirect function calls include those to visible functions, intersection functions, and to dynamic libraries.

> **Tip**

>  To avoid a runtime performance impact, keep this value as small as possible because the framework reserves a large call stack.

## See Also

### Specifying graphics functions and associated data

- [tileFunction](tilefunction.md): The compute kernel or fragment function the pipeline calls.
- [tileBuffers](tilebuffers.md): An array that contains the buffer mutability options for a render pipeline’s tile function.

# maxCallStackDepth (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The maximum call stack depth for indirect function calls in tile shaders.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger maxCallStackDepth;
```

<a id="discussion"></a>

## Discussion

The property’s default value is `1`. Change its value if you use recursive functions in your tile dispatch.

The maximum call stack depth applies only to indirect function calls in your shader, and affects the upper bound of stack memory for each thread. Indirect function calls include those to visible functions, intersection functions, and to dynamic libraries.

> **Tip**

>  To avoid a runtime performance impact, keep this value as small as possible because the framework reserves a large call stack.

## See Also

### Specifying graphics functions and associated data

- [tileFunction](tilefunction.md): The compute kernel or fragment function the pipeline calls.
- [tileBuffers](tilebuffers.md): An array that contains the buffer mutability options for a render pipeline’s tile function.
