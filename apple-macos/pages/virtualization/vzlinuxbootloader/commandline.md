> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzlinuxbootloader/commandline](https://developer.apple.com/documentation/virtualization/vzlinuxbootloader/commandline)

# commandLine (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The command-line parameters to pass to the Linux kernel at boot time.

## Declaration

```swift
var commandLine: String { get set }
```

<a id="Discussion"></a>

## Discussion

For information about the parameters you can pass to a Linux kernel, see “[The kernel’s command-line parameters](https://www.kernel.org/doc/html/latest/admin-guide/kernel-parameters.html)”.

## See Also

### Configuring the boot parameters

- [initialRamdiskURL](initialramdiskurl.md): The location of an optional RAM disk, which the boot loader maps into memory before it boots the Linux kernel.

# commandLine (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The command-line parameters to pass to the Linux kernel at boot time.

## Declaration

```objectivec
@property (copy) NSString * commandLine;
```

<a id="Discussion"></a>

## Discussion

For information about the parameters you can pass to a Linux kernel, see “[The kernel’s command-line parameters](https://www.kernel.org/doc/html/latest/admin-guide/kernel-parameters.html)”.

## See Also

### Configuring the boot parameters

- [initialRamdiskURL](initialramdiskurl.md): The location of an optional RAM disk, which the boot loader maps into memory before it boots the Linux kernel.
