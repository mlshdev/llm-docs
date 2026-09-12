> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midithruconnectiongetparams(_:_:)](https://developer.apple.com/documentation/coremidi/midithruconnectiongetparams(_:_:))

# MIDIThruConnectionGetParams(\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

Returns the thru connection’s parameters.

## Declaration

```swift
func MIDIThruConnectionGetParams(_ connection: MIDIThruConnectionRef, _ outConnectionParams: UnsafeMutablePointer<Unmanaged<CFData>>) -> OSStatus
```

## Parameters

- `connection`: The connection to dispose.
- `outConnectionParams`: On successful return, the connection’s parameters in a [CFData](../corefoundation/cfdata.md).

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

The returned object contains a [MIDIThruConnectionParams](midithruconnectionparams.md) structure. The caller is responsible for releasing it.

## See Also

### Configuring Parameters

- [MIDIThruConnectionParams](midithruconnectionparams.md): A set of MIDI routings and transformations.
- [MIDIThruConnectionParamsSize(\_:)](midithruconnectionparamssize%28__%29.md): Returns the size of a MIDI thru connection parameters object.
- [MIDIThruConnectionParamsInitialize(\_:)](midithruconnectionparamsinitialize%28__%29.md): Initializes a parameters object with its default values.
- [MIDIThruConnectionSetParams(\_:\_:)](midithruconnectionsetparams%28____%29.md): Updates a thru connection’s parameters.

# MIDIThruConnectionGetParams (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

Returns the thru connection’s parameters.

## Declaration

```objectivec
extern OSStatus MIDIThruConnectionGetParams(MIDIThruConnectionRef connection, CFDataRef*outConnectionParams);
```

## Parameters

- `connection`: The connection to dispose.
- `outConnectionParams`: On successful return, the connection’s parameters in a [CFDataRef](../corefoundation/cfdata.md).

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

The returned object contains a [MIDIThruConnectionParams](midithruconnectionparams.md) structure. The caller is responsible for releasing it.

## See Also

### Configuring Parameters

- [MIDIThruConnectionParams](midithruconnectionparams.md): A set of MIDI routings and transformations.
- [MIDIThruConnectionParamsSize](midithruconnectionparamssize%28__%29.md): Returns the size of a MIDI thru connection parameters object.
- [MIDIThruConnectionParamsInitialize](midithruconnectionparamsinitialize%28__%29.md): Initializes a parameters object with its default values.
- [MIDIThruConnectionSetParams](midithruconnectionsetparams%28____%29.md): Updates a thru connection’s parameters.
