> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchedresultscontrollerdelegate/controller(_:didchangecontentwith:)-5ullb](https://developer.apple.com/documentation/coredata/nsfetchedresultscontrollerdelegate/controller(_:didchangecontentwith:)-5ullb)

# controller(\_:didChangeContentWith:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Notifies the receiver about changes to the content in the fetched results controller, by using a collection difference.

## Declaration

```swift
optional func controller(_ controller: NSFetchedResultsController<any NSFetchRequestResult>, didChangeContentWith diff: CollectionDifference<NSManagedObjectID>)
```

<a id="Discussion"></a>

## Discussion

This method is only invoked if the controller’s [sectionNameKeyPath](../nsfetchedresultscontroller/sectionnamekeypath.md) property is `nil` and [controller(\_:didChangeContentWith:)](controller%28__didchangecontentwith_%29-4kezq.md) is not implemented.

If this method is implemented, no other delegate methods are invoked.

## See Also

### Responding to Changes

- [controller(\_:didChangeContentWith:)](controller%28__didchangecontentwith_%29-4kezq.md): Notifies the receiver about changes to the content in the fetched results controller, by using a diffable data source snapshot.
- [controllerWillChangeContent(\_:)](controllerwillchangecontent%28__%29.md): Notifies the receiver that the fetched results controller is about to start processing of one or more changes due to an add, remove, move, or update.
- [controller(\_:didChange:at:for:newIndexPath:)](controller%28__didchange_at_for_newindexpath_%29.md): Notifies the receiver that a fetched object has been changed due to an add, remove, move, or update.
- [controller(\_:didChange:atSectionIndex:for:)](controller%28__didchange_atsectionindex_for_%29.md): Notifies the receiver of the addition or removal of a section.
- [controllerDidChangeContent(\_:)](controllerdidchangecontent%28__%29.md): Notifies the receiver that the fetched results controller has completed processing of one or more changes due to an add, remove, move, or update.

# controller:didChangeContentWithDifference: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Notifies the receiver about changes to the content in the fetched results controller, by using a collection difference.

## Declaration

```objectivec
- (void) controller:(NSFetchedResultsController *) controller didChangeContentWithDifference:(NSOrderedCollectionDifference<NSManagedObjectID *> *) diff;
```

<a id="Discussion"></a>

## Discussion

This method is only invoked if the controller’s [sectionNameKeyPath](../nsfetchedresultscontroller/sectionnamekeypath.md) property is `nil` and [controller:didChangeContentWithSnapshot:](controller%28__didchangecontentwith_%29-4kezq.md) is not implemented.

If this method is implemented, no other delegate methods are invoked.

## See Also

### Responding to Changes

- [controller:didChangeContentWithSnapshot:](controller%28__didchangecontentwith_%29-4kezq.md): Notifies the receiver about changes to the content in the fetched results controller, by using a diffable data source snapshot.
- [controllerWillChangeContent:](controllerwillchangecontent%28__%29.md): Notifies the receiver that the fetched results controller is about to start processing of one or more changes due to an add, remove, move, or update.
- [controller:didChangeObject:atIndexPath:forChangeType:newIndexPath:](controller%28__didchange_at_for_newindexpath_%29.md): Notifies the receiver that a fetched object has been changed due to an add, remove, move, or update.
- [controller:didChangeSection:atIndex:forChangeType:](controller%28__didchange_atsectionindex_for_%29.md): Notifies the receiver of the addition or removal of a section.
- [controllerDidChangeContent:](controllerdidchangecontent%28__%29.md): Notifies the receiver that the fetched results controller has completed processing of one or more changes due to an add, remove, move, or update.
