> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phcontenteditingcontroller/canhandle(_:)](https://developer.apple.com/documentation/photosui/phcontenteditingcontroller/canhandle(_:))

# canHandle(\_:) (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 10.11+ · visionOS 1.0+

Asks your extension whether it can continue working with the most recent edit that was made to an asset.

## Declaration

```swift
func canHandle(_ adjustmentData: PHAdjustmentData) -> Bool
```

## Parameters

- `adjustmentData`: Use this object to determine whether your extension can work with past edits made to the asset. Typically, you make this decision based on the adjustment data’s [formatIdentifier](../../photos/phadjustmentdata/formatidentifier.md) and [formatVersion](../../photos/phadjustmentdata/formatversion.md) properties.

<a id="return-value"></a>

## Return Value

`true` if your extension supports the adjustment data; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

When an asset is edited, Photos stores a [PHAdjustmentData](../../photos/phadjustmentdata.md) object that is provided by the app (or by the extension) that edited the asset. This object provides whatever information is necessary to reconstruct the edited asset using the previous version of the asset’s content. When a user attempts to edit an asset with your extension, Photos calls this block to learn whether your extension can handle the asset’s past adjustments.

If you return `true` from this method, Photos provides the previous asset version for editing. Your extension uses the adjustment data to alter, add to, or reapply the last edit. (For example, an adjustment data may describe filters applied to a photo. Your extension reapplies those filters and allows the user to change filter parameters, add new filters, or remove filters.)

If you return `false` from this method, Photos provides the most recent asset data—the rendered output of the previous edit—for editing.

For more information, see `Working with Asset Versions and Adjustments`.

# canHandleAdjustmentData: (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 10.11+ · visionOS 1.0+

Asks your extension whether it can continue working with the most recent edit that was made to an asset.

## Declaration

```objectivec
- (BOOL) canHandleAdjustmentData:(PHAdjustmentData *) adjustmentData;
```

## Parameters

- `adjustmentData`: Use this object to determine whether your extension can work with past edits made to the asset. Typically, you make this decision based on the adjustment data’s [formatIdentifier](../../photos/phadjustmentdata/formatidentifier.md) and [formatVersion](../../photos/phadjustmentdata/formatversion.md) properties.

<a id="return-value"></a>

## Return Value

`true` if your extension supports the adjustment data; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

When an asset is edited, Photos stores a [PHAdjustmentData](../../photos/phadjustmentdata.md) object that is provided by the app (or by the extension) that edited the asset. This object provides whatever information is necessary to reconstruct the edited asset using the previous version of the asset’s content. When a user attempts to edit an asset with your extension, Photos calls this block to learn whether your extension can handle the asset’s past adjustments.

If you return `true` from this method, Photos provides the previous asset version for editing. Your extension uses the adjustment data to alter, add to, or reapply the last edit. (For example, an adjustment data may describe filters applied to a photo. Your extension reapplies those filters and allows the user to change filter parameters, add new filters, or remove filters.)

If you return `false` from this method, Photos provides the most recent asset data—the rendered output of the previous edit—for editing.

For more information, see `Working with Asset Versions and Adjustments`.
