> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzfilehandleserialportattachment/filehandleforreading](https://developer.apple.com/documentation/virtualization/vzfilehandleserialportattachment/filehandleforreading)

# fileHandleForReading (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The file handle that the guest operating system uses to read data.

## Declaration

```swift
var fileHandleForReading: FileHandle? { get }
```

<a id="Discussion"></a>

## Discussion

When you want to send data to the guest operating system, write data to the file handle in this property.

## See Also

### Getting the file handles

- [fileHandleForWriting](filehandleforwriting.md): The file handle that the guest operating system uses to write data.

# fileHandleForReading (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The file handle that the guest operating system uses to read data.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSFileHandle * fileHandleForReading;
```

<a id="Discussion"></a>

## Discussion

When you want to send data to the guest operating system, write data to the file handle in this property.

## See Also

### Getting the file handles

- [fileHandleForWriting](filehandleforwriting.md): The file handle that the guest operating system uses to write data.
