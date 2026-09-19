> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzfilehandlenetworkdeviceattachment/init(filehandle:)

# init(fileHandle:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 11.0+

Creates the attachment from a file handle that contains a connected datagram socket.

## Declaration

```swift
init(fileHandle: FileHandle)
```

## Parameters

- `fileHandle`: A file handle to a connected datagram socket.

<a id="return-value"></a>

## Return Value

An attachment object for the specified file handle.

# initWithFileHandle: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Creates the attachment from a file handle that contains a connected datagram socket.

## Declaration

```objectivec
- (instancetype) initWithFileHandle:(NSFileHandle *) fileHandle;
```

## Parameters

- `fileHandle`: A file handle to a connected datagram socket.

<a id="return-value"></a>

## Return Value

An attachment object for the specified file handle.
