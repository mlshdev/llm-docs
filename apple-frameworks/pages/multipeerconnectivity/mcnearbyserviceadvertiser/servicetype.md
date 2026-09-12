> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcnearbyserviceadvertiser/servicetype](https://developer.apple.com/documentation/multipeerconnectivity/mcnearbyserviceadvertiser/servicetype)

# serviceType (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The service type that your app is advertising

> Use Network Framework instead

## Declaration

```swift
var serviceType: String { get }
```

<a id="Discussion"></a>

## Discussion

This value is set when you initialize the object, and cannot be changed later.

## See Also

### Configuring and Initialization

- [init(peer:discoveryInfo:serviceType:)](init%28peer_discoveryinfo_servicetype_%29.md): Deprecated. Initializes an advertiser object.
- [delegate](delegate.md): Deprecated. The delegate object that handles advertising-related events.
- [discoveryInfo](discoveryinfo.md): Deprecated. The `info` dictionary passed when this object was initialized.
- [myPeerID](mypeerid.md): Deprecated. The local peer ID for this instance.

# serviceType (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The service type that your app is advertising

> Use Network Framework instead

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * serviceType;
```

```objectivec
@property (atomic, readonly) NSString * serviceType;
```

<a id="Discussion"></a>

## Discussion

This value is set when you initialize the object, and cannot be changed later.

## See Also

### Configuring and Initialization

- [initWithPeer:discoveryInfo:serviceType:](init%28peer_discoveryinfo_servicetype_%29.md): Deprecated. Initializes an advertiser object.
- [delegate](delegate.md): Deprecated. The delegate object that handles advertising-related events.
- [discoveryInfo](discoveryinfo.md): Deprecated. The `info` dictionary passed when this object was initialized.
- [myPeerID](mypeerid.md): Deprecated. The local peer ID for this instance.
