> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzlinuxbootloader/init(kernelurl:)](https://developer.apple.com/documentation/virtualization/vzlinuxbootloader/init(kernelurl:))

# init(kernelURL:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 11.0+

Creates a boot loader that launches the Linux kernel at the specified URL.

## Declaration

```swift
init(kernelURL: URL)
```

## Parameters

- `kernelURL`: The location of a Linux kernel on the local file system.

<a id="return-value"></a>

## Return Value

A boot loader object for the specified Linux kernel.

# initWithKernelURL: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Creates a boot loader that launches the Linux kernel at the specified URL.

## Declaration

```objectivec
- (instancetype) initWithKernelURL:(NSURL *) kernelURL;
```

## Parameters

- `kernelURL`: The location of a Linux kernel on the local file system.

<a id="return-value"></a>

## Return Value

A boot loader object for the specified Linux kernel.
