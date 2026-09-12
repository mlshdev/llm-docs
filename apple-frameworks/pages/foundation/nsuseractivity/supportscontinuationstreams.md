> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/supportscontinuationstreams](https://developer.apple.com/documentation/foundation/nsuseractivity/supportscontinuationstreams)

# supportsContinuationStreams (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether the continuing app can request streams to be opened back to the originating app.

## Declaration

```swift
var supportsContinuationStreams: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the continuing app can connect back to the originating app for more information using streams. The default value of this property is [false](https://developer.apple.com/documentation/swift/false). It can dynamically be set to [true](https://developer.apple.com/documentation/swift/true) to selectively support continuation streams based on the state of the user activity.

## See Also

### Working with continuation streams

- [getContinuationStreams(completionHandler:)](getcontinuationstreams%28completionhandler_%29.md): Requests streams back to the originating app.

# supportsContinuationStreams (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether the continuing app can request streams to be opened back to the originating app.

## Declaration

```objectivec
@property BOOL supportsContinuationStreams;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the continuing app can connect back to the originating app for more information using streams. The default value of this property is [false](https://developer.apple.com/documentation/swift/false). It can dynamically be set to [true](https://developer.apple.com/documentation/swift/true) to selectively support continuation streams based on the state of the user activity.

## See Also

### Working with continuation streams

- [getContinuationStreamsWithCompletionHandler:](getcontinuationstreams%28completionhandler_%29.md): Requests streams back to the originating app.
