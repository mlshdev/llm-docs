> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neapppushprovider/providerconfiguration](https://developer.apple.com/documentation/networkextension/neapppushprovider/providerconfiguration)

# providerConfiguration (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A dictionary that contains current vendor-specific configuration parameters.

## Declaration

```swift
var providerConfiguration: [String : Any]? { get }
```

## Mentioned In

- [Maintaining a Reliable Network Connection](../maintaining-a-reliable-network-connection.md)

<a id="Discussion"></a>

## Discussion

The [NEAppPushManager](../neapppushmanager.md) provides this dictionary. Use key-value observing to watch for changes in the dictionary.

# providerConfiguration (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A dictionary that contains current vendor-specific configuration parameters.

## Declaration

```objectivec
@property (readonly, nullable) NSDictionary<NSString *,id> * providerConfiguration;
```

## Mentioned In

- [Maintaining a Reliable Network Connection](../maintaining-a-reliable-network-connection.md)

<a id="Discussion"></a>

## Discussion

The [NEAppPushManager](../neapppushmanager.md) provides this dictionary. Use key-value observing to watch for changes in the dictionary.
