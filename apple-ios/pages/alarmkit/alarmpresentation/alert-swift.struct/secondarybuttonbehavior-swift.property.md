> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmpresentation/alert-swift.struct/secondarybuttonbehavior-swift.property](https://developer.apple.com/documentation/alarmkit/alarmpresentation/alert-swift.struct/secondarybuttonbehavior-swift.property)

# secondaryButtonBehavior

**Framework:** AlarmKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The defined behavior of the second button.

## Declaration

```swift
var secondaryButtonBehavior: AlarmPresentation.Alert.SecondaryButtonBehavior?
```

<a id="discussion"></a>

## Discussion

You can define the button to switch back to a countdown for a snoozed alarm or repeating timer, or execute an intent without mutating the alarm state.

## See Also

### Creating a second button

- [secondaryButton](secondarybutton.md): The appearance of the secondary button.
- [AlarmPresentation.Alert.SecondaryButtonBehavior](secondarybuttonbehavior-swift.enum.md): Describes the behaviour of the second button.
