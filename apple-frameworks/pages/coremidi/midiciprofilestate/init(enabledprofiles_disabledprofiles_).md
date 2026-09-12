> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiciprofilestate/init(enabledprofiles:disabledprofiles:)](https://developer.apple.com/documentation/coremidi/midiciprofilestate/init(enabledprofiles:disabledprofiles:))

# init(enabledProfiles:disabledProfiles:) (Swift)

**Framework:** Core MIDI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates a new profile state object for the specified profiles.

> Use [init(channel:enabledProfiles:disabledProfiles:)](init%28channel_enabledprofiles_disabledprofiles_%29.md) instead.

## Declaration

```swift
init(enabledProfiles enabled: [MIDICIProfile], disabledProfiles disabled: [MIDICIProfile])
```

## Parameters

- `enabled`: The enabled MIDI-CI profiles.
- `disabled`: The disabled MIDI-CI profiles.

<a id="return-value"></a>

## Return Value

A new profile state instance.

## See Also

### Creating a Profile State

- [init(channel:enabledProfiles:disabledProfiles:)](init%28channel_enabledprofiles_disabledprofiles_%29.md): Deprecated. Creates a new profile state object for the specified MIDI channel and profiles.

# initWithEnabledProfiles:disabledProfiles: (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates a new profile state object for the specified profiles.

> Use [initWithChannel:enabledProfiles:disabledProfiles:](init%28channel_enabledprofiles_disabledprofiles_%29.md) instead.

## Declaration

```objectivec
- (instancetype) initWithEnabledProfiles:(NSArray<MIDICIProfile *> *) enabled disabledProfiles:(NSArray<MIDICIProfile *> *) disabled;
```

## Parameters

- `enabled`: The enabled MIDI-CI profiles.
- `disabled`: The disabled MIDI-CI profiles.

<a id="return-value"></a>

## Return Value

A new profile state instance.

## See Also

### Creating a Profile State

- [initWithChannel:enabledProfiles:disabledProfiles:](init%28channel_enabledprofiles_disabledprofiles_%29.md): Deprecated. Creates a new profile state object for the specified MIDI channel and profiles.
