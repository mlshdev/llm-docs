> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnprogramdelegate](https://developer.apple.com/documentation/scenekit/scnprogramdelegate)

# SCNProgramDelegate (Swift)

**Framework:** SceneKit  
**Kind:** Protocol  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The interface for tracking errors that occur when compiling shader source code.

## Declaration

```swift
protocol SCNProgramDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

You create and use custom shader programs with the  [SCNProgram](scnprogram.md) class.

## Topics

### Handling Shader Compilation Errors

- [program(\_:handleError:)](scnprogramdelegate/program%28__handleerror_%29.md): Tells the delegate that an error occurred when compiling GLSL source code.
- [SCNErrorDomain](scnerrordomain.md): Identifies an error type defined by the SceneKit framework.
- [SceneKit Error Codes](1409723-scenekit-error-codes.md)

### Finding Fragment Opaqueness

- [programIsOpaque(\_:)](scnprogramdelegate/programisopaque%28__%29.md): Deprecated. Asks the delegate whether fragments rendered by a program are opaque.

### Binding and Unbinding Values

- [program(\_:bindValueForSymbol:atLocation:programID:renderer:)](scnprogramdelegate/program%28__bindvalueforsymbol_atlocation_programid_renderer_%29.md): Deprecated. Invoked on the delegate to let it bind program values and/or associated graphics resources (such as textures) for symbols.
- [program(\_:unbindValueForSymbol:atLocation:programID:renderer:)](scnprogramdelegate/program%28__unbindvalueforsymbol_atlocation_programid_renderer_%29.md): Deprecated. Invoked on the delegate to let it unbind program values and/or also unbind associated graphic resources (such as textures).

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Providing a Delegate Object

- [delegate](scnprogram/delegate.md): The delegate of the program object.

# SCNProgramDelegate (Objective-C)

**Framework:** SceneKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The interface for tracking errors that occur when compiling shader source code.

## Declaration

```objectivec
@protocol SCNProgramDelegate <NSObject>
```

<a id="overview"></a>

## Overview

You create and use custom shader programs with the  [SCNProgram](scnprogram.md) class.

## Topics

### Handling Shader Compilation Errors

- [program:handleError:](scnprogramdelegate/program%28__handleerror_%29.md): Tells the delegate that an error occurred when compiling GLSL source code.
- [SCNErrorDomain](scnerrordomain.md): Identifies an error type defined by the SceneKit framework.
- [SceneKit Error Codes](1409723-scenekit-error-codes.md)

### Finding Fragment Opaqueness

- [programIsOpaque:](scnprogramdelegate/programisopaque%28__%29.md): Deprecated. Asks the delegate whether fragments rendered by a program are opaque.

### Binding and Unbinding Values

- [program:bindValueForSymbol:atLocation:programID:renderer:](scnprogramdelegate/program%28__bindvalueforsymbol_atlocation_programid_renderer_%29.md): Deprecated. Invoked on the delegate to let it bind program values and/or associated graphics resources (such as textures) for symbols.
- [program:unbindValueForSymbol:atLocation:programID:renderer:](scnprogramdelegate/program%28__unbindvalueforsymbol_atlocation_programid_renderer_%29.md): Deprecated. Invoked on the delegate to let it unbind program values and/or also unbind associated graphic resources (such as textures).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Providing a Delegate Object

- [delegate](scnprogram/delegate.md): The delegate of the program object.
