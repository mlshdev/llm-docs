> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iohideventservice/3037457-dispatchextendedgamecontrollerev

# dispatchExtendedGameControllerEventWithThumbstickButtons

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.14.1+ (deprecated in 10.15.1)

## Declaration

```objectivec
virtual void dispatchExtendedGameControllerEventWithThumbstickButtons(AbsoluteTime timeStamp, IOFixed dpadUp, IOFixed dpadDown, IOFixed dpadLeft, IOFixed dpadRight, IOFixed faceX, IOFixed faceY, IOFixed faceA, IOFixed faceB, IOFixed shoulderL1, IOFixed shoulderR1, IOFixed shoulderL2, IOFixed shoulderR2, IOFixed joystickX, IOFixed joystickY, IOFixed joystickZ, IOFixed joystickRz, boolean_t thumbstickButtonLeft, boolean_t thumbstickButtonRight, IOOptionBits options);
```
