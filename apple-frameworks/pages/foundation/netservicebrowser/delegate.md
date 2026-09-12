> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservicebrowser/delegate](https://developer.apple.com/documentation/foundation/netservicebrowser/delegate)

# delegate (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The delegate object for this instance.

> Use nw_browser_t in Network framework instead

## Declaration

```swift
unowned(unsafe) var delegate: (any NetServiceBrowserDelegate)? { get set }
```

## See Also

### Configuring Network Service Browsers

- [includesPeerToPeer](includespeertopeer.md): Deprecated. Whether to browse over peer-to-peer Bluetooth and Wi-Fi, if available.

# delegate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The delegate object for this instance.

> Use nw_browser_t in Network framework instead

## Declaration

```objectivec
@property (assign, nullable) id<NSNetServiceBrowserDelegate> delegate;
```

## See Also

### Configuring Network Service Browsers

- [includesPeerToPeer](includespeertopeer.md): Deprecated. Whether to browse over peer-to-peer Bluetooth and Wi-Fi, if available.
