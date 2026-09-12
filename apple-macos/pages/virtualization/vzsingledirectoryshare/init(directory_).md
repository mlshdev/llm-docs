> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzsingledirectoryshare/init(directory:)](https://developer.apple.com/documentation/virtualization/vzsingledirectoryshare/init(directory:))

# init(directory:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Creates a directory share with a directory that you specify on the host.

## Declaration

```swift
init(directory: VZSharedDirectory)
```

## Parameters

- `directory`: The directory to share.

<a id="Discussion"></a>

## Discussion

Use this method to share a directory on the host system with the guest VM.

# initWithDirectory: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Creates a directory share with a directory that you specify on the host.

## Declaration

```objectivec
- (instancetype) initWithDirectory:(VZSharedDirectory *) directory;
```

## Parameters

- `directory`: The directory to share.

<a id="Discussion"></a>

## Discussion

Use this method to share a directory on the host system with the guest VM.
