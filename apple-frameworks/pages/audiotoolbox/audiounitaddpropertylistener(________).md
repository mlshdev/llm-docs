> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitaddpropertylistener(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiounitaddpropertylistener(_:_:_:_:))

# AudioUnitAddPropertyListener(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Registers a callback to receive audio unit property change notifications.

## Declaration

```swift
func AudioUnitAddPropertyListener(_ inUnit: AudioUnit, _ inID: AudioUnitPropertyID, _ inProc: AudioUnitPropertyListenerProc, _ inProcUserData: UnsafeMutableRawPointer?) -> OSStatus
```

## Parameters

- `inUnit`: The audio unit you want to receive property change notifications from.
- `inID`: The identifier for the property that you want to monitor.
- `inProc`: The callback that you are registering.
- `inProcUserData`: Custom data that you want to be sent to your callback. Use this, for example, to identify the property listener.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

When an audio unit property value changes, a notification callback can be called by the audio unit to inform interested parties that this event has occurred. The notification is defined by the tuple of the `inProc`, `inProcUserData`, `inID` parameters.

To unregister a callback, use the [AudioUnitRemovePropertyListenerWithUserData(\_:\_:\_:\_:)](audiounitremovepropertylistenerwithuserdata%28________%29.md) function.

## See Also

### Configuring Audio Unit Properties

- [AudioUnitGetProperty(\_:\_:\_:\_:\_:\_:)](audiounitgetproperty%28____________%29.md): Gets the value of an audio unit property.
- [AudioUnitSetProperty(\_:\_:\_:\_:\_:\_:)](audiounitsetproperty%28____________%29.md): Sets the value of an audio unit property.
- [AudioUnitGetPropertyInfo(\_:\_:\_:\_:\_:\_:)](audiounitgetpropertyinfo%28____________%29.md): Gets information about an audio unit property.
- [AudioUnitRemovePropertyListenerWithUserData(\_:\_:\_:\_:)](audiounitremovepropertylistenerwithuserdata%28________%29.md): Unregisters a previously-registered property listener callback function.

# AudioUnitAddPropertyListener (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Registers a callback to receive audio unit property change notifications.

## Declaration

```objectivec
extern OSStatus AudioUnitAddPropertyListener(AudioUnit inUnit, AudioUnitPropertyID inID, AudioUnitPropertyListenerProc inProc, void *inProcUserData);
```

## Parameters

- `inUnit`: The audio unit you want to receive property change notifications from.
- `inID`: The identifier for the property that you want to monitor.
- `inProc`: The callback that you are registering.
- `inProcUserData`: Custom data that you want to be sent to your callback. Use this, for example, to identify the property listener.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

When an audio unit property value changes, a notification callback can be called by the audio unit to inform interested parties that this event has occurred. The notification is defined by the tuple of the `inProc`, `inProcUserData`, `inID` parameters.

To unregister a callback, use the [AudioUnitRemovePropertyListenerWithUserData](audiounitremovepropertylistenerwithuserdata%28________%29.md) function.

## See Also

### Configuring Audio Unit Properties

- [AudioUnitGetProperty](audiounitgetproperty%28____________%29.md): Gets the value of an audio unit property.
- [AudioUnitSetProperty](audiounitsetproperty%28____________%29.md): Sets the value of an audio unit property.
- [AudioUnitGetPropertyInfo](audiounitgetpropertyinfo%28____________%29.md): Gets information about an audio unit property.
- [AudioUnitRemovePropertyListenerWithUserData](audiounitremovepropertylistenerwithuserdata%28________%29.md): Unregisters a previously-registered property listener callback function.
