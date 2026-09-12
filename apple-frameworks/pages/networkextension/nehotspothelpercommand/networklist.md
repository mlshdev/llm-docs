> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspothelpercommand/networklist](https://developer.apple.com/documentation/networkextension/nehotspothelpercommand/networklist)

# networkList (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The list of networks associated with the command.

## Declaration

```swift
var networkList: [NEHotspotNetwork]? { get }
```

<a id="Discussion"></a>

## Discussion

This property will be nil unless `commandType` is `kNEHotspotHelperCommandTypeFilterScanList`.

## See Also

### Command information

- [commandType](commandtype.md): The type of the command
- [NEHotspotHelperCommandType](../nehotspothelpercommandtype.md): An enumeration of hotspot command types.
- [network](network.md): The network associated with the command.

# networkList (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The list of networks associated with the command.

## Declaration

```objectivec
@property (readonly, nullable) NSArray<NEHotspotNetwork *> * networkList;
```

<a id="Discussion"></a>

## Discussion

This property will be nil unless `commandType` is `kNEHotspotHelperCommandTypeFilterScanList`.

## See Also

### Command information

- [commandType](commandtype.md): The type of the command
- [NEHotspotHelperCommandType](../nehotspothelpercommandtype.md): An enumeration of hotspot command types.
- [network](network.md): The network associated with the command.
