> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1576454-ossynchronizeio](https://developer.apple.com/documentation/kernel/1576454-ossynchronizeio)

# OSSynchronizeIO

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

The OSSynchronizeIO routine ensures orderly load and store operations to noncached memory mapped I/O devices.

## Declaration

```objectivec
void OSSynchronizeIO(void);
```

<a id="discussion"></a>

## Discussion

The OSSynchronizeIO routine ensures orderly load and store operations to noncached memory mapped I/O devices. It executes the eieio instruction on PowerPC processors.

## See Also

### Utilities

- [IOServiceOrdering](1532621-ioserviceordering.md)
- [IOFixedDivide](1575297-iofixeddivide.md)
- [IOFixedMultiply](1575302-iofixedmultiply.md)
- [IOAlignmentToSize](1575292-ioalignmenttosize.md)
- [IOSizeToAlignment](1575319-iosizetoalignment.md)
- [DriverDescription](driverdescription.md)
- [DriverOSRuntime](driverosruntime.md)
- [DriverOSService](driverosservice.md)
- [DriverServiceInfo](driverserviceinfo.md)
- [DriverType](drivertype.md)
