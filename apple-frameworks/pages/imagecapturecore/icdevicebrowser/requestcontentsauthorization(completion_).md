> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicebrowser/requestcontentsauthorization(completion:)](https://developer.apple.com/documentation/imagecapturecore/icdevicebrowser/requestcontentsauthorization(completion:))

# requestContentsAuthorization(completion:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

## Declaration

```swift
func requestContentsAuthorization(completion: @escaping @Sendable (ICAuthorizationStatus) -> Void)
```

```swift
func requestContentsAuthorization() async -> ICAuthorizationStatus
```

# requestContentsAuthorizationWithCompletion: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) requestContentsAuthorizationWithCompletion:(void (^)(ICAuthorizationStatus status)) completion;
```
