> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlstitchedlibrarydescriptor/functiongraphs

# functionGraphs (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The function graphs that define the new stitched library’s functions.

## Declaration

```swift
var functionGraphs: [MTLFunctionStitchingGraph] { get set }
```

## See Also

### Configuring a stitched library

- [functions](functions.md): The list of functions for creating the stitched library.

# functionGraphs (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The function graphs that define the new stitched library’s functions.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nonnull) NSArray<MTLFunctionStitchingGraph *> * functionGraphs;
```

## See Also

### Configuring a stitched library

- [functions](functions.md): The list of functions for creating the stitched library.
