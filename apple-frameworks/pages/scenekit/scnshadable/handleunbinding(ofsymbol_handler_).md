> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnshadable/handleunbinding(ofsymbol:handler:)](https://developer.apple.com/documentation/scenekit/scnshadable/handleunbinding(ofsymbol:handler:))

# handleUnbinding(ofSymbol:handler:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Specifies a block to be called after rendering with programs with the specified GLSL uniform variable or attribute name.

## Declaration

```swift
optional func handleUnbinding(ofSymbol symbol: String, handler block: SCNBindingBlock? = nil)
```

## Parameters

- `symbol`: A GLSL uniform variable or attribute name.
- `block`: A block to be called by SceneKit.

<a id="Discussion"></a>

## Discussion

Use this method to associate a block with a SceneKit object (geometry or material) to handle cleanup related to an attribute or uniform variable in a custom [SCNProgram](../scnprogram.md) shader associated with that object. SceneKit will call your block after rendering the object. In the block, you can execute any OpenGL commands or other code necessary for post-rendering tasks.

This method is for OpenGL shader programs only. To bind custom variable data for Metal shader programs, use the [handleBinding(ofBufferNamed:frequency:handler:)](../scnprogram/handlebinding%28ofbuffernamed_frequency_handler_%29.md) method.

## See Also

### Handling Parameters in Custom OpenGL Shader Programs

- [handleBinding(ofSymbol:handler:)](handlebinding%28ofsymbol_handler_%29.md): Specifies a block to be called before rendering with programs with the specified GLSL uniform variable or attribute name.

# handleUnbindingOfSymbol:usingBlock: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS

Specifies a block to be called after rendering with programs with the specified GLSL uniform variable or attribute name.

## Declaration

```objectivec
- (void) handleUnbindingOfSymbol:(NSString *) symbol usingBlock:(SCNBindingBlock) block;
```

## Parameters

- `symbol`: A GLSL uniform variable or attribute name.
- `block`: A block to be called by SceneKit.

<a id="Discussion"></a>

## Discussion

Use this method to associate a block with a SceneKit object (geometry or material) to handle cleanup related to an attribute or uniform variable in a custom [SCNProgram](../scnprogram.md) shader associated with that object. SceneKit will call your block after rendering the object. In the block, you can execute any OpenGL commands or other code necessary for post-rendering tasks.

This method is for OpenGL shader programs only. To bind custom variable data for Metal shader programs, use the [handleBindingOfBufferNamed:frequency:usingBlock:](../scnprogram/handlebinding%28ofbuffernamed_frequency_handler_%29.md) method.

## See Also

### Handling Parameters in Custom OpenGL Shader Programs

- [handleBindingOfSymbol:usingBlock:](handlebinding%28ofsymbol_handler_%29.md): Specifies a block to be called before rendering with programs with the specified GLSL uniform variable or attribute name.
