> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohideventservice/4077797-dispatchextendedgamecontrollerev](https://developer.apple.com/documentation/kernel/iohideventservice/4077797-dispatchextendedgamecontrollerev)

# dispatchExtendedGameControllerEventWithOptionalButtons

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 13.0+ (deprecated in 13.0)

## Declaration

```objectivec
virtual void dispatchExtendedGameControllerEventWithOptionalButtons(AbsoluteTime timeStamp, IOFixed dpadUp, IOFixed dpadDown, IOFixed dpadLeft, IOFixed dpadRight, IOFixed faceX, IOFixed faceY, IOFixed faceA, IOFixed faceB, IOFixed shoulderL1, IOFixed shoulderR1, IOFixed shoulderL2, IOFixed shoulderR2, IOFixed joystickX, IOFixed joystickY, IOFixed joystickZ, IOFixed joystickRz, boolean_t thumbstickButtonLeft, boolean_t thumbstickButtonRight, IOFixed buttonL4, IOFixed buttonR4, IOFixed buttonL5, IOFixed buttonR5, IOOptionBits options);
```
