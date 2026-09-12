> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenedelegate/scene(_:continue:)](https://developer.apple.com/documentation/uikit/uiscenedelegate/scene(_:continue:))

# scene(\_:continue:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Tells the delegate to handle the specified Handoff-related activity.

## Declaration

```swift
optional func scene(_ scene: UIScene, continue userActivity: NSUserActivity)
```

## Parameters

- `scene`: The scene handling the activity.
- `userActivity`: The object containing the activity-related data. Use the information in this object to continue the user’s activity in your scene.

<a id="Discussion"></a>

## Discussion

Use this method to update the specified scene with the data from the provided activity object. UIKit calls this method on your app’s main thread only after it receives all of the data for an activity object, which might originate from a different device.

## See Also

### Continuing user activities

- [scene(\_:willContinueUserActivityWithType:)](scene%28__willcontinueuseractivitywithtype_%29.md): Tells the delegate that it’s about to receive Handoff-related data.
- [scene(\_:didFailToContinueUserActivityWithType:error:)](scene%28__didfailtocontinueuseractivitywithtype_error_%29.md): Tells the delegate that the activity couldn’t be continued.

# scene:continueUserActivity: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Tells the delegate to handle the specified Handoff-related activity.

## Declaration

```objectivec
- (void) scene:(UIScene *) scene continueUserActivity:(NSUserActivity *) userActivity;
```

## Parameters

- `scene`: The scene handling the activity.
- `userActivity`: The object containing the activity-related data. Use the information in this object to continue the user’s activity in your scene.

<a id="Discussion"></a>

## Discussion

Use this method to update the specified scene with the data from the provided activity object. UIKit calls this method on your app’s main thread only after it receives all of the data for an activity object, which might originate from a different device.

## See Also

### Continuing user activities

- [scene:willContinueUserActivityWithType:](scene%28__willcontinueuseractivitywithtype_%29.md): Tells the delegate that it’s about to receive Handoff-related data.
- [scene:didFailToContinueUserActivityWithType:error:](scene%28__didfailtocontinueuseractivitywithtype_error_%29.md): Tells the delegate that the activity couldn’t be continued.
