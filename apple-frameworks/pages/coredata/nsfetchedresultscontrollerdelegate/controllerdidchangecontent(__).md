> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchedresultscontrollerdelegate/controllerdidchangecontent(_:)](https://developer.apple.com/documentation/coredata/nsfetchedresultscontrollerdelegate/controllerdidchangecontent(_:))

# controllerDidChangeContent(\_:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Notifies the receiver that the fetched results controller has completed processing of one or more changes due to an add, remove, move, or update.

## Declaration

```swift
optional func controllerDidChangeContent(_ controller: NSFetchedResultsController<any NSFetchRequestResult>)
```

## Parameters

- `controller`: The fetched results controller that sent the message.

<a id="Discussion"></a>

## Discussion

This method is invoked after all invocations of [controller(\_:didChange:at:for:newIndexPath:)](controller%28__didchange_at_for_newindexpath_%29.md) and [controller(\_:didChange:atSectionIndex:for:)](controller%28__didchange_atsectionindex_for_%29.md) have been sent for a given change event (such as the controller receiving a [NSManagedObjectContextDidSave](../../foundation/nsnotification/name-swift.struct/nsmanagedobjectcontextdidsave.md) notification).

## See Also

### Responding to Changes

- [controller(\_:didChangeContentWith:)](controller%28__didchangecontentwith_%29-4kezq.md): Notifies the receiver about changes to the content in the fetched results controller, by using a diffable data source snapshot.
- [controller(\_:didChangeContentWith:)](controller%28__didchangecontentwith_%29-5ullb.md): Notifies the receiver about changes to the content in the fetched results controller, by using a collection difference.
- [controllerWillChangeContent(\_:)](controllerwillchangecontent%28__%29.md): Notifies the receiver that the fetched results controller is about to start processing of one or more changes due to an add, remove, move, or update.
- [controller(\_:didChange:at:for:newIndexPath:)](controller%28__didchange_at_for_newindexpath_%29.md): Notifies the receiver that a fetched object has been changed due to an add, remove, move, or update.
- [controller(\_:didChange:atSectionIndex:for:)](controller%28__didchange_atsectionindex_for_%29.md): Notifies the receiver of the addition or removal of a section.

# controllerDidChangeContent: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Notifies the receiver that the fetched results controller has completed processing of one or more changes due to an add, remove, move, or update.

## Declaration

```objectivec
- (void) controllerDidChangeContent:(NSFetchedResultsController *) controller;
```

## Parameters

- `controller`: The fetched results controller that sent the message.

<a id="Discussion"></a>

## Discussion

This method is invoked after all invocations of [controller:didChangeObject:atIndexPath:forChangeType:newIndexPath:](controller%28__didchange_at_for_newindexpath_%29.md) and [controller:didChangeSection:atIndex:forChangeType:](controller%28__didchange_atsectionindex_for_%29.md) have been sent for a given change event (such as the controller receiving a [NSManagedObjectContextDidSave](../../foundation/nsnotification/name-swift.struct/nsmanagedobjectcontextdidsave.md) notification).

## See Also

### Responding to Changes

- [controller:didChangeContentWithSnapshot:](controller%28__didchangecontentwith_%29-4kezq.md): Notifies the receiver about changes to the content in the fetched results controller, by using a diffable data source snapshot.
- [controller:didChangeContentWithDifference:](controller%28__didchangecontentwith_%29-5ullb.md): Notifies the receiver about changes to the content in the fetched results controller, by using a collection difference.
- [controllerWillChangeContent:](controllerwillchangecontent%28__%29.md): Notifies the receiver that the fetched results controller is about to start processing of one or more changes due to an add, remove, move, or update.
- [controller:didChangeObject:atIndexPath:forChangeType:newIndexPath:](controller%28__didchange_at_for_newindexpath_%29.md): Notifies the receiver that a fetched object has been changed due to an add, remove, move, or update.
- [controller:didChangeSection:atIndex:forChangeType:](controller%28__didchange_atsectionindex_for_%29.md): Notifies the receiver of the addition or removal of a section.
