> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsoutputstream/outputstreamtobuffer:capacity:](https://developer.apple.com/documentation/foundation/nsoutputstream/outputstreamtobuffer:capacity:)

# outputStreamToBuffer:capacity:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns an initialized output stream that can write to a provided buffer.

## Declaration

```objectivec
+ (instancetype) outputStreamToBuffer:(uint8_t *) buffer capacity:(NSUInteger) capacity;
```

## Parameters

- `buffer`: The buffer the output stream will write to.
- `capacity`: The size of the buffer in bytes.

<a id="return-value"></a>

## Return Value

An initialized output stream that can write to `buffer`.

<a id="Discussion"></a>

## Discussion

The stream must be opened before it can be used.

When the number of bytes written to `buffer` has reached `capacity`, the stream’s [streamStatus](../stream/streamstatus.md) will return `NSStreamStatusAtEnd`.

## See Also

### Creating Streams

- [outputStreamToMemory](../outputstream/tomemory%28%29.md): Creates and returns an initialized output stream that will write stream data to memory.
- [outputStreamToFileAtPath:append:](outputstreamtofileatpath_append_.md): Creates and returns an initialized output stream for writing to a specified file.
- [initToMemory](../outputstream/init%28tomemory_%29.md): Returns an initialized output stream that will write to memory.
- [initToBuffer:capacity:](../outputstream/init%28tobuffer_capacity_%29.md): Returns an initialized output stream that can write to a provided buffer.
- [initToFileAtPath:append:](../outputstream/init%28tofileatpath_append_%29.md): Returns an initialized output stream for writing to a specified file.
- [initWithURL:append:](../outputstream/init%28url_append_%29-5soau.md): Returns an initialized output stream for writing to a specified URL.
