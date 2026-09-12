> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcmatmuldescriptor/alpha](https://developer.apple.com/documentation/mlcompute/mlcmatmuldescriptor/alpha)

# alpha (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A scalar value you specify to scale the result in C = alpha x A x B.

## Declaration

```swift
var alpha: Float { get }
```

<a id="Discussion"></a>

## Discussion

The default value is `1.0`.

## See Also

### Inspecting Matrix Multiplication Descriptors

- [transposesX](transposesx.md): Deprecated. A Boolean that specifies whether you choose to transpose the last two dimensions of x.
- [transposesY](transposesy.md): Deprecated. A Boolean that specifies whether you choose to transpose the last two dimensions of y.

# alpha (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A scalar value you specify to scale the result in C = alpha x A x B.

## Declaration

```objectivec
@property (nonatomic, readonly) float alpha;
```

<a id="Discussion"></a>

## Discussion

The default value is `1.0`.

## See Also

### Inspecting Matrix Multiplication Descriptors

- [transposesX](transposesx.md): Deprecated. A Boolean that specifies whether you choose to transpose the last two dimensions of x.
- [transposesY](transposesy.md): Deprecated. A Boolean that specifies whether you choose to transpose the last two dimensions of y.
