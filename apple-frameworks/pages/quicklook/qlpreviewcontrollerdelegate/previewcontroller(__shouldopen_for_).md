> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewcontrollerdelegate/previewcontroller(_:shouldopen:for:)](https://developer.apple.com/documentation/quicklook/qlpreviewcontrollerdelegate/previewcontroller(_:shouldopen:for:))

# previewController(\_:shouldOpen:for:) (Swift)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the preview controller is trying to open a URL.

## Declaration

```swift
optional func previewController(_ controller: QLPreviewController, shouldOpen url: URL, for item: any QLPreviewItem) -> Bool
```

## Parameters

- `controller`: The Quick Look preview controller that’s asking the delegate to handle a user tapping a URL.
- `url`: The URL, from the displayed preview, that the user taps.
- `item`: The item displaying in the preview.

<a id="return-value"></a>

## Return Value

A Boolean value indicating whether to open the URL in the `url` parameter.

<a id="Discussion"></a>

## Discussion

The system invokes this method when the user taps a URL link in a preview. If you return [true](https://developer.apple.com/documentation/swift/true), the Quick Look preview controller invokes the [openURL(\_:)](../../uikit/uiapplication/openurl%28__%29.md) method on the [UIApplication](../../uikit/uiapplication.md) object, sending it the value of the `url` parameter. If you return [false](https://developer.apple.com/documentation/swift/false), the system doesn’t invoke the [openURL(\_:)](../../uikit/uiapplication/openurl%28__%29.md) method.

If you don’t implement this method, it defaults to returning [true](https://developer.apple.com/documentation/swift/true).

> **Note**

>  The system doesn’t call this delegate method for Mac apps built with Mac Catalyst.

# previewController:shouldOpenURL:forPreviewItem: (Objective-C)

**Framework:** Quick Look  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Tells the delegate that the preview controller is trying to open a URL.

## Declaration

```objectivec
- (BOOL) previewController:(QLPreviewController *) controller shouldOpenURL:(NSURL *) url forPreviewItem:(id<QLPreviewItem>) item;
```

## Parameters

- `controller`: The Quick Look preview controller that’s asking the delegate to handle a user tapping a URL.
- `url`: The URL, from the displayed preview, that the user taps.
- `item`: The item displaying in the preview.

<a id="return-value"></a>

## Return Value

A Boolean value indicating whether to open the URL in the `url` parameter.

<a id="Discussion"></a>

## Discussion

The system invokes this method when the user taps a URL link in a preview. If you return [true](https://developer.apple.com/documentation/swift/true), the Quick Look preview controller invokes the [openURL:](../../uikit/uiapplication/openurl%28__%29.md) method on the [UIApplication](../../uikit/uiapplication.md) object, sending it the value of the `url` parameter. If you return [false](https://developer.apple.com/documentation/swift/false), the system doesn’t invoke the [openURL:](../../uikit/uiapplication/openurl%28__%29.md) method.

If you don’t implement this method, it defaults to returning [true](https://developer.apple.com/documentation/swift/true).

> **Note**

>  The system doesn’t call this delegate method for Mac apps built with Mac Catalyst.
