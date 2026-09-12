> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsfilename/namewithdata:](https://developer.apple.com/documentation/fskit/fsfilename/namewithdata:)

# nameWithData:

**Interface language:** Objective-C

**Framework:** FSKit  
**Kind:** Type Method  
**Availability:** macOS 15.4+

Creates a filename by copying a character sequence data object.

## Declaration

```objectivec
+ (instancetype) nameWithData:(NSData *) name;
```

## Parameters

- `name`: The data object containing the character sequence to use for the filename. The sequence terminates if a `NUL` character exists prior to `name.length`.

<a id="discussion"></a>

## Discussion

This initializer copies up to `name.length` characters of the sequence pointed to by `bytes`.

## See Also

### Creating a filename

- [initWithBytes:length:](initwithbytes_length_.md): Initializes a file name by copying a character sequence from a byte array.
- [nameWithBytes:length:](namewithbytes_length_.md): Creates a filename by copying a character sequence from a byte array.
- [initWithCString:](initwithcstring_.md): Initializes a filename from a null-terminated character sequence.
- [nameWithCString:](namewithcstring_.md): Creates a filename from a null-terminated character sequence.
- [initWithData:](init%28data_%29.md): Creates a filename by copying a character sequence data object.
- [initWithString:](init%28string_%29.md): Creates a filename by copying a character sequence from a string instance.
- [nameWithString:](namewithstring_.md): Creates a filename by copying a character sequence from a string instance.
