> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcontenteditinginputrequestoptions/canhandleadjustmentdata](https://developer.apple.com/documentation/photos/phcontenteditinginputrequestoptions/canhandleadjustmentdata)

# canHandleAdjustmentData (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A block to be called when Photos needs to determine whether your app can continue previous edits made to an asset.

## Declaration

```swift
var canHandleAdjustmentData: (PHAdjustmentData) -> Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When an asset is edited, Photos stores a [PHAdjustmentData](../phadjustmentdata.md) object provided by the app or extension that edited the asset. This object provides all information necessary to reconstruct the edited asset using the original asset data. When your app requests to edit an asset, Photos calls this block to inquire whether your app can handle the asset’s past adjustments.

The block takes the following parameter:

- **adjustmentData**: A [PHAdjustmentData](../phadjustmentdata.md) object you can use to determine whether your app can work with past edits made to the asset. Typically, you make this decision based on the adjustment data’s [formatIdentifier](../phadjustmentdata/formatidentifier.md) and [formatVersion](../phadjustmentdata/formatversion.md) properties.

If your block returns `true`, Photos provides the original asset data for editing. Your app uses the adjustment data to alter, add to, or reapply previous edits. (For example, an adjustment data may describe filters applied to a photo. Your app reapplies those filters and allows the user to change filter parameters, add new filters, or remove filters.)

If your block returns `false`, Photos provides the most recent asset data—the rendered output of all previous edits—for editing.

## See Also

### Specifying Edting Request Options

- [originalResourceChoice](originalresourcechoice.md): The original resource to use as the unadjusted base when fulfilling the request.
- [skipsDisplaySizeImage](skipsdisplaysizeimage.md): Set this value to `true` if you don’t want a `displaySizeImage` on the `PHContentEditingInput`. This can give performance wins when the image will not be used.

# canHandleAdjustmentData (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A block to be called when Photos needs to determine whether your app can continue previous edits made to an asset.

## Declaration

```objectivec
@property (nonatomic, copy) BOOL (^canHandleAdjustmentData)(PHAdjustmentData *adjustmentData);
```

<a id="Discussion"></a>

## Discussion

When an asset is edited, Photos stores a [PHAdjustmentData](../phadjustmentdata.md) object provided by the app or extension that edited the asset. This object provides all information necessary to reconstruct the edited asset using the original asset data. When your app requests to edit an asset, Photos calls this block to inquire whether your app can handle the asset’s past adjustments.

The block takes the following parameter:

- **adjustmentData**: A [PHAdjustmentData](../phadjustmentdata.md) object you can use to determine whether your app can work with past edits made to the asset. Typically, you make this decision based on the adjustment data’s [formatIdentifier](../phadjustmentdata/formatidentifier.md) and [formatVersion](../phadjustmentdata/formatversion.md) properties.

If your block returns `true`, Photos provides the original asset data for editing. Your app uses the adjustment data to alter, add to, or reapply previous edits. (For example, an adjustment data may describe filters applied to a photo. Your app reapplies those filters and allows the user to change filter parameters, add new filters, or remove filters.)

If your block returns `false`, Photos provides the most recent asset data—the rendered output of all previous edits—for editing.

## See Also

### Specifying Edting Request Options

- [originalResourceChoice](originalresourcechoice.md): The original resource to use as the unadjusted base when fulfilling the request.
- [skipsDisplaySizeImage](skipsdisplaysizeimage.md): Set this value to `true` if you don’t want a `displaySizeImage` on the `PHContentEditingInput`. This can give performance wins when the image will not be used.
