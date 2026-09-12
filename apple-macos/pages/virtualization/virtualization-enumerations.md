> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/virtualization-enumerations](https://developer.apple.com/documentation/virtualization/virtualization-enumerations)

# Virtualization enumerations (Swift)

**Framework:** Virtualization  
**Kind:** API Collection

Control the caching modes, disk synchronization, and macOS auxiliary storage options of VMs.

<a id="overview"></a>

## Overview

These are values you use to control aspects of the operation of the virtual drives for guest VMs and the auxiliary storage of macOS guest VMs.

## Topics

### Virtual disk image caching modes

- [VZDiskImageCachingMode](vzdiskimagecachingmode.md): An integer that describes the disk image caching mode.

### Virtual disk synchronization modes

- [VZDiskImageSynchronizationMode](vzdiskimagesynchronizationmode.md): An integer that describes the disk image synchronization mode.
- [VZDiskSynchronizationMode](vzdisksynchronizationmode.md): Values that describe the synchronization modes available to the guest OS.

### Mac-specific auxiliary storage options

- [VZMacAuxiliaryStorage.InitializationOptions](vzmacauxiliarystorage/initializationoptions.md): Options you can set when creating new auxiliary storage.

### Extensible firmware interface (EFI) signatures

- [VZEFISignature](vzefisignature-swift.enum.md)

### Rosetta availability states

- [VZLinuxRosettaAvailability](vzlinuxrosettaavailability.md): Constants that describe the availability and installation status of Rosetta.

### Virtualization error codes

- [VZError.Code](vzerror/code.md): Errors you might encounter when configuring or using a virtual machine.

### VM states

- [VZVirtualMachine.State](vzvirtualmachine/state-swift.enum.md): The execution states of the VM.

# Virtualization enumerations (Objective-C)

**Framework:** Virtualization  
**Kind:** API Collection

Control the caching modes, disk synchronization, and macOS auxiliary storage options of VMs.

<a id="overview"></a>

## Overview

These are values you use to control aspects of the operation of the virtual drives for guest VMs and the auxiliary storage of macOS guest VMs.

## Topics

### Virtual disk image caching modes

- [VZDiskImageCachingMode](vzdiskimagecachingmode.md): An integer that describes the disk image caching mode.

### Virtual disk synchronization modes

- [VZDiskImageSynchronizationMode](vzdiskimagesynchronizationmode.md): An integer that describes the disk image synchronization mode.
- [VZDiskSynchronizationMode](vzdisksynchronizationmode.md): Values that describe the synchronization modes available to the guest OS.

### Mac-specific auxiliary storage options

- [VZMacAuxiliaryStorageInitializationOptions](vzmacauxiliarystorage/initializationoptions.md): Options you can set when creating new auxiliary storage.

### Rosetta availability states

- [VZLinuxRosettaAvailability](vzlinuxrosettaavailability.md): Constants that describe the availability and installation status of Rosetta.

### Virtualization error codes

- [VZErrorCode](vzerror/code.md): Errors you might encounter when configuring or using a virtual machine.

### VM states

- [VZVirtualMachineState](vzvirtualmachine/state-swift.enum.md): The execution states of the VM.
