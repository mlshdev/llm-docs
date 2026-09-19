> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagebrowserselectiondidchange(_:)

# imageBrowserSelectionDidChange(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Performs custom tasks when the selection changes.

## Declaration

```swift
func imageBrowserSelectionDidChange(_ aBrowser: IKImageBrowserView!)
```

## Parameters

- `aBrowser`: An image browser view.

<a id="Discussion"></a>

## Discussion

This method signals that the user changes the selection in the image browser view. You can implement this method if you want to perform custom tasks at that time.

# imageBrowserSelectionDidChange: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Performs custom tasks when the selection changes.

## Declaration

```objectivec
- (void) imageBrowserSelectionDidChange:(IKImageBrowserView *) aBrowser;
```

## Parameters

- `aBrowser`: An image browser view.

<a id="Discussion"></a>

## Discussion

This method signals that the user changes the selection in the image browser view. You can implement this method if you want to perform custom tasks at that time.
