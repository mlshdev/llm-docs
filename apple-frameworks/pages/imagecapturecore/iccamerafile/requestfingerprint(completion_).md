> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccamerafile/requestfingerprint(completion:)](https://developer.apple.com/documentation/imagecapturecore/iccamerafile/requestfingerprint(completion:))

# requestFingerprint(completion:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

## Declaration

```swift
func requestFingerprint(completion: @escaping @Sendable (String?, (any Error)?) -> Void)
```

```swift
func requestFingerprint() async throws -> String
```

# requestFingerprintWithCompletion: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

## Declaration

```objectivec
- (void) requestFingerprintWithCompletion:(void (^)(NSString *, NSError *)) completion;
```
