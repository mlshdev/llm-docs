> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/preventwindowordering()](https://developer.apple.com/documentation/appkit/nsapplication/preventwindowordering())

# preventWindowOrdering() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Suppresses the usual window ordering in handling the most recent mouse-down event.

## Declaration

```swift
func preventWindowOrdering()
```

<a id="Discussion"></a>

## Discussion

This method is only useful for mouse-down events when you want to prevent the window that receives the event from being ordered to the front.

## See Also

### Managing Window Layers

- [arrangeInFront(\_:)](arrangeinfront%28__%29.md): Arranges windows listed in the Window menu in front of all other windows.

# preventWindowOrdering (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Suppresses the usual window ordering in handling the most recent mouse-down event.

## Declaration

```objectivec
- (void) preventWindowOrdering;
```

<a id="Discussion"></a>

## Discussion

This method is only useful for mouse-down events when you want to prevent the window that receives the event from being ordered to the front.

## See Also

### Managing Window Layers

- [arrangeInFront:](arrangeinfront%28__%29.md): Arranges windows listed in the Window menu in front of all other windows.
