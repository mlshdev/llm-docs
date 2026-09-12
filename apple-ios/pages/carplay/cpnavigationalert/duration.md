> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnavigationalert/duration](https://developer.apple.com/documentation/carplay/cpnavigationalert/duration)

# duration (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The amount of time, in seconds, that the alert is visible.

## Declaration

```swift
var duration: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

Set `duration` to zero to display the alert until dismissed by the user. When `duration` is not zero, [CPNavigationAlertMinimumDuration](../cpnavigationalertminimumduration.md) determines the minimum amount of time the alert is visible.

## See Also

### Getting the Alert Duration

- [CPNavigationAlertMinimumDuration](../cpnavigationalertminimumduration.md): A constant that defines the minimum amount of time that an alert is visible.

# duration (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The amount of time, in seconds, that the alert is visible.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval duration;
```

<a id="Discussion"></a>

## Discussion

Set `duration` to zero to display the alert until dismissed by the user. When `duration` is not zero, [CPNavigationAlertMinimumDuration](../cpnavigationalertminimumduration.md) determines the minimum amount of time the alert is visible.

## See Also

### Getting the Alert Duration

- [CPNavigationAlertMinimumDuration](../cpnavigationalertminimumduration.md): A constant that defines the minimum amount of time that an alert is visible.
