> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsfilename/namewithcstring:](https://developer.apple.com/documentation/fskit/fsfilename/namewithcstring:)

# nameWithCString:

**Interface language:** Objective-C

**Framework:** FSKit  
**Kind:** Type Method  
**Availability:** macOS 15.4+

Creates a filename from a null-terminated character sequence.

## Declaration

```objectivec
+ (instancetype) nameWithCString:(const char *) name;
```

## Parameters

- `name`: A pointer to a C string.

## See Also

### Creating a filename

- [initWithBytes:length:](initwithbytes_length_.md): Initializes a file name by copying a character sequence from a byte array.
- [nameWithBytes:length:](namewithbytes_length_.md): Creates a filename by copying a character sequence from a byte array.
- [initWithCString:](initwithcstring_.md): Initializes a filename from a null-terminated character sequence.
- [initWithData:](init%28data_%29.md): Creates a filename by copying a character sequence data object.
- [nameWithData:](namewithdata_.md): Creates a filename by copying a character sequence data object.
- [initWithString:](init%28string_%29.md): Creates a filename by copying a character sequence from a string instance.
- [nameWithString:](namewithstring_.md): Creates a filename by copying a character sequence from a string instance.
