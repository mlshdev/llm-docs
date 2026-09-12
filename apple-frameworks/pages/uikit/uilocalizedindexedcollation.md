> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilocalizedindexedcollation](https://developer.apple.com/documentation/uikit/uilocalizedindexedcollation)

# UILocalizedIndexedCollation (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An object that organizes, sorts, and localizes the data for a table view that has a section index.

## Declaration

```swift
@MainActor class UILocalizedIndexedCollation
```

<a id="overview"></a>

## Overview

Use a [UILocalizedIndexedCollation](uilocalizedindexedcollation.md) object in conjunction with your table’s data source object to sort and manage the data in an indexed table view. An index is an ideal way for users to navigate a table view containing sequential content. For example, the Contacts app sorts contacts alphabetically and displays an index for navigating those contacts quickly. You use the collation object as the source of the table’s section titles and index titles in your table view. You also use it to sort items in each section of your table.

To prepare the data for a section index, create an indexed-collation object and call [section(for:collationStringSelector:)](uilocalizedindexedcollation/section%28for_collationstringselector_%29.md) for each model object to be indexed. That method determines the section in which each of these objects should appear and returns an integer that identifies the section. The table-view controller then puts each object in a local array for its section. For each section array, the controller calls the [sortedArray(from:collationStringSelector:)](uilocalizedindexedcollation/sortedarray%28from_collationstringselector_%29.md) method to sort all of the objects in the section. The indexed-collation object is now the data store that the table-view controller uses to provide section-index data to the table view, as shown in the following example code.

**Swift**

```swift
func tableView(tableView: UITableView!, titleForHeaderInSection section: Int) -> String! {
    let currentCollation = UILocalizedIndexedCollation.currentCollation() as UILocalizedIndexedCollation
    let sectionTitles = currentCollation.sectionTitles as NSArray
    return sectionTitles.objectAtIndex(section) as String
}
 
func sectionIndexTitlesForTableView(tableView: UITableView!) -> NSArray! {
    let currentCollation = UILocalizedIndexedCollation.currentCollation() as UILocalizedIndexedCollation
    return currentCollation.sectionIndexTitles as NSArray
}
 
func tableView(tableView: UITableView!, sectionForSectionIndexTitle title: String!, atIndex index: Int) -> Int {
    let currentCollation = UILocalizedIndexedCollation.currentCollation() as UILocalizedIndexedCollation
    return currentCollation.sectionForSectionIndexTitleAtIndex(index)
}
```

**Objective-C**

```objc
- (NSString *)tableView:(UITableView *)tableView titleForHeaderInSection:(NSInteger)section
{
    return [[[UILocalizedIndexedCollation currentCollation] sectionTitles] objectAtIndex:section];
}
 
- (NSArray *)sectionIndexTitlesForTableView:(UITableView *)tableView
{
    return [[UILocalizedIndexedCollation currentCollation] sectionIndexTitles];
}
 
- (NSInteger)tableView:(UITableView *)tableView sectionForSectionIndexTitle:(NSString *)title atIndex:(NSInteger)index
{
    return [[UILocalizedIndexedCollation currentCollation] sectionForSectionIndexTitleAtIndex:index];
}
```

## Topics

### Getting the shared instance

- [current()](uilocalizedindexedcollation/current%28%29.md): Returns an indexed-collation instance for the current table view.

### Preparing the sections and section indexes

- [section(for:collationStringSelector:)](uilocalizedindexedcollation/section%28for_collationstringselector_%29.md): Returns an integer identifying the section in which a model object belongs.
- [sortedArray(from:collationStringSelector:)](uilocalizedindexedcollation/sortedarray%28from_collationstringselector_%29.md): Sorts the objects within a section by their localized titles.

### Providing section index data to the table view

- [sectionTitles](uilocalizedindexedcollation/sectiontitles.md): Returns the list of section titles for the table view.
- [sectionIndexTitles](uilocalizedindexedcollation/sectionindextitles.md): Returns the list of section-index titles for the table view.
- [section(forSectionIndexTitle:)](uilocalizedindexedcollation/section%28forsectionindextitle_%29.md): Returns the section that the table view should scroll to for the given index title.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Data

- [Filling a table with data](filling-a-table-with-data.md): Create and configure cells for your table dynamically using a data source object, or provide them statically from your storyboard.
- [Asynchronously loading images into table and collection views](asynchronously-loading-images-into-table-and-collection-views.md): Store and fetch images asynchronously to make your app more responsive.
- [UITableViewDataSource](uitableviewdatasource.md): The methods that an object adopts to manage data and provide cells for a table view.
- [UITableViewDataSourcePrefetching](uitableviewdatasourceprefetching.md): A protocol that provides advance warning of the data requirements for a table view, allowing you to start potentially long-running data operations early.
- [UITableViewDiffableDataSource](uitableviewdiffabledatasource-2euir.md): The object you use to manage data and provide cells for a table view.
- [NSDiffableDataSourceSnapshot](nsdiffabledatasourcesnapshot-swift.struct.md): A representation of the state of the data in a view at a specific point in time.
- [UIDataSourceTranslating](uidatasourcetranslating.md): An advanced interface for managing a data source object.
- [UIRefreshControl](uirefreshcontrol.md): A standard control that can initiate the refreshing of a scroll view’s contents.

# UILocalizedIndexedCollation (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An object that organizes, sorts, and localizes the data for a table view that has a section index.

## Declaration

```objectivec
@interface UILocalizedIndexedCollation : NSObject
```

<a id="overview"></a>

## Overview

Use a [UILocalizedIndexedCollation](uilocalizedindexedcollation.md) object in conjunction with your table’s data source object to sort and manage the data in an indexed table view. An index is an ideal way for users to navigate a table view containing sequential content. For example, the Contacts app sorts contacts alphabetically and displays an index for navigating those contacts quickly. You use the collation object as the source of the table’s section titles and index titles in your table view. You also use it to sort items in each section of your table.

To prepare the data for a section index, create an indexed-collation object and call [sectionForObject:collationStringSelector:](uilocalizedindexedcollation/section%28for_collationstringselector_%29.md) for each model object to be indexed. That method determines the section in which each of these objects should appear and returns an integer that identifies the section. The table-view controller then puts each object in a local array for its section. For each section array, the controller calls the [sortedArrayFromArray:collationStringSelector:](uilocalizedindexedcollation/sortedarray%28from_collationstringselector_%29.md) method to sort all of the objects in the section. The indexed-collation object is now the data store that the table-view controller uses to provide section-index data to the table view, as shown in the following example code.

**Swift**

```swift
func tableView(tableView: UITableView!, titleForHeaderInSection section: Int) -> String! {
    let currentCollation = UILocalizedIndexedCollation.currentCollation() as UILocalizedIndexedCollation
    let sectionTitles = currentCollation.sectionTitles as NSArray
    return sectionTitles.objectAtIndex(section) as String
}
 
func sectionIndexTitlesForTableView(tableView: UITableView!) -> NSArray! {
    let currentCollation = UILocalizedIndexedCollation.currentCollation() as UILocalizedIndexedCollation
    return currentCollation.sectionIndexTitles as NSArray
}
 
func tableView(tableView: UITableView!, sectionForSectionIndexTitle title: String!, atIndex index: Int) -> Int {
    let currentCollation = UILocalizedIndexedCollation.currentCollation() as UILocalizedIndexedCollation
    return currentCollation.sectionForSectionIndexTitleAtIndex(index)
}
```

**Objective-C**

```objc
- (NSString *)tableView:(UITableView *)tableView titleForHeaderInSection:(NSInteger)section
{
    return [[[UILocalizedIndexedCollation currentCollation] sectionTitles] objectAtIndex:section];
}
 
- (NSArray *)sectionIndexTitlesForTableView:(UITableView *)tableView
{
    return [[UILocalizedIndexedCollation currentCollation] sectionIndexTitles];
}
 
- (NSInteger)tableView:(UITableView *)tableView sectionForSectionIndexTitle:(NSString *)title atIndex:(NSInteger)index
{
    return [[UILocalizedIndexedCollation currentCollation] sectionForSectionIndexTitleAtIndex:index];
}
```

## Topics

### Getting the shared instance

- [currentCollation](uilocalizedindexedcollation/current%28%29.md): Returns an indexed-collation instance for the current table view.

### Preparing the sections and section indexes

- [sectionForObject:collationStringSelector:](uilocalizedindexedcollation/section%28for_collationstringselector_%29.md): Returns an integer identifying the section in which a model object belongs.
- [sortedArrayFromArray:collationStringSelector:](uilocalizedindexedcollation/sortedarray%28from_collationstringselector_%29.md): Sorts the objects within a section by their localized titles.

### Providing section index data to the table view

- [sectionTitles](uilocalizedindexedcollation/sectiontitles.md): Returns the list of section titles for the table view.
- [sectionIndexTitles](uilocalizedindexedcollation/sectionindextitles.md): Returns the list of section-index titles for the table view.
- [sectionForSectionIndexTitleAtIndex:](uilocalizedindexedcollation/section%28forsectionindextitle_%29.md): Returns the section that the table view should scroll to for the given index title.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Data

- [Filling a table with data](filling-a-table-with-data.md): Create and configure cells for your table dynamically using a data source object, or provide them statically from your storyboard.
- [UITableViewDataSource](uitableviewdatasource.md): The methods that an object adopts to manage data and provide cells for a table view.
- [UITableViewDataSourcePrefetching](uitableviewdatasourceprefetching.md): A protocol that provides advance warning of the data requirements for a table view, allowing you to start potentially long-running data operations early.
- [UITableViewDiffableDataSource](uitableviewdiffabledatasourcereference.md): The object you use to manage data and provide cells for a table view.
- [NSDiffableDataSourceSnapshot](nsdiffabledatasourcesnapshotreference.md): A representation of the state of the data in a view at a specific point in time.
- [UIDataSourceTranslating](uidatasourcetranslating.md): An advanced interface for managing a data source object.
- [UIRefreshControl](uirefreshcontrol.md): A standard control that can initiate the refreshing of a scroll view’s contents.
