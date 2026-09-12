> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory/easession/inputstream](https://developer.apple.com/documentation/externalaccessory/easession/inputstream)

# inputStream (Swift)

**Framework:** External Accessory  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The stream to use for receiving data from the accessory.

## Declaration

```swift
var inputStream: InputStream? { get }
```

<a id="Discussion"></a>

## Discussion

This stream is provided for you automatically by the session object but you must configure it if you want to receive any associated stream events. You do this by assigning a delegate object to the stream that implements the [stream(\_:handle:)](../../foundation/streamdelegate/stream%28__handle_%29.md) delegate method. You must then schedule the stream in a run loop so that it can receive data asynchronously from one of your application’s threads.

For information on how to schedule an input stream in a run loop and use it to receive data, see [Stream Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Streams/Streams.html#//apple_ref/doc/uid/10000188i).

## See Also

### Getting the Communication Streams

- [outputStream](outputstream.md): The stream to use for sending data to the accessory.

# inputStream (Objective-C)

**Framework:** External Accessory  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The stream to use for receiving data from the accessory.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSInputStream * inputStream;
```

<a id="Discussion"></a>

## Discussion

This stream is provided for you automatically by the session object but you must configure it if you want to receive any associated stream events. You do this by assigning a delegate object to the stream that implements the [stream:handleEvent:](../../foundation/streamdelegate/stream%28__handle_%29.md) delegate method. You must then schedule the stream in a run loop so that it can receive data asynchronously from one of your application’s threads.

For information on how to schedule an input stream in a run loop and use it to receive data, see [Stream Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Streams/Streams.html#//apple_ref/doc/uid/10000188i).

## See Also

### Getting the Communication Streams

- [outputStream](outputstream.md): The stream to use for sending data to the accessory.
