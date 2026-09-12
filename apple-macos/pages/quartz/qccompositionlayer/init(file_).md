> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccompositionlayer/init(file:)](https://developer.apple.com/documentation/quartz/qccompositionlayer/init(file:))

# init(file:) (Swift)

**Framework:** Quartz  
**Kind:** Initializer  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Initializes and returns a composition layer using the Quartz Composer composition in the specified file.

> Quartz Composer OpenGL API deprecated. (Define QC_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
init!(file path: String!)
```

## Parameters

- `path`: A string that specifies the location of a Quartz Composer composition.

<a id="return-value"></a>

## Return Value

The initialized `QCCompositionLayer` object or `nil` if initialization is not successful.

## See Also

### Creating a Composition Layer

- [init(composition:)](init%28composition_%29.md): Deprecated. Initializes and returns a composition layer using the provided Quartz Composer composition.

# initWithFile: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Initializes and returns a composition layer using the Quartz Composer composition in the specified file.

> Quartz Composer OpenGL API deprecated. (Define QC_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (id) initWithFile:(NSString *) path;
```

## Parameters

- `path`: A string that specifies the location of a Quartz Composer composition.

<a id="return-value"></a>

## Return Value

The initialized `QCCompositionLayer` object or `nil` if initialization is not successful.

## See Also

### Creating a Composition Layer

- [compositionLayerWithFile:](compositionlayerwithfile_.md): Deprecated. Creates and returns an instance of a composition layer using the Quartz Composer composition in the specified file.
- [compositionLayerWithComposition:](compositionlayerwithcomposition_.md): Deprecated. Creates and returns an instance of a composition layer using the provided Quartz Composer composition.
- [initWithComposition:](init%28composition_%29.md): Deprecated. Initializes and returns a composition layer using the provided Quartz Composer composition.
