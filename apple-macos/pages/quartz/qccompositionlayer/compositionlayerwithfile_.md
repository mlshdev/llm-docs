> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccompositionlayer/compositionlayerwithfile:](https://developer.apple.com/documentation/quartz/qccompositionlayer/compositionlayerwithfile:)

# compositionLayerWithFile:

**Interface language:** Objective-C

**Framework:** Quartz  
**Kind:** Type Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Creates and returns an instance of a composition layer using the Quartz Composer composition in the specified file.

## Declaration

```objectivec
+ (QCCompositionLayer *) compositionLayerWithFile:(NSString *) path;
```

## Parameters

- `path`: A string that specifies the location of a Quartz Composer composition.

<a id="return-value"></a>

## Return Value

An initialized `QCCompositionLayer` object or `nil` if initialization is not successful.

## See Also

### Related Documentation

- [Core Animation Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreAnimation_guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004514)

### Creating a Composition Layer

- [compositionLayerWithComposition:](compositionlayerwithcomposition_.md): Deprecated. Creates and returns an instance of a composition layer using the provided Quartz Composer composition.
- [initWithFile:](init%28file_%29.md): Deprecated. Initializes and returns a composition layer using the Quartz Composer composition in the specified file.
- [initWithComposition:](init%28composition_%29.md): Deprecated. Initializes and returns a composition layer using the provided Quartz Composer composition.
