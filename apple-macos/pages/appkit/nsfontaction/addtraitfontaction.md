> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontaction/addtraitfontaction](https://developer.apple.com/documentation/appkit/nsfontaction/addtraitfontaction)

# NSFontAction.addTraitFontAction (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

Converts the font to have an additional trait using [convert(\_:toHaveTrait:)](../nsfontmanager/convert%28__tohavetrait_%29.md).

## Declaration

```swift
case addTraitFontAction
```

## See Also

### Constants

- [NSFontAction.noFontChangeAction](nofontchangeaction.md): No action; the font is returned unchanged.
- [NSFontAction.viaPanelFontAction](viapanelfontaction.md): Converts the font according to the `NSFontPanel` method `panelConvertFont:`.
- [NSFontAction.sizeUpFontAction](sizeupfontaction.md): Converts the font to a larger size using [convert(\_:toSize:)](../nsfontmanager/convert%28__tosize_%29.md).
- [NSFontAction.sizeDownFontAction](sizedownfontaction.md): Converts the font to a smaller size using [convert(\_:toSize:)](../nsfontmanager/convert%28__tosize_%29.md).
- [NSFontAction.heavierFontAction](heavierfontaction.md): Converts the font to a heavier weight using [convertWeight(\_:of:)](../nsfontmanager/convertweight%28__of_%29.md).
- [NSFontAction.lighterFontAction](lighterfontaction.md): Converts the font to a lighter weight using [convertWeight(\_:of:)](../nsfontmanager/convertweight%28__of_%29.md).
- [NSFontAction.removeTraitFontAction](removetraitfontaction.md): Converts the font to remove a trait using [convert(\_:toNotHaveTrait:)](../nsfontmanager/convert%28__tonothavetrait_%29.md).

# NSAddTraitFontAction (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

Converts the font to have an additional trait using [convertFont:toHaveTrait:](../nsfontmanager/convert%28__tohavetrait_%29.md).

## Declaration

```objectivec
NSAddTraitFontAction
```

## See Also

### Constants

- [NSNoFontChangeAction](nofontchangeaction.md): No action; the font is returned unchanged.
- [NSViaPanelFontAction](viapanelfontaction.md): Converts the font according to the `NSFontPanel` method `panelConvertFont:`.
- [NSSizeUpFontAction](sizeupfontaction.md): Converts the font to a larger size using [convertFont:toSize:](../nsfontmanager/convert%28__tosize_%29.md).
- [NSSizeDownFontAction](sizedownfontaction.md): Converts the font to a smaller size using [convertFont:toSize:](../nsfontmanager/convert%28__tosize_%29.md).
- [NSHeavierFontAction](heavierfontaction.md): Converts the font to a heavier weight using [convertWeight:ofFont:](../nsfontmanager/convertweight%28__of_%29.md).
- [NSLighterFontAction](lighterfontaction.md): Converts the font to a lighter weight using [convertWeight:ofFont:](../nsfontmanager/convertweight%28__of_%29.md).
- [NSRemoveTraitFontAction](removetraitfontaction.md): Converts the font to remove a trait using [convertFont:toNotHaveTrait:](../nsfontmanager/convert%28__tonothavetrait_%29.md).
