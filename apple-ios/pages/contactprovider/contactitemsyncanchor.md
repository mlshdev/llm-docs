> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/contactprovider/contactitemsyncanchor](https://developer.apple.com/documentation/contactprovider/contactitemsyncanchor)

# ContactItemSyncAnchor

**Framework:** ContactProvider  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+

A snapshot point into enumerating changed contact items.

## Declaration

```swift
struct ContactItemSyncAnchor
```

<a id="overview"></a>

## Overview

You can break an enumeration of changes into batches with multiple anchors to reduce the memory constraints on the system. During enumeration, you may update the `generationMarker` and `offset` to reflect progress enumerating the changes as they occurred, possibly across mutiple database generations and how many changes occurred within each database generation.

## Topics

### Creating a sync anchor

- [init(generationMarker:offset:)](contactitemsyncanchor/init%28generationmarker_offset_%29.md): Creates a sync anchor with the given generation marker and offset.

### Inspecting sync anchor properties

- [generationMarker](contactitemsyncanchor/generationmarker.md): A value specific to your data source identifying the database generation you’re enumerating for changes.
- [offset](contactitemsyncanchor/offset.md): An offset from the anchor’s generation marker.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Ending enumeration

- [didFinishEnumeratingChanges(upTo:moreComing:)](contactitemchangeobserver/didfinishenumeratingchanges%28upto_morecoming_%29.md): Marks a sync anchor of changed contact items as completed.
- [didFinishEnumeratingChangesWithError(\_:)](contactitemchangeobserver/didfinishenumeratingchangeswitherror%28__%29.md): Finishes the change enumeration with an error, indicating failure, to the observer.
