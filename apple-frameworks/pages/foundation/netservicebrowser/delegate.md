> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/netservicebrowser/delegate

# delegate (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 27.2) · iPadOS 2.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 10.2+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

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
**Availability:** iOS 2.0+ (deprecated in 27.2) · iPadOS 2.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 10.2+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The delegate object for this instance.

> Use nw_browser_t in Network framework instead

## Declaration

```objectivec
@property (assign, nullable) id<NSNetServiceBrowserDelegate> delegate;
```

## See Also

### Configuring Network Service Browsers

- [includesPeerToPeer](includespeertopeer.md): Deprecated. Whether to browse over peer-to-peer Bluetooth and Wi-Fi, if available.
