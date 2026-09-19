> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/nehotspothelpercommand/network

# network (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The network associated with the command.

## Declaration

```swift
var network: NEHotspotNetwork? { get }
```

## See Also

### Command information

- [commandType](commandtype.md): The type of the command
- [NEHotspotHelperCommandType](../nehotspothelpercommandtype.md): An enumeration of hotspot command types.
- [networkList](networklist.md): The list of networks associated with the command.

# network (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The network associated with the command.

## Declaration

```objectivec
@property (readonly, nullable) NEHotspotNetwork * network;
```

## See Also

### Command information

- [commandType](commandtype.md): The type of the command
- [NEHotspotHelperCommandType](../nehotspothelpercommandtype.md): An enumeration of hotspot command types.
- [networkList](networklist.md): The list of networks associated with the command.
