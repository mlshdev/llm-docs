> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccompositionlayer/init(composition:)](https://developer.apple.com/documentation/quartz/qccompositionlayer/init(composition:))

# init(composition:) (Swift)

**Framework:** Quartz  
**Kind:** Initializer  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Initializes and returns a  composition layer using the provided Quartz Composer composition.

> Quartz Composer OpenGL API deprecated. (Define QC_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
init!(composition: QCComposition!)
```

## Parameters

- `composition`: The Quartz Composer composition to use as content.

<a id="return-value"></a>

## Return Value

The initialized `QCCompositionLayer` object or `nil` if initialization is not successful.

## See Also

### Creating a Composition Layer

- [init(file:)](init%28file_%29.md): Deprecated. Initializes and returns a composition layer using the Quartz Composer composition in the specified file.

# initWithComposition: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Initializes and returns a  composition layer using the provided Quartz Composer composition.

> Quartz Composer OpenGL API deprecated. (Define QC_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (id) initWithComposition:(QCComposition *) composition;
```

## Parameters

- `composition`: The Quartz Composer composition to use as content.

<a id="return-value"></a>

## Return Value

The initialized `QCCompositionLayer` object or `nil` if initialization is not successful.

## See Also

### Creating a Composition Layer

- [compositionLayerWithFile:](compositionlayerwithfile_.md): Deprecated. Creates and returns an instance of a composition layer using the Quartz Composer composition in the specified file.
- [compositionLayerWithComposition:](compositionlayerwithcomposition_.md): Deprecated. Creates and returns an instance of a composition layer using the provided Quartz Composer composition.
- [initWithFile:](init%28file_%29.md): Deprecated. Initializes and returns a composition layer using the Quartz Composer composition in the specified file.
