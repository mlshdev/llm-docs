> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccompositionlayer/compositionlayerwithcomposition:](https://developer.apple.com/documentation/quartz/qccompositionlayer/compositionlayerwithcomposition:)

# compositionLayerWithComposition:

**Interface language:** Objective-C

**Framework:** Quartz  
**Kind:** Type Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Creates and returns an instance of a composition layer using the provided Quartz Composer composition.

## Declaration

```objectivec
+ (QCCompositionLayer *) compositionLayerWithComposition:(QCComposition *) composition;
```

## Parameters

- `composition`: The Quartz Composer composition to use as content.

<a id="return-value"></a>

## Return Value

An initialized `QCCompositionLayer` object or `nil` if initialization is not successful.

## See Also

### Creating a Composition Layer

- [compositionLayerWithFile:](compositionlayerwithfile_.md): Deprecated. Creates and returns an instance of a composition layer using the Quartz Composer composition in the specified file.
- [initWithFile:](init%28file_%29.md): Deprecated. Initializes and returns a composition layer using the Quartz Composer composition in the specified file.
- [initWithComposition:](init%28composition_%29.md): Deprecated. Initializes and returns a composition layer using the provided Quartz Composer composition.
