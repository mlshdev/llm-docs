> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmeshbuffer/fill(_:offset:)](https://developer.apple.com/documentation/modelio/mdlmeshbuffer/fill(_:offset:))

# fill(\_:offset:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Writes the specified data into the buffer.

## Declaration

```swift
func fill(_ data: Data, offset: Int)
```

## Parameters

- `data`: The data to be copied into the buffer.
- `offset`: The offset, in bytes, from the start of the buffer at which to write data.

<a id="Discussion"></a>

## Discussion

If the length of the specified data (plus the `offset` parameter, if nonzero) is greater than the buffer’s [length](length.md) property, this method writes data only up to the end of the buffer.

## See Also

### Working with Data in a Buffer

- [map()](map%28%29.md): Provides direct, read-only access to the buffer’s contents.
- [length](length.md): The data size of the buffer, in bytes.

# fillData:offset: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Writes the specified data into the buffer.

## Declaration

```objectivec
- (void) fillData:(NSData *) data offset:(NSUInteger) offset;
```

## Parameters

- `data`: The data to be copied into the buffer.
- `offset`: The offset, in bytes, from the start of the buffer at which to write data.

<a id="Discussion"></a>

## Discussion

If the length of the specified data (plus the `offset` parameter, if nonzero) is greater than the buffer’s [length](length.md) property, this method writes data only up to the end of the buffer.

## See Also

### Working with Data in a Buffer

- [map](map%28%29.md): Provides direct, read-only access to the buffer’s contents.
- [length](length.md): The data size of the buffer, in bytes.
