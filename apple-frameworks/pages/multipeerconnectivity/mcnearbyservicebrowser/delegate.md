> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcnearbyservicebrowser/delegate](https://developer.apple.com/documentation/multipeerconnectivity/mcnearbyservicebrowser/delegate)

# delegate (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The delegate object that handles browser-related events.

> Use Network Framework instead

## Declaration

```swift
weak var delegate: (any MCNearbyServiceBrowserDelegate)? { get set }
```

## See Also

### Initializing the Browser

- [init(peer:serviceType:)](init%28peer_servicetype_%29.md): Deprecated. Initializes the nearby service browser object.
- [myPeerID](mypeerid.md): Deprecated. The local peer ID for this instance.
- [serviceType](servicetype.md): Deprecated. The service type to browse for.

# delegate (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The delegate object that handles browser-related events.

> Use Network Framework instead

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<MCNearbyServiceBrowserDelegate> delegate;
```

```objectivec
@property (atomic, weak, nullable) id<MCNearbyServiceBrowserDelegate> delegate;
```

## See Also

### Initializing the Browser

- [initWithPeer:serviceType:](init%28peer_servicetype_%29.md): Deprecated. Initializes the nearby service browser object.
- [myPeerID](mypeerid.md): Deprecated. The local peer ID for this instance.
- [serviceType](servicetype.md): Deprecated. The service type to browse for.
