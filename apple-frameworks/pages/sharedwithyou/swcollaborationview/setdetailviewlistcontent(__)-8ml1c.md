> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swcollaborationview/setdetailviewlistcontent(_:)-8ml1c](https://developer.apple.com/documentation/sharedwithyou/swcollaborationview/setdetailviewlistcontent(_:)-8ml1c)

# setDetailViewListContent(\_:)

**Framework:** Shared with You  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS

Sets the detail view for the list content from view builder closures.

## Declaration

```swift
@MainActor @preconcurrency func setDetailViewListContent<ListContent>(@ViewBuilder _ detailViewListContent: () -> ListContent) where ListContent : View
```

## Parameters

- `detailViewListContent`: A `ListContent` view.

## See Also

### Setting view attributes

- [setContent(\_:)](setcontent%28__%29.md): Sets the content view.
- [setDetailViewListContent(\_:)](setdetailviewlistcontent%28__%29-88gy5.md): Sets the detail view for the list content.
- [setShowManageButton(\_:)](setshowmanagebutton%28__%29.md): A Boolean value the system uses to show or hide the default manage-participants button in the collaboration popover.
