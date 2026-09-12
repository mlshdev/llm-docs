> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccamerafile/requestreaddata(atoffset:length:completion:)](https://developer.apple.com/documentation/imagecapturecore/iccamerafile/requestreaddata(atoffset:length:completion:))

# requestReadData(atOffset:length:completion:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Requests to asynchronously read data of a specified length from a specified offset, then executes the completion block.

## Declaration

```swift
func requestReadData(atOffset offset: off_t, length: off_t, completion: @escaping @Sendable (Data?, (any Error)?) -> Void)
```

```swift
func requestReadData(atOffset offset: off_t, length: off_t) async throws -> Data
```

<a id="Discussion"></a>

## Discussion

The completion block executes on an any available queue; often this is not the main queue.

# requestReadDataAtOffset:length:completion: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Requests to asynchronously read data of a specified length from a specified offset, then executes the completion block.

## Declaration

```objectivec
- (void) requestReadDataAtOffset:(off_t) offset length:(off_t) length completion:(void (^)(NSData *, NSError *)) completion;
```

<a id="Discussion"></a>

## Discussion

The completion block executes on an any available queue; often this is not the main queue.
