> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcpeerid/init(displayname:)](https://developer.apple.com/documentation/multipeerconnectivity/mcpeerid/init(displayname:))

# init(displayName:) (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Initializer  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Initializes a peer.

> Use Network Framework instead

## Declaration

```swift
init(displayName myDisplayName: String)
```

## Parameters

- `myDisplayName`: The display name for the local peer. If you use the multipeer browser view controller, this name is shown.

  The display name is intended for use in UI elements, and should be short and descriptive of the local peer. The maximum allowable length is 63 bytes in UTF-8 encoding. The `displayName` parameter may not be `nil` or an empty string.

<a id="return-value"></a>

## Return Value

An initialized peer ID object.

<a id="Discussion"></a>

## Discussion

Call this method *only* when creating the local peer, not when you create objects that represent other devices.

This method throws an exception if the `displayName` value is too long, empty, or `nil`.

Each call to this method produces a unique peer ID, even for the same display name. If you need a device to maintain a consistent peer ID over time, you may want to archive and reuse it later instead of creating a new one every time your app starts advertising or browsing.

## See Also

### Peer Methods

- [displayName](displayname.md): Deprecated. The display name for this peer.

# initWithDisplayName: (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Initializes a peer.

> Use Network Framework instead

## Declaration

```objectivec
- (instancetype) initWithDisplayName:(NSString *) myDisplayName;
```

## Parameters

- `myDisplayName`: The display name for the local peer. If you use the multipeer browser view controller, this name is shown.

  The display name is intended for use in UI elements, and should be short and descriptive of the local peer. The maximum allowable length is 63 bytes in UTF-8 encoding. The `displayName` parameter may not be `nil` or an empty string.

<a id="return-value"></a>

## Return Value

An initialized peer ID object.

<a id="Discussion"></a>

## Discussion

Call this method *only* when creating the local peer, not when you create objects that represent other devices.

This method throws an exception if the `displayName` value is too long, empty, or `nil`.

Each call to this method produces a unique peer ID, even for the same display name. If you need a device to maintain a consistent peer ID over time, you may want to archive and reuse it later instead of creating a new one every time your app starts advertising or browsing.

## See Also

### Peer Methods

- [displayName](displayname.md): Deprecated. The display name for this peer.
