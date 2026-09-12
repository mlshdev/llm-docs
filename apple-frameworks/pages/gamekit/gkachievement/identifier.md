> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievement/identifier](https://developer.apple.com/documentation/gamekit/gkachievement/identifier)

# identifier (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The identifier for the achievement that you enter in App Store Connect.

## Declaration

```swift
var identifier: String { get set }
```

## See Also

### Accessing Achievement Properties

- [player](player.md): The player who earned the achievement.
- [percentComplete](percentcomplete.md): A percentage value that states how far the player has progressed on the achievement.
- [isCompleted](iscompleted.md): A Boolean value that states whether the player has completed the achievement.
- [lastReportedDate](lastreporteddate.md): The last time your game reported progress on the achievement for the player.

# identifier (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The identifier for the achievement that you enter in App Store Connect.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * identifier;
```

```objectivec
@property (atomic, copy, nullable) NSString * identifier;
```

## See Also

### Accessing Achievement Properties

- [player](player.md): The player who earned the achievement.
- [percentComplete](percentcomplete.md): A percentage value that states how far the player has progressed on the achievement.
- [completed](iscompleted.md): A Boolean value that states whether the player has completed the achievement.
- [lastReportedDate](lastreporteddate.md): The last time your game reported progress on the achievement for the player.
