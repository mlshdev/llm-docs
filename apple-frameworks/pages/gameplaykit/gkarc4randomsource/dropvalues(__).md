> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkarc4randomsource/dropvalues(_:)](https://developer.apple.com/documentation/gameplaykit/gkarc4randomsource/dropvalues(_:))

# dropValues(\_:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Skips the specified number of values in the random sequence.

## Declaration

```swift
func dropValues(_ count: Int)
```

## Parameters

- `count`: The number of values to skip ahead in the random source’s sequence.

<a id="Discussion"></a>

## Discussion

Because the ARC4 random number generation algorithm can result in sequences with repeating initial values, examining the first 768 values in the sequence can reveal the random source’s seed and thus predict later values in the sequence. To obfuscate gameplay mechanics based on this generator, call this method with a `count` parameter of `768` or greater.

# dropValuesWithCount: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Skips the specified number of values in the random sequence.

## Declaration

```objectivec
- (void) dropValuesWithCount:(NSUInteger) count;
```

## Parameters

- `count`: The number of values to skip ahead in the random source’s sequence.

<a id="Discussion"></a>

## Discussion

Because the ARC4 random number generation algorithm can result in sequences with repeating initial values, examining the first 768 values in the sequence can reveal the random source’s seed and thus predict later values in the sequence. To obfuscate gameplay mechanics based on this generator, call this method with a `count` parameter of `768` or greater.
