> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swcollaborationview/setcontent(_:)](https://developer.apple.com/documentation/sharedwithyou/swcollaborationview/setcontent(_:))

# setContent(\_:) (Swift)

**Framework:** Shared with You  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Sets the content view.

## Declaration

```swift
func setContent(_ detailViewListContentView: UIView)
```

```swift
func setContent(_ detailViewListContentView: NSView)
```

## Parameters

- `detailViewListContentView`: The `NSView` for the detail view content.

## See Also

### Setting view attributes

- [setDetailViewListContent(\_:)](setdetailviewlistcontent%28__%29-88gy5.md): Sets the detail view for the list content.
- [setDetailViewListContent(\_:)](setdetailviewlistcontent%28__%29-8ml1c.md): Sets the detail view for the list content from view builder closures.
- [setShowManageButton(\_:)](setshowmanagebutton%28__%29.md): A Boolean value the system uses to show or hide the default manage-participants button in the collaboration popover.

# setContentView: (Objective-C)

**Framework:** Shared with You  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Sets the content view.

## Declaration

```objectivec
- (void) setContentView:(UIView *) detailViewListContentView;
```

```objectivec
- (void) setContentView:(NSView *) detailViewListContentView;
```

## Parameters

- `detailViewListContentView`: The `NSView` for the detail view content.

## See Also

### Setting view attributes

- [setShowManageButton:](setshowmanagebutton%28__%29.md): A Boolean value the system uses to show or hide the default manage-participants button in the collaboration popover.
