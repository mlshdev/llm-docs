> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/collectionbehavior-swift.struct/canjoinallspaces](https://developer.apple.com/documentation/appkit/nswindow/collectionbehavior-swift.struct/canjoinallspaces)

# canJoinAllSpaces (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

The window can appear in all spaces.

## Declaration

```swift
static var canJoinAllSpaces: NSWindow.CollectionBehavior { get }
```

<a id="Discussion"></a>

## Discussion

The menu bar behaves this way.

## See Also

### Spaces

- [moveToActiveSpace](movetoactivespace.md): When the window becomes active, move it to the active space instead of switching spaces.

# NSWindowCollectionBehaviorCanJoinAllSpaces (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.5+

The window can appear in all spaces.

## Declaration

```objectivec
NSWindowCollectionBehaviorCanJoinAllSpaces
```

<a id="Discussion"></a>

## Discussion

The menu bar behaves this way.

## See Also

### Spaces

- [NSWindowCollectionBehaviorDefault](../../nswindowcollectionbehavior/nswindowcollectionbehaviordefault.md): The window appears in only one space at a time.
- [NSWindowCollectionBehaviorMoveToActiveSpace](movetoactivespace.md): When the window becomes active, move it to the active space instead of switching spaces.
