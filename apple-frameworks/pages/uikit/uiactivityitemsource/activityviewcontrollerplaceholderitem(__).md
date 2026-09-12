> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityitemsource/activityviewcontrollerplaceholderitem(_:)](https://developer.apple.com/documentation/uikit/uiactivityitemsource/activityviewcontrollerplaceholderitem(_:))

# activityViewControllerPlaceholderItem(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the placeholder object for the data.

## Declaration

```swift
func activityViewControllerPlaceholderItem(_ activityViewController: UIActivityViewController) -> Any
```

## Parameters

- `activityViewController`: The activity view controller object requesting the placeholder item.

<a id="return-value"></a>

## Return Value

An object to use as a placeholder for the actual data.

<a id="Discussion"></a>

## Discussion

This method returns an object that can be used as a placeholder for the real data. Placeholder objects don’t have to contain any real data but should be configured as closely as possible to the actual data object you intend to provide. In general the actual value should match in type but it’s possible to return a different type of data for [activityViewController(\_:itemForActivityType:)](activityviewcontroller%28__itemforactivitytype_%29.md). It should be one that the activity can handle otherwise you may get an activity with empty content. For example, the placeholder could be a [UIImage](../uiimage.md) object but the actual value could be an [NSData](../../foundation/nsdata.md) object with PDF information.

## See Also

### Getting the data items

- [activityViewController(\_:itemForActivityType:)](activityviewcontroller%28__itemforactivitytype_%29.md): Returns the data object to be acted upon.

# activityViewControllerPlaceholderItem: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the placeholder object for the data.

## Declaration

```objectivec
- (id) activityViewControllerPlaceholderItem:(UIActivityViewController *) activityViewController;
```

## Parameters

- `activityViewController`: The activity view controller object requesting the placeholder item.

<a id="return-value"></a>

## Return Value

An object to use as a placeholder for the actual data.

<a id="Discussion"></a>

## Discussion

This method returns an object that can be used as a placeholder for the real data. Placeholder objects don’t have to contain any real data but should be configured as closely as possible to the actual data object you intend to provide. In general the actual value should match in type but it’s possible to return a different type of data for [activityViewController:itemForActivityType:](activityviewcontroller%28__itemforactivitytype_%29.md). It should be one that the activity can handle otherwise you may get an activity with empty content. For example, the placeholder could be a [UIImage](../uiimage.md) object but the actual value could be an [NSData](../../foundation/nsdata.md) object with PDF information.

## See Also

### Getting the data items

- [activityViewController:itemForActivityType:](activityviewcontroller%28__itemforactivitytype_%29.md): Returns the data object to be acted upon.
