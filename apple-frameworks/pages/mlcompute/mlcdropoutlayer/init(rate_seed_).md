> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcdropoutlayer/init(rate:seed:)](https://developer.apple.com/documentation/mlcompute/mlcdropoutlayer/init(rate:seed:))

# init(rate:seed:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a dropout layer with the probability rate and random number generator seed you specify.

## Declaration

```swift
convenience init(rate: Float, seed: Int)
```

## Parameters

- `rate`: The dropout rate you use for each element.
- `seed`: The seed you use to generate random numbers.

# layerWithRate:seed: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a dropout layer with the probability rate and random number generator seed you specify.

## Declaration

```objectivec
+ (instancetype) layerWithRate:(float) rate seed:(NSUInteger) seed;
```

## Parameters

- `rate`: The dropout rate you use for each element.
- `seed`: The seed you use to generate random numbers.
