> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hiddriverkit/iouserhideventservice/dispatchextendedgamecontrollerevent

# dispatchExtendedGameControllerEvent

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 22.0+ (deprecated in 23.0) · macOS

## Declaration

```objectivec
virtual kern_return_t dispatchExtendedGameControllerEvent(uint64_t timeStamp, IOFixed dpadUp, IOFixed dpadDown, IOFixed dpadLeft, IOFixed dpadRight, IOFixed faceX, IOFixed faceY, IOFixed faceA, IOFixed faceB, IOFixed shoulderL1, IOFixed shoulderR1, IOFixed shoulderL2, IOFixed shoulderR2, IOFixed joystickX, IOFixed joystickY, IOFixed joystickZ, IOFixed joystickRz, bool thumbstickButtonLeft, bool thumbstickButtonRight, IOFixed buttonL4, IOFixed buttonR4, IOFixed buttonL5, IOFixed buttonR5, IOOptionBits options);
```
