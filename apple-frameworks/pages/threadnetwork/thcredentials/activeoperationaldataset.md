> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/threadnetwork/thcredentials/activeoperationaldataset](https://developer.apple.com/documentation/threadnetwork/thcredentials/activeoperationaldataset)

# activeOperationalDataSet (Swift)

**Framework:** ThreadNetwork  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

The essential operational parameters for the Thread network.

## Declaration

```swift
var activeOperationalDataSet: Data? { get }
```

<a id="discussion"></a>

## Discussion

The framework parses this property, then extracts and sets [channel](channel.md), [extendedPANID](extendedpanid.md), [networkKey](networkkey.md), [networkName](networkname.md), [panID](panid.md), and [pskc](pskc.md) when you call [storeCredentials(forBorderAgent:activeOperationalDataSet:completion:)](../thclient/storecredentials%28forborderagent_activeoperationaldataset_completion_%29.md).

## See Also

### Getting the Thread Parameters

- [borderAgentID](borderagentid.md): The identifier of an active Thread network Border Agent.
- [channel](channel.md): The Thread network radio channel.
- [extendedPANID](extendedpanid.md): The Thread network extended PAN identifier.
- [networkKey](networkkey.md): The Thread network key.
- [networkName](networkname.md): The Thread network name.
- [panID](panid.md): The Thread network PAN identifier.
- [pskc](pskc.md): The Thread network pre-shared key (PSKC) for the Commissioner.

# activeOperationalDataSet (Objective-C)

**Framework:** ThreadNetwork  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

The essential operational parameters for the Thread network.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSData * activeOperationalDataSet;
```

<a id="discussion"></a>

## Discussion

The framework parses this property, then extracts and sets [channel](channel.md), [extendedPANID](extendedpanid.md), [networkKey](networkkey.md), [networkName](networkname.md), [panID](panid.md), and [PSKC](pskc.md) when you call [storeCredentialsForBorderAgent:activeOperationalDataSet:completion:](../thclient/storecredentials%28forborderagent_activeoperationaldataset_completion_%29.md).

## See Also

### Getting the Thread Parameters

- [borderAgentID](borderagentid.md): The identifier of an active Thread network Border Agent.
- [channel](channel.md): The Thread network radio channel.
- [extendedPANID](extendedpanid.md): The Thread network extended PAN identifier.
- [networkKey](networkkey.md): The Thread network key.
- [networkName](networkname.md): The Thread network name.
- [panID](panid.md): The Thread network PAN identifier.
- [PSKC](pskc.md): The Thread network pre-shared key (PSKC) for the Commissioner.
