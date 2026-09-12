> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemmetadatacollectorpushdelegate/metadatacollector(_:didcollect:indexesofnewgroups:indexesofmodifiedgroups:)](https://developer.apple.com/documentation/avfoundation/avplayeritemmetadatacollectorpushdelegate/metadatacollector(_:didcollect:indexesofnewgroups:indexesofmodifiedgroups:))

# metadataCollector(\_:didCollect:indexesOfNewGroups:indexesOfModifiedGroups:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.3+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.3+

Tells the delegate the collected metadata group information has changed and needs to be updated.

## Declaration

```swift
func metadataCollector(_ metadataCollector: AVPlayerItemMetadataCollector, didCollect metadataGroups: sending [AVDateRangeMetadataGroup], indexesOfNewGroups: IndexSet, indexesOfModifiedGroups: IndexSet)
```

## Parameters

- `metadataCollector`: The [AVPlayerItemMetadataCollector](../avplayeritemmetadatacollector.md) on which this delegate is set.
- `metadataGroups`: The complete array of all metadata groups meeting the criteria of the output.
- `indexesOfNewGroups`: The indexes of the `metadataGroups` added since the last delegate invocation of this method.
- `indexesOfModifiedGroups`: The indexes of the `metadataGroups` modified since the last delegate invocation of this method.

<a id="Discussion"></a>

## Discussion

This method is called when additions or modifications are made to the array of collected metadata groups. The initial invocation will have `indexesOfNewGroup` referring to every index in `metadataGroups`. Subsequent invocations may not contain all previously collected metadata groups if they no longer refer to a region in the player item’s [seekableTimeRanges](../avplayeritem/seekabletimeranges.md).

# metadataCollector:didCollectDateRangeMetadataGroups:indexesOfNewGroups:indexesOfModifiedGroups: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tells the delegate the collected metadata group information has changed and needs to be updated.

## Declaration

```objectivec
- (void) metadataCollector:(AVPlayerItemMetadataCollector *) metadataCollector didCollectDateRangeMetadataGroups:(NSArray<AVDateRangeMetadataGroup *> *) metadataGroups indexesOfNewGroups:(NSIndexSet *) indexesOfNewGroups indexesOfModifiedGroups:(NSIndexSet *) indexesOfModifiedGroups;
```

## Parameters

- `metadataCollector`: The [AVPlayerItemMetadataCollector](../avplayeritemmetadatacollector.md) on which this delegate is set.
- `metadataGroups`: The complete array of all metadata groups meeting the criteria of the output.
- `indexesOfNewGroups`: The indexes of the `metadataGroups` added since the last delegate invocation of this method.
- `indexesOfModifiedGroups`: The indexes of the `metadataGroups` modified since the last delegate invocation of this method.

<a id="Discussion"></a>

## Discussion

This method is called when additions or modifications are made to the array of collected metadata groups. The initial invocation will have `indexesOfNewGroup` referring to every index in `metadataGroups`. Subsequent invocations may not contain all previously collected metadata groups if they no longer refer to a region in the player item’s [seekableTimeRanges](../avplayeritem/seekabletimeranges.md).
