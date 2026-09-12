> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/refreshcontroller](https://developer.apple.com/documentation/appkit/nsscrollview/refreshcontroller)

# refreshController (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The refresh controller associated with this scroll view.

## Declaration

```swift
var refreshController: NSRefreshController? { get set }
```

<a id="discussion"></a>

## Discussion

Setting this property adds the refresh controller to the scroll view, enabling pull-to-refresh functionality. Set to nil to remove it.

# refreshController (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The refresh controller associated with this scroll view.

## Declaration

```objectivec
@property (strong, nullable) NSRefreshController * refreshController;
```

<a id="discussion"></a>

## Discussion

Setting this property adds the refresh controller to the scroll view, enabling pull-to-refresh functionality. Set to nil to remove it.
