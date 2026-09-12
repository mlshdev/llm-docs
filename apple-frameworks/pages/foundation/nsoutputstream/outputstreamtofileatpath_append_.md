> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsoutputstream/outputstreamtofileatpath:append:](https://developer.apple.com/documentation/foundation/nsoutputstream/outputstreamtofileatpath:append:)

# outputStreamToFileAtPath:append:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns an initialized output stream for writing to a specified file.

## Declaration

```objectivec
+ (instancetype) outputStreamToFileAtPath:(NSString *) path append:(BOOL) shouldAppend;
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

- [outputStreamToMemory](../outputstream/tomemory%28%29.md): Creates and returns an initialized output stream that will write stream data to memory.
- [outputStreamToBuffer:capacity:](outputstreamtobuffer_capacity_.md): Creates and returns an initialized output stream that can write to a provided buffer.
- [initToMemory](../outputstream/init%28tomemory_%29.md): Returns an initialized output stream that will write to memory.
- [initToBuffer:capacity:](../outputstream/init%28tobuffer_capacity_%29.md): Returns an initialized output stream that can write to a provided buffer.
- [initToFileAtPath:append:](../outputstream/init%28tofileatpath_append_%29.md): Returns an initialized output stream for writing to a specified file.
- [initWithURL:append:](../outputstream/init%28url_append_%29-5soau.md): Returns an initialized output stream for writing to a specified URL.
