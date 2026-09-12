> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextattachmentviewprovider/location](https://developer.apple.com/documentation/uikit/nstextattachmentviewprovider/location)

# location (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The location that indicates the start of the text attachment.

## Declaration

```swift
var location: any NSTextLocation { get }
```

<a id="Discussion"></a>

## Discussion

Specify the value of this property at initialization time using the [init(textAttachment:parentView:textLayoutManager:location:)](init%28textattachment_parentview_textlayoutmanager_location_%29.md) initializer.

## See Also

### Defining the contents

- [textAttachment](textattachment.md): The text attachment for this view.
- [textLayoutManager](textlayoutmanager.md): The text layout manager for this view.
- [tracksTextAttachmentViewBounds](trackstextattachmentviewbounds.md): A Boolean value that determines the text attachment’s bounds policy.
- [view](view.md): The text attachment’s view.

# location (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The location that indicates the start of the text attachment.

## Declaration

```objectivec
@property (strong, readonly) id<NSTextLocation> location;
```

<a id="Discussion"></a>

## Discussion

Specify the value of this property at initialization time using the [initWithTextAttachment:parentView:textLayoutManager:location:](init%28textattachment_parentview_textlayoutmanager_location_%29.md) initializer.

## See Also

### Defining the contents

- [textAttachment](textattachment.md): The text attachment for this view.
- [textLayoutManager](textlayoutmanager.md): The text layout manager for this view.
- [tracksTextAttachmentViewBounds](trackstextattachmentviewbounds.md): A Boolean value that determines the text attachment’s bounds policy.
- [view](view.md): The text attachment’s view.
