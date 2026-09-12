> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopensavepaneldelegate](https://developer.apple.com/documentation/appkit/nsopensavepaneldelegate)

# NSOpenSavePanelDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods for managing interactions with an open or save panel.

## Declaration

```swift
protocol NSOpenSavePanelDelegate : NSObjectProtocol
```

## Topics

### Responding to the User’s Selection

- [panel(\_:userEnteredFilename:confirmed:)](nsopensavepaneldelegate/panel%28__userenteredfilename_confirmed_%29.md): Tells the delegate that the user confirmed a filename choice by clicking Save in a Save panel.

### Responding to Panel Changes

- [panelSelectionDidChange(\_:)](nsopensavepaneldelegate/panelselectiondidchange%28__%29.md): Tells the delegate that the user changed the selection in the specified Save panel.
- [panel(\_:didChangeToDirectoryURL:)](nsopensavepaneldelegate/panel%28__didchangetodirectoryurl_%29.md): Tells the delegate that the user changed the selected directory to the directory located at the specified URL.
- [panel(\_:willExpand:)](nsopensavepaneldelegate/panel%28__willexpand_%29.md): Tells the delegate that the Save panel is about to expand or collapse because the user clicked the disclosure triangle that displays or hides the file browser.

### Validating the Panel Content

- [panel(\_:shouldEnable:)](nsopensavepaneldelegate/panel%28__shouldenable_%29.md): Asks the delegate whether the specified URL should be enabled in the Open panel.
- [panel(\_:validate:)](nsopensavepaneldelegate/panel%28__validate_%29.md): Asks the delegate to validate the URL for a file that the user selected.

### Instance Methods

- [panel(\_:didSelect:)](nsopensavepaneldelegate/panel%28__didselect_%29.md): `NSSavePanel`: Optional — Sent when the user changes the current type. `NSOpenPanel`: Not sent.
- [panel(\_:displayNameFor:)](nsopensavepaneldelegate/panel%28__displaynamefor_%29.md): `NSSavePanel`: Optional — Sent when the content type popup is displayed and the save panel needs the display name for a type. If `nil` is returned, the save panel will display type’s `localizedDescription`. `NSOpenPanel`: Not sent.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSPathCell](nspathcell.md)

## See Also

### Open and Save Panels

- [NSOpenPanel](nsopenpanel.md): A panel that prompts the user to select a file to open.
- [NSSavePanel](nssavepanel.md): A panel that prompts the user for information about where to save a file.

# NSOpenSavePanelDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods for managing interactions with an open or save panel.

## Declaration

```objectivec
@protocol NSOpenSavePanelDelegate <NSObject>
```

## Topics

### Responding to the User’s Selection

- [panel:userEnteredFilename:confirmed:](nsopensavepaneldelegate/panel%28__userenteredfilename_confirmed_%29.md): Tells the delegate that the user confirmed a filename choice by clicking Save in a Save panel.

### Responding to Panel Changes

- [panelSelectionDidChange:](nsopensavepaneldelegate/panelselectiondidchange%28__%29.md): Tells the delegate that the user changed the selection in the specified Save panel.
- [panel:didChangeToDirectoryURL:](nsopensavepaneldelegate/panel%28__didchangetodirectoryurl_%29.md): Tells the delegate that the user changed the selected directory to the directory located at the specified URL.
- [panel:willExpand:](nsopensavepaneldelegate/panel%28__willexpand_%29.md): Tells the delegate that the Save panel is about to expand or collapse because the user clicked the disclosure triangle that displays or hides the file browser.

### Validating the Panel Content

- [panel:shouldEnableURL:](nsopensavepaneldelegate/panel%28__shouldenable_%29.md): Asks the delegate whether the specified URL should be enabled in the Open panel.
- [panel:validateURL:error:](nsopensavepaneldelegate/panel%28__validate_%29.md): Asks the delegate to validate the URL for a file that the user selected.

### Instance Methods

- [panel:didSelectType:](nsopensavepaneldelegate/panel%28__didselect_%29.md): `NSSavePanel`: Optional — Sent when the user changes the current type. `NSOpenPanel`: Not sent.
- [panel:displayNameForType:](nsopensavepaneldelegate/panel%28__displaynamefor_%29.md): `NSSavePanel`: Optional — Sent when the content type popup is displayed and the save panel needs the display name for a type. If `nil` is returned, the save panel will display type’s `localizedDescription`. `NSOpenPanel`: Not sent.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSPathCell](nspathcell.md)

## See Also

### Open and Save Panels

- [NSOpenPanel](nsopenpanel.md): A panel that prompts the user to select a file to open.
- [NSSavePanel](nssavepanel.md): A panel that prompts the user for information about where to save a file.
