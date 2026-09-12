> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicloudsharingcontroller/activityitemsource()](https://developer.apple.com/documentation/uikit/uicloudsharingcontroller/activityitemsource())

# activityItemSource() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The activity item object that can be used by an activity view controller.

## Declaration

```swift
func activityItemSource() -> any UIActivityItemSource
```

<a id="Discussion"></a>

## Discussion

Use [activityItemSource()](activityitemsource%28%29.md), an object that conforms to the [UIActivityItemSource](../uiactivityitemsource.md) protocol, when you want to include the CloudKit Sharing action as one of the action items in an instance of [UIActivityViewController](../uiactivityviewcontroller.md).

Including [activityItemSource()](activityitemsource%28%29.md) in an activity view controller can be useful when your app’s user interface doesn’t have space to display a button dedicated to CloudKit Sharing. For instance, say your app already has an action button that lets the user share data with social media sites or other apps through an activity view controller. If you include [activityItemSource()](activityitemsource%28%29.md) as one of the activity view controller’s action items, the controller includes the action as a user-selectable option, thus eliminating the need for a second button in your app’s user interface.

**Swift**

```swift
let items = [cloudSharingController.activityItemSource()]
let activityController = UIActivityViewController(activityItems: items, applicationActivities: [])
present(activityController, animated: true, completion: {})
```

**Objective-C**

```objc
NSArray *items = @[[cloudSharingController activityItemSource]];
UIActivityViewController *activityController = [[UIActivityViewController alloc] initWithActivityItems:items applicationActivities:nil];
[self presentViewController:activityController animated:YES completion:^{}];
```

# activityItemSource (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The activity item object that can be used by an activity view controller.

## Declaration

```objectivec
- (id<UIActivityItemSource>) activityItemSource;
```

<a id="Discussion"></a>

## Discussion

Use [activityItemSource](activityitemsource%28%29.md), an object that conforms to the [UIActivityItemSource](../uiactivityitemsource.md) protocol, when you want to include the CloudKit Sharing action as one of the action items in an instance of [UIActivityViewController](../uiactivityviewcontroller.md).

Including [activityItemSource](activityitemsource%28%29.md) in an activity view controller can be useful when your app’s user interface doesn’t have space to display a button dedicated to CloudKit Sharing. For instance, say your app already has an action button that lets the user share data with social media sites or other apps through an activity view controller. If you include [activityItemSource](activityitemsource%28%29.md) as one of the activity view controller’s action items, the controller includes the action as a user-selectable option, thus eliminating the need for a second button in your app’s user interface.

**Swift**

```swift
let items = [cloudSharingController.activityItemSource()]
let activityController = UIActivityViewController(activityItems: items, applicationActivities: [])
present(activityController, animated: true, completion: {})
```

**Objective-C**

```objc
NSArray *items = @[[cloudSharingController activityItemSource]];
UIActivityViewController *activityController = [[UIActivityViewController alloc] initWithActivityItems:items applicationActivities:nil];
[self presentViewController:activityController animated:YES completion:^{}];
```
