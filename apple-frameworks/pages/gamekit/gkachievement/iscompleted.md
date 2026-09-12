> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievement/iscompleted](https://developer.apple.com/documentation/gamekit/gkachievement/iscompleted)

# isCompleted (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that states whether the player has completed the achievement.

## Declaration

```swift
var isCompleted: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is [true](https://developer.apple.com/documentation/swift/true) if the `percentComplete` property is equal to `100.0`; otherwise, it’s [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing Achievement Properties

- [identifier](identifier.md): The identifier for the achievement that you enter in App Store Connect.
- [player](player.md): The player who earned the achievement.
- [percentComplete](percentcomplete.md): A percentage value that states how far the player has progressed on the achievement.
- [lastReportedDate](lastreporteddate.md): The last time your game reported progress on the achievement for the player.

# completed (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that states whether the player has completed the achievement.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isCompleted) BOOL completed;
```

```objectivec
@property (atomic, readonly, getter=isCompleted) BOOL completed;
```

<a id="Discussion"></a>

## Discussion

This property is [true](https://developer.apple.com/documentation/swift/true) if the `percentComplete` property is equal to `100.0`; otherwise, it’s [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing Achievement Properties

- [identifier](identifier.md): The identifier for the achievement that you enter in App Store Connect.
- [player](player.md): The player who earned the achievement.
- [percentComplete](percentcomplete.md): A percentage value that states how far the player has progressed on the achievement.
- [lastReportedDate](lastreporteddate.md): The last time your game reported progress on the achievement for the player.
