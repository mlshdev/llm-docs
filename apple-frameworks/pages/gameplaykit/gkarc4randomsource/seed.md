> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkarc4randomsource/seed](https://developer.apple.com/documentation/gameplaykit/gkarc4randomsource/seed)

# seed (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The seed data that determines the random source’s behavior.

## Declaration

```swift
var seed: Data { get set }
```

<a id="Discussion"></a>

## Discussion

Any two random sources initialized with the same seed data will generate the same sequence of random numbers. To replicate the behavior of an existing [GKARC4RandomSource](../gkarc4randomsource.md) instance, read this property and then create a new instance by passing the resulting data to the [init(seed:)](init%28seed_%29.md) initializer.

For a source of high-entropy seed data, see the [SecRandomCopyBytes(\_:\_:\_:)](../../security/secrandomcopybytes%28______%29.md) function.

# seed (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The seed data that determines the random source’s behavior.

## Declaration

```objectivec
@property (nonatomic, copy) NSData * seed;
```

<a id="Discussion"></a>

## Discussion

Any two random sources initialized with the same seed data will generate the same sequence of random numbers. To replicate the behavior of an existing [GKARC4RandomSource](../gkarc4randomsource.md) instance, read this property and then create a new instance by passing the resulting data to the [initWithSeed:](init%28seed_%29.md) initializer.

For a source of high-entropy seed data, see the [SecRandomCopyBytes](../../security/secrandomcopybytes%28______%29.md) function.
