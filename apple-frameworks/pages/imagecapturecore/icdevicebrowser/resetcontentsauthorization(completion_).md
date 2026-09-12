> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicebrowser/resetcontentsauthorization(completion:)](https://developer.apple.com/documentation/imagecapturecore/icdevicebrowser/resetcontentsauthorization(completion:))

# resetContentsAuthorization(completion:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

## Declaration

```swift
func resetContentsAuthorization(completion: @escaping @Sendable (ICAuthorizationStatus) -> Void)
```

```swift
func resetContentsAuthorization() async -> ICAuthorizationStatus
```

# resetContentsAuthorizationWithCompletion: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) resetContentsAuthorizationWithCompletion:(void (^)(ICAuthorizationStatus status)) completion;
```
