> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstitchedlibrarydescriptor/functions](https://developer.apple.com/documentation/metal/mtlstitchedlibrarydescriptor/functions)

# functions (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The list of functions for creating the stitched library.

## Declaration

```swift
var functions: [any MTLFunction] { get set }
```

<a id="discussion"></a>

## Discussion

The function objects need to all be created by the same Metal device object that you’ll use to create the library. The MSL functions referenced by these function objects need to be declared with the `stitchable` attribute, as in the example below:

```metal
[[stitchable]]
 float add(float a, float b)
{
    return a + b;
}
```

## See Also

### Configuring a stitched library

- [functionGraphs](functiongraphs.md): The function graphs that define the new stitched library’s functions.

# functions (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The list of functions for creating the stitched library.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nonnull) NSArray<id<MTLFunction>> * functions;
```

<a id="discussion"></a>

## Discussion

The function objects need to all be created by the same Metal device object that you’ll use to create the library. The MSL functions referenced by these function objects need to be declared with the `stitchable` attribute, as in the example below:

```metal
[[stitchable]]
 float add(float a, float b)
{
    return a + b;
}
```

## See Also

### Configuring a stitched library

- [functionGraphs](functiongraphs.md): The function graphs that define the new stitched library’s functions.
