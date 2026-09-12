> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntechnique/handlebinding(ofsymbol:using:)](https://developer.apple.com/documentation/scenekit/scntechnique/handlebinding(ofsymbol:using:))

# handleBinding(ofSymbol:using:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Specifies a block to be called before rendering using programs with the specified GLSL uniform variable or attribute name.

## Declaration

```swift
func handleBinding(ofSymbol symbol: String, using block: SCNBindingBlock? = nil)
```

## Parameters

- `symbol`: A GLSL uniform variable or attribute name used in one of the technique’s shader programs.
- `block`: A block that SceneKit calls.

<a id="Discussion"></a>

## Discussion

This method associates a block for handling setup of an attribute or uniform variable in the shader programs associated with the technique. SceneKit calls your block before any performing any rendering passes that use that symbol. In the block, you can execute any OpenGL commands or other code necessary for preparing your custom shader.

> **Note**

>  You must associate a handler block with a technique before assigning that technique to a SceneKit object. The result of calling this method on a technique currently in use is undefined.

Use this method when you need to update a value in a shader program every time SceneKit renders a frame. To set a value infrequently, or only once, use the [setObject(\_:forKeyedSubscript:)](setobject%28__forkeyedsubscript_%29.md) or [setValue(\_:forKey:)](../../objectivec/nsobject-swift.class/setvalue%28__forkey_%29.md) method instead.

If you associate a block with a symbol using this method, SceneKit ignores values set using the [setObject(\_:forKeyedSubscript:)](setobject%28__forkeyedsubscript_%29.md) method.

## See Also

### Handling Parameters for a Technique’s Shader Programs

- [setObject(\_:forKeyedSubscript:)](setobject%28__forkeyedsubscript_%29.md): Sets a value for the specified shader variable or attribute name, using subscript syntax.
- [subscript(\_:)](subscript%28__%29.md): Returns the value associated with the specified GLSL uniform variable or attribute name, using subscript syntax.

# handleBindingOfSymbol:usingBlock: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Specifies a block to be called before rendering using programs with the specified GLSL uniform variable or attribute name.

## Declaration

```objectivec
- (void) handleBindingOfSymbol:(NSString *) symbol usingBlock:(SCNBindingBlock) block;
```

## Parameters

- `symbol`: A GLSL uniform variable or attribute name used in one of the technique’s shader programs.
- `block`: A block that SceneKit calls.

<a id="Discussion"></a>

## Discussion

This method associates a block for handling setup of an attribute or uniform variable in the shader programs associated with the technique. SceneKit calls your block before any performing any rendering passes that use that symbol. In the block, you can execute any OpenGL commands or other code necessary for preparing your custom shader.

> **Note**

>  You must associate a handler block with a technique before assigning that technique to a SceneKit object. The result of calling this method on a technique currently in use is undefined.

Use this method when you need to update a value in a shader program every time SceneKit renders a frame. To set a value infrequently, or only once, use the [setObject:forKeyedSubscript:](setobject%28__forkeyedsubscript_%29.md) or [setValue:forKey:](../../objectivec/nsobject-swift.class/setvalue%28__forkey_%29.md) method instead.

If you associate a block with a symbol using this method, SceneKit ignores values set using the [setObject:forKeyedSubscript:](setobject%28__forkeyedsubscript_%29.md) method.

## See Also

### Handling Parameters for a Technique’s Shader Programs

- [setObject:forKeyedSubscript:](setobject%28__forkeyedsubscript_%29.md): Sets a value for the specified shader variable or attribute name, using subscript syntax.
- [objectForKeyedSubscript:](subscript%28__%29.md): Returns the value associated with the specified GLSL uniform variable or attribute name, using subscript syntax.
