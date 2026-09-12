> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsfilename/initwithcstring:](https://developer.apple.com/documentation/fskit/fsfilename/initwithcstring:)

# initWithCString:

**Interface language:** Objective-C

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Initializes a filename from a null-terminated character sequence.

## Declaration

```objectivec
- (instancetype) initWithCString:(const char *) name;
```

## Parameters

- `name`: A pointer to a C string.

<a id="discussion"></a>

## Discussion

> **Note**

> This initializer is unavailable in Swift. Use [initWithData:](init%28data_%29.md) or [initWithString:](init%28string_%29.md) instead.

## See Also

### Creating a filename

- [initWithBytes:length:](initwithbytes_length_.md): Initializes a file name by copying a character sequence from a byte array.
- [nameWithBytes:length:](namewithbytes_length_.md): Creates a filename by copying a character sequence from a byte array.
- [nameWithCString:](namewithcstring_.md): Creates a filename from a null-terminated character sequence.
- [initWithData:](init%28data_%29.md): Creates a filename by copying a character sequence data object.
- [nameWithData:](namewithdata_.md): Creates a filename by copying a character sequence data object.
- [initWithString:](init%28string_%29.md): Creates a filename by copying a character sequence from a string instance.
- [nameWithString:](namewithstring_.md): Creates a filename by copying a character sequence from a string instance.
