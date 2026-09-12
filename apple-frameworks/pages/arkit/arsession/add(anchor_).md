> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsession/add(anchor:)](https://developer.apple.com/documentation/arkit/arsession/add(anchor:))

# add(anchor:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Adds the specified anchor to be tracked by the session.

## Declaration

```swift
func add(anchor: ARAnchor)
```

## Parameters

- `anchor`: The anchor to add.

<a id="Discussion"></a>

## Discussion

Changes to anchor tracking take effect when the next frame is captured.

## See Also

### Managing anchors

- [remove(anchor:)](remove%28anchor_%29.md): Removes the specified anchor from tracking by the session.

# addAnchor: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Adds the specified anchor to be tracked by the session.

## Declaration

```objectivec
- (void) addAnchor:(ARAnchor *) anchor;
```

## Parameters

- `anchor`: The anchor to add.

<a id="Discussion"></a>

## Discussion

Changes to anchor tracking take effect when the next frame is captured.

## See Also

### Managing anchors

- [removeAnchor:](remove%28anchor_%29.md): Removes the specified anchor from tracking by the session.
