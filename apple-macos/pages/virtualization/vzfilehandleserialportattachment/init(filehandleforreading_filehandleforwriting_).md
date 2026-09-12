> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzfilehandleserialportattachment/init(filehandleforreading:filehandleforwriting:)](https://developer.apple.com/documentation/virtualization/vzfilehandleserialportattachment/init(filehandleforreading:filehandleforwriting:))

# init(fileHandleForReading:fileHandleForWriting:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 11.0+

Creates a serial port attachment object from the specified file handles.

## Declaration

```swift
init(fileHandleForReading: FileHandle?, fileHandleForWriting: FileHandle?)
```

## Parameters

- `fileHandleForReading`: The file handle that the guest operating system uses to read data. Your virtual machine writes data to this file handle. If the file descriptor for the file handle is invalid, this method raises an exception.
- `fileHandleForWriting`: The file handle to which the guest operating system writes data. Your virtual machine reads data from this file handle. If its file descriptor for the file handle is invalid, this method raises an exception.

<a id="return-value"></a>

## Return Value

A serial port attachment object.

# initWithFileHandleForReading:fileHandleForWriting: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Creates a serial port attachment object from the specified file handles.

## Declaration

```objectivec
- (instancetype) initWithFileHandleForReading:(NSFileHandle *) fileHandleForReading fileHandleForWriting:(NSFileHandle *) fileHandleForWriting;
```

## Parameters

- `fileHandleForReading`: The file handle that the guest operating system uses to read data. Your virtual machine writes data to this file handle. If the file descriptor for the file handle is invalid, this method raises an exception.
- `fileHandleForWriting`: The file handle to which the guest operating system writes data. Your virtual machine reads data from this file handle. If its file descriptor for the file handle is invalid, this method raises an exception.

<a id="return-value"></a>

## Return Value

A serial port attachment object.
