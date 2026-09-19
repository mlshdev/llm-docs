> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uihingeinteraction/isenabled

# isEnabled (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

Whether the interaction is enabled.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

While disabled, the interaction’s handler is not called for hinge updates, and any updates that occur are not queued. When re-enabled, the handler is called with the current hinge state if one is available.

# enabled (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

Whether the interaction is enabled.

## Declaration

```objectivec
@property (nonatomic, getter=isEnabled) BOOL enabled;
```

<a id="discussion"></a>

## Discussion

While disabled, the interaction’s handler is not called for hinge updates, and any updates that occur are not queued. When re-enabled, the handler is called with the current hinge state if one is available.
