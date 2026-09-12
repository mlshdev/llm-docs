> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkmersennetwisterrandomsource/seed](https://developer.apple.com/documentation/gameplaykit/gkmersennetwisterrandomsource/seed)

# seed (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The seed value that determines the random source’s behavior.

## Declaration

```swift
var seed: UInt64 { get set }
```

<a id="Discussion"></a>

## Discussion

Any two random sources initialized with the same seed value will generate the same sequence of random numbers. To replicate the behavior of an existing [GKMersenneTwisterRandomSource](../gkmersennetwisterrandomsource.md) instance, read this property and then create a new instance by passing the resulting value to the [seed](seed.md) initializer.

For a source of high-entropy seed data, see the [SecRandomCopyBytes(\_:\_:\_:)](../../security/secrandomcopybytes%28______%29.md) function.

# seed (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The seed value that determines the random source’s behavior.

## Declaration

```objectivec
@property (nonatomic, assign) uint64_t seed;
```

<a id="Discussion"></a>

## Discussion

Any two random sources initialized with the same seed value will generate the same sequence of random numbers. To replicate the behavior of an existing [GKMersenneTwisterRandomSource](../gkmersennetwisterrandomsource.md) instance, read this property and then create a new instance by passing the resulting value to the [seed](seed.md) initializer.

For a source of high-entropy seed data, see the [SecRandomCopyBytes](../../security/secrandomcopybytes%28______%29.md) function.
