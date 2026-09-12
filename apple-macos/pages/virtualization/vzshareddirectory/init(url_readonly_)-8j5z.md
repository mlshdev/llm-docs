> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzshareddirectory/init(url:readonly:)-8j5z](https://developer.apple.com/documentation/virtualization/vzshareddirectory/init(url:readonly:)-8j5z)

# init(url:readOnly:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Initialize with a host directory.

## Declaration

```swift
init(url: URL, readOnly: Bool)
```

## Parameters

- `url`: A local file URL to expose to the guest.
- `readOnly`: A Boolean value that indicates whether to expose the directory as read-only to the guest.

<a id="Discussion"></a>

## Discussion

# initWithURL:readOnly: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Initialize with a host directory.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) url readOnly:(BOOL) readOnly;
```

## Parameters

- `url`: A local file URL to expose to the guest.
- `readOnly`: A Boolean value that indicates whether to expose the directory as read-only to the guest.

<a id="Discussion"></a>

## Discussion
