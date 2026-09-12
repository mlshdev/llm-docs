> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/contextname](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/contextname)

# contextName (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Information about the host context in which the audio unit is connected, for display in the audio unit’s view.

## Declaration

```swift
var contextName: String? { get set }
```

<a id="Discussion"></a>

## Discussion

For example—a host could set “track 3” as the context, so that the audio unit’s view could then display “My audio unit on track 3”.

This version 3 property is bridged to the version 2 `kAudioUnitProperty_ContextName` API.

## See Also

### Providing Data to the Host

- [musicalContextBlock](musicalcontextblock.md): A callback to the host for musical context information.
- [transportStateBlock](transportstateblock.md): A callback to the host for transport state information.
- [supportsMPE](supportsmpe.md): A Boolean value that indicates whether the audio unit supports multi-dimensional polyphonic expression.
- [AUHostMusicalContextBlock](../auhostmusicalcontextblock.md): A block through which hosts provide musical tempo, time signature, and beat position.
- [AUHostTransportStateBlock](../auhosttransportstateblock.md): A block through which hosts provide information about their transport state.

# contextName (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Information about the host context in which the audio unit is connected, for display in the audio unit’s view.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * contextName;
```

```objectivec
@property (atomic, copy, nullable) NSString * contextName;
```

<a id="Discussion"></a>

## Discussion

For example—a host could set “track 3” as the context, so that the audio unit’s view could then display “My audio unit on track 3”.

This version 3 property is bridged to the version 2 `kAudioUnitProperty_ContextName` API.

## See Also

### Providing Data to the Host

- [musicalContextBlock](musicalcontextblock.md): A callback to the host for musical context information.
- [transportStateBlock](transportstateblock.md): A callback to the host for transport state information.
- [supportsMPE](supportsmpe.md): A Boolean value that indicates whether the audio unit supports multi-dimensional polyphonic expression.
- [AUHostMusicalContextBlock](../auhostmusicalcontextblock.md): A block through which hosts provide musical tempo, time signature, and beat position.
- [AUHostTransportStateBlock](../auhosttransportstateblock.md): A block through which hosts provide information about their transport state.
