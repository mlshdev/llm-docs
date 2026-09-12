> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/occlusionstate-swift.property](https://developer.apple.com/documentation/appkit/nsapplication/occlusionstate-swift.property)

# occlusionState (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

The occlusion state of the app.

## Declaration

```swift
var occlusionState: NSApplication.OcclusionState { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property reflects whether any part of the app’s windows are visible to the user. Use this information to disable expensive screen updates when your app is not visible.

## See Also

### Related Documentation

- [didChangeOcclusionStateNotification](didchangeocclusionstatenotification.md): Posted when the app’s occlusion state changes.

### Getting the Occlusion State

- [NSApplication.OcclusionState](occlusionstate-swift.struct.md): This constant indicates whether at least part of any window owned by this app is visible.

# occlusionState (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

The occlusion state of the app.

## Declaration

```objectivec
@property (readonly) NSApplicationOcclusionState occlusionState;
```

<a id="Discussion"></a>

## Discussion

The value of this property reflects whether any part of the app’s windows are visible to the user. Use this information to disable expensive screen updates when your app is not visible.

## See Also

### Related Documentation

- [NSApplicationDidChangeOcclusionStateNotification](didchangeocclusionstatenotification.md): Posted when the app’s occlusion state changes.

### Getting the Occlusion State

- [NSApplicationOcclusionState](occlusionstate-swift.struct.md): This constant indicates whether at least part of any window owned by this app is visible.
