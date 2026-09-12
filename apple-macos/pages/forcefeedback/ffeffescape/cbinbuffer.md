> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/forcefeedback/ffeffescape/cbinbuffer](https://developer.apple.com/documentation/forcefeedback/ffeffescape/cbinbuffer)

# cbInBuffer (Swift)

**Framework:** Force Feedback  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Specifies the size, in bytes, of the **lpvInBuffer** buffer.

## Declaration

```swift
var cbInBuffer: DWORD
```

## See Also

### Instance Properties

- [cbOutBuffer](cboutbuffer.md): On entry, specifies the size, in bytes, of the **lpvOutBuffer** buffer. On exit, specifies the number of bytes actually produced by the command.
- [dwCommand](dwcommand.md): Specifies a plugIn specific command number. Contact the hardware vendor for a list of valid commands and their parameters.
- [dwSize](dwsize.md): Size, in bytes, of this structure. This member must be initialized before the structure is used.
- [lpvInBuffer](lpvinbuffer.md): Buffer containing the data required to perform the operation.
- [lpvOutBuffer](lpvoutbuffer.md): Buffer in which the operation’s output data is returned.

# cbInBuffer (Objective-C)

**Framework:** Force Feedback  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Specifies the size, in bytes, of the **lpvInBuffer** buffer.

## Declaration

```objectivec
DWORD cbInBuffer;
```

## See Also

### Instance Properties

- [cbOutBuffer](cboutbuffer.md): On entry, specifies the size, in bytes, of the **lpvOutBuffer** buffer. On exit, specifies the number of bytes actually produced by the command.
- [dwCommand](dwcommand.md): Specifies a plugIn specific command number. Contact the hardware vendor for a list of valid commands and their parameters.
- [dwSize](dwsize.md): Size, in bytes, of this structure. This member must be initialized before the structure is used.
- [lpvInBuffer](lpvinbuffer.md): Buffer containing the data required to perform the operation.
- [lpvOutBuffer](lpvoutbuffer.md): Buffer in which the operation’s output data is returned.
