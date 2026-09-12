> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacosinstaller/install()](https://developer.apple.com/documentation/virtualization/vzmacosinstaller/install())

# install() (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Start installing macOS.

## Declaration

```swift
func install() async throws
```

## Mentioned In

- [Installing macOS on a Virtual Machine](../installing-macos-on-a-virtual-machine.md)

<a id="Discussion"></a>

## Discussion

This method starts the installation process. The VM must be in a stopped state. During the installation operation, pausing or stopping the VM results in an undefined behavior.

If you start the installation on the same [VZMacOSInstaller](../vzmacosinstaller.md) object more than once, the framework raises an exception.

Call this method only on the VM’s queue.

## See Also

### Installing macOS

- [install(completionHandler:)](install%28completionhandler_%29.md): Start installing macOS.

# installWithCompletionHandler: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Start installing macOS.

## Declaration

```objectivec
- (void) installWithCompletionHandler:(void (^)(NSError *)) completionHandler;
```

## Parameters

- `completionHandler`: A block the framework calls after installation has completed successfully or has failed.

  The `error` parameter passed to the block is `nil` if installation was successful. The framework invokes the block on the VM’s queue.

## Mentioned In

- [Installing macOS on a Virtual Machine](../installing-macos-on-a-virtual-machine.md)

<a id="Discussion"></a>

## Discussion

This method starts the installation process. The VM must be in a stopped state. During the installation operation, pausing or stopping the VM results in an undefined behavior.

If you start the installation on the same [VZMacOSInstaller](../vzmacosinstaller.md) object more than once, the framework raises an exception.

Call this method only on the VM’s queue.
