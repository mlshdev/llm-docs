> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/isfullkeyboardaccessenabled](https://developer.apple.com/documentation/appkit/nsapplication/isfullkeyboardaccessenabled)

# isFullKeyboardAccessEnabled (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

A Boolean value indicating whether Full Keyboard Access is enabled in the Keyboard preference pane.

## Declaration

```swift
var isFullKeyboardAccessEnabled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if Full Keyboard Access is enabled or [false](https://developer.apple.com/documentation/swift/false) if it’s not. You might use this value to implement your own key loop or to implement in-control tabbing behavior similar to [NSTableView](../nstableview.md). Because of the nature of the preference storage, you won’t be notified of changes to this property if you attempt to observe it through key-value observing; however, accessing this property is fairly inexpensive, so you can access it directly rather than caching it.

# fullKeyboardAccessEnabled (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

A Boolean value indicating whether Full Keyboard Access is enabled in the Keyboard preference pane.

## Declaration

```objectivec
@property (readonly, getter=isFullKeyboardAccessEnabled) BOOL fullKeyboardAccessEnabled;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if Full Keyboard Access is enabled or [false](https://developer.apple.com/documentation/swift/false) if it’s not. You might use this value to implement your own key loop or to implement in-control tabbing behavior similar to [NSTableView](../nstableview.md). Because of the nature of the preference storage, you won’t be notified of changes to this property if you attempt to observe it through key-value observing; however, accessing this property is fairly inexpensive, so you can access it directly rather than caching it.
