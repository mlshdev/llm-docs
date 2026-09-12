> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcerrordomain](https://developer.apple.com/documentation/multipeerconnectivity/mcerrordomain)

# MCErrorDomain (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The `NSError` domain constant. If the `domain` value for an `NSError` object is equal to `MCErrorDomain`, then the error was produced by the Multipeer Connectivity framework itself, as opposed to a lower-level framework on which it depends.

> Use Network Framework instead

## Declaration

```swift
let MCErrorDomain: String
```

## See Also

### Constants

- [kMCSessionMaximumNumberOfPeers](kmcsessionmaximumnumberofpeers.md): Deprecated. The maximum number of peers that a session can support, including the local peer.
- [kMCSessionMinimumNumberOfPeers](kmcsessionminimumnumberofpeers.md): Deprecated. The minimum number of peers that a session can support, including the local peer.

# MCErrorDomain (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The `NSError` domain constant. If the `domain` value for an `NSError` object is equal to `MCErrorDomain`, then the error was produced by the Multipeer Connectivity framework itself, as opposed to a lower-level framework on which it depends.

> Use Network Framework instead

## Declaration

```objectivec
extern NSString * const MCErrorDomain;
```

## See Also

### Constants

- [kMCSessionMaximumNumberOfPeers](kmcsessionmaximumnumberofpeers.md): Deprecated. The maximum number of peers that a session can support, including the local peer.
- [kMCSessionMinimumNumberOfPeers](kmcsessionminimumnumberofpeers.md): Deprecated. The minimum number of peers that a session can support, including the local peer.
