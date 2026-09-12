> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridestatus/additionalactionactivities](https://developer.apple.com/documentation/intents/inridestatus/additionalactionactivities)

# additionalActionActivities (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

Additional activities that the user may choose to perform while the ride request is active.

## Declaration

```swift
var additionalActionActivities: [NSUserActivity]? { get set }
```

<a id="Discussion"></a>

## Discussion

If there are actions related to the ride that the user can take in your app, create user activity objects for each one and assign them to this property. For example, you might include actions to share the estimated arrival time with another user, split the fare with someone, or pay for the ride immediately. When you specify one or more actions, Maps displays buttons for each action. (Siri does not use this property). The [title](../../foundation/nsuseractivity/title.md) property of the corresponding [NSUserActivity](../../foundation/nsuseractivity.md) object provides the title of each button. If the user selects an action, Maps launches your app and passes the selected user activity object to it for handling.

## See Also

### Providing User Activity Objects

- [userActivityForCancelingInApplication](useractivityforcancelinginapplication.md): A user activity object for canceling the ride request.

# additionalActionActivities (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

Additional activities that the user may choose to perform while the ride request is active.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSArray<NSUserActivity *> * additionalActionActivities;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSArray<NSUserActivity *> * additionalActionActivities;
```

<a id="Discussion"></a>

## Discussion

If there are actions related to the ride that the user can take in your app, create user activity objects for each one and assign them to this property. For example, you might include actions to share the estimated arrival time with another user, split the fare with someone, or pay for the ride immediately. When you specify one or more actions, Maps displays buttons for each action. (Siri does not use this property). The [title](../../foundation/nsuseractivity/title.md) property of the corresponding [NSUserActivity](../../foundation/nsuseractivity.md) object provides the title of each button. If the user selects an action, Maps launches your app and passes the selected user activity object to it for handling.

## See Also

### Providing User Activity Objects

- [userActivityForCancelingInApplication](useractivityforcancelinginapplication.md): A user activity object for canceling the ride request.
