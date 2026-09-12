> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/outputstream/init(tobuffer:capacity:)](https://developer.apple.com/documentation/foundation/outputstream/init(tobuffer:capacity:))

# init(toBuffer:capacity:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an initialized output stream that can write to a provided buffer.

## Declaration

```swift
init(toBuffer buffer: UnsafeMutablePointer<UInt8>, capacity: Int)
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

- [toMemory()](tomemory%28%29.md): Creates and returns an initialized output stream that will write stream data to memory.
- [init(toMemory:)](init%28tomemory_%29.md): Returns an initialized output stream that will write to memory.
- [init(toFileAtPath:append:)](init%28tofileatpath_append_%29.md): Returns an initialized output stream for writing to a specified file.
- [init(url:append:)](init%28url_append_%29-5soau.md): Returns an initialized output stream for writing to a specified URL.

# initToBuffer:capacity: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an initialized output stream that can write to a provided buffer.

## Declaration

```objectivec
- (instancetype) initToBuffer:(uint8_t *) buffer capacity:(NSUInteger) capacity;
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

### Related Documentation

- [outputStreamToBuffer:capacity:](../nsoutputstream/outputstreamtobuffer_capacity_.md): Creates and returns an initialized output stream that can write to a provided buffer.

### Creating Streams

- [outputStreamToMemory](tomemory%28%29.md): Creates and returns an initialized output stream that will write stream data to memory.
- [outputStreamToBuffer:capacity:](../nsoutputstream/outputstreamtobuffer_capacity_.md): Creates and returns an initialized output stream that can write to a provided buffer.
- [outputStreamToFileAtPath:append:](../nsoutputstream/outputstreamtofileatpath_append_.md): Creates and returns an initialized output stream for writing to a specified file.
- [initToMemory](init%28tomemory_%29.md): Returns an initialized output stream that will write to memory.
- [initToFileAtPath:append:](init%28tofileatpath_append_%29.md): Returns an initialized output stream for writing to a specified file.
- [initWithURL:append:](init%28url_append_%29-5soau.md): Returns an initialized output stream for writing to a specified URL.
