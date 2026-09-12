> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midithruconnectionsetparams(_:_:)](https://developer.apple.com/documentation/coremidi/midithruconnectionsetparams(_:_:))

# MIDIThruConnectionSetParams(\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

Updates a thru connection’s parameters.

## Declaration

```swift
func MIDIThruConnectionSetParams(_ connection: MIDIThruConnectionRef, _ inConnectionParams: CFData) -> OSStatus
```

## Parameters

- `connection`: The connection to update.
- `inConnectionParams`: The connection’s new parameters in a [CFData](../corefoundation/cfdata.md).

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

## See Also

### Configuring Parameters

- [MIDIThruConnectionParams](midithruconnectionparams.md): A set of MIDI routings and transformations.
- [MIDIThruConnectionParamsSize(\_:)](midithruconnectionparamssize%28__%29.md): Returns the size of a MIDI thru connection parameters object.
- [MIDIThruConnectionParamsInitialize(\_:)](midithruconnectionparamsinitialize%28__%29.md): Initializes a parameters object with its default values.
- [MIDIThruConnectionGetParams(\_:\_:)](midithruconnectiongetparams%28____%29.md): Returns the thru connection’s parameters.

# MIDIThruConnectionSetParams (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

Updates a thru connection’s parameters.

## Declaration

```objectivec
extern OSStatus MIDIThruConnectionSetParams(MIDIThruConnectionRef connection, CFDataRef inConnectionParams);
```

## Parameters

- `connection`: The connection to update.
- `inConnectionParams`: The connection’s new parameters in a [CFDataRef](../corefoundation/cfdata.md).

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

## See Also

### Configuring Parameters

- [MIDIThruConnectionParams](midithruconnectionparams.md): A set of MIDI routings and transformations.
- [MIDIThruConnectionParamsSize](midithruconnectionparamssize%28__%29.md): Returns the size of a MIDI thru connection parameters object.
- [MIDIThruConnectionParamsInitialize](midithruconnectionparamsinitialize%28__%29.md): Initializes a parameters object with its default values.
- [MIDIThruConnectionGetParams](midithruconnectiongetparams%28____%29.md): Returns the thru connection’s parameters.
