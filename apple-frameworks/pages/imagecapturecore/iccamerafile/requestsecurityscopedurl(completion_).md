> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccamerafile/requestsecurityscopedurl(completion:)](https://developer.apple.com/documentation/imagecapturecore/iccamerafile/requestsecurityscopedurl(completion:))

# requestSecurityScopedURL(completion:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

## Declaration

```swift
func requestSecurityScopedURL(completion: @escaping @Sendable (URL?, (any Error)?) -> Void)
```

```swift
func requestSecurityScopedURL() async throws -> URL
```

# requestSecurityScopedURLWithCompletion: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) requestSecurityScopedURLWithCompletion:(void (^)(NSURL *, NSError *)) completion;
```
