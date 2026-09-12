> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/fetchrequest/configuration](https://developer.apple.com/documentation/swiftui/fetchrequest/configuration)

# FetchRequest.Configuration

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The request’s configurable properties.

## Declaration

```swift
@MainActor @preconcurrency struct Configuration
```

<a id="overview"></a>

## Overview

You initialize a [FetchRequest](../fetchrequest.md) with an optional predicate and sort descriptors, either explicitly or using a configured [NSFetchRequest](https://developer.apple.com/documentation/coredata/nsfetchrequest). Later, you can dynamically update the predicate and sort parameters using the request’s configuration structure.

You access or bind to a request’s configuration components through properties on the associated [FetchedResults](../fetchedresults.md) instance.

<a id="Configure-using-a-binding"></a>

### Configure using a binding

Get a [Binding](../binding.md) to a fetch request’s configuration structure by accessing the request’s [projectedValue](projectedvalue.md), which you do by using the dollar sign (`$`) prefix on the associated results property. For example, you can create a request for `Quake` entities — a managed object type that the [Loading and displaying a large data feed](../loading-and-displaying-a-large-data-feed.md) sample code project defines — that initially sorts the results by time:

```swift
@FetchRequest(sortDescriptors: [SortDescriptor(\.time, order: .reverse)])
private var quakes: FetchedResults<Quake>
```

Then you can bind the request’s sort descriptors, which you access through the `quakes` result, to those of a [Table](../table.md) instance:

```swift
Table(quakes, sortOrder: $quakes.sortDescriptors) {
    TableColumn("Place", value: \.place)
    TableColumn("Time", value: \.time) { quake in
        Text(quake.time, style: .time)
    }
}
```

A user who clicks on a table column header initiates the following sequence of events:

1. The table updates the sort descriptors through the binding.
2. The modified sort descriptors reconfigure the request.
3. The reconfigured request fetches new results.
4. SwiftUI redraws the table in response to new results.

<a id="Set-configuration-directly"></a>

### Set configuration directly

If you need to access the fetch request’s configuration elements directly, use the [nsPredicate](../fetchedresults/nspredicate.md) and [sortDescriptors](../fetchedresults/sortdescriptors.md) or [nsSortDescriptors](../fetchedresults/nssortdescriptors.md) properties of the [FetchedResults](../fetchedresults.md) instance. Continuing the example above, to enable the user to dynamically update the predicate, declare a [State](../state.md) property to hold a query string:

```swift
@State private var query = ""
```

Then add an [onChange(of:initial:\_:)](../view/onchange%28of_initial___%29.md) modifier to the [Table](../table.md) that sets a new predicate any time the query changes:

```swift
.onChange(of: query) { _, value in
    quakes.nsPredicate = query.isEmpty
        ? nil
        : NSPredicate(format: "place CONTAINS %@", value)
}
```

To give the user control over the string, add a [TextField](../textfield.md) in your user interface that’s bound to the `query` state:

```swift
TextField("Filter", text: $query)
```

When the user types into the text field, the predicate updates, the request fetches new results, and SwiftUI redraws the table.

## Topics

### Setting a predicate

- [nsPredicate](configuration/nspredicate.md): The request’s predicate.

### Setting sort descriptors

- [sortDescriptors](configuration/sortdescriptors.md): Conforms when `Result` inherits `NSManagedObject`. The request’s sort descriptors, accessed as value types.
- [nsSortDescriptors](configuration/nssortdescriptors.md): The request’s sort descriptors, accessed as reference types.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring a request dynamically

- [projectedValue](projectedvalue.md): A binding to the request’s mutable configuration properties.
