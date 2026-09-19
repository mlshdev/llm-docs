> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/imagecapturecore/iccamerafile/requestfingerprint(completion:)

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
