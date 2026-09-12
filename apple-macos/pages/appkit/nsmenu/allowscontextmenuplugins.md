> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/allowscontextmenuplugins](https://developer.apple.com/documentation/appkit/nsmenu/allowscontextmenuplugins)

# allowsContextMenuPlugIns (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Indicates whether the pop-up menu allows appending of contextual menu plug-in items.

## Declaration

```swift
var allowsContextMenuPlugIns: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains a Boolean value indicating whether the pop-up menu allows appending of contextual menu plug-in items.

Contextual menu plug-ins are system-wide services provided by other applications. For example, a contextual menu plug-in might provide an “Open URL…” service. If you enable context menu plug-ins, your application’s contextual menu will display the appropriate items for the currently selected data type.

The default value for this property is [true](https://developer.apple.com/documentation/swift/true).

# allowsContextMenuPlugIns (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Indicates whether the pop-up menu allows appending of contextual menu plug-in items.

## Declaration

```objectivec
@property BOOL allowsContextMenuPlugIns;
```

<a id="Discussion"></a>

## Discussion

This property contains a Boolean value indicating whether the pop-up menu allows appending of contextual menu plug-in items.

Contextual menu plug-ins are system-wide services provided by other applications. For example, a contextual menu plug-in might provide an “Open URL…” service. If you enable context menu plug-ins, your application’s contextual menu will display the appropriate items for the currently selected data type.

The default value for this property is [true](https://developer.apple.com/documentation/swift/true).
