> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewsupplementaryregistration](https://developer.apple.com/documentation/uikit/uicollectionviewsupplementaryregistration)

# UICollectionViewSupplementaryRegistration

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A registration for the collection view’s supplementary views.

## Declaration

```objectivec
@interface UICollectionViewSupplementaryRegistration : NSObject
```

<a id="overview"></a>

## Overview

Use a supplementary registration to register supplementary views, like headers and footers, with your collection view and configure each view for display. You create a supplementary registration with your supplementary view type and data item type as the registration’s generic parameters, passing in a registration handler to configure the view. In the registration handler, you specify how to configure the content and appearance of that type of supplementary view.

The following example creates a supplementary registration for a custom header view subclass.

```objc
UICollectionViewSupplementaryRegistration *headerRegistration = [UICollectionViewSupplementaryRegistration registrationWithSupplementaryClass:[HeaderView class] elementKind:@"Header" configurationHandler:^(HeaderView *supplementaryView, NSString *elementKind, NSIndexPath *indexPath) {
    supplementaryView.label.text = [NSString stringWithFormat:@"%@ for section %ld", elementKind, (long)indexPath.section];
    supplementaryView.backgroundColor = UIColor.lightGrayColor;
}];
```

After you create a supplementary registration, you pass it in to [dequeueConfiguredReusableSupplementaryViewWithRegistration:forIndexPath:](uicollectionview/dequeueconfiguredreusablesupplementaryviewwithregistration_forindexpath_.md), which you call from your data source’s [supplementaryViewProvider](uicollectionviewdiffabledatasource-9tqpa/supplementaryviewprovider-swift.property.md).

```objc
self.dataSource.supplementaryViewProvider = ^UICollectionReusableView *(UICollectionView *collectionView, NSString *elementKind, NSIndexPath *indexPath) {
    return [collectionView dequeueConfiguredReusableSupplementaryViewWithRegistration:headerRegistration forIndexPath:indexPath];
};
```

You don’t need to call [registerClass:forSupplementaryViewOfKind:withReuseIdentifier:](uicollectionview/register%28__forsupplementaryviewofkind_withreuseidentifier_%29-661io.md) or [registerNib:forSupplementaryViewOfKind:withReuseIdentifier:](uicollectionview/register%28__forsupplementaryviewofkind_withreuseidentifier_%29-9hn73.md). The registration occurs automatically when you pass the supplementary view registration to [dequeueConfiguredReusableSupplementaryViewWithRegistration:forIndexPath:](uicollectionview/dequeueconfiguredreusablesupplementaryviewwithregistration_forindexpath_.md).

> **Important**

>  Don’t create your supplementary view registration inside a [UICollectionViewDiffableDataSourceSupplementaryViewProvider](uicollectionviewdiffabledatasourcereferencesupplementaryviewprovider.md) closure; doing so prevents reuse, and generates an exception in iOS 15 and higher.

## Topics

### Creating a supplementary registration

- [registrationWithSupplementaryClass:elementKind:configurationHandler:](uicollectionviewsupplementaryregistration/registrationwithsupplementaryclass_elementkind_configurationhandler_.md): Creates a supplementary registration for the specified element kind with a registration handler.
- [registrationWithSupplementaryNib:elementKind:configurationHandler:](uicollectionviewsupplementaryregistration/registrationwithsupplementarynib_elementkind_configurationhandler_.md): Deprecated. Creates a supplementary registration for the specified element kind with a registration handler and nib file.
- [UICollectionViewSupplementaryRegistrationConfigurationHandler](uicollectionviewsupplementaryregistrationconfigurationhandler.md): A block that handles the supplementary view registration and configuration.

### Querying a supplementary registration

- [configurationHandler](uicollectionviewsupplementaryregistration/configurationhandler.md): The block that handles the supplementary view registration and configuration.
- [elementKind](uicollectionviewsupplementaryregistration/elementkind.md): The supplementary view’s element kind.
- [supplementaryClass](uicollectionviewsupplementaryregistration/supplementaryclass.md): The class associated with the supplementary view.
- [supplementaryNib](uicollectionviewsupplementaryregistration/supplementarynib.md): The nib file associated with the supplementary view.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Creating headers and footers

- [dequeueConfiguredReusableSupplementaryViewWithRegistration:forIndexPath:](uicollectionview/dequeueconfiguredreusablesupplementaryviewwithregistration_forindexpath_.md): Dequeues a configured reusable supplementary view object.
- [registerClass:forSupplementaryViewOfKind:withReuseIdentifier:](uicollectionview/register%28__forsupplementaryviewofkind_withreuseidentifier_%29-661io.md): Registers a class for use in creating supplementary views for the collection view.
- [registerNib:forSupplementaryViewOfKind:withReuseIdentifier:](uicollectionview/register%28__forsupplementaryviewofkind_withreuseidentifier_%29-9hn73.md): Deprecated. Registers a nib file for use in creating supplementary views for the collection view.
- [dequeueReusableSupplementaryViewOfKind:withReuseIdentifier:forIndexPath:](uicollectionview/dequeuereusablesupplementaryview%28ofkind_withreuseidentifier_for_%29.md): Dequeues a reusable supplementary view located by its identifier and kind.
