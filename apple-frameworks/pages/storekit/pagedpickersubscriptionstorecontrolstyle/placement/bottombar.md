> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/pagedpickersubscriptionstorecontrolstyle/placement/bottombar](https://developer.apple.com/documentation/storekit/pagedpickersubscriptionstorecontrolstyle/placement/bottombar)

# bottomBar

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A placement that locates the paged picker in a bar near the bottom of the main scroll view in a subscription store view.

## Declaration

```swift
static var bottomBar: PagedPickerSubscriptionStoreControlStyle.Placement { get }
```

<a id="Discussion"></a>

## Discussion

The bottom bar conditonally applies a special visual treatment when it overlaps the main content of the subscription store view. The content within the bottom bar doesn’t scroll with the rest of the content in the main scroll view.

## See Also

### Getting a placement

- [automatic](automatic.md)
- [buttonsInBottomBar](buttonsinbottombar.md): A hybrid placement that positions subscription controls within the main scroll view, and places auxiliary buttons in the bottom bar.
- [scrollView](scrollview.md)
