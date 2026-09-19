> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/imagecapturecore/icdevicebrowser/requestcontrolauthorization(completion:)

# requestControlAuthorization(completion:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

## Declaration

```swift
func requestControlAuthorization(completion: @escaping @Sendable (ICAuthorizationStatus) -> Void)
```

```swift
func requestControlAuthorization() async -> ICAuthorizationStatus
```

# requestControlAuthorizationWithCompletion: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) requestControlAuthorizationWithCompletion:(void (^)(ICAuthorizationStatus status)) completion;
```
