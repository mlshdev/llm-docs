> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccamerafile/requestmetadatadictionary(options:completion:)](https://developer.apple.com/documentation/imagecapturecore/iccamerafile/requestmetadatadictionary(options:completion:))

# requestMetadataDictionary(options:completion:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Requests metadata and executes the completion block in place of the delegate.

## Declaration

```swift
func requestMetadataDictionary(options: [ICCameraItemMetadataOption : Any]? = nil, completion: @escaping @Sendable ([AnyHashable : Any]?, (any Error)?) -> Void)
```

```swift
func requestMetadataDictionary(options: [ICCameraItemMetadataOption : Any]? = nil) async throws -> [AnyHashable : Any]
```

<a id="Discussion"></a>

## Discussion

The completion block executes on an any available queue; often this is not the main queue.

# requestMetadataDictionaryWithOptions:completion: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Requests metadata and executes the completion block in place of the delegate.

## Declaration

```objectivec
- (void) requestMetadataDictionaryWithOptions:(NSDictionary<NSString *,id> *) options completion:(void (^)(NSDictionary *, NSError *)) completion;
```

<a id="Discussion"></a>

## Discussion

The completion block executes on an any available queue; often this is not the main queue.
