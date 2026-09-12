> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsfilename/init(string:)](https://developer.apple.com/documentation/fskit/fsfilename/init(string:))

# init(string:) (Swift)

**Framework:** FSKit  
**Kind:** Initializer  
**Availability:** macOS 15.4+

Creates a filename by copying a character sequence from a string instance.

## Declaration

```swift
convenience init(string name: String)
```

## Parameters

- `name`: The string containing the character sequence to use for the filename.

<a id="discussion"></a>

## Discussion

This initializer copies the UTF-8 representation of the characters in `string`. If `string` contains a `NUL` character, the sequence terminates.

## See Also

### Creating a filename

- [init(bytes:)](init%28bytes_%29.md)
- [init(cString:)](init%28cstring_%29.md)
- [init(data:)](init%28data_%29.md): Creates a filename by copying a character sequence data object.

# initWithString: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Creates a filename by copying a character sequence from a string instance.

## Declaration

```objectivec
- (instancetype) initWithString:(NSString *) name;
```

## Parameters

- `name`: The string containing the character sequence to use for the filename.

<a id="discussion"></a>

## Discussion

This initializer copies the UTF-8 representation of the characters in `string`. If `string` contains a `NUL` character, the sequence terminates.

## See Also

### Creating a filename

- [initWithBytes:length:](initwithbytes_length_.md): Initializes a file name by copying a character sequence from a byte array.
- [nameWithBytes:length:](namewithbytes_length_.md): Creates a filename by copying a character sequence from a byte array.
- [initWithCString:](initwithcstring_.md): Initializes a filename from a null-terminated character sequence.
- [nameWithCString:](namewithcstring_.md): Creates a filename from a null-terminated character sequence.
- [initWithData:](init%28data_%29.md): Creates a filename by copying a character sequence data object.
- [nameWithData:](namewithdata_.md): Creates a filename by copying a character sequence data object.
- [nameWithString:](namewithstring_.md): Creates a filename by copying a character sequence from a string instance.
