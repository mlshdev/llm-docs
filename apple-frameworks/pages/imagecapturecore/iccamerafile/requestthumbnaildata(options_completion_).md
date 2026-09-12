> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccamerafile/requestthumbnaildata(options:completion:)](https://developer.apple.com/documentation/imagecapturecore/iccamerafile/requestthumbnaildata(options:completion:))

# requestThumbnailData(options:completion:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Requests a thumbnail and executes the completion block in place of the delegate.

## Declaration

```swift
func requestThumbnailData(options: [ICCameraItemThumbnailOption : Any]? = nil, completion: @escaping @Sendable (Data?, (any Error)?) -> Void)
```

```swift
func requestThumbnailData(options: [ICCameraItemThumbnailOption : Any]? = nil) async throws -> Data
```

<a id="Discussion"></a>

## Discussion

The completion block executes on an any available queue; often this is not the main queue.

# requestThumbnailDataWithOptions:completion: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Requests a thumbnail and executes the completion block in place of the delegate.

## Declaration

```objectivec
- (void) requestThumbnailDataWithOptions:(NSDictionary<NSString *,id> *) options completion:(void (^)(NSData *, NSError *)) completion;
```

<a id="Discussion"></a>

## Discussion

The completion block executes on an any available queue; often this is not the main queue.
