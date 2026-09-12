> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/contactprovider/contactitemchangeobserver](https://developer.apple.com/documentation/contactprovider/contactitemchangeobserver)

# ContactItemChangeObserver

**Framework:** ContactProvider  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+

A protocol that defines a system observer that receives a resumable enumeration of changed contact items.

## Declaration

```swift
protocol ContactItemChangeObserver
```

<a id="overview"></a>

## Overview

Your implementation of [enumerateChanges(startingAt:for:)](contactitemenumerator/enumeratechanges%28startingat_for_%29.md) receives an observer that conforms to this type. As you enumerate over your contacts, you provide them to the observer with the [didUpdate(\_:)](contactitemchangeobserver/didupdate%28__%29.md) and [didDelete(\_:)](contactitemchangeobserver/diddelete%28__%29.md) methods.

## Topics

### Providing change data

- [didUpdate(\_:)](contactitemchangeobserver/didupdate%28__%29.md): Provides an array of new and updated contact items to the observer.
- [ContactItem](contactitem.md): An item in the contact database.
- [didDelete(\_:)](contactitemchangeobserver/diddelete%28__%29.md): Provides an array of deleted contact item identifiers to the observer.
- [ContactItem.Identifier](contactitem/identifier.md): The app’s identifier for an item in the contact database.

### Ending enumeration

- [didFinishEnumeratingChanges(upTo:moreComing:)](contactitemchangeobserver/didfinishenumeratingchanges%28upto_morecoming_%29.md): Marks a sync anchor of changed contact items as completed.
- [ContactItemSyncAnchor](contactitemsyncanchor.md): A snapshot point into enumerating changed contact items.
- [didFinishEnumeratingChangesWithError(\_:)](contactitemchangeobserver/didfinishenumeratingchangeswitherror%28__%29.md): Finishes the change enumeration with an error, indicating failure, to the observer.

### Optimizing observer batching

- [suggestedBatchSize](contactitemchangeobserver/suggestedbatchsize.md): Retrieves the suggested number of changed contact items to include in a batch.

## See Also

### Receiving contacts

- [ContactItemContentObserver](contactitemcontentobserver.md): A protocol that defines a system observer that receives a resumable enumeration of all items.
