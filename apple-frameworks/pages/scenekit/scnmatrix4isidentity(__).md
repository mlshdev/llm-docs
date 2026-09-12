> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmatrix4isidentity(_:)](https://developer.apple.com/documentation/scenekit/scnmatrix4isidentity(_:))

# SCNMatrix4IsIdentity(\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns a Boolean value that indicates whether the specified matrix is equal to the identity matrix.

## Declaration

```swift
func SCNMatrix4IsIdentity(_ m: SCNMatrix4) -> Bool
```

```swift
func SCNMatrix4IsIdentity(_ m: SCNMatrix4) -> Bool
```

## Parameters

- `m`: The matrix to be tested.

<a id="return-value"></a>

## Return Value

True if the elements on the matrix’s diagonal are `1.0` and all other elements are `0.0`.

## See Also

### Related Documentation

- [SCNMatrix4Identity](scnmatrix4identity.md): The 4 x 4 identity matrix.

### Comparing Matrices

- [SCNMatrix4EqualToMatrix4(\_:\_:)](scnmatrix4equaltomatrix4%28____%29.md): Returns a Boolean value that indicates whether the corresponding elements of two matrices are equal.

# SCNMatrix4IsIdentity (Objective-C)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether the specified matrix is equal to the identity matrix.

## Declaration

```objectivec
extern bool SCNMatrix4IsIdentity(SCNMatrix4 m);
```

```objectivec
extern bool SCNMatrix4IsIdentity(SCNMatrix4 m);
```

## Parameters

- `m`: The matrix to be tested.

<a id="return-value"></a>

## Return Value

True if the elements on the matrix’s diagonal are `1.0` and all other elements are `0.0`.

## See Also

### Related Documentation

- [SCNMatrix4Identity](scnmatrix4identity.md): The 4 x 4 identity matrix.

### Comparing Matrices

- [SCNMatrix4EqualToMatrix4](scnmatrix4equaltomatrix4%28____%29.md): Returns a Boolean value that indicates whether the corresponding elements of two matrices are equal.
