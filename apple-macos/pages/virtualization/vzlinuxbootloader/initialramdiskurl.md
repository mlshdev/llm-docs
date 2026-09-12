> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzlinuxbootloader/initialramdiskurl](https://developer.apple.com/documentation/virtualization/vzlinuxbootloader/initialramdiskurl)

# initialRamdiskURL (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The location of an optional RAM disk, which the boot loader maps into memory before it boots the Linux kernel.

## Declaration

```swift
var initialRamdiskURL: URL? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`. If you want specific files to be available when your Linux kernel boots, provide a URL to a valid RAM disk file in this property.

## See Also

### Configuring the boot parameters

- [commandLine](commandline.md): The command-line parameters to pass to the Linux kernel at boot time.

# initialRamdiskURL (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The location of an optional RAM disk, which the boot loader maps into memory before it boots the Linux kernel.

## Declaration

```objectivec
@property (copy, nullable) NSURL * initialRamdiskURL;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`. If you want specific files to be available when your Linux kernel boots, provide a URL to a valid RAM disk file in this property.

## See Also

### Configuring the boot parameters

- [commandLine](commandline.md): The command-line parameters to pass to the Linux kernel at boot time.
