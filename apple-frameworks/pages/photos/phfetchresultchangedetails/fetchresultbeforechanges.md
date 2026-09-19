> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phfetchresultchangedetails/fetchresultbeforechanges

# fetchResultBeforeChanges (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The original fetch result, without recent changes.

## Declaration

```swift
var fetchResultBeforeChanges: PHFetchResult<ObjectType> { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value is the same object you passed to the [changeDetails(for:)](../phchange/changedetails%28for_%29-33a6n.md) method to request change details.

## See Also

### Getting the Changed Fetch Result

- [fetchResultAfterChanges](fetchresultafterchanges.md): The current fetch result, incorporating recent changes.

# fetchResultBeforeChanges (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The original fetch result, without recent changes.

## Declaration

```objectivec
@property (atomic, strong, readonly) PHFetchResult<PHObject *> * fetchResultBeforeChanges;
```

<a id="Discussion"></a>

## Discussion

This property’s value is the same object you passed to the [changeDetails(for:)](../phchange/changedetails%28for_%29-33a6n.md) method to request change details.

## See Also

### Getting the Changed Fetch Result

- [fetchResultAfterChanges](fetchresultafterchanges.md): The current fetch result, incorporating recent changes.
