> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/setisminiaturized(_:)](https://developer.apple.com/documentation/appkit/nswindow/setisminiaturized(_:))

# setIsMiniaturized(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the window’s miniaturized state to the value you specify.

## Declaration

```swift
func setIsMiniaturized(_ flag: Bool)
```

<a id="Discussion"></a>

## Discussion

Depending on the current miniaturized state and the value of `flag`, the window may minimize to the Dock or expand from the Dock.

## See Also

### Setting Scripting Attributes

- [setIsVisible(\_:)](setisvisible%28__%29.md): Sets the window’s visible state to the value you specify.
- [setIsZoomed(\_:)](setiszoomed%28__%29.md): Sets the window’s zoomed state to the value you specify.

# setIsMiniaturized: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the window’s miniaturized state to the value you specify.

## Declaration

```objectivec
- (void) setIsMiniaturized:(BOOL) flag;
```

<a id="Discussion"></a>

## Discussion

Depending on the current miniaturized state and the value of `flag`, the window may minimize to the Dock or expand from the Dock.

## See Also

### Setting Scripting Attributes

- [setIsVisible:](setisvisible%28__%29.md): Sets the window’s visible state to the value you specify.
- [setIsZoomed:](setiszoomed%28__%29.md): Sets the window’s zoomed state to the value you specify.
