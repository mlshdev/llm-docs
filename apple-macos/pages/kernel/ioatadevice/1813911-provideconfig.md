> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioatadevice/1813911-provideconfig](https://developer.apple.com/documentation/kernel/ioatadevice/1813911-provideconfig)

# provideConfig

**Interface language:** Objective-C

**Framework:** Kernel

Find out what speed the bus has configured for this unit.

## Declaration

```objectivec
virtual IOReturn provideConfig(
 IOATADevConfig *configRequest); 
```

## Parameters

- `configRequest`: pointer to a valid IOATADevConfig object.

<a id="return_value"></a>

## Return Value

kIOSuccess (0) on successful completion and configRequest will contain the configuration information.

## See Also

### Miscellaneous

- [allocCommand](1813891-alloccommand.md): create IOATACommands. Device drivers should allocate command objects only through this method.
- [executeCommand](1813893-executecommand.md): Submit IO requests
- [freeCommand](1813895-freecommand.md): release a command object that is no longer needed. Do not free an object in use and do not release the object anymore times than you have retained it.
- [getDeviceType](1813897-getdevicetype.md): Find out what kind of device this nub is (ata or atapi)
- [getUnitID](1813899-getunitid.md): Determine whether this device is number 0 or 1 (ie, primary/secondary)
- [matchLocation](1813901-matchlocation.md): matching stuff for IOBSDInit and so on.
- [matchPropertyTable(OSDictionary \*)](1813903-matchpropertytable.md): matching stuff for IOBSDInit and so on.
- [matchPropertyTable(OSDictionary \*, SInt32 \*)](1813905-matchpropertytable.md): matching stuff for IOBSDInit and so on.
- [notifyEvent](1813907-notifyevent.md): called by controllers when they need to send a message to client (disk) drivers.
- [provideBusInfo](1813909-providebusinfo.md): Find out the bus capability so the client can choose the features to set and commands to run.
- [selectConfig](1813913-selectconfig.md): Tell the bus what speed to use for your device.
