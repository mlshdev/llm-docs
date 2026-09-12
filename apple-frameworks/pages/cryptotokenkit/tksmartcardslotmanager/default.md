> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardslotmanager/default](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardslotmanager/default)

# default (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The shared singleton Smart Card reader slot manager.

## Declaration

```swift
class var `default`: TKSmartCardSlotManager? { get }
```

<a id="Discussion"></a>

## Discussion

This method returns `nil` unless the [com.apple.security.smartcard](../../bundleresources/entitlements/com.apple.security.smartcard.md) entitlement is enabled.

# defaultManager (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The shared singleton Smart Card reader slot manager.

## Declaration

```objectivec
@property (class, readonly, nullable) TKSmartCardSlotManager * defaultManager;
```

<a id="Discussion"></a>

## Discussion

This method returns `nil` unless the [com.apple.security.smartcard](../../bundleresources/entitlements/com.apple.security.smartcard.md) entitlement is enabled.
