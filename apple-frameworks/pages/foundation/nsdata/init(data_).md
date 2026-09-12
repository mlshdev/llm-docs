> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/init(data:)](https://developer.apple.com/documentation/foundation/nsdata/init(data:))

# init(data:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a data object with the contents of another data object.

## Declaration

```swift
init(data: Data)
```

## Parameters

- `data`: A data object.

<a id="return-value"></a>

## Return Value

A data object initialized with the contents `data`.

## See Also

### Creating Data

- [init(bytes:length:)](init%28bytes_length_%29.md): Initializes a data object filled with a given number of bytes copied from a given buffer.
- [init(bytesNoCopy:length:)](init%28bytesnocopy_length_%29.md): Initializes a data object filled with a given number of bytes of data from a given buffer.
- [init(bytesNoCopy:length:deallocator:)](init%28bytesnocopy_length_deallocator_%29.md): Initializes a data object filled with a given number of bytes of data from a given buffer, with a custom deallocator block.
- [init(bytesNoCopy:length:freeWhenDone:)](init%28bytesnocopy_length_freewhendone_%29.md): Initializes a newly allocated data object by adding the given number of bytes from the given buffer.

# initWithData: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a data object with the contents of another data object.

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) data;
```

## Parameters

- `data`: A data object.

<a id="return-value"></a>

## Return Value

A data object initialized with the contents `data`.

## See Also

### Related Documentation

- [dataWithData:](datawithdata_.md): Creates a data object containing the contents of another data object.

### Creating Data

- [data](data.md): Creates an empty data object.
- [dataWithBytes:length:](datawithbytes_length_.md): Creates a data object containing a given number of bytes copied from a given buffer.
- [dataWithBytesNoCopy:length:](datawithbytesnocopy_length_.md): Creates a data object that holds a given number of bytes from a given buffer.
- [dataWithBytesNoCopy:length:freeWhenDone:](datawithbytesnocopy_length_freewhendone_.md): Creates a data object that holds a given number of bytes from a given buffer.
- [dataWithData:](datawithdata_.md): Creates a data object containing the contents of another data object.
- [initWithBytes:length:](init%28bytes_length_%29.md): Initializes a data object filled with a given number of bytes copied from a given buffer.
- [initWithBytesNoCopy:length:](init%28bytesnocopy_length_%29.md): Initializes a data object filled with a given number of bytes of data from a given buffer.
- [initWithBytesNoCopy:length:deallocator:](init%28bytesnocopy_length_deallocator_%29.md): Initializes a data object filled with a given number of bytes of data from a given buffer, with a custom deallocator block.
- [initWithBytesNoCopy:length:freeWhenDone:](init%28bytesnocopy_length_freewhendone_%29.md): Initializes a newly allocated data object by adding the given number of bytes from the given buffer.
