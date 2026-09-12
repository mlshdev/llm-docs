> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedepthdataoutput/alwaysdiscardslatedepthdata](https://developer.apple.com/documentation/avfoundation/avcapturedepthdataoutput/alwaysdiscardslatedepthdata)

# alwaysDiscardsLateDepthData (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that determines whether the capture output should discard any depth data that is not processed before the next depth data is captured.

## Declaration

```swift
var alwaysDiscardsLateDepthData: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the [delegateCallbackQueue](delegatecallbackqueue.md) dispatch queue is blocked when new depth data is captured, this property determines whether the capture output allows your delegate object more time to process old depth data. If this property’s value is [false](https://developer.apple.com/documentation/swift/false), the capture output delivers old data to your delegate as soon as possible, but application memory usage may increase as a result. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring depth data capture

- [isFilteringEnabled](isfilteringenabled.md): A Boolean value that determines whether the depth data output should filter depth data to smooth out noise and fill invalid values.

# alwaysDiscardsLateDepthData (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that determines whether the capture output should discard any depth data that is not processed before the next depth data is captured.

## Declaration

```objectivec
@property (nonatomic) BOOL alwaysDiscardsLateDepthData;
```

<a id="Discussion"></a>

## Discussion

If the [delegateCallbackQueue](delegatecallbackqueue.md) dispatch queue is blocked when new depth data is captured, this property determines whether the capture output allows your delegate object more time to process old depth data. If this property’s value is [false](https://developer.apple.com/documentation/swift/false), the capture output delivers old data to your delegate as soon as possible, but application memory usage may increase as a result. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring depth data capture

- [filteringEnabled](isfilteringenabled.md): A Boolean value that determines whether the depth data output should filter depth data to smooth out noise and fill invalid values.
