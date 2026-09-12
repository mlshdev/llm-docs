> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmatrix4equaltomatrix4(_:_:)](https://developer.apple.com/documentation/scenekit/scnmatrix4equaltomatrix4(_:_:))

# SCNMatrix4EqualToMatrix4(\_:\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns a Boolean value that indicates whether the corresponding elements of two matrices are equal.

## Declaration

```swift
func SCNMatrix4EqualToMatrix4(_ a: SCNMatrix4, _ b: SCNMatrix4) -> Bool
```

```swift
func SCNMatrix4EqualToMatrix4(_ a: SCNMatrix4, _ b: SCNMatrix4) -> Bool
```

## Parameters

- `a`: The first matrix to be compared.
- `b`: The first matrix to be compared.

<a id="return-value"></a>

## Return Value

True if each element in `matA` is exactly equal to the corresponding element in `b`.

<a id="Discussion"></a>

## Discussion

This function performs a numeric (not bitwise) comparison of each pair of elements.

## See Also

### Comparing Matrices

- [SCNMatrix4IsIdentity(\_:)](scnmatrix4isidentity%28__%29.md): Returns a Boolean value that indicates whether the specified matrix is equal to the identity matrix.

# SCNMatrix4EqualToMatrix4 (Objective-C)

**Framework:** SceneKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether the corresponding elements of two matrices are equal.

## Declaration

```objectivec
extern bool SCNMatrix4EqualToMatrix4(SCNMatrix4 a, SCNMatrix4 b);
```

```objectivec
extern bool SCNMatrix4EqualToMatrix4(SCNMatrix4 a, SCNMatrix4 b);
```

## Parameters

- `a`: The first matrix to be compared.
- `b`: The first matrix to be compared.

<a id="return-value"></a>

## Return Value

True if each element in `matA` is exactly equal to the corresponding element in `b`.

<a id="Discussion"></a>

## Discussion

This function performs a numeric (not bitwise) comparison of each pair of elements.

## See Also

### Comparing Matrices

- [SCNMatrix4IsIdentity](scnmatrix4isidentity%28__%29.md): Returns a Boolean value that indicates whether the specified matrix is equal to the identity matrix.
