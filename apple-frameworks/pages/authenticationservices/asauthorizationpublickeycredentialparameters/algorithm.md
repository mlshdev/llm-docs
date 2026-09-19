> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialparameters/algorithm

# algorithm (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The algorithm to use for negitation between the authenticator and the relying party.

## Declaration

```swift
var algorithm: ASCOSEAlgorithmIdentifier { get }
```

## See Also

### Getting the parameters

- [init(algorithm:)](init%28algorithm_%29.md): Creates the object with an algorithm.

# algorithm (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The algorithm to use for negitation between the authenticator and the relying party.

## Declaration

```objectivec
@property (nonatomic, readonly) ASCOSEAlgorithmIdentifier algorithm;
```

## See Also

### Getting the parameters

- [initWithAlgorithm:](init%28algorithm_%29.md): Creates the object with an algorithm.
