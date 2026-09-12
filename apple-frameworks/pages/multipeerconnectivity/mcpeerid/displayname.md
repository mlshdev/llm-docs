> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcpeerid/displayname](https://developer.apple.com/documentation/multipeerconnectivity/mcpeerid/displayname)

# displayName (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The display name for this peer.

> Use Network Framework instead

## Declaration

```swift
var displayName: String { get }
```

<a id="Discussion"></a>

## Discussion

For the local peer, you set this property when the object is initialized. It cannot be changed.

For other peer objects provided to you by the framework, this property is provided by the peer and cannot be changed.

## See Also

### Peer Methods

- [init(displayName:)](init%28displayname_%29.md): Deprecated. Initializes a peer.

# displayName (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The display name for this peer.

> Use Network Framework instead

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * displayName;
```

```objectivec
@property (atomic, readonly) NSString * displayName;
```

<a id="Discussion"></a>

## Discussion

For the local peer, you set this property when the object is initialized. It cannot be changed.

For other peer objects provided to you by the framework, this property is provided by the peer and cannot be changed.

## See Also

### Peer Methods

- [initWithDisplayName:](init%28displayname_%29.md): Deprecated. Initializes a peer.
