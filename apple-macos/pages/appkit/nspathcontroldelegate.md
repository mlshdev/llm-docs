> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspathcontroldelegate](https://developer.apple.com/documentation/appkit/nspathcontroldelegate)

# NSPathControlDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that can be implemented by the delegate of a path control object to support dragging to and from the control.

## Declaration

```swift
protocol NSPathControlDelegate : NSObjectProtocol
```

## Topics

### Dragging Support

- [pathControl(\_:shouldDrag:with:)](nspathcontroldelegate/pathcontrol%28__shoulddrag_with_%29-35j1e.md): Implement this method to enable dragging from the control.
- [pathControl(\_:validateDrop:)](nspathcontroldelegate/pathcontrol%28__validatedrop_%29.md): Implement this method to enable dragging onto the control.
- [pathControl(\_:acceptDrop:)](nspathcontroldelegate/pathcontrol%28__acceptdrop_%29.md): Implement this method to accept previously validated contents dropped onto the control.

### Customizing a Pop-Up–Style Path

- [pathControl(\_:willDisplay:)](nspathcontroldelegate/pathcontrol%28__willdisplay_%29.md): Implement this method to customize the Open panel shown by a pop-up–style path.
- [pathControl(\_:willPopUp:)](nspathcontroldelegate/pathcontrol%28__willpopup_%29.md): Implement this method to customize the menu of a pop-up–style path.

### Instance Methods

- [pathControl(\_:shouldDrag:with:)](nspathcontroldelegate/pathcontrol%28__shoulddrag_with_%29-5ciyd.md)

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# NSPathControlDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that can be implemented by the delegate of a path control object to support dragging to and from the control.

## Declaration

```objectivec
@protocol NSPathControlDelegate <NSObject>
```

## Topics

### Dragging Support

- [pathControl:shouldDragPathComponentCell:withPasteboard:](nspathcontroldelegate/pathcontrol%28__shoulddrag_with_%29-35j1e.md): Implement this method to enable dragging from the control.
- [pathControl:validateDrop:](nspathcontroldelegate/pathcontrol%28__validatedrop_%29.md): Implement this method to enable dragging onto the control.
- [pathControl:acceptDrop:](nspathcontroldelegate/pathcontrol%28__acceptdrop_%29.md): Implement this method to accept previously validated contents dropped onto the control.

### Customizing a Pop-Up–Style Path

- [pathControl:willDisplayOpenPanel:](nspathcontroldelegate/pathcontrol%28__willdisplay_%29.md): Implement this method to customize the Open panel shown by a pop-up–style path.
- [pathControl:willPopUpMenu:](nspathcontroldelegate/pathcontrol%28__willpopup_%29.md): Implement this method to customize the menu of a pop-up–style path.

### Instance Methods

- [pathControl:shouldDragItem:withPasteboard:](nspathcontroldelegate/pathcontrol%28__shoulddrag_with_%29-5ciyd.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
