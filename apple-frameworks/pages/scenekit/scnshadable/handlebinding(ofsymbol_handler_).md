> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnshadable/handlebinding(ofsymbol:handler:)](https://developer.apple.com/documentation/scenekit/scnshadable/handlebinding(ofsymbol:handler:))

# handleBinding(ofSymbol:handler:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Specifies a block to be called before rendering with programs with the specified GLSL uniform variable or attribute name.

## Declaration

```swift
optional func handleBinding(ofSymbol symbol: String, handler block: SCNBindingBlock? = nil)
```

## Parameters

- `symbol`: A GLSL uniform variable or attribute name.
- `block`: A block to be called by SceneKit.

<a id="Discussion"></a>

## Discussion

Use this method to associate a block with a SceneKit object (geometry or material) to handle setup of an attribute or uniform variable in a custom [SCNProgram](../scnprogram.md) shader associated with that object. SceneKit calls your block before rendering the object. In the block, you can execute any OpenGL commands or other code necessary for preparing your custom shader. For example, the following block updates the `time` uniform variable in a custom fragment shader for producing animated effects:

```objc
CFTimeInterval startTime = CFAbsoluteTimeGetCurrent();
[myNode.geometry.firstMaterial handleBindingOfSymbol:@"time" usingBlock:
    ^(unsigned int programID, unsigned int location, SCNNode *renderedNode, SCNRenderer *renderer) {
        glUniform1f(location, CFAbsoluteTimeGetCurrent() - startTime);
    }];
```

This method is for OpenGL shader programs only. To bind custom variable data for Metal shader programs, use the [handleBinding(ofBufferNamed:frequency:handler:)](../scnprogram/handlebinding%28ofbuffernamed_frequency_handler_%29.md) method.

## See Also

### Handling Parameters in Custom OpenGL Shader Programs

- [handleUnbinding(ofSymbol:handler:)](handleunbinding%28ofsymbol_handler_%29.md): Specifies a block to be called after rendering with programs with the specified GLSL uniform variable or attribute name.

# handleBindingOfSymbol:usingBlock: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS

Specifies a block to be called before rendering with programs with the specified GLSL uniform variable or attribute name.

## Declaration

```objectivec
- (void) handleBindingOfSymbol:(NSString *) symbol usingBlock:(SCNBindingBlock) block;
```

## Parameters

- `symbol`: A GLSL uniform variable or attribute name.
- `block`: A block to be called by SceneKit.

<a id="Discussion"></a>

## Discussion

Use this method to associate a block with a SceneKit object (geometry or material) to handle setup of an attribute or uniform variable in a custom [SCNProgram](../scnprogram.md) shader associated with that object. SceneKit calls your block before rendering the object. In the block, you can execute any OpenGL commands or other code necessary for preparing your custom shader. For example, the following block updates the `time` uniform variable in a custom fragment shader for producing animated effects:

```objc
CFTimeInterval startTime = CFAbsoluteTimeGetCurrent();
[myNode.geometry.firstMaterial handleBindingOfSymbol:@"time" usingBlock:
    ^(unsigned int programID, unsigned int location, SCNNode *renderedNode, SCNRenderer *renderer) {
        glUniform1f(location, CFAbsoluteTimeGetCurrent() - startTime);
    }];
```

This method is for OpenGL shader programs only. To bind custom variable data for Metal shader programs, use the [handleBindingOfBufferNamed:frequency:usingBlock:](../scnprogram/handlebinding%28ofbuffernamed_frequency_handler_%29.md) method.

## See Also

### Handling Parameters in Custom OpenGL Shader Programs

- [handleUnbindingOfSymbol:usingBlock:](handleunbinding%28ofsymbol_handler_%29.md): Specifies a block to be called after rendering with programs with the specified GLSL uniform variable or attribute name.
