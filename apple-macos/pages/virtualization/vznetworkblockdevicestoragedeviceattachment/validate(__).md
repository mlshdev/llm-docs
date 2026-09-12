> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vznetworkblockdevicestoragedeviceattachment/validate(_:)](https://developer.apple.com/documentation/virtualization/vznetworkblockdevicestoragedeviceattachment/validate(_:))

# validate(\_:) (Swift)

**Framework:** Virtualization  
**Kind:** Type Method  
**Availability:** macOS 14.0+

Checks if the URL is a valid network block device URL.

## Declaration

```swift
class func validate(_ URL: URL) throws
```

## Parameters

- `URL`: The NBD URL to validate.

<a id="Discussion"></a>

## Discussion

This method checks that the URL is well-formed; however, it doesn’t attempt to access the URL. See the [NBD URL specification](https://github.com/NetworkBlockDevice/nbd/blob/master/doc/uri.md) on GitHub for more detailed descriptions of valid URIs.

# validateURL:error: (Objective-C)

**Framework:** Virtualization  
**Kind:** Type Method  
**Availability:** macOS 14.0+

Checks if the URL is a valid network block device URL.

## Declaration

```objectivec
+ (BOOL) validateURL:(NSURL *) URL error:(NSError **) error;
```

## Parameters

- `URL`: The NBD URL to validate.
- `error`: If not `nil`, the framework assigns this value with an error that describes why the URL isn’t valid.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="Discussion"></a>

## Discussion

This method checks that the URL is well-formed; however, it doesn’t attempt to access the URL. See the [NBD URL specification](https://github.com/NetworkBlockDevice/nbd/blob/master/doc/uri.md) on GitHub for more detailed descriptions of valid URIs.
