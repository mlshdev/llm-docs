> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkarc4randomsource/init(seed:)](https://developer.apple.com/documentation/gameplaykit/gkarc4randomsource/init(seed:))

# init(seed:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a random source with the specified seed data.

## Declaration

```swift
init(seed: Data)
```

## Parameters

- `seed`: A data object containing seed values for the random number generator.

<a id="return-value"></a>

## Return Value

A new, independent random source.

<a id="Discussion"></a>

## Discussion

Any two random sources initialized with the same seed data will generate the same sequence of random numbers. To replicate the behavior of an existing [GKARC4RandomSource](../gkarc4randomsource.md) instance, read that instance’s [seed](seed.md) property and then create a new instance by passing the resulting data to the [init(seed:)](init%28seed_%29.md) initializer.

For a source of high-entropy seed data, see the [SecRandomCopyBytes(\_:\_:\_:)](../../security/secrandomcopybytes%28______%29.md) function.

## See Also

### Creating a Random Source

- [init()](init%28%29.md): Initializes a random source from a nondeterministic seed.

# initWithSeed: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a random source with the specified seed data.

## Declaration

```objectivec
- (instancetype) initWithSeed:(NSData *) seed;
```

## Parameters

- `seed`: A data object containing seed values for the random number generator.

<a id="return-value"></a>

## Return Value

A new, independent random source.

<a id="Discussion"></a>

## Discussion

Any two random sources initialized with the same seed data will generate the same sequence of random numbers. To replicate the behavior of an existing [GKARC4RandomSource](../gkarc4randomsource.md) instance, read that instance’s [seed](seed.md) property and then create a new instance by passing the resulting data to the [initWithSeed:](init%28seed_%29.md) initializer.

For a source of high-entropy seed data, see the [SecRandomCopyBytes](../../security/secrandomcopybytes%28______%29.md) function.

## See Also

### Creating a Random Source

- [init](init%28%29.md): Initializes a random source from a nondeterministic seed.
