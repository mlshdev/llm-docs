> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/webpluginsetisselected(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/webpluginsetisselected(_:))

# webPlugInSetIsSelected(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Controls plug-in behavior based on its selection.

## Declaration

```swift
func webPlugInSetIsSelected(_ isSelected: Bool)
```

## Parameters

- `isSelected`: If [YES](../yes.md), the plug-in is currently selected. Otherwise, it is not selected.

<a id="Discussion"></a>

## Discussion

This may be used, for example, to change the plug-in’s appearance when it is selected by the user.

# webPlugInSetIsSelected: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Controls plug-in behavior based on its selection.

## Declaration

```objectivec
- (void) webPlugInSetIsSelected:(BOOL) isSelected;
```

## Parameters

- `isSelected`: If [YES](../yes.md), the plug-in is currently selected. Otherwise, it is not selected.

<a id="Discussion"></a>

## Discussion

This may be used, for example, to change the plug-in’s appearance when it is selected by the user.
