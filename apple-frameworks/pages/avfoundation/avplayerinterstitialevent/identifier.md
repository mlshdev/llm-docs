> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/identifier

# identifier (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An identifier for the event.

## Declaration

```swift
var identifier: String { get set }
```

<a id="Discussion"></a>

## Discussion

Setting an event on the interstitial event controller replaces any existing event with the same identifier.

# identifier (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An identifier for the event.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

Setting an event on the interstitial event controller replaces any existing event with the same identifier.
