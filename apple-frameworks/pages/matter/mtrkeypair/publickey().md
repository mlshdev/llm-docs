> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrkeypair/publickey()

# publicKey() (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 18.4) · iPadOS 16.1+ (deprecated in 18.4) · Mac Catalyst 16.1+ (deprecated in 18.4) · macOS 13.0+ (deprecated in 15.4) · tvOS 16.1+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 2.4) · watchOS 9.1+ (deprecated in 11.4)

> Please implement copyPublicKey, this will leak otherwise

## Declaration

```swift
optional func publicKey() -> Unmanaged<SecKey>
```

# publicKey (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 18.4) · iPadOS 16.1+ (deprecated in 18.4) · Mac Catalyst 16.1+ (deprecated in 18.4) · macOS 13.0+ (deprecated in 15.4) · tvOS 16.1+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 2.4) · watchOS 9.1+ (deprecated in 11.4)

> Please implement copyPublicKey, this will leak otherwise

## Declaration

```objectivec
- (SecKeyRef) publicKey;
```
