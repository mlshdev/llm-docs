> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensordata/length](https://developer.apple.com/documentation/mlcompute/mlctensordata/length)

# length (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The number of bytes you choose to hold for this tensor data instance.

## Declaration

```swift
var length: Int { get }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This value must not exceed length of `bytes`.

## See Also

### Inspecting Tensor Data

- [bytes](bytes.md): Deprecated. A buffer that conains data.

# length (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The number of bytes you choose to hold for this tensor data instance.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger length;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This value must not exceed length of `bytes`.

## See Also

### Inspecting Tensor Data

- [bytes](bytes.md): Deprecated. A buffer that conains data.
