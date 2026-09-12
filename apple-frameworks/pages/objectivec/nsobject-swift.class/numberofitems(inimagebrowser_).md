> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/numberofitems(inimagebrowser:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/numberofitems(inimagebrowser:))

# numberOfItems(inImageBrowser:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Returns the number of records managed by the data source object.

## Declaration

```swift
func numberOfItems(inImageBrowser aBrowser: IKImageBrowserView!) -> Int
```

## Parameters

- `aBrowser`: An image browser view.

<a id="return-value"></a>

## Return Value

The number of records managed by the image browser view.

<a id="Discussion"></a>

## Discussion

Your data source must implement this method. An  [IKImageView](https://developer.apple.com/documentation/quartz/ikimageview) object uses this method to determine how many cells it should create and display.

# numberOfItemsInImageBrowser: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Returns the number of records managed by the data source object.

## Declaration

```objectivec
- (NSUInteger) numberOfItemsInImageBrowser:(IKImageBrowserView *) aBrowser;
```

## Parameters

- `aBrowser`: An image browser view.

<a id="return-value"></a>

## Return Value

The number of records managed by the image browser view.

<a id="Discussion"></a>

## Discussion

Your data source must implement this method. An  [IKImageView](https://developer.apple.com/documentation/quartz/ikimageview) object uses this method to determine how many cells it should create and display.
