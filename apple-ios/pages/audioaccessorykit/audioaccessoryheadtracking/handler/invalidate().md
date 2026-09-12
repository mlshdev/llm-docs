> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/audioaccessorykit/audioaccessoryheadtracking/handler/invalidate()](https://developer.apple.com/documentation/audioaccessorykit/audioaccessoryheadtracking/handler/invalidate())

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
