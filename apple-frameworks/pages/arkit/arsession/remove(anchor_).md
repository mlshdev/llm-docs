> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsession/remove(anchor:)](https://developer.apple.com/documentation/arkit/arsession/remove(anchor:))

# remove(anchor:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Removes the specified anchor from tracking by the session.

## Declaration

```swift
func remove(anchor: ARAnchor)
```

## Parameters

- `anchor`: The anchor to remove.

<a id="Discussion"></a>

## Discussion

Changes to anchor tracking take effect when the next frame is captured.

## See Also

### Managing anchors

- [add(anchor:)](add%28anchor_%29.md): Adds the specified anchor to be tracked by the session.

# removeAnchor: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Removes the specified anchor from tracking by the session.

## Declaration

```objectivec
- (void) removeAnchor:(ARAnchor *) anchor;
```

## Parameters

- `anchor`: The anchor to remove.

<a id="Discussion"></a>

## Discussion

Changes to anchor tracking take effect when the next frame is captured.

## See Also

### Managing anchors

- [addAnchor:](add%28anchor_%29.md): Adds the specified anchor to be tracked by the session.
