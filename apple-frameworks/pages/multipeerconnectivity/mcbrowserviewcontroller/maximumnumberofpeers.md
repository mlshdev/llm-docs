> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcbrowserviewcontroller/maximumnumberofpeers](https://developer.apple.com/documentation/multipeerconnectivity/mcbrowserviewcontroller/maximumnumberofpeers)

# maximumNumberOfPeers (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The maximum number of peers allowed in a session, including the local peer.

> Use Network Framework instead

## Declaration

```swift
var maximumNumberOfPeers: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The largest allowable value (and the default) is 8.

## See Also

### Getting and Setting the Maximum and Minimum Number of Peers

- [minimumNumberOfPeers](minimumnumberofpeers.md): Deprecated. The minimum number of peers that need to be in a session, including the local peer.

# maximumNumberOfPeers (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The maximum number of peers allowed in a session, including the local peer.

> Use Network Framework instead

## Declaration

```objectivec
@property (nonatomic, assign) NSUInteger maximumNumberOfPeers;
```

```objectivec
@property (atomic, assign) NSUInteger maximumNumberOfPeers;
```

<a id="Discussion"></a>

## Discussion

The largest allowable value (and the default) is 8.

## See Also

### Getting and Setting the Maximum and Minimum Number of Peers

- [minimumNumberOfPeers](minimumnumberofpeers.md): Deprecated. The minimum number of peers that need to be in a session, including the local peer.
