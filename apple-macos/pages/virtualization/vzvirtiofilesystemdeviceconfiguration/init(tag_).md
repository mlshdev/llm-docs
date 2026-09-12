> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiofilesystemdeviceconfiguration/init(tag:)](https://developer.apple.com/documentation/virtualization/vzvirtiofilesystemdeviceconfiguration/init(tag:))

# init(tag:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Creates a configuration for a VIRTIO file system device.

## Declaration

```swift
init(tag: String)
```

## Parameters

- `tag`: The label identifying this device in the guest.

<a id="Discussion"></a>

## Discussion

The system presents the `tag` as a label in the guest identifying this device for mounting. The `tag` must be valid, which you can check with [validateTag(\_:)](validatetag%28__%29.md).

## See Also

### Related Documentation

- [validateTag(\_:)](validatetag%28__%29.md): Checks to see whether a Virtio tag is valid.

# initWithTag: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Creates a configuration for a VIRTIO file system device.

## Declaration

```objectivec
- (instancetype) initWithTag:(NSString *) tag;
```

## Parameters

- `tag`: The label identifying this device in the guest.

<a id="Discussion"></a>

## Discussion

The system presents the `tag` as a label in the guest identifying this device for mounting. The `tag` must be valid, which you can check with [validateTag:error:](validatetag%28__%29.md).

## See Also

### Related Documentation

- [validateTag:error:](validatetag%28__%29.md): Checks to see whether a Virtio tag is valid.
