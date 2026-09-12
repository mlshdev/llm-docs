> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenedelegate/scene(_:willcontinueuseractivitywithtype:)](https://developer.apple.com/documentation/uikit/uiscenedelegate/scene(_:willcontinueuseractivitywithtype:))

# scene(\_:willContinueUserActivityWithType:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Tells the delegate that it’s about to receive Handoff-related data.

## Declaration

```swift
optional func scene(_ scene: UIScene, willContinueUserActivityWithType userActivityType: String)
```

## Parameters

- `scene`: The scene handling the activity.
- `userActivityType`: The type of activity to continue.

<a id="Discussion"></a>

## Discussion

Use this method to prepare to handle an activity with the specified type. After this method returns, UIKit provides feedback to the user that your scene is handling the activity.

## See Also

### Continuing user activities

- [scene(\_:continue:)](scene%28__continue_%29.md): Tells the delegate to handle the specified Handoff-related activity.
- [scene(\_:didFailToContinueUserActivityWithType:error:)](scene%28__didfailtocontinueuseractivitywithtype_error_%29.md): Tells the delegate that the activity couldn’t be continued.

# scene:willContinueUserActivityWithType: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Tells the delegate that it’s about to receive Handoff-related data.

## Declaration

```objectivec
- (void) scene:(UIScene *) scene willContinueUserActivityWithType:(NSString *) userActivityType;
```

## Parameters

- `scene`: The scene handling the activity.
- `userActivityType`: The type of activity to continue.

<a id="Discussion"></a>

## Discussion

Use this method to prepare to handle an activity with the specified type. After this method returns, UIKit provides feedback to the user that your scene is handling the activity.

## See Also

### Continuing user activities

- [scene:continueUserActivity:](scene%28__continue_%29.md): Tells the delegate to handle the specified Handoff-related activity.
- [scene:didFailToContinueUserActivityWithType:error:](scene%28__didfailtocontinueuseractivitywithtype_error_%29.md): Tells the delegate that the activity couldn’t be continued.
