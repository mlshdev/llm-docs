> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzdiskimagestoragedeviceattachment/init(url:readonly:)-9qeco](https://developer.apple.com/documentation/virtualization/vzdiskimagestoragedeviceattachment/init(url:readonly:)-9qeco)

# init(url:readOnly:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 11.0+

Creates the attachment object from the specified disk image.

## Declaration

```swift
init(url: URL, readOnly: Bool) throws
```

## Parameters

- `url`: A URL that points to a local disk image in RAW format.
- `readOnly`: A Boolean that indicates whether to configure the disk image as read-only. Specify [true](https://developer.apple.com/documentation/swift/true) to prevent the guest operating system from writing to the disk image, and [false](https://developer.apple.com/documentation/swift/false) to allow writing.

<a id="return-value"></a>

## Return Value

In Swift the methods returns an attachment object; in Objective-C the methods returns an attachment object on success, or `nil` if an error occurred

## See Also

### Creating the attachment point

- [init(url:readOnly:cachingMode:synchronizationMode:)](init%28url_readonly_cachingmode_synchronizationmode_%29-36gc5.md): Initialize the attachment from a local file URL.
- [init(url:readOnly:cachingMode:synchronizationMode:)](init%28url_readonly_cachingmode_synchronizationmode_%29-36gc5.md): Initialize the attachment from a local file URL.

# initWithURL:readOnly:error: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Creates the attachment object from the specified disk image.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) url readOnly:(BOOL) readOnly error:(NSError **) error;
```

## Parameters

- `url`: A URL that points to a local disk image in RAW format.
- `readOnly`: A Boolean that indicates whether to configure the disk image as read-only. Specify [true](https://developer.apple.com/documentation/swift/true) to prevent the guest operating system from writing to the disk image, and [false](https://developer.apple.com/documentation/swift/false) to allow writing.
- `error`: In Objective-C, the method requires a pointer to an error object. On the successful initialization of the attachment, this pointer is `nil`. If initialization fails, the pointer contains an error object that explains the reason for the failure.

<a id="return-value"></a>

## Return Value

In Swift the methods returns an attachment object; in Objective-C the methods returns an attachment object on success, or `nil` if an error occurred

## See Also

### Creating the attachment point

- [initWithURL:readOnly:cachingMode:synchronizationMode:error:](init%28url_readonly_cachingmode_synchronizationmode_%29-36gc5.md): Initialize the attachment from a local file URL.
- [initWithURL:readOnly:cachingMode:synchronizationMode:error:](init%28url_readonly_cachingmode_synchronizationmode_%29-36gc5.md): Initialize the attachment from a local file URL.
