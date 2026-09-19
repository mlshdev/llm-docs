> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagebrowser(_:backgroundwasrightclickedwith:)

# imageBrowser(\_:backgroundWasRightClickedWith:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Performs custom tasks when the user right-clicks the image browser view background.

## Declaration

```swift
func imageBrowser(_ aBrowser: IKImageBrowserView!, backgroundWasRightClickedWith event: NSEvent!)
```

## Parameters

- `aBrowser`: An image browser view.
- `event`: The event that invoked the method.

<a id="Discussion"></a>

## Discussion

This method signals  that the user either right-clicked the background or left-clicked it with the Alt key pressed. You can implement this method if you want to perform custom tasks at that time.

# imageBrowser:backgroundWasRightClickedWithEvent: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Performs custom tasks when the user right-clicks the image browser view background.

## Declaration

```objectivec
- (void) imageBrowser:(IKImageBrowserView *) aBrowser backgroundWasRightClickedWithEvent:(NSEvent *) event;
```

## Parameters

- `aBrowser`: An image browser view.
- `event`: The event that invoked the method.

<a id="Discussion"></a>

## Discussion

This method signals  that the user either right-clicked the background or left-clicked it with the Alt key pressed. You can implement this method if you want to perform custom tasks at that time.
