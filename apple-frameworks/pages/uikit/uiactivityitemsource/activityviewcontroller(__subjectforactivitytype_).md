> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityitemsource/activityviewcontroller(_:subjectforactivitytype:)](https://developer.apple.com/documentation/uikit/uiactivityitemsource/activityviewcontroller(_:subjectforactivitytype:))

# activityViewController(\_:subjectForActivityType:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

For activities that support a subject field, returns the subject for the item.

## Declaration

```swift
optional func activityViewController(_ activityViewController: UIActivityViewController, subjectForActivityType activityType: UIActivity.ActivityType?) -> String
```

## Parameters

- `activityViewController`: The activity view controller object requesting information about the data item.
- `activityType`: The selected activity type; may be `nil`.

<a id="return-value"></a>

## Return Value

A string to use as the contents of the subject field.

<a id="Discussion"></a>

## Discussion

When posting an item the service may provide for a separate subject field and data field, such as an email message. Implement this method if you wish to provide a subject field for services that support one.

## See Also

### Providing information about the data items

- [activityViewController(\_:dataTypeIdentifierForActivityType:)](activityviewcontroller%28__datatypeidentifierforactivitytype_%29.md): For items that are provided as data, returns the UTI for the item.
- [activityViewController(\_:thumbnailImageForActivityType:suggestedSize:)](activityviewcontroller%28__thumbnailimageforactivitytype_suggestedsize_%29.md): For activities that support a preview image, returns a thumbnail preview image for the item.

# activityViewController:subjectForActivityType: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

For activities that support a subject field, returns the subject for the item.

## Declaration

```objectivec
- (NSString *) activityViewController:(UIActivityViewController *) activityViewController subjectForActivityType:(UIActivityType) activityType;
```

## Parameters

- `activityViewController`: The activity view controller object requesting information about the data item.
- `activityType`: The selected activity type; may be `nil`.

<a id="return-value"></a>

## Return Value

A string to use as the contents of the subject field.

<a id="Discussion"></a>

## Discussion

When posting an item the service may provide for a separate subject field and data field, such as an email message. Implement this method if you wish to provide a subject field for services that support one.

## See Also

### Providing information about the data items

- [activityViewController:dataTypeIdentifierForActivityType:](activityviewcontroller%28__datatypeidentifierforactivitytype_%29.md): For items that are provided as data, returns the UTI for the item.
- [activityViewController:thumbnailImageForActivityType:suggestedSize:](activityviewcontroller%28__thumbnailimageforactivitytype_suggestedsize_%29.md): For activities that support a preview image, returns a thumbnail preview image for the item.
