> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnprogramdelegate/program(_:bindvalueforsymbol:atlocation:programid:renderer:)](https://developer.apple.com/documentation/scenekit/scnprogramdelegate/program(_:bindvalueforsymbol:atlocation:programid:renderer:))

# program(\_:bindValueForSymbol:atLocation:programID:renderer:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Invoked on the delegate to let it bind program values and/or associated graphics resources (such as textures) for symbols.

> Use the [handleBinding(ofSymbol:handler:)](../scnshadable/handlebinding%28ofsymbol_handler_%29.md) method of the geometry or material the program is attached to.

## Declaration

```swift
optional func program(_ program: SCNProgram, bindValueForSymbol symbol: String, atLocation location: UInt32, programID: UInt32, renderer: SCNRenderer) -> Bool
```

## Parameters

- `program`: The `SCNProgram` object to bind values for.
- `symbol`: The name of the symbol to bind a value for.
- `location`: The location of the symbol within the program object to be modified.
- `programID`: The underlying OpenGL program object in which the binding is made.
- `renderer`: The renderer that is currently rendering the scene.

<a id="Discussion"></a>

## Discussion

If you use the [handleBinding(ofSymbol:handler:)](../scnshadable/handlebinding%28ofsymbol_handler_%29.md) method to associate a handler block with a SceneKit object for a symbol, SceneKit will not call the delegate’s [program(\_:bindValueForSymbol:atLocation:programID:renderer:)](program%28__bindvalueforsymbol_atlocation_programid_renderer_%29.md) method for that symbol when rendering that object.

## See Also

### Binding and Unbinding Values

- [program(\_:unbindValueForSymbol:atLocation:programID:renderer:)](program%28__unbindvalueforsymbol_atlocation_programid_renderer_%29.md): Deprecated. Invoked on the delegate to let it unbind program values and/or also unbind associated graphic resources (such as textures).

# program:bindValueForSymbol:atLocation:programID:renderer: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+ (deprecated in 10.10)

Invoked on the delegate to let it bind program values and/or associated graphics resources (such as textures) for symbols.

> Use the [handleBindingOfSymbol:usingBlock:](../scnshadable/handlebinding%28ofsymbol_handler_%29.md) method of the geometry or material the program is attached to.

## Declaration

```objectivec
- (BOOL) program:(SCNProgram *) program bindValueForSymbol:(NSString *) symbol atLocation:(unsigned int) location programID:(unsigned int) programID renderer:(SCNRenderer *) renderer;
```

## Parameters

- `program`: The `SCNProgram` object to bind values for.
- `symbol`: The name of the symbol to bind a value for.
- `location`: The location of the symbol within the program object to be modified.
- `programID`: The underlying OpenGL program object in which the binding is made.
- `renderer`: The renderer that is currently rendering the scene.

<a id="Discussion"></a>

## Discussion

If you use the [handleBindingOfSymbol:usingBlock:](../scnshadable/handlebinding%28ofsymbol_handler_%29.md) method to associate a handler block with a SceneKit object for a symbol, SceneKit will not call the delegate’s [program:bindValueForSymbol:atLocation:programID:renderer:](program%28__bindvalueforsymbol_atlocation_programid_renderer_%29.md) method for that symbol when rendering that object.

## See Also

### Binding and Unbinding Values

- [program:unbindValueForSymbol:atLocation:programID:renderer:](program%28__unbindvalueforsymbol_atlocation_programid_renderer_%29.md): Deprecated. Invoked on the delegate to let it unbind program values and/or also unbind associated graphic resources (such as textures).
