> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcontenteditinginputrequestoptions/originalresourcechoice](https://developer.apple.com/documentation/photos/phcontenteditinginputrequestoptions/originalresourcechoice)

# originalResourceChoice (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The original resource to use as the unadjusted base when fulfilling the request.

## Declaration

```swift
var originalResourceChoice: PHAsset.OriginalResourceChoice { get set }
```

<a id="discussion"></a>

## Discussion

When set, the content editing input request is fulfilled as though the asset’s original resource choice were the value specified here. This property applies to RAW+JPEG assets only, and is intended for switching between the RAW and compressed resource of such an asset. Setting it for an asset that has only a RAW resource is an error.

## See Also

### Specifying Edting Request Options

- [canHandleAdjustmentData](canhandleadjustmentdata.md): A block to be called when Photos needs to determine whether your app can continue previous edits made to an asset.
- [skipsDisplaySizeImage](skipsdisplaysizeimage.md): Set this value to `true` if you don’t want a `displaySizeImage` on the `PHContentEditingInput`. This can give performance wins when the image will not be used.

# originalResourceChoice (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The original resource to use as the unadjusted base when fulfilling the request.

## Declaration

```objectivec
@property (nonatomic, assign) PHOriginalResourceChoice originalResourceChoice;
```

<a id="discussion"></a>

## Discussion

When set, the content editing input request is fulfilled as though the asset’s original resource choice were the value specified here. This property applies to RAW+JPEG assets only, and is intended for switching between the RAW and compressed resource of such an asset. Setting it for an asset that has only a RAW resource is an error.

## See Also

### Specifying Edting Request Options

- [canHandleAdjustmentData](canhandleadjustmentdata.md): A block to be called when Photos needs to determine whether your app can continue previous edits made to an asset.
- [skipsDisplaySizeImage](skipsdisplaysizeimage.md): Set this value to `true` if you don’t want a `displaySizeImage` on the `PHContentEditingInput`. This can give performance wins when the image will not be used.
