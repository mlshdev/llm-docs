> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/prefetching-collection-view-data](https://developer.apple.com/documentation/uikit/prefetching-collection-view-data)

# Prefetching collection view data (Swift)

**Framework:** UIKit  
**Kind:** Sample Code  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · Xcode 14.2+

Load data for collection view cells before they display.

<a id="Overview"></a>

## Overview

A collection view displays an ordered collection of cells in customizable layouts. The [UICollectionViewDataSourcePrefetching](uicollectionviewdatasourceprefetching.md) protocol helps provide a smoother user experience by prefetching the data necessary for upcoming collection view cells. When you enable prefetching, the collection view requests the data before it needs to display the cell. When it’s time to display the cell, the data is already locally cached.

The image below shows cells outside the bounds of the collection view that have been prefetched:

![An image that shows a collection view implementation. The collection view has a white background, and two columns of cells that each have a red background. A callout that says Displayed UICollectionView highlights the first three rows of cells. Below that, another callout that says Prefetched collection view cells highlights the last full row of cells and a partial row of cells.](https://developer.apple.com/images/com.apple.uikit/prefetching-screenshot.png)

> **Note**

> The storyboard in this project contains a collection view controller with a collection view that has Clips To Bounds disabled. With this configuration, you can visualize the cells before they display.

<a id="Enable-prefetching"></a>

### Enable prefetching

The root view controller uses an instance of the `CustomDataSource` class to provide data to its [UICollectionView](uicollectionview.md) instance. The `CustomDataSource` class implements the `UICollectionViewDataSourcePrefetching` protocol to begin fetching the data required to populate cells.

```swift
class CustomDataSource: NSObject, UICollectionViewDataSource, UICollectionViewDataSourcePrefetching {
```

In addition to assigning the `CustomDataSource` instance to the collection view’s [dataSource](uicollectionview/datasource.md) property, the sample code project also assigns it to the [prefetchDataSource](uicollectionview/prefetchdatasource.md) property.

```swift
// Set the collection view's data source.
collectionView.dataSource = dataSource

// Set the collection view's prefetching data source.
collectionView.prefetchDataSource = dataSource
```

<a id="Load-data-asynchronously"></a>

### Load data asynchronously

Prefetching data is a tool to use when loading data is a slow or expensive process — for example, when fetching data over the network. In these circumstances, it’s best to perform data loading asynchronously. In this sample, the `AsyncFetcher` class fetches data asynchronously, simulating a network request.

First, the sample implements the [UICollectionViewDataSourcePrefetching](uicollectionviewdatasourceprefetching.md) prefetch method, invoking the appropriate method on the asynchronous fetcher.

```swift
func collectionView(_ collectionView: UICollectionView, prefetchItemsAt indexPaths: [IndexPath]) {
    // Begin asynchronously fetching data for the requested index paths.
    for indexPath in indexPaths {
        let model = models[indexPath.row]
        asyncFetcher.fetchAsync(model.identifier)
    }
}
```

> **Note**

> Developers can create their own version of `AsyncFetcher` to fit their requirements. The implementation in this sample makes heavy use of [`Operation`](../foundation/operation.md) and [`OperationQueue`](../foundation/operationqueue.md), leveraging their ability to handle thread safety and cancellation. Developers might consider a similar approach.

When prefetching is complete, the sample adds the cell’s data to the `AsyncFetcher`‘s cache, so it’s ready to use when the cell displays. The cell’s background color changes from white to red when data is available for that cell.

```swift
/**
 Configures the cell for display based on the model.
 
 - Parameters:
     - data: An optional `DisplayData` object to display.
 
 - Tag: Cell_Config
*/
func configure(with data: DisplayData?) {
    backgroundColor = data?.color
}
```

<a id="Populate-cells-for-display"></a>

### Populate cells for display

Before populating a cell, the `CustomDataSource` checks for any prefetched data that it can use. If none is available, the `CustomDataSource` makes a fetch request and the cell updates in the fetch request’s completion handler.

```swift
func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
    guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: Cell.reuseIdentifier, for: indexPath) as? Cell else {
        fatalError("Expected `\(Cell.self)` type for reuseIdentifier \(Cell.reuseIdentifier). Check the configuration in Main.storyboard.")
    }
    
    let model = models[indexPath.row]
    let identifier = model.identifier
    cell.representedIdentifier = identifier
    
    // Check if the `asyncFetcher` has already fetched data for the specified identifier.
    if let fetchedData = asyncFetcher.fetchedData(for: identifier) {
        // The system has fetched and cached the data; use it to configure the cell.
        cell.configure(with: fetchedData)
    } else {
        // There is no data available; clear the cell until the fetched data arrives.
        cell.configure(with: nil)

        // Ask the `asyncFetcher` to fetch data for the specified identifier.
        asyncFetcher.fetchAsync(identifier) { fetchedData in
            DispatchQueue.main.async {
                /*
                 The `asyncFetcher` has fetched data for the identifier. Before
                 updating the cell, check whether the collection view has recycled it to represent other data.
                 */
                guard cell.representedIdentifier == identifier else { return }
                
                // Configure the cell with the fetched image.
                cell.configure(with: fetchedData)
            }
        }
    }

    return cell
}
```

<a id="Cancel-unnecessary-fetches"></a>

### Cancel unnecessary fetches

The sample implements the [collectionView(\_:cancelPrefetchingForItemsAt:)](uicollectionviewdatasourceprefetching/collectionview%28__cancelprefetchingforitemsat_%29.md) delegate method to cancel any in-progress data fetches that are no longer required.

```swift
func collectionView(_ collectionView: UICollectionView, cancelPrefetchingForItemsAt indexPaths: [IndexPath]) {
    // Cancel any in-flight requests for data for the specified index paths.
    for indexPath in indexPaths {
        let model = models[indexPath.row]
        asyncFetcher.cancelFetch(model.identifier)
    }
}
```

## See Also

### Managing data prefetching

- [collectionView(\_:prefetchItemsAt:)](uicollectionviewdatasourceprefetching/collectionview%28__prefetchitemsat_%29.md): Tells your prefetch data source object to begin preparing data for the cells at the supplied index paths.
- [collectionView(\_:cancelPrefetchingForItemsAt:)](uicollectionviewdatasourceprefetching/collectionview%28__cancelprefetchingforitemsat_%29.md): Cancels a previously triggered data prefetch request.

# Prefetching collection view data (Objective-C)

**Framework:** UIKit  
**Kind:** Sample Code  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · Xcode 14.2+

Load data for collection view cells before they display.

<a id="Overview"></a>

## Overview

A collection view displays an ordered collection of cells in customizable layouts. The [UICollectionViewDataSourcePrefetching](uicollectionviewdatasourceprefetching.md) protocol helps provide a smoother user experience by prefetching the data necessary for upcoming collection view cells. When you enable prefetching, the collection view requests the data before it needs to display the cell. When it’s time to display the cell, the data is already locally cached.

The image below shows cells outside the bounds of the collection view that have been prefetched:

![An image that shows a collection view implementation. The collection view has a white background, and two columns of cells that each have a red background. A callout that says Displayed UICollectionView highlights the first three rows of cells. Below that, another callout that says Prefetched collection view cells highlights the last full row of cells and a partial row of cells.](https://developer.apple.com/images/com.apple.uikit/prefetching-screenshot.png)

> **Note**

> The storyboard in this project contains a collection view controller with a collection view that has Clips To Bounds disabled. With this configuration, you can visualize the cells before they display.

<a id="Enable-prefetching"></a>

### Enable prefetching

The root view controller uses an instance of the `CustomDataSource` class to provide data to its [UICollectionView](uicollectionview.md) instance. The `CustomDataSource` class implements the `UICollectionViewDataSourcePrefetching` protocol to begin fetching the data required to populate cells.

```swift
class CustomDataSource: NSObject, UICollectionViewDataSource, UICollectionViewDataSourcePrefetching {
```

In addition to assigning the `CustomDataSource` instance to the collection view’s [dataSource](uicollectionview/datasource.md) property, the sample code project also assigns it to the [prefetchDataSource](uicollectionview/prefetchdatasource.md) property.

```swift
// Set the collection view's data source.
collectionView.dataSource = dataSource

// Set the collection view's prefetching data source.
collectionView.prefetchDataSource = dataSource
```

<a id="Load-data-asynchronously"></a>

### Load data asynchronously

Prefetching data is a tool to use when loading data is a slow or expensive process — for example, when fetching data over the network. In these circumstances, it’s best to perform data loading asynchronously. In this sample, the `AsyncFetcher` class fetches data asynchronously, simulating a network request.

First, the sample implements the [UICollectionViewDataSourcePrefetching](uicollectionviewdatasourceprefetching.md) prefetch method, invoking the appropriate method on the asynchronous fetcher.

```swift
func collectionView(_ collectionView: UICollectionView, prefetchItemsAt indexPaths: [IndexPath]) {
    // Begin asynchronously fetching data for the requested index paths.
    for indexPath in indexPaths {
        let model = models[indexPath.row]
        asyncFetcher.fetchAsync(model.identifier)
    }
}
```

> **Note**

> Developers can create their own version of `AsyncFetcher` to fit their requirements. The implementation in this sample makes heavy use of [`Operation`](../foundation/operation.md) and [`OperationQueue`](../foundation/operationqueue.md), leveraging their ability to handle thread safety and cancellation. Developers might consider a similar approach.

When prefetching is complete, the sample adds the cell’s data to the `AsyncFetcher`‘s cache, so it’s ready to use when the cell displays. The cell’s background color changes from white to red when data is available for that cell.

```swift
/**
 Configures the cell for display based on the model.
 
 - Parameters:
     - data: An optional `DisplayData` object to display.
 
 - Tag: Cell_Config
*/
func configure(with data: DisplayData?) {
    backgroundColor = data?.color
}
```

<a id="Populate-cells-for-display"></a>

### Populate cells for display

Before populating a cell, the `CustomDataSource` checks for any prefetched data that it can use. If none is available, the `CustomDataSource` makes a fetch request and the cell updates in the fetch request’s completion handler.

```swift
func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
    guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: Cell.reuseIdentifier, for: indexPath) as? Cell else {
        fatalError("Expected `\(Cell.self)` type for reuseIdentifier \(Cell.reuseIdentifier). Check the configuration in Main.storyboard.")
    }
    
    let model = models[indexPath.row]
    let identifier = model.identifier
    cell.representedIdentifier = identifier
    
    // Check if the `asyncFetcher` has already fetched data for the specified identifier.
    if let fetchedData = asyncFetcher.fetchedData(for: identifier) {
        // The system has fetched and cached the data; use it to configure the cell.
        cell.configure(with: fetchedData)
    } else {
        // There is no data available; clear the cell until the fetched data arrives.
        cell.configure(with: nil)

        // Ask the `asyncFetcher` to fetch data for the specified identifier.
        asyncFetcher.fetchAsync(identifier) { fetchedData in
            DispatchQueue.main.async {
                /*
                 The `asyncFetcher` has fetched data for the identifier. Before
                 updating the cell, check whether the collection view has recycled it to represent other data.
                 */
                guard cell.representedIdentifier == identifier else { return }
                
                // Configure the cell with the fetched image.
                cell.configure(with: fetchedData)
            }
        }
    }

    return cell
}
```

<a id="Cancel-unnecessary-fetches"></a>

### Cancel unnecessary fetches

The sample implements the [collectionView:cancelPrefetchingForItemsAtIndexPaths:](uicollectionviewdatasourceprefetching/collectionview%28__cancelprefetchingforitemsat_%29.md) delegate method to cancel any in-progress data fetches that are no longer required.

```swift
func collectionView(_ collectionView: UICollectionView, cancelPrefetchingForItemsAt indexPaths: [IndexPath]) {
    // Cancel any in-flight requests for data for the specified index paths.
    for indexPath in indexPaths {
        let model = models[indexPath.row]
        asyncFetcher.cancelFetch(model.identifier)
    }
}
```

## See Also

### Managing data prefetching

- [collectionView:prefetchItemsAtIndexPaths:](uicollectionviewdatasourceprefetching/collectionview%28__prefetchitemsat_%29.md): Tells your prefetch data source object to begin preparing data for the cells at the supplied index paths.
- [collectionView:cancelPrefetchingForItemsAtIndexPaths:](uicollectionviewdatasourceprefetching/collectionview%28__cancelprefetchingforitemsat_%29.md): Cancels a previously triggered data prefetch request.
