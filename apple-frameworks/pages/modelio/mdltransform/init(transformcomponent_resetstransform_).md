> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltransform/init(transformcomponent:resetstransform:)](https://developer.apple.com/documentation/modelio/mdltransform/init(transformcomponent:resetstransform:))

# init(transformComponent:resetsTransform:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
convenience init(transformComponent component: any MDLTransformComponent, resetsTransform: Bool)
```

## See Also

### Creating a Transform Object

- [init(identity:)](init%28identity_%29.md): Deprecated. Initializes a transform object to the identity transformation.
- [init(matrix:)](init%28matrix_%29.md): Initializes a transform object with the specified transform matrix.
- [init(transformComponent:)](init%28transformcomponent_%29.md): Initializes a transform object to match the specified transform component.
- [init(matrix:resetsTransform:)](init%28matrix_resetstransform_%29.md)

# initWithTransformComponent:resetsTransform: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithTransformComponent:(id<MDLTransformComponent>) component resetsTransform:(BOOL) resetsTransform;
```

## See Also

### Creating a Transform Object

- [initWithIdentity](init%28identity_%29.md): Deprecated. Initializes a transform object to the identity transformation.
- [initWithMatrix:](init%28matrix_%29.md): Initializes a transform object with the specified transform matrix.
- [initWithTransformComponent:](init%28transformcomponent_%29.md): Initializes a transform object to match the specified transform component.
- [initWithMatrix:resetsTransform:](init%28matrix_resetstransform_%29.md)
