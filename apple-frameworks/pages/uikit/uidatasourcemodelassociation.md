> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidatasourcemodelassociation](https://developer.apple.com/documentation/uikit/uidatasourcemodelassociation)

# UIDataSourceModelAssociation (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods that defines an interface for providing persistent references to data objects in your app.

## Declaration

```swift
@MainActor protocol UIDataSourceModelAssociation
```

<a id="overview"></a>

## Overview

Your data source objects can adopt this protocol to assist a corresponding table or collection view during the state restoration process. Those classes use the methods of this protocol to ensure that the same data objects (and not just the same row indexes) are scrolled into view and selected.

Before you can implement this protocol, your app must be able to identify data objects consistently between app launches. This requires being able to take some identifying marker of the object and convert that marker into a string that can then be saved with the rest of the app state. For example, a Core Data app could convert a managed object’s ID into a URI that it could then convert into a string.

Currently, only the [UITableView](uitableview.md) and [UICollectionView](uicollectionview.md) classes support this protocol. You’d implement this protocol in any objects you use as the data source for those classes. If you don’t adopt the protocol in your data source, the views don’t attempt to restore the selected and visible rows.

## Topics

### Locating the data

- [modelIdentifierForElement(at:in:)](uidatasourcemodelassociation/modelidentifierforelement%28at_in_%29.md): Returns the string that uniquely identifies the data at the specified location in the view.
- [indexPathForElement(withModelIdentifier:in:)](uidatasourcemodelassociation/indexpathforelement%28withmodelidentifier_in_%29.md): Returns the current index of the data object with the specified identifier.

# UIDataSourceModelAssociation (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods that defines an interface for providing persistent references to data objects in your app.

## Declaration

```objectivec
@protocol UIDataSourceModelAssociation
```

<a id="overview"></a>

## Overview

Your data source objects can adopt this protocol to assist a corresponding table or collection view during the state restoration process. Those classes use the methods of this protocol to ensure that the same data objects (and not just the same row indexes) are scrolled into view and selected.

Before you can implement this protocol, your app must be able to identify data objects consistently between app launches. This requires being able to take some identifying marker of the object and convert that marker into a string that can then be saved with the rest of the app state. For example, a Core Data app could convert a managed object’s ID into a URI that it could then convert into a string.

Currently, only the [UITableView](uitableview.md) and [UICollectionView](uicollectionview.md) classes support this protocol. You’d implement this protocol in any objects you use as the data source for those classes. If you don’t adopt the protocol in your data source, the views don’t attempt to restore the selected and visible rows.

## Topics

### Locating the data

- [modelIdentifierForElementAtIndexPath:inView:](uidatasourcemodelassociation/modelidentifierforelement%28at_in_%29.md): Returns the string that uniquely identifies the data at the specified location in the view.
- [indexPathForElementWithModelIdentifier:inView:](uidatasourcemodelassociation/indexpathforelement%28withmodelidentifier_in_%29.md): Returns the current index of the data object with the specified identifier.
