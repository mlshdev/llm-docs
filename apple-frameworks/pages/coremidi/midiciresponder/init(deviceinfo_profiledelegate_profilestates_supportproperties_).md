> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiciresponder/init(deviceinfo:profiledelegate:profilestates:supportproperties:)](https://developer.apple.com/documentation/coremidi/midiciresponder/init(deviceinfo:profiledelegate:profilestates:supportproperties:))

# init(deviceInfo:profileDelegate:profileStates:supportProperties:) (Swift)

**Framework:** Core MIDI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Creates a new responder.

> No longer supported for CoreMIDI

## Declaration

```swift
init(deviceInfo: MIDICIDeviceInfo, profileDelegate delegate: any MIDICIProfileResponderDelegate, profileStates profileList: [MIDICIProfileState], supportProperties propertiesSupported: Bool)
```

## Parameters

- `deviceInfo`: The MIDI-CI device information.
- `delegate`: The responder’s delegate object.
- `profileList`: The list of profile state objects.
- `propertiesSupported`: A Boolean value that indicates whether the responder supports properties.

# initWithDeviceInfo:profileDelegate:profileStates:supportProperties: (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Creates a new responder.

> No longer supported for CoreMIDI

## Declaration

```objectivec
- (instancetype) initWithDeviceInfo:(MIDICIDeviceInfo *) deviceInfo profileDelegate:(id<MIDICIProfileResponderDelegate>) delegate profileStates:(MIDICIProfileStateList *) profileList supportProperties:(BOOL) propertiesSupported;
```

## Parameters

- `deviceInfo`: The MIDI-CI device information.
- `delegate`: The responder’s delegate object.
- `profileList`: The list of profile state objects.
- `propertiesSupported`: A Boolean value that indicates whether the responder supports properties.
