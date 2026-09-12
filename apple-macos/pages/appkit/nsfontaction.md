> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontaction](https://developer.apple.com/documentation/appkit/nsfontaction)

# NSFontAction (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Actions that modify a font.

## Declaration

```swift
enum NSFontAction
```

## Topics

### Constants

- [NSFontAction.noFontChangeAction](nsfontaction/nofontchangeaction.md): No action; the font is returned unchanged.
- [NSFontAction.viaPanelFontAction](nsfontaction/viapanelfontaction.md): Converts the font according to the `NSFontPanel` method `panelConvertFont:`.
- [NSFontAction.addTraitFontAction](nsfontaction/addtraitfontaction.md): Converts the font to have an additional trait using [convert(\_:toHaveTrait:)](nsfontmanager/convert%28__tohavetrait_%29.md).
- [NSFontAction.sizeUpFontAction](nsfontaction/sizeupfontaction.md): Converts the font to a larger size using [convert(\_:toSize:)](nsfontmanager/convert%28__tosize_%29.md).
- [NSFontAction.sizeDownFontAction](nsfontaction/sizedownfontaction.md): Converts the font to a smaller size using [convert(\_:toSize:)](nsfontmanager/convert%28__tosize_%29.md).
- [NSFontAction.heavierFontAction](nsfontaction/heavierfontaction.md): Converts the font to a heavier weight using [convertWeight(\_:of:)](nsfontmanager/convertweight%28__of_%29.md).
- [NSFontAction.lighterFontAction](nsfontaction/lighterfontaction.md): Converts the font to a lighter weight using [convertWeight(\_:of:)](nsfontmanager/convertweight%28__of_%29.md).
- [NSFontAction.removeTraitFontAction](nsfontaction/removetraitfontaction.md): Converts the font to remove a trait using [convert(\_:toNotHaveTrait:)](nsfontmanager/convert%28__tonothavetrait_%29.md).

### Initializers

- [init(rawValue:)](nsfontaction/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sending Action Methods

- [addFontTrait(\_:)](nsfontmanager/addfonttrait%28__%29.md): Adds a trait to the font.
- [removeFontTrait(\_:)](nsfontmanager/removefonttrait%28__%29.md): Removes a trait from the font.
- [modifyFont(\_:)](nsfontmanager/modifyfont%28__%29.md): Modifies a trait of the font.
- [modifyFontViaPanel(\_:)](nsfontmanager/modifyfontviapanel%28__%29.md): Modifies a font trait using input from the Font panel.
- [orderFrontStylesPanel(\_:)](nsfontmanager/orderfrontstylespanel%28__%29.md): Opens the Font Styles panel.
- [orderFrontFontPanel(\_:)](nsfontmanager/orderfrontfontpanel%28__%29.md): Opens the Font panel, creating it if necessary, and displays that panel in front of the app’s windows.

# NSFontAction (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Actions that modify a font.

## Declaration

```objectivec
enum NSFontAction : NSUInteger;
```

## Topics

### Constants

- [NSNoFontChangeAction](nsfontaction/nofontchangeaction.md): No action; the font is returned unchanged.
- [NSViaPanelFontAction](nsfontaction/viapanelfontaction.md): Converts the font according to the `NSFontPanel` method `panelConvertFont:`.
- [NSAddTraitFontAction](nsfontaction/addtraitfontaction.md): Converts the font to have an additional trait using [convertFont:toHaveTrait:](nsfontmanager/convert%28__tohavetrait_%29.md).
- [NSSizeUpFontAction](nsfontaction/sizeupfontaction.md): Converts the font to a larger size using [convertFont:toSize:](nsfontmanager/convert%28__tosize_%29.md).
- [NSSizeDownFontAction](nsfontaction/sizedownfontaction.md): Converts the font to a smaller size using [convertFont:toSize:](nsfontmanager/convert%28__tosize_%29.md).
- [NSHeavierFontAction](nsfontaction/heavierfontaction.md): Converts the font to a heavier weight using [convertWeight:ofFont:](nsfontmanager/convertweight%28__of_%29.md).
- [NSLighterFontAction](nsfontaction/lighterfontaction.md): Converts the font to a lighter weight using [convertWeight:ofFont:](nsfontmanager/convertweight%28__of_%29.md).
- [NSRemoveTraitFontAction](nsfontaction/removetraitfontaction.md): Converts the font to remove a trait using [convertFont:toNotHaveTrait:](nsfontmanager/convert%28__tonothavetrait_%29.md).

## See Also

### Sending Action Methods

- [addFontTrait:](nsfontmanager/addfonttrait%28__%29.md): Adds a trait to the font.
- [removeFontTrait:](nsfontmanager/removefonttrait%28__%29.md): Removes a trait from the font.
- [modifyFont:](nsfontmanager/modifyfont%28__%29.md): Modifies a trait of the font.
- [modifyFontViaPanel:](nsfontmanager/modifyfontviapanel%28__%29.md): Modifies a font trait using input from the Font panel.
- [orderFrontStylesPanel:](nsfontmanager/orderfrontstylespanel%28__%29.md): Opens the Font Styles panel.
- [orderFrontFontPanel:](nsfontmanager/orderfrontfontpanel%28__%29.md): Opens the Font panel, creating it if necessary, and displays that panel in front of the app’s windows.
