> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkachievementdescription/groupidentifier](https://developer.apple.com/documentation/gamekit/gkachievementdescription/groupidentifier)

# groupIdentifier (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The identifier for the group that the achievement description is part of.

## Declaration

```swift
var groupIdentifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

If your game is configured to be part of a game group in App Store Connect, this property holds the identifier you assigned to the achievement in the game group. If the game isn’t part of a game group, this property is `nil`.

# groupIdentifier (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The identifier for the group that the achievement description is part of.

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nullable) NSString * groupIdentifier;
```

<a id="Discussion"></a>

## Discussion

If your game is configured to be part of a game group in App Store Connect, this property holds the identifier you assigned to the achievement in the game group. If the game isn’t part of a game group, this property is `nil`.
