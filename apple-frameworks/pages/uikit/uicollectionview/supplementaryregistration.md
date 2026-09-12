> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/supplementaryregistration](https://developer.apple.com/documentation/uikit/uicollectionview/supplementaryregistration)

# UICollectionView.SupplementaryRegistration

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

A registration for the collection view’s supplementary views.

## Declaration

```swift
struct SupplementaryRegistration<Supplementary> where Supplementary : UICollectionReusableView
```

<a id="overview"></a>

## Overview

Use a supplementary registration to register supplementary views, like headers and footers, with your collection view and configure each view for display. You create a supplementary registration with your supplementary view type and data item type as the registration’s generic parameters, passing in a registration handler to configure the view. In the registration handler, you specify how to configure the content and appearance of that type of supplementary view.

The following example creates a supplementary registration for a custom header view subclass.

```swift
let headerRegistration = UICollectionView.SupplementaryRegistration
    <HeaderView>(elementKind: "Header") {
    supplementaryView, string, indexPath in
    supplementaryView.label.text = "\(string) for section \(indexPath.section)"
    supplementaryView.backgroundColor = .lightGray
}
```

After you create a supplementary registration, you pass it in to [dequeueConfiguredReusableSupplementary(using:for:)](dequeueconfiguredreusablesupplementary%28using_for_%29.md), which you call from your data source’s [supplementaryViewProvider](../uicollectionviewdiffabledatasource-9tqpa/supplementaryviewprovider-swift.property.md).

```swift
dataSource.supplementaryViewProvider = { collectionView, elementKind, indexPath in
    return collectionView.dequeueConfiguredReusableSupplementary(using: headerRegistration,
                                                                 for: indexPath)
}
```

You don’t need to call [register(\_:forSupplementaryViewOfKind:withReuseIdentifier:)](register%28__forsupplementaryviewofkind_withreuseidentifier_%29-661io.md) or [register(\_:forSupplementaryViewOfKind:withReuseIdentifier:)](register%28__forsupplementaryviewofkind_withreuseidentifier_%29-9hn73.md). The registration occurs automatically when you pass the supplementary view registration to [dequeueConfiguredReusableSupplementary(using:for:)](dequeueconfiguredreusablesupplementary%28using_for_%29.md).

> **Important**

>  Don’t create your supplementary view registration inside a [UICollectionViewDiffableDataSource.SupplementaryViewProvider](../uicollectionviewdiffabledatasource-9tqpa/supplementaryviewprovider-swift.typealias.md) closure; doing so prevents reuse, and generates an exception in iOS 15 and higher.

## Topics

### Creating a supplementary registration

- [init(elementKind:handler:)](supplementaryregistration/init%28elementkind_handler_%29.md): Creates a supplementary registration for the specified element kind with a registration handler.
- [init(supplementaryNib:elementKind:handler:)](supplementaryregistration/init%28supplementarynib_elementkind_handler_%29.md): Deprecated. Creates a supplementary registration for the specified element kind with a registration handler and nib file.
- [UICollectionView.SupplementaryRegistration.Handler](supplementaryregistration/handler.md): A closure that handles the supplementary view registration and configuration.

## See Also

### Creating headers and footers

- [dequeueConfiguredReusableSupplementary(using:for:)](dequeueconfiguredreusablesupplementary%28using_for_%29.md): Dequeues a configured reusable supplementary view object.
- [register(\_:forSupplementaryViewOfKind:withReuseIdentifier:)](register%28__forsupplementaryviewofkind_withreuseidentifier_%29-661io.md): Registers a class for use in creating supplementary views for the collection view.
- [register(\_:forSupplementaryViewOfKind:withReuseIdentifier:)](register%28__forsupplementaryviewofkind_withreuseidentifier_%29-9hn73.md): Deprecated. Registers a nib file for use in creating supplementary views for the collection view.
- [dequeueReusableSupplementaryView(ofKind:withReuseIdentifier:for:)](dequeuereusablesupplementaryview%28ofkind_withreuseidentifier_for_%29.md): Dequeues a reusable supplementary view located by its identifier and kind.
