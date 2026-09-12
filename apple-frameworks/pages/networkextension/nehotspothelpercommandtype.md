> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspothelpercommandtype](https://developer.apple.com/documentation/networkextension/nehotspothelpercommandtype)

# NEHotspotHelperCommandType (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An enumeration of hotspot command types.

## Declaration

```swift
enum NEHotspotHelperCommandType
```

## Topics

### Command Types

- [NEHotspotHelperCommandType.none](nehotspothelpercommandtype/none.md): Placeholder for the null command.
- [NEHotspotHelperCommandType.filterScanList](nehotspothelpercommandtype/filterscanlist.md): Filter the Wi-Fi scan list.
- [NEHotspotHelperCommandType.evaluate](nehotspothelpercommandtype/evaluate.md): Evaluate the network.
- [NEHotspotHelperCommandType.authenticate](nehotspothelpercommandtype/authenticate.md): Authenticate to the network.
- [NEHotspotHelperCommandType.presentUI](nehotspothelpercommandtype/presentui.md): Present user interface.
- [NEHotspotHelperCommandType.maintain](nehotspothelpercommandtype/maintain.md): Maintain the connection to the network.
- [NEHotspotHelperCommandType.logoff](nehotspothelpercommandtype/logoff.md): Logoff the network.

### Initializers

- [init(rawValue:)](nehotspothelpercommandtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Command information

- [commandType](nehotspothelpercommand/commandtype.md): The type of the command
- [network](nehotspothelpercommand/network.md): The network associated with the command.
- [networkList](nehotspothelpercommand/networklist.md): The list of networks associated with the command.

# NEHotspotHelperCommandType (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An enumeration of hotspot command types.

## Declaration

```objectivec
enum NEHotspotHelperCommandType : NSInteger;
```

## Topics

### Command Types

- [kNEHotspotHelperCommandTypeNone](nehotspothelpercommandtype/none.md): Placeholder for the null command.
- [kNEHotspotHelperCommandTypeFilterScanList](nehotspothelpercommandtype/filterscanlist.md): Filter the Wi-Fi scan list.
- [kNEHotspotHelperCommandTypeEvaluate](nehotspothelpercommandtype/evaluate.md): Evaluate the network.
- [kNEHotspotHelperCommandTypeAuthenticate](nehotspothelpercommandtype/authenticate.md): Authenticate to the network.
- [kNEHotspotHelperCommandTypePresentUI](nehotspothelpercommandtype/presentui.md): Present user interface.
- [kNEHotspotHelperCommandTypeMaintain](nehotspothelpercommandtype/maintain.md): Maintain the connection to the network.
- [kNEHotspotHelperCommandTypeLogoff](nehotspothelpercommandtype/logoff.md): Logoff the network.

## See Also

### Command information

- [commandType](nehotspothelpercommand/commandtype.md): The type of the command
- [network](nehotspothelpercommand/network.md): The network associated with the command.
- [networkList](nehotspothelpercommand/networklist.md): The list of networks associated with the command.
