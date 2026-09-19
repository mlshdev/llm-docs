> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avcontentproposalviewcontroller/playerviewcontroller

# playerViewController (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+

The player view controller that presents a content proposal.

## Declaration

```swift
weak var playerViewController: AVPlayerViewController? { get }
```

<a id="Discussion"></a>

## Discussion

The framework sets this property value during the presentation of the content proposal. It may be `nil` at other times.

# playerViewController (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+

The player view controller that presents a content proposal.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) AVPlayerViewController * playerViewController;
```

<a id="Discussion"></a>

## Discussion

The framework sets this property value during the presentation of the content proposal. It may be `nil` at other times.
