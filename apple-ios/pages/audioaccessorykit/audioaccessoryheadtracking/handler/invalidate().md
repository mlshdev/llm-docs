> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audioaccessorykit/audioaccessoryheadtracking/handler/invalidate()

# invalidate()

**Framework:** AudioAccessoryKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+

Called when the head-tracking session has been invalidated.

## Declaration

```swift
func invalidate()
```

<a id="discussion"></a>

## Discussion

After this is called, no further state updates will be delivered on this handler, and the session is no longer valid for forwarding sensor data.
