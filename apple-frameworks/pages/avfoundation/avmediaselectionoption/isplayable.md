> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/isplayable

# isPlayable (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether the media selection option is playable.

## Declaration

```swift
var isPlayable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If the media data associated with the option cannot be decoded or otherwise rendered, the value of this property is [false](https://developer.apple.com/documentation/swift/false).

# playable (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether the media selection option is playable.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isPlayable) BOOL playable;
```

<a id="Discussion"></a>

## Discussion

If the media data associated with the option cannot be decoded or otherwise rendered, the value of this property is [false](https://developer.apple.com/documentation/swift/false).
