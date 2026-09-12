> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzfilehandleserialportattachment/filehandleforwriting](https://developer.apple.com/documentation/virtualization/vzfilehandleserialportattachment/filehandleforwriting)

# fileHandleForWriting (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The file handle that the guest operating system uses to write data.

## Declaration

```swift
var fileHandleForWriting: FileHandle? { get }
```

<a id="Discussion"></a>

## Discussion

When you want to receive data from the guest operating system, read data from the file handle in this property.

## See Also

### Getting the file handles

- [fileHandleForReading](filehandleforreading.md): The file handle that the guest operating system uses to read data.

# fileHandleForWriting (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The file handle that the guest operating system uses to write data.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSFileHandle * fileHandleForWriting;
```

<a id="Discussion"></a>

## Discussion

When you want to receive data from the guest operating system, read data from the file handle in this property.

## See Also

### Getting the file handles

- [fileHandleForReading](filehandleforreading.md): The file handle that the guest operating system uses to read data.
