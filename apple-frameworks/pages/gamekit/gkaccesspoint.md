> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkaccesspoint](https://developer.apple.com/documentation/gamekit/gkaccesspoint)

# GKAccessPoint (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An object that allows players to view and manage their Game Center information from within your game.

## Declaration

```swift
class GKAccessPoint
```

## Mentioned In

- [Adding an access point to your game](adding-an-access-point-to-your-game.md)

<a id="overview"></a>

## Overview

The access point displays a control in a corner of your game that opens a Game Center dashboard when the player taps or clicks it.

Use the [shared](gkaccesspoint/shared.md) property to get the shared access point object. GameKit attaches the access point to the window you specify in the [parentWindow](gkaccesspoint/parentwindow.md) property, in the corner you specify using the [location](gkaccesspoint/location-swift.property.md) property. If you don’t specify a parent window, GameKit infers an appropriate location. For the location of the access point on visionOS, see [Configure the access point on visionOS](adding-an-access-point-to-your-game.md#Configure-the-access-point-on-visionOS).

To display highlights, set the [showHighlights](gkaccesspoint/showhighlights.md) property to [true](https://developer.apple.com/documentation/swift/true). Then set [isActive](gkaccesspoint/isactive.md) to [true](https://developer.apple.com/documentation/swift/true) to display the access point control.

## Topics

### Getting the shared access point

- [shared](gkaccesspoint/shared.md): The shared access point object.

### Managing the location

- [location](gkaccesspoint/location-swift.property.md): The corner of the screen to display the access point.
- [GKAccessPoint.Location](gkaccesspoint/location-swift.enum.md): Specifies the corner of the screen to display the access point.
- [frameInScreenCoordinates](gkaccesspoint/frameinscreencoordinates.md): The frame of the access point in screen coordinates.
- [parentWindow](gkaccesspoint/parentwindow.md): The window that contains the access point.

### Displaying the access point

- [isActive](gkaccesspoint/isactive.md): A Boolean value that determines whether to display the access point.
- [isPresentingGameCenter](gkaccesspoint/ispresentinggamecenter.md): A Boolean value that indicates whether the game is presenting the Game Center dashboard.
- [isVisible](gkaccesspoint/isvisible.md): A Boolean value that indicates whether the access point is visible.
- [showHighlights](gkaccesspoint/showhighlights.md): Deprecated. A Boolean value that indicates whether to display highlights for achievements and current ranks for leaderboards.

### Managing the access point

- [isFocused](gkaccesspoint/isfocused.md): A Boolean value that indicates whether the access point is in focus on tvOS.
- [trigger(handler:)](gkaccesspoint/trigger%28handler_%29.md): Displays the Game Center dashboard as if the player taps or presses the access point.
- [trigger(state:handler:)](gkaccesspoint/trigger%28state_handler_%29.md): Displays the Game Center dashboard in the specified state as if the player taps or presses the access point.
- [trigger(player:handler:)](gkaccesspoint/trigger%28player_handler_%29.md): Displays the Game Center dashboard in a state that shows a player profile.
- [trigger(achievementID:handler:)](gkaccesspoint/trigger%28achievementid_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific achievement.
- [trigger(leaderboardID:playerScope:timeScope:handler:)](gkaccesspoint/trigger%28leaderboardid_playerscope_timescope_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific leaderboard.
- [trigger(leaderboardSetID:handler:)](gkaccesspoint/trigger%28leaderboardsetid_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific leaderboard set.

### Instance Methods

- [trigger(challengeDefinitionID:handler:)](gkaccesspoint/trigger%28challengedefinitionid_handler_%29.md): Displays the challenge creation view for the provided challenge definition ID.
- [trigger(gameActivity:handler:)](gkaccesspoint/trigger%28gameactivity_handler_%29-6lnz8.md)
- [trigger(gameActivity:handler:)](gkaccesspoint/trigger%28gameactivity_handler_%29-8i6w7.md): Displays the game activity view for the provided activity instance.
- [trigger(gameActivityDefinitionID:handler:)](gkaccesspoint/trigger%28gameactivitydefinitionid_handler_%29-9hemd.md): Displays the game activity creation view for the provided activity definition ID.
- [trigger(gameActivityDefinitionID:handler:)](gkaccesspoint/trigger%28gameactivitydefinitionid_handler_%29-9m45r.md)
- [triggerForArcade(handler:)](gkaccesspoint/triggerforarcade%28handler_%29.md): Brings up the Arcade dashboard.
- [triggerForChallenges(handler:)](gkaccesspoint/triggerforchallenges%28handler_%29.md): Displays the view that allows players to engage each other with challenges.
- [triggerForFriending(handler:)](gkaccesspoint/triggerforfriending%28handler_%29.md): Brings up the invite friends view.
- [triggerForPlayTogether(handler:)](gkaccesspoint/triggerforplaytogether%28handler_%29.md): Displays the view that allows players to engage each other with activities and challenges.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Game Center interfaces

- [Adding an access point to your game](adding-an-access-point-to-your-game.md): Provide your users a convenient connection to the Game Center dashboard.
- [Displaying the Game Center dashboard](displaying-the-game-center-dashboard.md): Provide an interface for players to navigate to their Game Center data from your game.
- [GKDialogController](gkdialogcontroller.md): An object that provides the ability to present the dashboard in macOS games.
- [GKViewController](gkviewcontroller.md): The abstract base protocol adopted by GameKit view controller classes.

# GKAccessPoint (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An object that allows players to view and manage their Game Center information from within your game.

## Declaration

```objectivec
@interface GKAccessPoint : NSObject
```

## Mentioned In

- [Adding an access point to your game](adding-an-access-point-to-your-game.md)

<a id="overview"></a>

## Overview

The access point displays a control in a corner of your game that opens a Game Center dashboard when the player taps or clicks it.

Use the [shared](gkaccesspoint/shared.md) property to get the shared access point object. GameKit attaches the access point to the window you specify in the [parentWindow](gkaccesspoint/parentwindow.md) property, in the corner you specify using the [location](gkaccesspoint/location-swift.property.md) property. If you don’t specify a parent window, GameKit infers an appropriate location. For the location of the access point on visionOS, see [Configure the access point on visionOS](adding-an-access-point-to-your-game.md#Configure-the-access-point-on-visionOS).

To display highlights, set the [showHighlights](gkaccesspoint/showhighlights.md) property to [true](https://developer.apple.com/documentation/swift/true). Then set [active](gkaccesspoint/isactive.md) to [true](https://developer.apple.com/documentation/swift/true) to display the access point control.

## Topics

### Getting the shared access point

- [shared](gkaccesspoint/shared.md): The shared access point object.

### Managing the location

- [location](gkaccesspoint/location-swift.property.md): The corner of the screen to display the access point.
- [GKAccessPointLocation](gkaccesspoint/location-swift.enum.md): Specifies the corner of the screen to display the access point.
- [frameInScreenCoordinates](gkaccesspoint/frameinscreencoordinates.md): The frame of the access point in screen coordinates.
- [parentWindow](gkaccesspoint/parentwindow.md): The window that contains the access point.

### Displaying the access point

- [active](gkaccesspoint/isactive.md): A Boolean value that determines whether to display the access point.
- [isPresentingGameCenter](gkaccesspoint/ispresentinggamecenter.md): A Boolean value that indicates whether the game is presenting the Game Center dashboard.
- [visible](gkaccesspoint/isvisible.md): A Boolean value that indicates whether the access point is visible.
- [showHighlights](gkaccesspoint/showhighlights.md): Deprecated. A Boolean value that indicates whether to display highlights for achievements and current ranks for leaderboards.

### Managing the access point

- [focused](gkaccesspoint/isfocused.md): A Boolean value that indicates whether the access point is in focus on tvOS.
- [triggerAccessPointWithHandler:](gkaccesspoint/trigger%28handler_%29.md): Displays the Game Center dashboard as if the player taps or presses the access point.
- [triggerAccessPointWithState:handler:](gkaccesspoint/trigger%28state_handler_%29.md): Displays the Game Center dashboard in the specified state as if the player taps or presses the access point.
- [triggerAccessPointWithPlayer:handler:](gkaccesspoint/trigger%28player_handler_%29.md): Displays the Game Center dashboard in a state that shows a player profile.
- [triggerAccessPointWithAchievementID:handler:](gkaccesspoint/trigger%28achievementid_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific achievement.
- [triggerAccessPointWithLeaderboardID:playerScope:timeScope:handler:](gkaccesspoint/trigger%28leaderboardid_playerscope_timescope_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific leaderboard.
- [triggerAccessPointWithLeaderboardSetID:handler:](gkaccesspoint/trigger%28leaderboardsetid_handler_%29.md): Displays the Game Center dashboard in a state that shows a specific leaderboard set.

### Instance Methods

- [triggerAccessPointWithChallengeDefinitionID:handler:](gkaccesspoint/trigger%28challengedefinitionid_handler_%29.md): Displays the challenge creation view for the provided challenge definition ID.
- [triggerAccessPointWithGameActivity:handler:](gkaccesspoint/trigger%28gameactivity_handler_%29-8i6w7.md): Displays the game activity view for the provided activity instance.
- [triggerAccessPointWithGameActivityDefinitionID:handler:](gkaccesspoint/trigger%28gameactivitydefinitionid_handler_%29-9hemd.md): Displays the game activity creation view for the provided activity definition ID.
- [triggerAccessPointForArcadeWithHandler:](gkaccesspoint/triggerforarcade%28handler_%29.md): Brings up the Arcade dashboard.
- [triggerAccessPointForChallengesWithHandler:](gkaccesspoint/triggerforchallenges%28handler_%29.md): Displays the view that allows players to engage each other with challenges.
- [triggerAccessPointForFriendingWithHandler:](gkaccesspoint/triggerforfriending%28handler_%29.md): Brings up the invite friends view.
- [triggerAccessPointForPlayTogetherWithHandler:](gkaccesspoint/triggerforplaytogether%28handler_%29.md): Displays the view that allows players to engage each other with activities and challenges.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Game Center interfaces

- [Adding an access point to your game](adding-an-access-point-to-your-game.md): Provide your users a convenient connection to the Game Center dashboard.
- [Displaying the Game Center dashboard](displaying-the-game-center-dashboard.md): Provide an interface for players to navigate to their Game Center data from your game.
- [GKDialogController](gkdialogcontroller.md): An object that provides the ability to present the dashboard in macOS games.
- [GKViewController](gkviewcontroller.md): The abstract base protocol adopted by GameKit view controller classes.
