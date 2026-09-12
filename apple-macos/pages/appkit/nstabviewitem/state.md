> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabviewitem/state](https://developer.apple.com/documentation/appkit/nstabviewitem/state)

# NSTabViewItem.State (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

These constants describe the current display state of a tab:

## Declaration

```swift
enum State
```

## Topics

### Constants

- [NSTabViewItem.State.backgroundTab](state/backgroundtab.md): A tab that’s not being displayed.
- [NSTabViewItem.State.pressedTab](state/pressedtab.md): A tab that the user is in the process of clicking. That is, the user has pressed the mouse button while the cursor is over the tab but has not released the mouse button.
- [NSTabViewItem.State.selectedTab](state/selectedtab.md): The tab that’s being displayed.

### Initializers

- [init(rawValue:)](state/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSTabState (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

These constants describe the current display state of a tab:

## Declaration

```objectivec
enum NSTabState : NSUInteger;
```

## Topics

### Constants

- [NSBackgroundTab](state/backgroundtab.md): A tab that’s not being displayed.
- [NSPressedTab](state/pressedtab.md): A tab that the user is in the process of clicking. That is, the user has pressed the mouse button while the cursor is over the tab but has not released the mouse button.
- [NSSelectedTab](state/selectedtab.md): The tab that’s being displayed.
