> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/imagebrowser(_:removeitemsat:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagebrowser(_:removeitemsat:))

# imageBrowser(\_:removeItemsAt:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Signals that a remove operation should be applied to the specified items.

## Declaration

```swift
func imageBrowser(_ aBrowser: IKImageBrowserView!, removeItemsAt indexes: IndexSet!)
```

## Parameters

- `aBrowser`: An image browser view.
- `indexes`: The indexes of the items that should be removed.

<a id="Discussion"></a>

## Discussion

This method is optional. It is invoked by the image browser after  Image Kit determines  that a remove operation should be applied. In response, the data source should update itself by removing the specified items.

# imageBrowser:removeItemsAtIndexes: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Signals that a remove operation should be applied to the specified items.

## Declaration

```objectivec
- (void) imageBrowser:(IKImageBrowserView *) aBrowser removeItemsAtIndexes:(NSIndexSet *) indexes;
```

## Parameters

- `aBrowser`: An image browser view.
- `indexes`: The indexes of the items that should be removed.

<a id="Discussion"></a>

## Discussion

This method is optional. It is invoked by the image browser after  Image Kit determines  that a remove operation should be applied. In response, the data source should update itself by removing the specified items.
