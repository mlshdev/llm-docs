> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityitemsource/activityviewcontroller(_:thumbnailimageforactivitytype:suggestedsize:)](https://developer.apple.com/documentation/uikit/uiactivityitemsource/activityviewcontroller(_:thumbnailimageforactivitytype:suggestedsize:))

# activityViewController(\_:thumbnailImageForActivityType:suggestedSize:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

For activities that support a preview image, returns a thumbnail preview image for the item.

## Declaration

```swift
optional func activityViewController(_ activityViewController: UIActivityViewController, thumbnailImageForActivityType activityType: UIActivity.ActivityType?, suggestedSize size: CGSize) -> UIImage?
```

## Parameters

- `activityViewController`: The activity view controller object requesting information about the data item.
- `activityType`: The selected activity type.
- `size`: The suggested size for the thumbnail image, in points. You should provide an image using the appropriate [scale](../uiscreen/scale.md) for the screen. Images provided at the suggested size will result in the best experience.

<a id="return-value"></a>

## Return Value

The image to use as a preview for the item.

## See Also

### Providing information about the data items

- [activityViewController(\_:subjectForActivityType:)](activityviewcontroller%28__subjectforactivitytype_%29.md): For activities that support a subject field, returns the subject for the item.
- [activityViewController(\_:dataTypeIdentifierForActivityType:)](activityviewcontroller%28__datatypeidentifierforactivitytype_%29.md): For items that are provided as data, returns the UTI for the item.

# activityViewController:thumbnailImageForActivityType:suggestedSize: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

For activities that support a preview image, returns a thumbnail preview image for the item.

## Declaration

```objectivec
- (UIImage *) activityViewController:(UIActivityViewController *) activityViewController thumbnailImageForActivityType:(UIActivityType) activityType suggestedSize:(CGSize) size;
```

## Parameters

- `activityViewController`: The activity view controller object requesting information about the data item.
- `activityType`: The selected activity type.
- `size`: The suggested size for the thumbnail image, in points. You should provide an image using the appropriate [scale](../uiscreen/scale.md) for the screen. Images provided at the suggested size will result in the best experience.

<a id="return-value"></a>

## Return Value

The image to use as a preview for the item.

## See Also

### Providing information about the data items

- [activityViewController:subjectForActivityType:](activityviewcontroller%28__subjectforactivitytype_%29.md): For activities that support a subject field, returns the subject for the item.
- [activityViewController:dataTypeIdentifierForActivityType:](activityviewcontroller%28__datatypeidentifierforactivitytype_%29.md): For items that are provided as data, returns the UTI for the item.
