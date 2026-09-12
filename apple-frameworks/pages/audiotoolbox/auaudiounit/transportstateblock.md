> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/transportstateblock](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/transportstateblock)

# transportStateBlock (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A callback to the host for transport state information.

## Declaration

```swift
var transportStateBlock: AUHostTransportStateBlock? { get set }
```

<a id="Discussion"></a>

## Discussion

An audio unit accessing this property should cache it in realtime-safe storage before beginning to render.

This version 3 property is bridged to the version 2 [HostCallback_GetTransportState](../hostcallback_gettransportstate.md) and `HostCallback_GetTransportState2` callback members in the `kAudioUnitProperty_HostCallbacks` API.

## See Also

### Providing Data to the Host

- [musicalContextBlock](musicalcontextblock.md): A callback to the host for musical context information.
- [contextName](contextname.md): Information about the host context in which the audio unit is connected, for display in the audio unit’s view.
- [supportsMPE](supportsmpe.md): A Boolean value that indicates whether the audio unit supports multi-dimensional polyphonic expression.
- [AUHostMusicalContextBlock](../auhostmusicalcontextblock.md): A block through which hosts provide musical tempo, time signature, and beat position.
- [AUHostTransportStateBlock](../auhosttransportstateblock.md): A block through which hosts provide information about their transport state.

# transportStateBlock (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A callback to the host for transport state information.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) AUHostTransportStateBlock transportStateBlock;
```

```objectivec
@property (atomic, copy, nullable) AUHostTransportStateBlock transportStateBlock;
```

<a id="Discussion"></a>

## Discussion

An audio unit accessing this property should cache it in realtime-safe storage before beginning to render.

This version 3 property is bridged to the version 2 [HostCallback_GetTransportState](../hostcallback_gettransportstate.md) and `HostCallback_GetTransportState2` callback members in the `kAudioUnitProperty_HostCallbacks` API.

## See Also

### Providing Data to the Host

- [musicalContextBlock](musicalcontextblock.md): A callback to the host for musical context information.
- [contextName](contextname.md): Information about the host context in which the audio unit is connected, for display in the audio unit’s view.
- [supportsMPE](supportsmpe.md): A Boolean value that indicates whether the audio unit supports multi-dimensional polyphonic expression.
- [AUHostMusicalContextBlock](../auhostmusicalcontextblock.md): A block through which hosts provide musical tempo, time signature, and beat position.
- [AUHostTransportStateBlock](../auhosttransportstateblock.md): A block through which hosts provide information about their transport state.
