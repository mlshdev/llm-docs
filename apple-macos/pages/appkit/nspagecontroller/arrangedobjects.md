> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspagecontroller/arrangedobjects](https://developer.apple.com/documentation/appkit/nspagecontroller/arrangedobjects)

# arrangedObjects (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

An array containing the objects displayed in the page controller’s view.

## Declaration

```swift
var arrangedObjects: [Any] { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate will be asked for snapshots as they are needed. Alternatively, you may never directly set this array and use the -[navigateForward(to:)](navigateforward%28to_%29.md) method to create a history as the user navigates.

This property is key-value observing compliant.

## See Also

### Page Controller Items

- [navigateForward(to:)](navigateforward%28to_%29.md): Navigates to the specific object.
- [selectedIndex](selectedindex.md): The currently selected object in the arranged objects array.

# arrangedObjects (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

An array containing the objects displayed in the page controller’s view.

## Declaration

```objectivec
@property (copy) NSArray * arrangedObjects;
```

<a id="Discussion"></a>

## Discussion

The delegate will be asked for snapshots as they are needed. Alternatively, you may never directly set this array and use the -[navigateForwardToObject:](navigateforward%28to_%29.md) method to create a history as the user navigates.

This property is key-value observing compliant.

## See Also

### Page Controller Items

- [navigateForwardToObject:](navigateforward%28to_%29.md): Navigates to the specific object.
- [selectedIndex](selectedindex.md): The currently selected object in the arranged objects array.
