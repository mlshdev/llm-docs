> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsfilename/initwithbytes:length:](https://developer.apple.com/documentation/fskit/fsfilename/initwithbytes:length:)

# initWithBytes:length:

**Interface language:** Objective-C

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Initializes a file name by copying a character sequence from a byte array.

## Declaration

```objectivec
- (instancetype) initWithBytes:(const char *) bytes length:(NSUInteger) length;
```

<a id="discussion"></a>

## Discussion

> **Note**

> This initializer is unavailable in Swift. Use [initWithData:](init%28data_%29.md) or [initWithString:](init%28string_%29.md) instead.

- bytes: A pointer to the character data to copy, up to a maximum of `length`. The sequence terminates if a `NUL` character exists prior to `length`.
- length: The size of the `bytes` array.

## See Also

### Creating a filename

- [nameWithBytes:length:](namewithbytes_length_.md): Creates a filename by copying a character sequence from a byte array.
- [initWithCString:](initwithcstring_.md): Initializes a filename from a null-terminated character sequence.
- [nameWithCString:](namewithcstring_.md): Creates a filename from a null-terminated character sequence.
- [initWithData:](init%28data_%29.md): Creates a filename by copying a character sequence data object.
- [nameWithData:](namewithdata_.md): Creates a filename by copying a character sequence data object.
- [initWithString:](init%28string_%29.md): Creates a filename by copying a character sequence from a string instance.
- [nameWithString:](namewithstring_.md): Creates a filename by copying a character sequence from a string instance.
