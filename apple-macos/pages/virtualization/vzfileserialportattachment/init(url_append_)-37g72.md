> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzfileserialportattachment/init(url:append:)-37g72](https://developer.apple.com/documentation/virtualization/vzfileserialportattachment/init(url:append:)-37g72)

# init(url:append:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 11.0+

Creates a file-based serial port attachment object.

## Declaration

```swift
init(url: URL, append shouldAppend: Bool) throws
```

## Parameters

- `url`: The URL of a file on the local file system. The specified file must be writable by the virtual machine.
- `shouldAppend`: A Boolean that indicates whether the virtual machine opens the file in append mode. Specify [true](https://developer.apple.com/documentation/swift/true) to append data to the file, and specify [false](https://developer.apple.com/documentation/swift/false) to replace the contents of the file with any new data.

<a id="return-value"></a>

## Return Value

A file-based serial port attachment on success, or `nil` if initialization failed.

# initWithURL:append:error: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Creates a file-based serial port attachment object.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) url append:(BOOL) shouldAppend error:(NSError **) error;
```

## Parameters

- `url`: The URL of a file on the local file system. The specified file must be writable by the virtual machine.
- `shouldAppend`: A Boolean that indicates whether the virtual machine opens the file in append mode. Specify [true](https://developer.apple.com/documentation/swift/true) to append data to the file, and specify [false](https://developer.apple.com/documentation/swift/false) to replace the contents of the file with any new data.
- `error`: In Objective-C, provide a pointer to an error object. If initialization is successful, your pointer is `nil`. If initialization fails, the method sets this parameter to an appropriate error object. You may specify `nil` for this parameter if you don’t need error information.

<a id="return-value"></a>

## Return Value

A file-based serial port attachment on success, or `nil` if initialization failed.
