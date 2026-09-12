> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstatusbar/system](https://developer.apple.com/documentation/appkit/nsstatusbar/system)

# system (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the system-wide status bar located in the menu bar.

## Declaration

```swift
class var system: NSStatusBar { get }
```

<a id="return-value"></a>

## Return Value

The shared status bar object.

<a id="Discussion"></a>

## Discussion

The status bar begins at the right side of the menu bar (to the left of Menu Extras and the menu bar clock) and grows to the left as `NSStatusItem` objects are added to it.

## See Also

### Related Documentation

- [Status Bar Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/StatusBar/StatusBar.html#//apple_ref/doc/uid/10000073i)

# systemStatusBar (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the system-wide status bar located in the menu bar.

## Declaration

```objectivec
@property (class, strong, readonly) NSStatusBar * systemStatusBar;
```

<a id="return-value"></a>

## Return Value

The shared status bar object.

<a id="Discussion"></a>

## Discussion

The status bar begins at the right side of the menu bar (to the left of Menu Extras and the menu bar clock) and grows to the left as `NSStatusItem` objects are added to it.

## See Also

### Related Documentation

- [Status Bar Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/StatusBar/StatusBar.html#//apple_ref/doc/uid/10000073i)
