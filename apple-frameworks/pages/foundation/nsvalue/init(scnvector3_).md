> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvalue/init(scnvector3:)](https://developer.apple.com/documentation/foundation/nsvalue/init(scnvector3:))

# init(SCNVector3:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a value object that contains the specified three-element SceneKit vector.

## Declaration

```swift
init(SCNVector3 v: SCNVector3)
```

```swift
init(scnVector3 v: SCNVector3)
```

## Parameters

- `v`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the vector information.

## See Also

### Related Documentation

- [SCNVector3](../../scenekit/scnvector3.md): Deprecated. A representation of a three-component vector.

### Working with SceneKit Vector and Matrix Values

- [init(SCNVector4:)](init%28scnvector4_%29.md): Creates a value object that contains the specified four-element SceneKit vector.
- [init(SCNMatrix4:)](init%28scnmatrix4_%29.md): Creates a value object that contains the specified SceneKit 4 x 4 matrix.
- [scnVector3Value](scnvector3value.md): The three-element Scene Kit vector representation of the value.
- [scnVector4Value](scnvector4value.md): The four-element Scene Kit vector representation of the value.
- [scnMatrix4Value](scnmatrix4value.md): The Scene Kit 4 x 4 matrix representation of the value.

# valueWithSCNVector3: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a value object that contains the specified three-element SceneKit vector.

## Declaration

```objectivec
+ (NSValue *) valueWithSCNVector3:(SCNVector3) v;
```

## Parameters

- `v`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the vector information.

## See Also

### Related Documentation

- [SCNVector3](../../scenekit/scnvector3.md): Deprecated. A representation of a three-component vector.

### Working with SceneKit Vector and Matrix Values

- [valueWithSCNVector4:](init%28scnvector4_%29.md): Creates a value object that contains the specified four-element SceneKit vector.
- [valueWithSCNMatrix4:](init%28scnmatrix4_%29.md): Creates a value object that contains the specified SceneKit 4 x 4 matrix.
- [SCNVector3Value](scnvector3value.md): The three-element Scene Kit vector representation of the value.
- [SCNVector4Value](scnvector4value.md): The four-element Scene Kit vector representation of the value.
- [SCNMatrix4Value](scnmatrix4value.md): The Scene Kit 4 x 4 matrix representation of the value.
