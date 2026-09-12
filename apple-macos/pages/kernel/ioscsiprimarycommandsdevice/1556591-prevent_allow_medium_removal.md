> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsiprimarycommandsdevice/1556591-prevent_allow_medium_removal](https://developer.apple.com/documentation/kernel/ioscsiprimarycommandsdevice/1556591-prevent_allow_medium_removal)

# PREVENT_ALLOW_MEDIUM_REMOVAL

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool PREVENT_ALLOW_MEDIUM_REMOVAL(SCSITaskIdentifier request, SCSICmdField2Bit PREVENT, SCSICmdField1Byte CONTROL);
```
