> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/atadevicenub/1805593-publishbusproperties](https://developer.apple.com/documentation/kernel/atadevicenub/1805593-publishbusproperties)

# publishBusProperties

**Interface language:** Objective-C

**Framework:** Kernel

puts info about this device's bus capability in the device tree.

## Declaration

```objectivec
virtual void publishBusProperties(
 void); 
```

## See Also

### Miscellaneous

- [allocCommand](1805563-alloccommand.md): create command objects for clients.
- [ataDeviceNub](1805565-atadevicenub.md): static creator function - used by IOATAControllers to create nubs.
- [attach](1805568-attach.md): override of IOService method.
- [executeCommand](1805572-executecommand.md): Submit IO requests
- [freeCommand](1805576-freecommand.md): Clients use this method to dispose of command objects.
- [getDeviceID](1805578-getdeviceid.md): get the unit id of this drive (0 or 1)
- [init](1805582-init.md): used after creating the nub.
- [MyATACallback](1805585-myatacallback.md): to be deprecated.
- [processCallback](1805590-processcallback.md): to be deprecated.
- [publishProperties](1805598-publishproperties.md): publish the nub's properties in the device tree.
- [publishVendorProperties](1805600-publishvendorproperties.md): will be deprecated.
- [swapBytes16](1805603-swapbytes16.md): to be deprecated.
