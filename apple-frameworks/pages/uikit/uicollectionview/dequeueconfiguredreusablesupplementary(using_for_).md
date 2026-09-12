> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/dequeueconfiguredreusablesupplementary(using:for:)](https://developer.apple.com/documentation/uikit/uicollectionview/dequeueconfiguredreusablesupplementary(using:for:))

# dequeueConfiguredReusableSupplementary(using:for:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Dequeues a configured reusable supplementary view object.

## Declaration

```swift
@MainActor @preconcurrency func dequeueConfiguredReusableSupplementary<Supplementary>(using registration: UICollectionView.SupplementaryRegistration<Supplementary>, for indexPath: IndexPath) -> Supplementary where Supplementary : UICollectionReusableView
```

## Parameters

- `registration`: The supplementary registration for configuring the supplementary view object. See [UICollectionView.SupplementaryRegistration](supplementaryregistration.md).
- `indexPath`: The index path that specifies the location of the supplementary view in the collection view.

<a id="return-value"></a>

## Return Value

A configured reusable supplementary view object.

## See Also

### Creating headers and footers

- [UICollectionView.SupplementaryRegistration](supplementaryregistration.md): A registration for the collection view’s supplementary views.
- [register(\_:forSupplementaryViewOfKind:withReuseIdentifier:)](register%28__forsupplementaryviewofkind_withreuseidentifier_%29-661io.md): Registers a class for use in creating supplementary views for the collection view.
- [register(\_:forSupplementaryViewOfKind:withReuseIdentifier:)](register%28__forsupplementaryviewofkind_withreuseidentifier_%29-9hn73.md): Deprecated. Registers a nib file for use in creating supplementary views for the collection view.
- [dequeueReusableSupplementaryView(ofKind:withReuseIdentifier:for:)](dequeuereusablesupplementaryview%28ofkind_withreuseidentifier_for_%29.md): Dequeues a reusable supplementary view located by its identifier and kind.
