> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vznetworkblockdevicestoragedeviceattachment/init(url:)-6q4m7](https://developer.apple.com/documentation/virtualization/vznetworkblockdevicestoragedeviceattachment/init(url:)-6q4m7)

# init(url:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 14.0+

Creates a new network block device (NBD) storage attachment from an NDB Uniform Resource Indicator (URI) represented as a URL that you provide.

## Declaration

```swift
convenience init(url URL: URL) throws
```

## Parameters

- `URL`: The NBD’s URI represented as a URL.

## See Also

### Creating network block device attachments

- [init(url:timeout:isForcedReadOnly:synchronizationMode:)](init%28url_timeout_isforcedreadonly_synchronizationmode_%29.md): Creates a new network block device storage attachment from an NBD Uniform Resource Indicator (URI) represented as a URL, timeout value, and read-only and synchronization modes that you provide.

# initWithURL:error: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Creates a new network block device (NBD) storage attachment from an NDB Uniform Resource Indicator (URI) represented as a URL that you provide.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) URL error:(NSError **) error;
```

## Parameters

- `URL`: The NBD’s URI represented as a URL.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

## See Also

### Creating network block device attachments

- [initWithURL:timeout:forcedReadOnly:synchronizationMode:error:](init%28url_timeout_isforcedreadonly_synchronizationmode_%29.md): Creates a new network block device storage attachment from an NBD Uniform Resource Indicator (URI) represented as a URL, timeout value, and read-only and synchronization modes that you provide.
