> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/imagebrowser(_:itemat:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagebrowser(_:itemat:))

# imageBrowser(\_:itemAt:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Returns an object for the item in an image browser view that corresponds to the specified index.

## Declaration

```swift
func imageBrowser(_ aBrowser: IKImageBrowserView!, itemAt index: Int) -> Any!
```

## Parameters

- `aBrowser`: An image browser view.
- `index`: The index of the item you want to retrieve.

<a id="return-value"></a>

## Return Value

An `IKImageBrowserItem` object.

<a id="Discussion"></a>

## Discussion

Your data source must implement this method. The returned object must implement the required methods of the IKImageBrowserItem protocol.

# imageBrowser:itemAtIndex: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Returns an object for the item in an image browser view that corresponds to the specified index.

## Declaration

```objectivec
- (id) imageBrowser:(IKImageBrowserView *) aBrowser itemAtIndex:(NSUInteger) index;
```

## Parameters

- `aBrowser`: An image browser view.
- `index`: The index of the item you want to retrieve.

<a id="return-value"></a>

## Return Value

An `IKImageBrowserItem` object.

<a id="Discussion"></a>

## Discussion

Your data source must implement this method. The returned object must implement the required methods of the IKImageBrowserItem protocol.
