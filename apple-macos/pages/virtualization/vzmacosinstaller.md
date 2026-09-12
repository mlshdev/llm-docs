> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacosinstaller](https://developer.apple.com/documentation/virtualization/vzmacosinstaller)

# VZMacOSInstaller (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

An object you use to install macOS on the specified virtual machine.

## Declaration

```swift
class VZMacOSInstaller
```

## Mentioned In

- [Installing macOS on a Virtual Machine](installing-macos-on-a-virtual-machine.md)

<a id="overview"></a>

## Overview

Initialize a [VZMacOSInstaller](vzmacosinstaller.md) object with a [VZVirtualMachine](vzvirtualmachine.md) and a file URL that refers to a macOS restore image.

The following code example shows how to use a `VZMacOSInstaller:`

```swift
// Call VZMacOSInstaller with a URL that corresponds to a local file. 
// This is the storage location for the restore image the app downloads.
let localRestoreImageURL = ...

// Load the latest restore image.
guard let restoreImage = try? await VZMacOSRestoreImage.latestSupported else {
    // Handle the error.
    abort()
}

// Call VZMacOSInstaller with a URL that corresponds to a local file. 
// Because restoreImage came from latestSupported, its URL property refers to a 
// restore image on the network. Download the restore image to the local file system.
guard let (location, _) = try? await URLSession.shared.download(from: restoreImage.url, delegate: nil) 
    else {
        // Handle the error.
        abort()
}

guard ((try? FileManager.default.moveItem(at: location, to: localRestoreImageURL)) != nil) else {
    // Handle the error.
    abort()
}

DispatchQueue.main.async {
    // Becuase this restore image came from VZMacOSRestoreImage.
    // latestSupported, mostFeaturefulSupportedConfiguration should not be nil.
    let configurationRequirements = restoreImage.mostFeaturefulSupportedConfiguration!

    // Construct a VZVirtualMachineConfiguration that satisfies the configuration requirements.
    let configuration = VZVirtualMachineConfiguration()
    configuration.bootLoader = VZMacOSBootLoader()
    configuration.platform = VZMacPlatformConfiguration()

    // The following are minimum values; you can use larger values if desired.
    configuration.cpuCount = configurationRequirements.minimumSupportedCPUCount
    configuration.memorySize = configurationRequirements.minimumSupportedMemorySize

    // Set other configuration properties as necessary.
    // ...

guard ((try? configuration.validate()) != nil) else {
    // Handle the error.
    abort()
}

let virtualMachine = VZVirtualMachine(configuration: configuration)
let installer = VZMacOSInstaller(virtualMachine: virtualMachine, restoringFromImageAt: localRestoreImageURL)
installer.install(completionHandler: { (result: Result) in
    if case let .failure(error) = result {
        // Handle the error.
        abort()
    } else {
        // Installation was successful.
    }
})

// Observe progress using installer.progress object.
}
```

## Topics

### Creating a macOS Installer

- [init(virtualMachine:restoringFromImageAt:)](vzmacosinstaller/init%28virtualmachine_restoringfromimageat_%29.md): Creates a macOS installer object.

### Getting Information About an Installation

- [progress](vzmacosinstaller/progress.md): A progress object that you can use to observe or cancel an installation.
- [restoreImageURL](vzmacosinstaller/restoreimageurl.md): The restore image URL used to initialize this installer.
- [virtualMachine](vzmacosinstaller/virtualmachine.md): The virtual machine used to initialize this installer.

### Installing macOS

- [install(completionHandler:)](vzmacosinstaller/install%28completionhandler_%29.md): Start installing macOS.
- [install()](vzmacosinstaller/install%28%29.md): Start installing macOS.

### Initializers

- [init(virtualMachine:restoreImageURL:)](vzmacosinstaller/init%28virtualmachine_restoreimageurl_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [VZVirtualMachine](vzvirtualmachine.md): An object that manages the overall state and configuration of your VM.

### Installers

- [VZMacOSRestoreImage](vzmacosrestoreimage.md): An object that describes a version of macOS to install on to a virtual machine.
- [VZMacOSConfigurationRequirements](vzmacosconfigurationrequirements.md): An object that describes the parameter constraints required by a specific configuration of macOS.

# VZMacOSInstaller (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

An object you use to install macOS on the specified virtual machine.

## Declaration

```objectivec
@interface VZMacOSInstaller : NSObject
```

## Mentioned In

- [Installing macOS on a Virtual Machine](installing-macos-on-a-virtual-machine.md)

<a id="overview"></a>

## Overview

Initialize a [VZMacOSInstaller](vzmacosinstaller.md) object with a [VZVirtualMachine](vzvirtualmachine.md) and a file URL that refers to a macOS restore image.

The following code example shows how to use a `VZMacOSInstaller:`

```swift
// Call VZMacOSInstaller with a URL that corresponds to a local file. 
// This is the storage location for the restore image the app downloads.
let localRestoreImageURL = ...

// Load the latest restore image.
guard let restoreImage = try? await VZMacOSRestoreImage.latestSupported else {
    // Handle the error.
    abort()
}

// Call VZMacOSInstaller with a URL that corresponds to a local file. 
// Because restoreImage came from latestSupported, its URL property refers to a 
// restore image on the network. Download the restore image to the local file system.
guard let (location, _) = try? await URLSession.shared.download(from: restoreImage.url, delegate: nil) 
    else {
        // Handle the error.
        abort()
}

guard ((try? FileManager.default.moveItem(at: location, to: localRestoreImageURL)) != nil) else {
    // Handle the error.
    abort()
}

DispatchQueue.main.async {
    // Becuase this restore image came from VZMacOSRestoreImage.
    // latestSupported, mostFeaturefulSupportedConfiguration should not be nil.
    let configurationRequirements = restoreImage.mostFeaturefulSupportedConfiguration!

    // Construct a VZVirtualMachineConfiguration that satisfies the configuration requirements.
    let configuration = VZVirtualMachineConfiguration()
    configuration.bootLoader = VZMacOSBootLoader()
    configuration.platform = VZMacPlatformConfiguration()

    // The following are minimum values; you can use larger values if desired.
    configuration.cpuCount = configurationRequirements.minimumSupportedCPUCount
    configuration.memorySize = configurationRequirements.minimumSupportedMemorySize

    // Set other configuration properties as necessary.
    // ...

guard ((try? configuration.validate()) != nil) else {
    // Handle the error.
    abort()
}

let virtualMachine = VZVirtualMachine(configuration: configuration)
let installer = VZMacOSInstaller(virtualMachine: virtualMachine, restoringFromImageAt: localRestoreImageURL)
installer.install(completionHandler: { (result: Result) in
    if case let .failure(error) = result {
        // Handle the error.
        abort()
    } else {
        // Installation was successful.
    }
})

// Observe progress using installer.progress object.
}
```

## Topics

### Creating a macOS Installer

- [initWithVirtualMachine:restoreImageURL:](vzmacosinstaller/init%28virtualmachine_restoringfromimageat_%29.md): Creates a macOS installer object.

### Getting Information About an Installation

- [progress](vzmacosinstaller/progress.md): A progress object that you can use to observe or cancel an installation.
- [restoreImageURL](vzmacosinstaller/restoreimageurl.md): The restore image URL used to initialize this installer.
- [virtualMachine](vzmacosinstaller/virtualmachine.md): The virtual machine used to initialize this installer.

### Installing macOS

- [installWithCompletionHandler:](vzmacosinstaller/install%28%29.md): Start installing macOS.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Related Documentation

- [VZVirtualMachine](vzvirtualmachine.md): An object that manages the overall state and configuration of your VM.

### Installers

- [VZMacOSRestoreImage](vzmacosrestoreimage.md): An object that describes a version of macOS to install on to a virtual machine.
- [VZMacOSConfigurationRequirements](vzmacosconfigurationrequirements.md): An object that describes the parameter constraints required by a specific configuration of macOS.
