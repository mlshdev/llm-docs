> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdropcoordinator/proposal](https://developer.apple.com/documentation/uikit/uitableviewdropcoordinator/proposal)

# proposal (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The proposal for how to incorporate the dropped items.

## Declaration

```swift
var proposal: UITableViewDropProposal { get }
```

<a id="Discussion"></a>

## Discussion

If your drag delegate implements the [tableView(\_:dropSessionDidUpdate:withDestinationIndexPath:)](../uitableviewdropdelegate/tableview%28__dropsessiondidupdate_withdestinationindexpath_%29.md) method, this object contains the information that you provided when making your drop proposal for the given location.

## See Also

### Getting the session information

- [session](session.md): The drop session containing information about the transaction.

# proposal (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The proposal for how to incorporate the dropped items.

## Declaration

```objectivec
@property (nonatomic, readonly) UITableViewDropProposal * proposal;
```

<a id="Discussion"></a>

## Discussion

If your drag delegate implements the [tableView:dropSessionDidUpdate:withDestinationIndexPath:](../uitableviewdropdelegate/tableview%28__dropsessiondidupdate_withdestinationindexpath_%29.md) method, this object contains the information that you provided when making your drop proposal for the given location.

## See Also

### Getting the session information

- [session](session.md): The drop session containing information about the transaction.
