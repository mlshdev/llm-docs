> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nsfetchedresultscontrollerdelegate/controller(_:sectionindextitleforsectionname:)

# controller(\_:sectionIndexTitleForSectionName:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the name for a given section.

## Declaration

```swift
optional func controller(_ controller: NSFetchedResultsController<any NSFetchRequestResult>, sectionIndexTitleForSectionName sectionName: String) -> String?
```

## Parameters

- `controller`: The fetched results controller that sent the message.
- `sectionName`: The default name of the section.

<a id="return-value"></a>

## Return Value

The string to use as the name for the specified section.

<a id="Discussion"></a>

## Discussion

This method does not enable change tracking. It is only needed if a section index is used.

If the delegate doesn’t implement this method, the default implementation returns the capitalized first letter of the section name (see [sectionIndexTitle(forSectionName:)](../nsfetchedresultscontroller/sectionindextitle%28forsectionname_%29.md) in `NSFetchedResultsController`).

# controller:sectionIndexTitleForSectionName: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the name for a given section.

## Declaration

```objectivec
- (NSString *) controller:(NSFetchedResultsController *) controller sectionIndexTitleForSectionName:(NSString *) sectionName;
```

## Parameters

- `controller`: The fetched results controller that sent the message.
- `sectionName`: The default name of the section.

<a id="return-value"></a>

## Return Value

The string to use as the name for the specified section.

<a id="Discussion"></a>

## Discussion

This method does not enable change tracking. It is only needed if a section index is used.

If the delegate doesn’t implement this method, the default implementation returns the capitalized first letter of the section name (see [sectionIndexTitleForSectionName:](../nsfetchedresultscontroller/sectionindextitle%28forsectionname_%29.md) in `NSFetchedResultsController`).
