> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccamerafile/requestdownload(options:completion:)](https://developer.apple.com/documentation/imagecapturecore/iccamerafile/requestdownload(options:completion:))

# requestDownload(options:completion:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Requests a download and executes the completion block in place of the delegate.

## Declaration

```swift
func requestDownload(options: [ICDownloadOption : Any]? = nil, completion: @escaping (String?, (any Error)?) -> Void) -> Progress?
```

<a id="Discussion"></a>

## Discussion

The completion block executes on an any available queue; often this is not the main queue.

# requestDownloadWithOptions:completion: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Requests a download and executes the completion block in place of the delegate.

## Declaration

```objectivec
- (NSProgress *) requestDownloadWithOptions:(NSDictionary<NSString *,id> *) options completion:(void (^)(NSString *filename, NSError *error)) completion;
```

<a id="Discussion"></a>

## Discussion

The completion block executes on an any available queue; often this is not the main queue.
