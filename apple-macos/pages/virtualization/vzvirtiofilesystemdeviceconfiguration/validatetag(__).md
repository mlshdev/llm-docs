> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiofilesystemdeviceconfiguration/validatetag(_:)](https://developer.apple.com/documentation/virtualization/vzvirtiofilesystemdeviceconfiguration/validatetag(_:))

# validateTag(\_:) (Swift)

**Framework:** Virtualization  
**Kind:** Type Method  
**Availability:** macOS 12.0+

Checks to see whether a Virtio tag is valid.

## Declaration

```swift
class func validateTag(_ tag: String) throws
```

## Parameters

- `tag`: The tag to validate.

## Mentioned In

- [Running Intel Binaries in Linux VMs](../running-intel-binaries-in-linux-vms.md)

<a id="Discussion"></a>

## Discussion

The tag can’t be empty and must be fewer than 36 bytes when encoded in UTF-8.

# validateTag:error: (Objective-C)

**Framework:** Virtualization  
**Kind:** Type Method  
**Availability:** macOS 12.0+

Checks to see whether a Virtio tag is valid.

## Declaration

```objectivec
+ (BOOL) validateTag:(NSString *) tag error:(NSError **) error;
```

## Parameters

- `tag`: The tag to validate.
- `error`: An error that describes why the tag isn’t valid, or `nil` if the tag is valid.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

## Mentioned In

- [Running Intel Binaries in Linux VMs](../running-intel-binaries-in-linux-vms.md)

<a id="Discussion"></a>

## Discussion

The tag can’t be empty and must be fewer than 36 bytes when encoded in UTF-8.
