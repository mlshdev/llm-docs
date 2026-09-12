> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkfriendrequestcomposeviewcontroller](https://developer.apple.com/documentation/gamekit/gkfriendrequestcomposeviewcontroller)

# GKFriendRequestComposeViewController (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 4.2+ (deprecated in 10.0) · iPadOS 4.2+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

Your game uses the `GKFriendRequestComposeViewController` class to present a screen that allows the local player to send friend requests to other players.

> No longer supported.

## Declaration

```swift
class GKFriendRequestComposeViewController
```

<a id="overview"></a>

## Overview

> **Important**

>  Your game must initialize a local player before you can use any Game Center classes. If there is no initialized player, your game receives a [GKError.Code.notAuthenticated](gkerror/code/notauthenticated.md) error. For more information, see [Authenticating a player](authenticating-a-player.md).

To show a friend request, initialize a new `GKFriendRequestComposeViewController` object and set the delegate. Optionally, you can customize the request by adding a text message or a list of recipients. Then, present the new view controller and wait for the delegate to be called. Once the delegate is called, dismiss the view controller.

On iOS, you present and dismiss the view controller from another view controller in your game, using the methods provided by the [UIViewController](../uikit/uiviewcontroller.md) class. In macOS, you use the [GKDialogController](gkdialogcontroller.md) class to present and dismiss the view controller. The listing below shows one way your view controller can allow a player to send a request to other players. For this method, an array of [GKPlayer](gkplayer.md) objects is passed in as a parameter. The method instantiates a `GKFriendRequestComposeViewController` object, sets its delegate, and adds the list of players intended to receive the invitation. The view controller then presents the friend request and returns.

```objc
- (void) inviteFriends: (NSArray*) players
{
    GKFriendRequestComposeViewController *friendRequestViewController = [[GKFriendRequestComposeViewController alloc] init];
    friendRequestViewController.composeViewDelegate = self;
    if (players.count)
    {
        [friendRequestViewController addRecipientPlayers: players];
    }
    [self presentViewController: friendRequestViewController animated: YES completion:nil];
    [friendRequestViewController release];
}
```

<a id="Subclassing-Notes"></a>

### Subclassing Notes

The [GKFriendRequestComposeViewController](gkfriendrequestcomposeviewcontroller.md) class is not intended to be subclassed.

## Topics

### Determining the Maximum Number of Recipients

- [maxNumberOfRecipients()](gkfriendrequestcomposeviewcontroller/maxnumberofrecipients%28%29.md): Deprecated. Returns the maximum number of recipients permitted in a single request.

### Delegate

- [composeViewDelegate](gkfriendrequestcomposeviewcontroller/composeviewdelegate.md): Deprecated. The view controller’s delegate

### Adding Recipients

- [addRecipients(withEmailAddresses:)](gkfriendrequestcomposeviewcontroller/addrecipients%28withemailaddresses_%29.md): Deprecated. Adds recipients based on their email addresses.
- [addRecipientPlayers(\_:)](gkfriendrequestcomposeviewcontroller/addrecipientplayers%28__%29.md): Deprecated. Adds recipients based on their Game Center player identifiers.
- [addRecipients(withPlayerIDs:)](gkfriendrequestcomposeviewcontroller/addrecipients%28withplayerids_%29.md): Deprecated. Adds recipients based on their Game Center player identifiers.

### Setting an Invitation Message

- [setMessage(\_:)](gkfriendrequestcomposeviewcontroller/setmessage%28__%29.md): Deprecated. Sets the text message included in the friend invitation.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UINavigationController](../uikit/uinavigationcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [GKViewController](gkviewcontroller.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSEditor](https://developer.apple.com/documentation/appkit/nseditor)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSeguePerforming](https://developer.apple.com/documentation/appkit/nssegueperforming)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContentContainer](../uikit/uicontentcontainer.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIStateRestoring](../uikit/uistaterestoring.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Deprecated classes

- [GKAchievementViewController](gkachievementviewcontroller.md): Deprecated. An `GKAchievementViewController` object provides a standard user interface to display achievement progress for the local player. If the [GKGameCenterViewController](gkgamecenterviewcontroller.md) class is available, you should use it instead.
- [GKChallengeEventHandler](gkchallengeeventhandler.md): Deprecated. The `GKChallengeEventHandler` class is used to respond to events related to challenges sent or received by the local player.
- [GKChallengesViewController](gkchallengesviewcontroller.md): Deprecated.
- [GKChallenge](gkchallenge.md): Deprecated. A challenge issued by the local player to another player.
- [GKScoreChallenge](gkscorechallenge.md): Deprecated. A type of challenge where a player must beat the leaderboard score of another player.
- [GKAchievementChallenge](gkachievementchallenge.md): Deprecated. A type of challenge where a player must earn another player’s achievement.
- [GKCloudPlayer](gkcloudplayer.md): Deprecated. The object representing the currently signed-in iCloud user.
- [GKGameCenterViewController](gkgamecenterviewcontroller.md): Deprecated. The dashboard that allows players to access their Game Center data in your game.
- [GKGameSession](gkgamesession.md): Deprecated. A game session you can use to save game data, invite other players, and create turn-based and real-time game apps.
- [GKGameSessionSharingViewController](gkgamesessionsharingviewcontroller.md): Deprecated. A user interface you can use to invite other users into a tvOS game session.
- [GKLeaderboardViewController](gkleaderboardviewcontroller.md): Deprecated. The `GKLeaderboardViewController` class provides a standard user interface that displays leaderboard scores to the player. If the [GKGameCenterViewController](gkgamecenterviewcontroller.md) class is available, you should use it instead.
- [GKPeerPickerController](gkpeerpickercontroller.md): Deprecated. Provides a standard user interface to allow one iOS device to discover and connect to another.
- [GKScore](gkscore.md): Deprecated. An object containing information for a score that was earned by the player.
- [GKSession](gksession.md): Deprecated. A [GKSession](gksession.md) object provides the ability to discover and connect to nearby iOS devices using Bluetooth or Wi-fi.
- [GKTurnBasedEventHandler](gkturnbasedeventhandler.md): Deprecated. The [GKTurnBasedEventHandler](gkturnbasedeventhandler.md) class is used to respond to important messages related to turn-based matches. To use it, call the [shared()](gkturnbasedeventhandler/shared%28%29.md) class method to get the singleton instance and assign an object that implements the [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md) protocol to its [delegate](gkturnbasedeventhandler/delegate.md) property. All methods are called on the main thread.

# GKFriendRequestComposeViewController (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 4.2+ (deprecated in 10.0) · iPadOS 4.2+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

Your game uses the `GKFriendRequestComposeViewController` class to present a screen that allows the local player to send friend requests to other players.

> No longer supported.

## Declaration

```objectivec
@interface GKFriendRequestComposeViewController : UINavigationController
```

```objectivec
@interface GKFriendRequestComposeViewController : NSViewController
```

<a id="overview"></a>

## Overview

> **Important**

>  Your game must initialize a local player before you can use any Game Center classes. If there is no initialized player, your game receives a [GKErrorNotAuthenticated](gkerror/code/notauthenticated.md) error. For more information, see [Authenticating a player](authenticating-a-player.md).

To show a friend request, initialize a new `GKFriendRequestComposeViewController` object and set the delegate. Optionally, you can customize the request by adding a text message or a list of recipients. Then, present the new view controller and wait for the delegate to be called. Once the delegate is called, dismiss the view controller.

On iOS, you present and dismiss the view controller from another view controller in your game, using the methods provided by the [UIViewController](../uikit/uiviewcontroller.md) class. In macOS, you use the [GKDialogController](gkdialogcontroller.md) class to present and dismiss the view controller. The listing below shows one way your view controller can allow a player to send a request to other players. For this method, an array of [GKPlayer](gkplayer.md) objects is passed in as a parameter. The method instantiates a `GKFriendRequestComposeViewController` object, sets its delegate, and adds the list of players intended to receive the invitation. The view controller then presents the friend request and returns.

```objc
- (void) inviteFriends: (NSArray*) players
{
    GKFriendRequestComposeViewController *friendRequestViewController = [[GKFriendRequestComposeViewController alloc] init];
    friendRequestViewController.composeViewDelegate = self;
    if (players.count)
    {
        [friendRequestViewController addRecipientPlayers: players];
    }
    [self presentViewController: friendRequestViewController animated: YES completion:nil];
    [friendRequestViewController release];
}
```

<a id="Subclassing-Notes"></a>

### Subclassing Notes

The [GKFriendRequestComposeViewController](gkfriendrequestcomposeviewcontroller.md) class is not intended to be subclassed.

## Topics

### Determining the Maximum Number of Recipients

- [maxNumberOfRecipients](gkfriendrequestcomposeviewcontroller/maxnumberofrecipients%28%29.md): Deprecated. Returns the maximum number of recipients permitted in a single request.

### Delegate

- [composeViewDelegate](gkfriendrequestcomposeviewcontroller/composeviewdelegate.md): Deprecated. The view controller’s delegate

### Adding Recipients

- [addRecipientsWithEmailAddresses:](gkfriendrequestcomposeviewcontroller/addrecipients%28withemailaddresses_%29.md): Deprecated. Adds recipients based on their email addresses.
- [addRecipientPlayers:](gkfriendrequestcomposeviewcontroller/addrecipientplayers%28__%29.md): Deprecated. Adds recipients based on their Game Center player identifiers.
- [addRecipientsWithPlayerIDs:](gkfriendrequestcomposeviewcontroller/addrecipients%28withplayerids_%29.md): Deprecated. Adds recipients based on their Game Center player identifiers.

### Setting an Invitation Message

- [setMessage:](gkfriendrequestcomposeviewcontroller/setmessage%28__%29.md): Deprecated. Sets the text message included in the friend invitation.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UINavigationController](../uikit/uinavigationcontroller.md)

### Conforms To

- [GKViewController](gkviewcontroller.md)

## See Also

### Deprecated classes

- [GKAchievementViewController](gkachievementviewcontroller.md): Deprecated. An `GKAchievementViewController` object provides a standard user interface to display achievement progress for the local player. If the [GKGameCenterViewController](gkgamecenterviewcontroller.md) class is available, you should use it instead.
- [GKChallengeEventHandler](gkchallengeeventhandler.md): Deprecated. The `GKChallengeEventHandler` class is used to respond to events related to challenges sent or received by the local player.
- [GKChallengesViewController](gkchallengesviewcontroller.md): Deprecated.
- [GKChallenge](gkchallenge.md): Deprecated. A challenge issued by the local player to another player.
- [GKScoreChallenge](gkscorechallenge.md): Deprecated. A type of challenge where a player must beat the leaderboard score of another player.
- [GKAchievementChallenge](gkachievementchallenge.md): Deprecated. A type of challenge where a player must earn another player’s achievement.
- [GKCloudPlayer](gkcloudplayer.md): Deprecated. The object representing the currently signed-in iCloud user.
- [GKGameCenterViewController](gkgamecenterviewcontroller.md): Deprecated. The dashboard that allows players to access their Game Center data in your game.
- [GKGameSession](gkgamesession.md): Deprecated. A game session you can use to save game data, invite other players, and create turn-based and real-time game apps.
- [GKGameSessionSharingViewController](gkgamesessionsharingviewcontroller.md): Deprecated. A user interface you can use to invite other users into a tvOS game session.
- [GKLeaderboardViewController](gkleaderboardviewcontroller.md): Deprecated. The `GKLeaderboardViewController` class provides a standard user interface that displays leaderboard scores to the player. If the [GKGameCenterViewController](gkgamecenterviewcontroller.md) class is available, you should use it instead.
- [GKPeerPickerController](gkpeerpickercontroller.md): Deprecated. Provides a standard user interface to allow one iOS device to discover and connect to another.
- [GKScore](gkscore.md): Deprecated. An object containing information for a score that was earned by the player.
- [GKSession](gksession.md): Deprecated. A [GKSession](gksession.md) object provides the ability to discover and connect to nearby iOS devices using Bluetooth or Wi-fi.
- [GKTurnBasedEventHandler](gkturnbasedeventhandler.md): Deprecated. The [GKTurnBasedEventHandler](gkturnbasedeventhandler.md) class is used to respond to important messages related to turn-based matches. To use it, call the [sharedTurnBasedEventHandler](gkturnbasedeventhandler/shared%28%29.md) class method to get the singleton instance and assign an object that implements the [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md) protocol to its [delegate](gkturnbasedeventhandler/delegate.md) property. All methods are called on the main thread.
