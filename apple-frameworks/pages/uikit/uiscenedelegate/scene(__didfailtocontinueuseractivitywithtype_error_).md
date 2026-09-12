> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenedelegate/scene(_:didfailtocontinueuseractivitywithtype:error:)](https://developer.apple.com/documentation/uikit/uiscenedelegate/scene(_:didfailtocontinueuseractivitywithtype:error:))

# scene(\_:didFailToContinueUserActivityWithType:error:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Tells the delegate that the activity couldn’t be continued.

## Declaration

```swift
optional func scene(_ scene: UIScene, didFailToContinueUserActivityWithType userActivityType: String, error: any Error)
```

## Parameters

- `scene`: The scene handling the activity.
- `userActivityType`: The type of the activity that failed.
- `error`: An error object indicating the reason for the failure.

<a id="Discussion"></a>

## Discussion

Use this method to let the user know that the specified activity couldn’t be completed. If you don’t implement this method, UIKit displays an error to the user with an appropriate message about the reason for the failure.

## See Also

### Continuing user activities

- [scene(\_:willContinueUserActivityWithType:)](scene%28__willcontinueuseractivitywithtype_%29.md): Tells the delegate that it’s about to receive Handoff-related data.
- [scene(\_:continue:)](scene%28__continue_%29.md): Tells the delegate to handle the specified Handoff-related activity.

# scene:didFailToContinueUserActivityWithType:error: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Tells the delegate that the activity couldn’t be continued.

## Declaration

```objectivec
- (void) scene:(UIScene *) scene didFailToContinueUserActivityWithType:(NSString *) userActivityType error:(NSError *) error;
```

## Parameters

- `scene`: The scene handling the activity.
- `userActivityType`: The type of the activity that failed.
- `error`: An error object indicating the reason for the failure.

<a id="Discussion"></a>

## Discussion

Use this method to let the user know that the specified activity couldn’t be completed. If you don’t implement this method, UIKit displays an error to the user with an appropriate message about the reason for the failure.

## See Also

### Continuing user activities

- [scene:willContinueUserActivityWithType:](scene%28__willcontinueuseractivitywithtype_%29.md): Tells the delegate that it’s about to receive Handoff-related data.
- [scene:continueUserActivity:](scene%28__continue_%29.md): Tells the delegate to handle the specified Handoff-related activity.
