> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1532621-ioserviceordering](https://developer.apple.com/documentation/kernel/1532621-ioserviceordering)

# IOServiceOrdering

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
SInt32 IOServiceOrdering(const OSMetaClassBase *inObj1, const OSMetaClassBase *inObj2, void *ref);
```

## See Also

### Utilities

- [IOFixedDivide](1575297-iofixeddivide.md)
- [IOFixedMultiply](1575302-iofixedmultiply.md)
- [IOAlignmentToSize](1575292-ioalignmenttosize.md)
- [IOSizeToAlignment](1575319-iosizetoalignment.md)
- [OSSynchronizeIO](1576454-ossynchronizeio.md): The OSSynchronizeIO routine ensures orderly load and store operations to noncached memory mapped I/O devices.
- [DriverDescription](driverdescription.md)
- [DriverOSRuntime](driverosruntime.md)
- [DriverOSService](driverosservice.md)
- [DriverServiceInfo](driverserviceinfo.md)
- [DriverType](drivertype.md)
