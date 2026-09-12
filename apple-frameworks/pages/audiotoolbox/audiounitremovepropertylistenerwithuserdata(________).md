> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitremovepropertylistenerwithuserdata(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiounitremovepropertylistenerwithuserdata(_:_:_:_:))

# AudioUnitRemovePropertyListenerWithUserData(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Unregisters a previously-registered property listener callback function.

## Declaration

```swift
func AudioUnitRemovePropertyListenerWithUserData(_ inUnit: AudioUnit, _ inID: AudioUnitPropertyID, _ inProc: AudioUnitPropertyListenerProc, _ inProcUserData: UnsafeMutableRawPointer?) -> OSStatus
```

## Parameters

- `inUnit`: The audio unit that you no longer want to receive property change notifications from.
- `inID`: The identifier for the property that you no longer want to monitor.
- `inProc`: The callback function that you previously registered and are now unregistering.
- `inProcUserData`: The custom data that you provided when registering the callback function.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Configuring Audio Unit Properties

- [AudioUnitGetProperty(\_:\_:\_:\_:\_:\_:)](audiounitgetproperty%28____________%29.md): Gets the value of an audio unit property.
- [AudioUnitSetProperty(\_:\_:\_:\_:\_:\_:)](audiounitsetproperty%28____________%29.md): Sets the value of an audio unit property.
- [AudioUnitGetPropertyInfo(\_:\_:\_:\_:\_:\_:)](audiounitgetpropertyinfo%28____________%29.md): Gets information about an audio unit property.
- [AudioUnitAddPropertyListener(\_:\_:\_:\_:)](audiounitaddpropertylistener%28________%29.md): Registers a callback to receive audio unit property change notifications.

# AudioUnitRemovePropertyListenerWithUserData (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Unregisters a previously-registered property listener callback function.

## Declaration

```objectivec
extern OSStatus AudioUnitRemovePropertyListenerWithUserData(AudioUnit inUnit, AudioUnitPropertyID inID, AudioUnitPropertyListenerProc inProc, void *inProcUserData);
```

## Parameters

- `inUnit`: The audio unit that you no longer want to receive property change notifications from.
- `inID`: The identifier for the property that you no longer want to monitor.
- `inProc`: The callback function that you previously registered and are now unregistering.
- `inProcUserData`: The custom data that you provided when registering the callback function.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Configuring Audio Unit Properties

- [AudioUnitGetProperty](audiounitgetproperty%28____________%29.md): Gets the value of an audio unit property.
- [AudioUnitSetProperty](audiounitsetproperty%28____________%29.md): Sets the value of an audio unit property.
- [AudioUnitGetPropertyInfo](audiounitgetpropertyinfo%28____________%29.md): Gets information about an audio unit property.
- [AudioUnitAddPropertyListener](audiounitaddpropertylistener%28________%29.md): Registers a callback to receive audio unit property change notifications.
