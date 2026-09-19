> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mlcompute/mlcconcatenationlayer/dimension

# dimension (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The dimension, or axis, along which you concatenate tensors.

## Declaration

```swift
var dimension: Int { get }
```

<a id="Discussion"></a>

## Discussion

The default value is `1`, which typically represents features channels.

# dimension (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The dimension, or axis, along which you concatenate tensors.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger dimension;
```

<a id="Discussion"></a>

## Discussion

The default value is `1`, which typically represents features channels.
