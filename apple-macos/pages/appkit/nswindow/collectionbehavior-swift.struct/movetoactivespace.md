> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/collectionbehavior-swift.struct/movetoactivespace](https://developer.apple.com/documentation/appkit/nswindow/collectionbehavior-swift.struct/movetoactivespace)

# moveToActiveSpace (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

When the window becomes active, move it to the active space instead of switching spaces.

## Declaration

```swift
static var moveToActiveSpace: NSWindow.CollectionBehavior { get }
```

## See Also

### Spaces

- [canJoinAllSpaces](canjoinallspaces.md): The window can appear in all spaces.

# NSWindowCollectionBehaviorMoveToActiveSpace (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.5+

When the window becomes active, move it to the active space instead of switching spaces.

## Declaration

```objectivec
NSWindowCollectionBehaviorMoveToActiveSpace
```

## See Also

### Spaces

- [NSWindowCollectionBehaviorDefault](../../nswindowcollectionbehavior/nswindowcollectionbehaviordefault.md): The window appears in only one space at a time.
- [NSWindowCollectionBehaviorCanJoinAllSpaces](canjoinallspaces.md): The window can appear in all spaces.
