> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/updatewindowsrunloopordering](https://developer.apple.com/documentation/appkit/nsapplication/updatewindowsrunloopordering)

# updateWindowsRunLoopOrdering (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Run-loop message priority for handling window updates.

## Declaration

```swift
class var updateWindowsRunLoopOrdering: Int { get }
```

<a id="discussion"></a>

## Discussion

This constant is used by the [RunLoop](https://developer.apple.com/documentation/foundation/runloop) method [perform(\_:target:argument:order:modes:)](https://developer.apple.com/documentation/foundation/runloop/perform%28_:target:argument:order:modes:%29).

## See Also

### Managing Run Loops

- [displayWindowRunLoopOrdering](displaywindowrunloopordering.md): The priority at which windows are displayed.
- [resetCursorRectsRunLoopOrdering](resetcursorrectsrunloopordering.md): The priority at which cursor rects are reset.

# NSUpdateWindowsRunLoopOrdering (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

Run-loop message priority for handling window updates.

## Declaration

```objectivec
NSUpdateWindowsRunLoopOrdering
```

<a id="discussion"></a>

## Discussion

This constant is used by the [NSRunLoop](https://developer.apple.com/documentation/foundation/runloop) method [performSelector:target:argument:order:modes:](https://developer.apple.com/documentation/foundation/runloop/perform%28_:target:argument:order:modes:%29).

## See Also

### Managing Run Loops

- [NSDisplayWindowRunLoopOrdering](displaywindowrunloopordering.md): The priority at which windows are displayed.
- [NSResetCursorRectsRunLoopOrdering](resetcursorrectsrunloopordering.md): The priority at which cursor rects are reset.
