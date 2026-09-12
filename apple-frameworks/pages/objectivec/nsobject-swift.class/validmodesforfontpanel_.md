> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/validmodesforfontpanel:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/validmodesforfontpanel:)

# validModesForFontPanel:

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 11.0)

Returns the mode mask corresponding to the expected font panel mode.

## Declaration

```objectivec
- (NSFontPanelModeMask) validModesForFontPanel:(NSFontPanel *) fontPanel;
```

<a id="Discussion"></a>

## Discussion

The mode masks are defined in [Mode Masks](https://developer.apple.com/documentation/appkit/mode-masks).

The Font Panel has the ability to hide elements that are not applicable for a given context by having the target respond to [validModesForFontPanel:](validmodesforfontpanel_.md). If the target desires a font panel mode other than the standard mode mask, it must respond to this method.

This message is sent up the responder chain to the first responder implementing the method. Ideally that object should be the first responder found that also implements [changeFont:](changefont_.md).
