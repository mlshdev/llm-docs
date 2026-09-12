> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokenkeyalgorithm/supportsalgorithm(_:)](https://developer.apple.com/documentation/cryptotokenkit/tktokenkeyalgorithm/supportsalgorithm(_:))

# supportsAlgorithm(\_:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Whether the specified algorithm is the target operation algorithm, or one of the other algorithms used.

## Declaration

```swift
func supportsAlgorithm(_ algorithm: SecKeyAlgorithm) -> Bool
```

## Parameters

- `algorithm`: The algorithm to be checked.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `algorithm` is the target operation algorithm or one of the other algorithms used; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Determining Algorithm Usage

- [isAlgorithm(\_:)](isalgorithm%28__%29.md): Returns whether the specified algorithm is the target operation algorithm.

# supportsAlgorithm: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Whether the specified algorithm is the target operation algorithm, or one of the other algorithms used.

## Declaration

```objectivec
- (BOOL) supportsAlgorithm:(SecKeyAlgorithm) algorithm;
```

## Parameters

- `algorithm`: The algorithm to be checked.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `algorithm` is the target operation algorithm or one of the other algorithms used; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Determining Algorithm Usage

- [isAlgorithm:](isalgorithm%28__%29.md): Returns whether the specified algorithm is the target operation algorithm.
