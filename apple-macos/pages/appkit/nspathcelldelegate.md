> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspathcelldelegate](https://developer.apple.com/documentation/appkit/nspathcelldelegate)

# NSPathCellDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that enable the delegate of a path cell object to customize the Open panel or pop-up menu of a path whose style is set to [NSPathControl.Style.popUp](nspathcontrol/style/popup.md).

## Declaration

```swift
protocol NSPathCellDelegate : NSObjectProtocol
```

## Topics

### Customizing the Open Panel

- [pathCell(\_:willDisplay:)](nspathcelldelegate/pathcell%28__willdisplay_%29.md): Implement this method to customize the Open panel shown by a pop-up–style path.

### Customizing the Menu

- [pathCell(\_:willPopUp:)](nspathcelldelegate/pathcell%28__willpopup_%29.md): Implement this method to customize the menu of a pop-up–style path.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Cells

- [NSPathCell](nspathcell.md): The user interface of a path control object.
- [NSPathComponentCell](nspathcomponentcell.md): A component of a path.
- [NSPathControlItem](nspathcontrolitem.md)

# NSPathCellDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that enable the delegate of a path cell object to customize the Open panel or pop-up menu of a path whose style is set to [NSPathStylePopUp](nspathcontrol/style/popup.md).

## Declaration

```objectivec
@protocol NSPathCellDelegate <NSObject>
```

## Topics

### Customizing the Open Panel

- [pathCell:willDisplayOpenPanel:](nspathcelldelegate/pathcell%28__willdisplay_%29.md): Implement this method to customize the Open panel shown by a pop-up–style path.

### Customizing the Menu

- [pathCell:willPopUpMenu:](nspathcelldelegate/pathcell%28__willpopup_%29.md): Implement this method to customize the menu of a pop-up–style path.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Cells

- [NSPathCell](nspathcell.md): The user interface of a path control object.
- [NSPathComponentCell](nspathcomponentcell.md): A component of a path.
- [NSPathControlItem](nspathcontrolitem.md)
