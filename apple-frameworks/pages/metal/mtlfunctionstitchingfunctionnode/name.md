> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionstitchingfunctionnode/name](https://developer.apple.com/documentation/metal/mtlfunctionstitchingfunctionnode/name)

# name (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The name of the function to call.

## Declaration

```swift
var name: String { get set }
```

<a id="discussion"></a>

## Discussion

The name needs to match one of the functions in the stitched library descriptor’s [functions](../mtlstitchedlibrarydescriptor/functions.md) property.

## See Also

### Configuring a function node

- [arguments](arguments.md): An ordered list of the nodes that provide the function’s arguments.
- [controlDependencies](controldependencies.md): The list of nodes that need to execute before executing the node.

# name (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The name of the function to call.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nonnull) NSString * name;
```

<a id="discussion"></a>

## Discussion

The name needs to match one of the functions in the stitched library descriptor’s [functions](../mtlstitchedlibrarydescriptor/functions.md) property.

## See Also

### Configuring a function node

- [arguments](arguments.md): An ordered list of the nodes that provide the function’s arguments.
- [controlDependencies](controldependencies.md): The list of nodes that need to execute before executing the node.
