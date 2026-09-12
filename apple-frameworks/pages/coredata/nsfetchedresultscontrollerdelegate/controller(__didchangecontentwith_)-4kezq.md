> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchedresultscontrollerdelegate/controller(_:didchangecontentwith:)-4kezq](https://developer.apple.com/documentation/coredata/nsfetchedresultscontrollerdelegate/controller(_:didchangecontentwith:)-4kezq)

# controller(\_:didChangeContentWith:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Notifies the receiver about changes to the content in the fetched results controller, by using a diffable data source snapshot.

## Declaration

```swift
optional func controller(_ controller: NSFetchedResultsController<any NSFetchRequestResult>, didChangeContentWith snapshot: NSDiffableDataSourceSnapshot)
```

<a id="Discussion"></a>

## Discussion

To apply the changes, call [applySnapshot(\_:animatingDifferences:)](../../uikit/uitableviewdiffabledatasourcereference/applysnapshot%28__animatingdifferences_%29.md) on the collection or table view’s data source.

If this method is implemented, no other delegate methods are invoked.

## See Also

### Responding to Changes

- [controller(\_:didChangeContentWith:)](controller%28__didchangecontentwith_%29-5ullb.md): Notifies the receiver about changes to the content in the fetched results controller, by using a collection difference.
- [controllerWillChangeContent(\_:)](controllerwillchangecontent%28__%29.md): Notifies the receiver that the fetched results controller is about to start processing of one or more changes due to an add, remove, move, or update.
- [controller(\_:didChange:at:for:newIndexPath:)](controller%28__didchange_at_for_newindexpath_%29.md): Notifies the receiver that a fetched object has been changed due to an add, remove, move, or update.
- [controller(\_:didChange:atSectionIndex:for:)](controller%28__didchange_atsectionindex_for_%29.md): Notifies the receiver of the addition or removal of a section.
- [controllerDidChangeContent(\_:)](controllerdidchangecontent%28__%29.md): Notifies the receiver that the fetched results controller has completed processing of one or more changes due to an add, remove, move, or update.

# controller:didChangeContentWithSnapshot: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Notifies the receiver about changes to the content in the fetched results controller, by using a diffable data source snapshot.

## Declaration

```objectivec
- (void) controller:(NSFetchedResultsController *) controller didChangeContentWithSnapshot:(NSDiffableDataSourceSnapshot<NSString *,NSManagedObjectID *> *) snapshot;
```

<a id="Discussion"></a>

## Discussion

To apply the changes, call [applySnapshot:animatingDifferences:](../../uikit/uitableviewdiffabledatasourcereference/applysnapshot%28__animatingdifferences_%29.md) on the collection or table view’s data source.

If this method is implemented, no other delegate methods are invoked.

## See Also

### Responding to Changes

- [controller:didChangeContentWithDifference:](controller%28__didchangecontentwith_%29-5ullb.md): Notifies the receiver about changes to the content in the fetched results controller, by using a collection difference.
- [controllerWillChangeContent:](controllerwillchangecontent%28__%29.md): Notifies the receiver that the fetched results controller is about to start processing of one or more changes due to an add, remove, move, or update.
- [controller:didChangeObject:atIndexPath:forChangeType:newIndexPath:](controller%28__didchange_at_for_newindexpath_%29.md): Notifies the receiver that a fetched object has been changed due to an add, remove, move, or update.
- [controller:didChangeSection:atIndex:forChangeType:](controller%28__didchange_atsectionindex_for_%29.md): Notifies the receiver of the addition or removal of a section.
- [controllerDidChangeContent:](controllerdidchangecontent%28__%29.md): Notifies the receiver that the fetched results controller has completed processing of one or more changes due to an add, remove, move, or update.
