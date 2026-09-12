> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/outputstream/init(url:append:)-5soau](https://developer.apple.com/documentation/foundation/outputstream/init(url:append:)-5soau)

# init(url:append:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an initialized output stream for writing to a specified URL.

## Declaration

```swift
init?(url: URL, append shouldAppend: Bool)
```

## Parameters

- `url`: The URL to the file the output stream will write to.
- `shouldAppend`: [true](https://developer.apple.com/documentation/swift/true) if newly written data should be appended to any existing file contents, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

An initialized output stream that can write to `url`.

<a id="Discussion"></a>

## Discussion

The stream must be opened before it can be used.

## See Also

### Creating Streams

- [toMemory()](tomemory%28%29.md): Creates and returns an initialized output stream that will write stream data to memory.
- [init(toMemory:)](init%28tomemory_%29.md): Returns an initialized output stream that will write to memory.
- [init(toBuffer:capacity:)](init%28tobuffer_capacity_%29.md): Returns an initialized output stream that can write to a provided buffer.
- [init(toFileAtPath:append:)](init%28tofileatpath_append_%29.md): Returns an initialized output stream for writing to a specified file.

# initWithURL:append: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an initialized output stream for writing to a specified URL.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) url append:(BOOL) shouldAppend;
```

## Parameters

- `url`: The URL to the file the output stream will write to.
- `shouldAppend`: [true](https://developer.apple.com/documentation/swift/true) if newly written data should be appended to any existing file contents, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

An initialized output stream that can write to `url`.

<a id="Discussion"></a>

## Discussion

The stream must be opened before it can be used.

## See Also

### Creating Streams

- [outputStreamToMemory](tomemory%28%29.md): Creates and returns an initialized output stream that will write stream data to memory.
- [outputStreamToBuffer:capacity:](../nsoutputstream/outputstreamtobuffer_capacity_.md): Creates and returns an initialized output stream that can write to a provided buffer.
- [outputStreamToFileAtPath:append:](../nsoutputstream/outputstreamtofileatpath_append_.md): Creates and returns an initialized output stream for writing to a specified file.
- [initToMemory](init%28tomemory_%29.md): Returns an initialized output stream that will write to memory.
- [initToBuffer:capacity:](init%28tobuffer_capacity_%29.md): Returns an initialized output stream that can write to a provided buffer.
- [initToFileAtPath:append:](init%28tofileatpath_append_%29.md): Returns an initialized output stream for writing to a specified file.
