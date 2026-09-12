> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltransform/init(transformcomponent:)](https://developer.apple.com/documentation/modelio/mdltransform/init(transformcomponent:))

# init(transformComponent:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a transform object to match the specified transform component.

## Declaration

```swift
convenience init(transformComponent component: any MDLTransformComponent)
```

## Parameters

- `component`: The component whose transform information is to be copied.

<a id="return-value"></a>

## Return Value

A new transform object.

<a id="Discussion"></a>

## Discussion

Use this method to copy transformation from any object that adopts the [MDLTransformComponent](../mdltransformcomponent.md) protocol (such as another [MDLTransform](../mdltransform.md) instance).

## See Also

### Creating a Transform Object

- [init(identity:)](init%28identity_%29.md): Deprecated. Initializes a transform object to the identity transformation.
- [init(matrix:)](init%28matrix_%29.md): Initializes a transform object with the specified transform matrix.
- [init(matrix:resetsTransform:)](init%28matrix_resetstransform_%29.md)
- [init(transformComponent:resetsTransform:)](init%28transformcomponent_resetstransform_%29.md)

# initWithTransformComponent: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a transform object to match the specified transform component.

## Declaration

```objectivec
- (instancetype) initWithTransformComponent:(id<MDLTransformComponent>) component;
```

## Parameters

- `component`: The component whose transform information is to be copied.

<a id="return-value"></a>

## Return Value

A new transform object.

<a id="Discussion"></a>

## Discussion

Use this method to copy transformation from any object that adopts the [MDLTransformComponent](../mdltransformcomponent.md) protocol (such as another [MDLTransform](../mdltransform.md) instance).

## See Also

### Creating a Transform Object

- [initWithIdentity](init%28identity_%29.md): Deprecated. Initializes a transform object to the identity transformation.
- [initWithMatrix:](init%28matrix_%29.md): Initializes a transform object with the specified transform matrix.
- [initWithMatrix:resetsTransform:](init%28matrix_resetstransform_%29.md)
- [initWithTransformComponent:resetsTransform:](init%28transformcomponent_resetstransform_%29.md)
