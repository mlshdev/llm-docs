> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/drivertype](https://developer.apple.com/documentation/kernel/drivertype)

# DriverType

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Structure  
**Availability:** macOS 10.0+

## Declaration

```objectivec
typedef struct DriverType {
    ...
} DriverType;
```

## Topics

### Instance Properties

- [nameInfoStr](drivertype/1401421-nameinfostr.md)
- [version](drivertype/1401554-version.md)

## See Also

### Utilities

- [IOServiceOrdering](1532621-ioserviceordering.md)
- [IOFixedDivide](1575297-iofixeddivide.md)
- [IOFixedMultiply](1575302-iofixedmultiply.md)
- [IOAlignmentToSize](1575292-ioalignmenttosize.md)
- [IOSizeToAlignment](1575319-iosizetoalignment.md)
- [OSSynchronizeIO](1576454-ossynchronizeio.md): The OSSynchronizeIO routine ensures orderly load and store operations to noncached memory mapped I/O devices.
- [DriverDescription](driverdescription.md)
- [DriverOSRuntime](driverosruntime.md)
- [DriverOSService](driverosservice.md)
- [DriverServiceInfo](driverserviceinfo.md)
