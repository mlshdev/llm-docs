> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchedresultscontrollerdelegate/controller(_:didchange:atsectionindex:for:)](https://developer.apple.com/documentation/coredata/nsfetchedresultscontrollerdelegate/controller(_:didchange:atsectionindex:for:))

# controller(\_:didChange:atSectionIndex:for:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Notifies the receiver of the addition or removal of a section.

## Declaration

```swift
optional func controller(_ controller: NSFetchedResultsController<any NSFetchRequestResult>, didChange sectionInfo: any NSFetchedResultsSectionInfo, atSectionIndex sectionIndex: Int, for type: NSFetchedResultsChangeType)
```

## Parameters

- `controller`: The fetched results controller that sent the message.
- `sectionInfo`: The section that changed.
- `sectionIndex`: The index of the changed section.
- `type`: The type of change (insert or delete). Valid values are [NSFetchedResultsChangeType.insert](../nsfetchedresultschangetype/insert.md) and [NSFetchedResultsChangeType.delete](../nsfetchedresultschangetype/delete.md).

<a id="Discussion"></a>

## Discussion

The fetched results controller reports changes to its section before changes to the fetched result objects.

<a id="Special-Considerations"></a>

### Special Considerations

This method may be invoked many times during an update event (for example, if you are importing data on a background thread and adding them to the context in a batch). You should consider carefully whether you want to update the table view on receipt of each message.

## See Also

### Responding to Changes

- [controller(\_:didChangeContentWith:)](controller%28__didchangecontentwith_%29-4kezq.md): Notifies the receiver about changes to the content in the fetched results controller, by using a diffable data source snapshot.
- [controller(\_:didChangeContentWith:)](controller%28__didchangecontentwith_%29-5ullb.md): Notifies the receiver about changes to the content in the fetched results controller, by using a collection difference.
- [controllerWillChangeContent(\_:)](controllerwillchangecontent%28__%29.md): Notifies the receiver that the fetched results controller is about to start processing of one or more changes due to an add, remove, move, or update.
- [controller(\_:didChange:at:for:newIndexPath:)](controller%28__didchange_at_for_newindexpath_%29.md): Notifies the receiver that a fetched object has been changed due to an add, remove, move, or update.
- [controllerDidChangeContent(\_:)](controllerdidchangecontent%28__%29.md): Notifies the receiver that the fetched results controller has completed processing of one or more changes due to an add, remove, move, or update.

# controller:didChangeSection:atIndex:forChangeType: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Notifies the receiver of the addition or removal of a section.

## Declaration

```objectivec
- (void) controller:(NSFetchedResultsController *) controller didChangeSection:(id<NSFetchedResultsSectionInfo>) sectionInfo atIndex:(NSUInteger) sectionIndex forChangeType:(NSFetchedResultsChangeType) type;
```

## Parameters

- `controller`: The fetched results controller that sent the message.
- `sectionInfo`: The section that changed.
- `sectionIndex`: The index of the changed section.
- `type`: The type of change (insert or delete). Valid values are [NSFetchedResultsChangeInsert](../nsfetchedresultschangetype/insert.md) and [NSFetchedResultsChangeDelete](../nsfetchedresultschangetype/delete.md).

<a id="Discussion"></a>

## Discussion

The fetched results controller reports changes to its section before changes to the fetched result objects.

<a id="Special-Considerations"></a>

### Special Considerations

This method may be invoked many times during an update event (for example, if you are importing data on a background thread and adding them to the context in a batch). You should consider carefully whether you want to update the table view on receipt of each message.

## See Also

### Responding to Changes

- [controller:didChangeContentWithSnapshot:](controller%28__didchangecontentwith_%29-4kezq.md): Notifies the receiver about changes to the content in the fetched results controller, by using a diffable data source snapshot.
- [controller:didChangeContentWithDifference:](controller%28__didchangecontentwith_%29-5ullb.md): Notifies the receiver about changes to the content in the fetched results controller, by using a collection difference.
- [controllerWillChangeContent:](controllerwillchangecontent%28__%29.md): Notifies the receiver that the fetched results controller is about to start processing of one or more changes due to an add, remove, move, or update.
- [controller:didChangeObject:atIndexPath:forChangeType:newIndexPath:](controller%28__didchange_at_for_newindexpath_%29.md): Notifies the receiver that a fetched object has been changed due to an add, remove, move, or update.
- [controllerDidChangeContent:](controllerdidchangecontent%28__%29.md): Notifies the receiver that the fetched results controller has completed processing of one or more changes due to an add, remove, move, or update.
