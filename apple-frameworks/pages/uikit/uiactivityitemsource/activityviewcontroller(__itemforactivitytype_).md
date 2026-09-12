> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityitemsource/activityviewcontroller(_:itemforactivitytype:)](https://developer.apple.com/documentation/uikit/uiactivityitemsource/activityviewcontroller(_:itemforactivitytype:))

# activityViewController(\_:itemForActivityType:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the data object to be acted upon.

## Declaration

```swift
func activityViewController(_ activityViewController: UIActivityViewController, itemForActivityType activityType: UIActivity.ActivityType?) -> Any?
```

## Parameters

- `activityViewController`: The activity view controller object requesting the data item.
- `activityType`: The type of activity to be performed with the data object. You can use this string to decide how best to prepare the data object.

<a id="return-value"></a>

## Return Value

The final data object to be acted on. May be `nil` if multiple items were registered for a single activity type, so long as one of the items returns an actual value.

<a id="Discussion"></a>

## Discussion

This method returns the actual data object to be acted on by an activity object. Your implementation of this method should create or generate the data object and return it as quickly as possible.

## See Also

### Getting the data items

- [activityViewControllerPlaceholderItem(\_:)](activityviewcontrollerplaceholderitem%28__%29.md): Returns the placeholder object for the data.

# activityViewController:itemForActivityType: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the data object to be acted upon.

## Declaration

```objectivec
- (id) activityViewController:(UIActivityViewController *) activityViewController itemForActivityType:(UIActivityType) activityType;
```

## Parameters

- `activityViewController`: The activity view controller object requesting the data item.
- `activityType`: The type of activity to be performed with the data object. You can use this string to decide how best to prepare the data object.

<a id="return-value"></a>

## Return Value

The final data object to be acted on. May be `nil` if multiple items were registered for a single activity type, so long as one of the items returns an actual value.

<a id="Discussion"></a>

## Discussion

This method returns the actual data object to be acted on by an activity object. Your implementation of this method should create or generate the data object and return it as quickly as possible.

## See Also

### Getting the data items

- [activityViewControllerPlaceholderItem:](activityviewcontrollerplaceholderitem%28__%29.md): Returns the placeholder object for the data.
