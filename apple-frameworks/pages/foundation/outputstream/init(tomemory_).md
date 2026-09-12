> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/outputstream/init(tomemory:)](https://developer.apple.com/documentation/foundation/outputstream/init(tomemory:))

# init(toMemory:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an initialized output stream that will write to memory.

## Declaration

```swift
init(toMemory: ())
```

<a id="return-value"></a>

## Return Value

An initialized output stream that will write stream data to memory.

<a id="Discussion"></a>

## Discussion

The stream must be opened before it can be used.

The contents of the memory stream are retrieved by passing the constant `NSStreamDataWrittenToMemoryStreamKey` to [property(forKey:)](../stream/property%28forkey_%29.md).

## See Also

### Creating Streams

- [toMemory()](tomemory%28%29.md): Creates and returns an initialized output stream that will write stream data to memory.
- [init(toBuffer:capacity:)](init%28tobuffer_capacity_%29.md): Returns an initialized output stream that can write to a provided buffer.
- [init(toFileAtPath:append:)](init%28tofileatpath_append_%29.md): Returns an initialized output stream for writing to a specified file.
- [init(url:append:)](init%28url_append_%29-5soau.md): Returns an initialized output stream for writing to a specified URL.

# initToMemory (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an initialized output stream that will write to memory.

## Declaration

```objectivec
- (instancetype) initToMemory;
```

<a id="return-value"></a>

## Return Value

An initialized output stream that will write stream data to memory.

<a id="Discussion"></a>

## Discussion

The stream must be opened before it can be used.

The contents of the memory stream are retrieved by passing the constant `NSStreamDataWrittenToMemoryStreamKey` to [propertyForKey:](../stream/property%28forkey_%29.md).

## See Also

### Creating Streams

- [outputStreamToMemory](tomemory%28%29.md): Creates and returns an initialized output stream that will write stream data to memory.
- [outputStreamToBuffer:capacity:](../nsoutputstream/outputstreamtobuffer_capacity_.md): Creates and returns an initialized output stream that can write to a provided buffer.
- [outputStreamToFileAtPath:append:](../nsoutputstream/outputstreamtofileatpath_append_.md): Creates and returns an initialized output stream for writing to a specified file.
- [initToBuffer:capacity:](init%28tobuffer_capacity_%29.md): Returns an initialized output stream that can write to a provided buffer.
- [initToFileAtPath:append:](init%28tofileatpath_append_%29.md): Returns an initialized output stream for writing to a specified file.
- [initWithURL:append:](init%28url_append_%29-5soau.md): Returns an initialized output stream for writing to a specified URL.
