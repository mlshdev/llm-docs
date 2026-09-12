> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntechnique/subscript(_:)](https://developer.apple.com/documentation/scenekit/scntechnique/subscript(_:))

# subscript(\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns the value associated with the specified GLSL uniform variable or attribute name, using subscript syntax.

## Declaration

```swift
subscript(key: Any) -> Any? { get }
```

## Parameters

- `key`: A shader variable or attribute name used in one of the technique’s shader programs.

<a id="return-value"></a>

## Return Value

An object containing the value of the shader symbol.

<a id="Discussion"></a>

## Discussion

This method returns an object appropriate to the type of the shader symbol being set. For example, retrieving the value of a `float` uniform variable returns an [NSNumber](../../foundation/nsnumber.md) object, and retrieving the value of a GLSL `vec3` uniform variable or Metal `float3` variable returns an [NSValue](../../foundation/nsvalue.md) object containing an [SCNVector3](../scnvector3.md) structure.

## See Also

### Handling Parameters for a Technique’s Shader Programs

- [handleBinding(ofSymbol:using:)](handlebinding%28ofsymbol_using_%29.md): Specifies a block to be called before rendering using programs with the specified GLSL uniform variable or attribute name.
- [setObject(\_:forKeyedSubscript:)](setobject%28__forkeyedsubscript_%29.md): Sets a value for the specified shader variable or attribute name, using subscript syntax.

# objectForKeyedSubscript: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value associated with the specified GLSL uniform variable or attribute name, using subscript syntax.

## Declaration

```objectivec
- (id) objectForKeyedSubscript:(id) key;
```

## Parameters

- `key`: A shader variable or attribute name used in one of the technique’s shader programs.

<a id="return-value"></a>

## Return Value

An object containing the value of the shader symbol.

<a id="Discussion"></a>

## Discussion

This method returns an object appropriate to the type of the shader symbol being set. For example, retrieving the value of a `float` uniform variable returns an [NSNumber](../../foundation/nsnumber.md) object, and retrieving the value of a GLSL `vec3` uniform variable or Metal `float3` variable returns an [NSValue](../../foundation/nsvalue.md) object containing an [SCNVector3](../scnvector3.md) structure.

## See Also

### Handling Parameters for a Technique’s Shader Programs

- [handleBindingOfSymbol:usingBlock:](handlebinding%28ofsymbol_using_%29.md): Specifies a block to be called before rendering using programs with the specified GLSL uniform variable or attribute name.
- [setObject:forKeyedSubscript:](setobject%28__forkeyedsubscript_%29.md): Sets a value for the specified shader variable or attribute name, using subscript syntax.
