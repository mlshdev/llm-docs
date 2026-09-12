> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midithruconnectionparamssize(_:)](https://developer.apple.com/documentation/coremidi/midithruconnectionparamssize(_:))

# MIDIThruConnectionParamsSize(\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the size of a MIDI thru connection parameters object.

## Declaration

```swift
func MIDIThruConnectionParamsSize(_ ptr: UnsafePointer<MIDIThruConnectionParams>) -> Int
```

## Parameters

- `ptr`: The parameters pointer.

<a id="return-value"></a>

## Return Value

The connection’s parameter’s size.

<a id="Discussion"></a>

## Discussion

This function accounts for variable-length elements in the structure and returns its true size in bytes.

## See Also

### Configuring Parameters

- [MIDIThruConnectionParams](midithruconnectionparams.md): A set of MIDI routings and transformations.
- [MIDIThruConnectionParamsInitialize(\_:)](midithruconnectionparamsinitialize%28__%29.md): Initializes a parameters object with its default values.
- [MIDIThruConnectionGetParams(\_:\_:)](midithruconnectiongetparams%28____%29.md): Returns the thru connection’s parameters.
- [MIDIThruConnectionSetParams(\_:\_:)](midithruconnectionsetparams%28____%29.md): Updates a thru connection’s parameters.

# MIDIThruConnectionParamsSize (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the size of a MIDI thru connection parameters object.

## Declaration

```objectivec
static size_t MIDIThruConnectionParamsSize(const MIDIThruConnectionParams *ptr);
```

## Parameters

- `ptr`: The parameters pointer.

<a id="return-value"></a>

## Return Value

The connection’s parameter’s size.

<a id="Discussion"></a>

## Discussion

This function accounts for variable-length elements in the structure and returns its true size in bytes.

## See Also

### Configuring Parameters

- [MIDIThruConnectionParams](midithruconnectionparams.md): A set of MIDI routings and transformations.
- [MIDIThruConnectionParamsInitialize](midithruconnectionparamsinitialize%28__%29.md): Initializes a parameters object with its default values.
- [MIDIThruConnectionGetParams](midithruconnectiongetparams%28____%29.md): Returns the thru connection’s parameters.
- [MIDIThruConnectionSetParams](midithruconnectionsetparams%28____%29.md): Updates a thru connection’s parameters.
