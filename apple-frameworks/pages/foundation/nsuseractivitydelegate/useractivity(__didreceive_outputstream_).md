> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivitydelegate/useractivity(_:didreceive:outputstream:)](https://developer.apple.com/documentation/foundation/nsuseractivitydelegate/useractivity(_:didreceive:outputstream:))

# userActivity(\_:didReceive:outputStream:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Notifies the user activity delegate that an input and output streams are available to open.

## Declaration

```swift
optional func userActivity(_ userActivity: NSUserActivity, didReceive inputStream: InputStream, outputStream: OutputStream)
```

## Parameters

- `userActivity`: The user activity that is continuing on another device. This user activity’s [supportsContinuationStreams](../nsuseractivity/supportscontinuationstreams.md) property must be [true](https://developer.apple.com/documentation/swift/true).
- `inputStream`: The stream from which the originating app can read data written from the continuing app.
- `outputStream`: The stream to which the originating app writes data to be read by the continuing app.

<a id="Discussion"></a>

## Discussion

If [supportsContinuationStreams](../nsuseractivity/supportscontinuationstreams.md) is [true](https://developer.apple.com/documentation/swift/true), the continuing app can request streams back to the originating app. This delegate callback is received with the streams from the continuing side. The streams are provided in an unopened state, and the delegate should open them immediately to start communicating with the continuing side.

Continuation streams are an optional feature of Handoff, and most user activities do not need them for successful continuation. When streams are needed, a simple request from the continuing app accompanied by a response from the originating app is enough for most continuation events.

## See Also

### Related Documentation

- [Handoff Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/Handoff/HandoffFundamentals/HandoffFundamentals.html#//apple_ref/doc/uid/TP40014338)

# userActivity:didReceiveInputStream:outputStream: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Notifies the user activity delegate that an input and output streams are available to open.

## Declaration

```objectivec
- (void) userActivity:(NSUserActivity *) userActivity didReceiveInputStream:(NSInputStream *) inputStream outputStream:(NSOutputStream *) outputStream;
```

## Parameters

- `userActivity`: The user activity that is continuing on another device. This user activity’s [supportsContinuationStreams](../nsuseractivity/supportscontinuationstreams.md) property must be [true](https://developer.apple.com/documentation/swift/true).
- `inputStream`: The stream from which the originating app can read data written from the continuing app.
- `outputStream`: The stream to which the originating app writes data to be read by the continuing app.

<a id="Discussion"></a>

## Discussion

If [supportsContinuationStreams](../nsuseractivity/supportscontinuationstreams.md) is [true](https://developer.apple.com/documentation/swift/true), the continuing app can request streams back to the originating app. This delegate callback is received with the streams from the continuing side. The streams are provided in an unopened state, and the delegate should open them immediately to start communicating with the continuing side.

Continuation streams are an optional feature of Handoff, and most user activities do not need them for successful continuation. When streams are needed, a simple request from the continuing app accompanied by a response from the originating app is enough for most continuation events.

## See Also

### Related Documentation

- [Handoff Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/Handoff/HandoffFundamentals/HandoffFundamentals.html#//apple_ref/doc/uid/TP40014338)
