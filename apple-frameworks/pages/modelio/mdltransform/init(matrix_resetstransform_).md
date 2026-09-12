> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltransform/init(matrix:resetstransform:)](https://developer.apple.com/documentation/modelio/mdltransform/init(matrix:resetstransform:))

# init(matrix:resetsTransform:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
convenience init(matrix: matrix_float4x4, resetsTransform: Bool)
```

## See Also

### Creating a Transform Object

- [init(identity:)](init%28identity_%29.md): Deprecated. Initializes a transform object to the identity transformation.
- [init(matrix:)](init%28matrix_%29.md): Initializes a transform object with the specified transform matrix.
- [init(transformComponent:)](init%28transformcomponent_%29.md): Initializes a transform object to match the specified transform component.
- [init(transformComponent:resetsTransform:)](init%28transformcomponent_resetstransform_%29.md)

# initWithMatrix:resetsTransform: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithMatrix:(matrix_float4x4) matrix resetsTransform:(BOOL) resetsTransform;
```

## See Also

### Creating a Transform Object

- [initWithIdentity](init%28identity_%29.md): Deprecated. Initializes a transform object to the identity transformation.
- [initWithMatrix:](init%28matrix_%29.md): Initializes a transform object with the specified transform matrix.
- [initWithTransformComponent:](init%28transformcomponent_%29.md): Initializes a transform object to match the specified transform component.
- [initWithTransformComponent:resetsTransform:](init%28transformcomponent_resetstransform_%29.md)
