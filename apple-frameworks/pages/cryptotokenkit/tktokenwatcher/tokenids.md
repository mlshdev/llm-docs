> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokenwatcher/tokenids](https://developer.apple.com/documentation/cryptotokenkit/tktokenwatcher/tokenids)

# tokenIDs (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The token IDs currently available in the system.

## Declaration

```swift
var tokenIDs: [String] { get }
```

## Mentioned In

- [Using Cryptographic Assets Stored on a Smart Card](../using-cryptographic-assets-stored-on-a-smart-card.md)

<a id="Discussion"></a>

## Discussion

Each string in [tokenIDs](tokenids.md) corresponds to the name of the token instance.

You can observe this property to be notified of additions and removals to system tokens. See [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i) for more information.

# tokenIDs (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The token IDs currently available in the system.

## Declaration

```objectivec
@property (readonly) NSArray<NSString *> * tokenIDs;
```

## Mentioned In

- [Using Cryptographic Assets Stored on a Smart Card](../using-cryptographic-assets-stored-on-a-smart-card.md)

<a id="Discussion"></a>

## Discussion

Each string in [tokenIDs](tokenids.md) corresponds to the name of the token instance.

You can observe this property to be notified of additions and removals to system tokens. See [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i) for more information.
