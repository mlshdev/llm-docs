> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/supportsmpe](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/supportsmpe)

# supportsMPE (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether the audio unit supports multi-dimensional polyphonic expression.

## Declaration

```swift
var supportsMPE: Bool { get }
```

## See Also

### Providing Data to the Host

- [musicalContextBlock](musicalcontextblock.md): A callback to the host for musical context information.
- [transportStateBlock](transportstateblock.md): A callback to the host for transport state information.
- [contextName](contextname.md): Information about the host context in which the audio unit is connected, for display in the audio unit’s view.
- [AUHostMusicalContextBlock](../auhostmusicalcontextblock.md): A block through which hosts provide musical tempo, time signature, and beat position.
- [AUHostTransportStateBlock](../auhosttransportstateblock.md): A block through which hosts provide information about their transport state.

# supportsMPE (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether the audio unit supports multi-dimensional polyphonic expression.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL supportsMPE;
```

```objectivec
@property (atomic, readonly) BOOL supportsMPE;
```

## See Also

### Providing Data to the Host

- [musicalContextBlock](musicalcontextblock.md): A callback to the host for musical context information.
- [transportStateBlock](transportstateblock.md): A callback to the host for transport state information.
- [contextName](contextname.md): Information about the host context in which the audio unit is connected, for display in the audio unit’s view.
- [AUHostMusicalContextBlock](../auhostmusicalcontextblock.md): A block through which hosts provide musical tempo, time signature, and beat position.
- [AUHostTransportStateBlock](../auhosttransportstateblock.md): A block through which hosts provide information about their transport state.
