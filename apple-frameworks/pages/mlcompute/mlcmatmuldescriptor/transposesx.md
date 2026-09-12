> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcmatmuldescriptor/transposesx](https://developer.apple.com/documentation/mlcompute/mlcmatmuldescriptor/transposesx)

# transposesX (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A Boolean that specifies whether you choose to transpose the last two dimensions of x.

## Declaration

```swift
var transposesX: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The default value is `false`.

## See Also

### Inspecting Matrix Multiplication Descriptors

- [alpha](alpha.md): Deprecated. A scalar value you specify to scale the result in C = alpha x A x B.
- [transposesY](transposesy.md): Deprecated. A Boolean that specifies whether you choose to transpose the last two dimensions of y.

# transposesX (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A Boolean that specifies whether you choose to transpose the last two dimensions of x.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL transposesX;
```

<a id="Discussion"></a>

## Discussion

The default value is `false`.

## See Also

### Inspecting Matrix Multiplication Descriptors

- [alpha](alpha.md): Deprecated. A scalar value you specify to scale the result in C = alpha x A x B.
- [transposesY](transposesy.md): Deprecated. A Boolean that specifies whether you choose to transpose the last two dimensions of y.
