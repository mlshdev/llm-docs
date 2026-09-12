> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/threadnetwork/thcredentials/borderagentid](https://developer.apple.com/documentation/threadnetwork/thcredentials/borderagentid)

# borderAgentID (Swift)

**Framework:** ThreadNetwork  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

The identifier of an active Thread network Border Agent.

## Declaration

```swift
var borderAgentID: Data? { get }
```

<a id="discussion"></a>

## Discussion

This property’s value is the MAC Extended Address, a random identifier that the active Thread network Thread Border Router generates.

## See Also

### Getting the Thread Parameters

- [activeOperationalDataSet](activeoperationaldataset.md): The essential operational parameters for the Thread network.
- [channel](channel.md): The Thread network radio channel.
- [extendedPANID](extendedpanid.md): The Thread network extended PAN identifier.
- [networkKey](networkkey.md): The Thread network key.
- [networkName](networkname.md): The Thread network name.
- [panID](panid.md): The Thread network PAN identifier.
- [pskc](pskc.md): The Thread network pre-shared key (PSKC) for the Commissioner.

# borderAgentID (Objective-C)

**Framework:** ThreadNetwork  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

The identifier of an active Thread network Border Agent.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSData * borderAgentID;
```

<a id="discussion"></a>

## Discussion

This property’s value is the MAC Extended Address, a random identifier that the active Thread network Thread Border Router generates.

## See Also

### Getting the Thread Parameters

- [activeOperationalDataSet](activeoperationaldataset.md): The essential operational parameters for the Thread network.
- [channel](channel.md): The Thread network radio channel.
- [extendedPANID](extendedpanid.md): The Thread network extended PAN identifier.
- [networkKey](networkkey.md): The Thread network key.
- [networkName](networkname.md): The Thread network name.
- [panID](panid.md): The Thread network PAN identifier.
- [PSKC](pskc.md): The Thread network pre-shared key (PSKC) for the Commissioner.
