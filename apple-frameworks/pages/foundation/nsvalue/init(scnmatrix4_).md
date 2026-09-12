> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvalue/init(scnmatrix4:)](https://developer.apple.com/documentation/foundation/nsvalue/init(scnmatrix4:))

# init(SCNMatrix4:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a value object that contains the specified SceneKit 4 x 4 matrix.

## Declaration

```swift
init(SCNMatrix4 v: SCNMatrix4)
```

```swift
init(scnMatrix4 v: SCNMatrix4)
```

```swift
init(SCNMatrix4 v: SCNMatrix4)
```

```swift
init(scnMatrix4 v: SCNMatrix4)
```

## Parameters

- `v`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the matrix information.

## See Also

### Related Documentation

- [SCNMatrix4](../../scenekit/scnmatrix4-swift.typealias.md): Deprecated. A representation of a 4 x 4 matrix.

### Working with SceneKit Vector and Matrix Values

- [init(SCNVector3:)](init%28scnvector3_%29.md): Creates a value object that contains the specified three-element SceneKit vector.
- [init(SCNVector4:)](init%28scnvector4_%29.md): Creates a value object that contains the specified four-element SceneKit vector.
- [scnVector3Value](scnvector3value.md): The three-element Scene Kit vector representation of the value.
- [scnVector4Value](scnvector4value.md): The four-element Scene Kit vector representation of the value.
- [scnMatrix4Value](scnmatrix4value.md): The Scene Kit 4 x 4 matrix representation of the value.

# valueWithSCNMatrix4: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a value object that contains the specified SceneKit 4 x 4 matrix.

## Declaration

```objectivec
+ (NSValue *) valueWithSCNMatrix4:(SCNMatrix4) v;
```

```objectivec
+ (NSValue *) valueWithSCNMatrix4:(SCNMatrix4) v;
```

## Parameters

- `v`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the matrix information.

## See Also

### Related Documentation

- [SCNMatrix4](../../scenekit/scnmatrix4-swift.typealias.md): Deprecated. A representation of a 4 x 4 matrix.

### Working with SceneKit Vector and Matrix Values

- [valueWithSCNVector3:](init%28scnvector3_%29.md): Creates a value object that contains the specified three-element SceneKit vector.
- [valueWithSCNVector4:](init%28scnvector4_%29.md): Creates a value object that contains the specified four-element SceneKit vector.
- [SCNVector3Value](scnvector3value.md): The three-element Scene Kit vector representation of the value.
- [SCNVector4Value](scnvector4value.md): The four-element Scene Kit vector representation of the value.
- [SCNMatrix4Value](scnmatrix4value.md): The Scene Kit 4 x 4 matrix representation of the value.
