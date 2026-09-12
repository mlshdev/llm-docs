> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewirepcrspace/1813173-getpcraddressspace](https://developer.apple.com/documentation/kernel/iofirewirepcrspace/1813173-getpcraddressspace)

# getPCRAddressSpace

**Interface language:** Objective-C

**Framework:** Kernel

returns the IOFireWirePCRSpace object for the given FireWire bus

## Declaration

```objectivec
static IOFireWirePCRSpace *getPCRAddressSpace(
 IOFireWireBus *bus); 
```

## Parameters

- `bus`: The FireWire bus

## See Also

### Miscellaneous

- [allocateInputPlug](1813120-allocateinputplug.md): allocates an input plug.
- [allocateOutputPlug](1813128-allocateoutputplug.md): allocates an output plug.
- [clearAllP2PConnections](1813138-clearallp2pconnections.md)
- [freeInputPlug](1813150-freeinputplug.md): deallocates an input plug.
- [freeOutputPlug](1813163-freeoutputplug.md): deallocates an output plug.
- [init](1813189-init.md): initializes the IOFireWirePCRSpace object
- [readInputMasterPlug](1813201-readinputmasterplug.md): Returns the current value of the primary input plug.
- [readInputPlug](1813218-readinputplug.md): returns the current value of an input plug.
- [readOutputMasterPlug](1813228-readoutputmasterplug.md): Returns the current value of the primary output plug.
- [readOutputPlug](1813239-readoutputplug.md): returns the current value of an output plug.
- [setAVCTargetSpacePointer](1813255-setavctargetspacepointer.md)
- [updateInputMasterPlug](1813265-updateinputmasterplug.md): Updates the value of the primary input plug (simulating a lock transaction).
- [updateInputPlug](1813280-updateinputplug.md): updates the value of an input plug (simulating a lock transaction).
- [updateOutputMasterPlug](1813299-updateoutputmasterplug.md): Updates the value of the primary output plug (simulating a lock transaction).
- [updateOutputPlug](1813322-updateoutputplug.md): updates the value of an output plug (simulating a lock transaction).
