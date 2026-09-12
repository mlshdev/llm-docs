> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiciprofilestate/init(channel:enabledprofiles:disabledprofiles:)](https://developer.apple.com/documentation/coremidi/midiciprofilestate/init(channel:enabledprofiles:disabledprofiles:))

# init(channel:enabledProfiles:disabledProfiles:) (Swift)

**Framework:** Core MIDI  
**Kind:** Initializer  
**Availability:** iOS 12.0+ (deprecated in 18.0) · iPadOS 12.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Creates a new profile state object for the specified MIDI channel and profiles.

## Declaration

```swift
init(channel midiChannelNum: MIDIChannelNumber, enabledProfiles enabled: [MIDICIProfile], disabledProfiles disabled: [MIDICIProfile])
```

## Parameters

- `midiChannelNum`: The MIDI channel.
- `enabled`: The enabled MIDI-CI profles.
- `disabled`: The disabled MIDI-CI profles.

## See Also

### Creating a Profile State

- [init(enabledProfiles:disabledProfiles:)](init%28enabledprofiles_disabledprofiles_%29.md): Deprecated. Creates a new profile state object for the specified profiles.

# initWithChannel:enabledProfiles:disabledProfiles: (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 18.0) · iPadOS 12.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Creates a new profile state object for the specified MIDI channel and profiles.

## Declaration

```objectivec
- (instancetype) initWithChannel:(MIDIChannelNumber) midiChannelNum enabledProfiles:(NSArray<MIDICIProfile *> *) enabled disabledProfiles:(NSArray<MIDICIProfile *> *) disabled;
```

## Parameters

- `midiChannelNum`: The MIDI channel.
- `enabled`: The enabled MIDI-CI profles.
- `disabled`: The disabled MIDI-CI profles.

## See Also

### Creating a Profile State

- [initWithEnabledProfiles:disabledProfiles:](init%28enabledprofiles_disabledprofiles_%29.md): Deprecated. Creates a new profile state object for the specified profiles.
