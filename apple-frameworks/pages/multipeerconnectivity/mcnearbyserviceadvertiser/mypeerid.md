> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcnearbyserviceadvertiser/mypeerid](https://developer.apple.com/documentation/multipeerconnectivity/mcnearbyserviceadvertiser/mypeerid)

# myPeerID (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The local peer ID for this instance.

> Use Network Framework instead

## Declaration

```swift
var myPeerID: MCPeerID { get }
```

<a id="Discussion"></a>

## Discussion

This value is set when you initialize the object, and cannot be changed later.

## See Also

### Configuring and Initialization

- [init(peer:discoveryInfo:serviceType:)](init%28peer_discoveryinfo_servicetype_%29.md): Deprecated. Initializes an advertiser object.
- [delegate](delegate.md): Deprecated. The delegate object that handles advertising-related events.
- [discoveryInfo](discoveryinfo.md): Deprecated. The `info` dictionary passed when this object was initialized.
- [serviceType](servicetype.md): Deprecated. The service type that your app is advertising

# myPeerID (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The local peer ID for this instance.

> Use Network Framework instead

## Declaration

```objectivec
@property (nonatomic, readonly) MCPeerID * myPeerID;
```

```objectivec
@property (atomic, readonly) MCPeerID * myPeerID;
```

<a id="Discussion"></a>

## Discussion

This value is set when you initialize the object, and cannot be changed later.

## See Also

### Configuring and Initialization

- [initWithPeer:discoveryInfo:serviceType:](init%28peer_discoveryinfo_servicetype_%29.md): Deprecated. Initializes an advertiser object.
- [delegate](delegate.md): Deprecated. The delegate object that handles advertising-related events.
- [discoveryInfo](discoveryinfo.md): Deprecated. The `info` dictionary passed when this object was initialized.
- [serviceType](servicetype.md): Deprecated. The service type that your app is advertising
