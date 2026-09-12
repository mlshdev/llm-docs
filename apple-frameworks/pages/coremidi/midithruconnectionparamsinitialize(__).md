> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midithruconnectionparamsinitialize(_:)](https://developer.apple.com/documentation/coremidi/midithruconnectionparamsinitialize(_:))

# MIDIThruConnectionParamsInitialize(\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

Initializes a parameters object with its default values.

## Declaration

```swift
func MIDIThruConnectionParamsInitialize(_ inConnectionParams: UnsafeMutablePointer<MIDIThruConnectionParams>)
```

## Parameters

- `inConnectionParams`: The parameters to initialize.

<a id="Discussion"></a>

## Discussion

This is a convenience function that fills the connection structure with default values. Set the source and destination to create a simple, unmodified thru connection.

## See Also

### Configuring Parameters

- [MIDIThruConnectionParams](midithruconnectionparams.md): A set of MIDI routings and transformations.
- [MIDIThruConnectionParamsSize(\_:)](midithruconnectionparamssize%28__%29.md): Returns the size of a MIDI thru connection parameters object.
- [MIDIThruConnectionGetParams(\_:\_:)](midithruconnectiongetparams%28____%29.md): Returns the thru connection’s parameters.
- [MIDIThruConnectionSetParams(\_:\_:)](midithruconnectionsetparams%28____%29.md): Updates a thru connection’s parameters.

# MIDIThruConnectionParamsInitialize (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

Initializes a parameters object with its default values.

## Declaration

```objectivec
extern void MIDIThruConnectionParamsInitialize(MIDIThruConnectionParams *inConnectionParams);
```

## Parameters

- `inConnectionParams`: The parameters to initialize.

<a id="Discussion"></a>

## Discussion

This is a convenience function that fills the connection structure with default values. Set the source and destination to create a simple, unmodified thru connection.

## See Also

### Configuring Parameters

- [MIDIThruConnectionParams](midithruconnectionparams.md): A set of MIDI routings and transformations.
- [MIDIThruConnectionParamsSize](midithruconnectionparamssize%28__%29.md): Returns the size of a MIDI thru connection parameters object.
- [MIDIThruConnectionGetParams](midithruconnectiongetparams%28____%29.md): Returns the thru connection’s parameters.
- [MIDIThruConnectionSetParams](midithruconnectionsetparams%28____%29.md): Updates a thru connection’s parameters.
