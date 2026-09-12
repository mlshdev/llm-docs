> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/outputstream/init(tofileatpath:append:)](https://developer.apple.com/documentation/foundation/outputstream/init(tofileatpath:append:))

# init(toFileAtPath:append:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an initialized output stream for writing to a specified file.

## Declaration

```swift
convenience init?(toFileAtPath path: String, append shouldAppend: Bool)
```

## Parameters

- `path`: The path to the file the output stream will write to.
- `shouldAppend`: [true](https://developer.apple.com/documentation/swift/true) if newly written data should be appended to any existing file contents, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

An initialized output stream that can write to `path`.

<a id="Discussion"></a>

## Discussion

The stream must be opened before it can be used.

## See Also

### Creating Streams

- [toMemory()](tomemory%28%29.md): Creates and returns an initialized output stream that will write stream data to memory.
- [init(toMemory:)](init%28tomemory_%29.md): Returns an initialized output stream that will write to memory.
- [init(toBuffer:capacity:)](init%28tobuffer_capacity_%29.md): Returns an initialized output stream that can write to a provided buffer.
- [init(url:append:)](init%28url_append_%29-5soau.md): Returns an initialized output stream for writing to a specified URL.

# initToFileAtPath:append: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an initialized output stream for writing to a specified file.

## Declaration

```objectivec
- (instancetype) initToFileAtPath:(NSString *) path append:(BOOL) shouldAppend;
```

## Parameters

- `path`: The path to the file the output stream will write to.
- `shouldAppend`: [true](https://developer.apple.com/documentation/swift/true) if newly written data should be appended to any existing file contents, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

An initialized output stream that can write to `path`.

<a id="Discussion"></a>

## Discussion

The stream must be opened before it can be used.

## See Also

### Related Documentation

- [outputStreamToFileAtPath:append:](../nsoutputstream/outputstreamtofileatpath_append_.md): Creates and returns an initialized output stream for writing to a specified file.

### Creating Streams

- [outputStreamToMemory](tomemory%28%29.md): Creates and returns an initialized output stream that will write stream data to memory.
- [outputStreamToBuffer:capacity:](../nsoutputstream/outputstreamtobuffer_capacity_.md): Creates and returns an initialized output stream that can write to a provided buffer.
- [outputStreamToFileAtPath:append:](../nsoutputstream/outputstreamtofileatpath_append_.md): Creates and returns an initialized output stream for writing to a specified file.
- [initToMemory](init%28tomemory_%29.md): Returns an initialized output stream that will write to memory.
- [initToBuffer:capacity:](init%28tobuffer_capacity_%29.md): Returns an initialized output stream that can write to a provided buffer.
- [initWithURL:append:](init%28url_append_%29-5soau.md): Returns an initialized output stream for writing to a specified URL.
