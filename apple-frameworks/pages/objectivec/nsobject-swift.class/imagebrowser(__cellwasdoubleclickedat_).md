> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagebrowser(_:cellwasdoubleclickedat:)

# imageBrowser(\_:cellWasDoubleClickedAt:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Performs custom tasks when the user double-clicks an item in the image browser view.

## Declaration

```swift
func imageBrowser(_ aBrowser: IKImageBrowserView!, cellWasDoubleClickedAt index: Int)
```

## Parameters

- `aBrowser`: An image browser view.
- `index`: The index of the cell.

<a id="Discussion"></a>

## Discussion

This method signals that the user double-clicked an item in the image browser view. You can implement this method if you want to perform custom tasks at that time.

# imageBrowser:cellWasDoubleClickedAtIndex: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Performs custom tasks when the user double-clicks an item in the image browser view.

## Declaration

```objectivec
- (void) imageBrowser:(IKImageBrowserView *) aBrowser cellWasDoubleClickedAtIndex:(NSUInteger) index;
```

## Parameters

- `aBrowser`: An image browser view.
- `index`: The index of the cell.

<a id="Discussion"></a>

## Discussion

This method signals that the user double-clicked an item in the image browser view. You can implement this method if you want to perform custom tasks at that time.
