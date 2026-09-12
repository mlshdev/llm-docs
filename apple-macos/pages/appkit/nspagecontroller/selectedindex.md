> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspagecontroller/selectedindex](https://developer.apple.com/documentation/appkit/nspagecontroller/selectedindex)

# selectedIndex (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The currently selected object in the arranged objects array.

## Declaration

```swift
var selectedIndex: Int { get set }
```

<a id="Discussion"></a>

## Discussion

To animate a transition to a new index, use the NSPageController class animator object.

This property is key-value observing compliant.

## See Also

### Page Controller Items

- [arrangedObjects](arrangedobjects.md): An array containing the objects displayed in the page controller’s view.
- [navigateForward(to:)](navigateforward%28to_%29.md): Navigates to the specific object.

# selectedIndex (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The currently selected object in the arranged objects array.

## Declaration

```objectivec
@property NSInteger selectedIndex;
```

<a id="Discussion"></a>

## Discussion

To animate a transition to a new index, use the NSPageController class animator object.

This property is key-value observing compliant.

## See Also

### Page Controller Items

- [arrangedObjects](arrangedobjects.md): An array containing the objects displayed in the page controller’s view.
- [navigateForwardToObject:](navigateforward%28to_%29.md): Navigates to the specific object.
