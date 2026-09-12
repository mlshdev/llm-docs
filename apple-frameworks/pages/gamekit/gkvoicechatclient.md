> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechatclient](https://developer.apple.com/documentation/gamekit/gkvoicechatclient)

# GKVoiceChatClient (Swift)

**Framework:** GameKit  
**Kind:** Protocol  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The [GKVoiceChatClient](gkvoicechatclient.md) protocol is implemented to control the behavior of the [GKVoiceChatService](gkvoicechatservice.md) object. The voice chat client has a number of responsibilities:

## Declaration

```swift
protocol GKVoiceChatClient : NSObjectProtocol
```

<a id="overview"></a>

## Overview

- Provides a network connection that the voice chat service uses to send and receive configuration data with other participants. If this network connection is shared with other application data, the client must also disambiguate between chat configuration data and application data.
- Provides a participant ID that identifies the user to remote participants in the chat.
- Defines how a remote user’s participant ID translates into a network connection to that user.
- Accepts or rejects requests from remote participants to join the voice chat.

## Topics

### Getting Information about the Participant

- [participantID()](gkvoicechatclient/participantid%28%29.md): Deprecated. Returns a string that uniquely identifies the local user.

### Sending data to other participants

- [voiceChatService(\_:send:toParticipantID:)](gkvoicechatclient/voicechatservice%28__send_toparticipantid_%29.md): Deprecated. A request for the client to send data to a participant.
- [voiceChatService(\_:sendRealTime:toParticipantID:)](gkvoicechatclient/voicechatservice%28__sendrealtime_toparticipantid_%29.md): Deprecated. Asks the client to send data to a participant that must get there quickly.

### Accepting Invitations from Remote Participants

- [voiceChatService(\_:didReceiveInvitationFromParticipantID:callID:)](gkvoicechatclient/voicechatservice%28__didreceiveinvitationfromparticipantid_callid_%29.md): Deprecated. Asks the client to accept or reject an invitation from a remote participant.

### Responding to Changes in Other Participants

- [voiceChatService(\_:didStartWithParticipantID:)](gkvoicechatclient/voicechatservice%28__didstartwithparticipantid_%29.md): Deprecated. Received by the client when a voice chat with another participant is established.
- [voiceChatService(\_:didNotStartWithParticipantID:error:)](gkvoicechatclient/voicechatservice%28__didnotstartwithparticipantid_error_%29.md): Deprecated. Received by the client when an attempt to establish a voice chat with another participant failed.
- [voiceChatService(\_:didStopWithParticipantID:error:)](gkvoicechatclient/voicechatservice%28__didstopwithparticipantid_error_%29.md): Deprecated. Received by the client when a previously established voice chat has ended.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Deprecated protocols

- [GKAchievementViewControllerDelegate](gkachievementviewcontrollerdelegate.md): Deprecated. An object implementing the [GKAchievementViewControllerDelegate](gkachievementviewcontrollerdelegate.md) protocol is called when the user dismisses the achievements view controller. Typically, this protocol is implemented by the object in your game that originally displayed the achievements user interface.
- [GKChallengeEventHandlerDelegate](gkchallengeeventhandlerdelegate.md): Deprecated. You implement the [GKChallengeEventHandlerDelegate](gkchallengeeventhandlerdelegate.md) delegate to control how challenges are displayed in your game.
- [GKChallengesViewControllerDelegate](gkchallengesviewcontrollerdelegate.md): Deprecated.
- [GKChallengeListener](gkchallengelistener.md): Deprecated. An object that responds to challenge events.
- [GKFriendRequestComposeViewControllerDelegate](gkfriendrequestcomposeviewcontrollerdelegate.md): Deprecated. The [GKFriendRequestComposeViewControllerDelegate](gkfriendrequestcomposeviewcontrollerdelegate.md) protocol is implemented by delegates of the [GKFriendRequestComposeViewController](gkfriendrequestcomposeviewcontroller.md) class. The delegate is called when the player dismisses the friend request.
- [GKGameSessionEventListener](gkgamesessioneventlistener.md): Deprecated. An event listener that handles game session events.
- [GKLeaderboardViewControllerDelegate](gkleaderboardviewcontrollerdelegate.md): Deprecated. The [GKLeaderboardViewControllerDelegate](gkleaderboardviewcontrollerdelegate.md) protocol is implemented by delegates of the [GKLeaderboardViewController](gkleaderboardviewcontroller.md) class. The delegate is called when the player dismisses the leaderboard.
- [GKPeerPickerControllerDelegate](gkpeerpickercontrollerdelegate.md): Deprecated. The [GKPeerPickerControllerDelegate](gkpeerpickercontrollerdelegate.md) protocol is implemented on an object to customize the behavior of a [GKPeerPickerController](gkpeerpickercontroller.md) object. The delegate is called by the peer picker to create a session object and to respond as the session is configured by the controller.
- [GKSessionDelegate](gksessiondelegate.md): Deprecated. An object implements the [GKSessionDelegate](gksessiondelegate.md) protocol to control the behavior of a [GKSession](gksession.md) object. The delegate is called when other visible peers change their state relative to the session. It is also called to determine whether another peer is allowed to connect to the session.
- [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md): Deprecated. The [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md) protocol is implemented by an object to receive notifications events for turn-based matches. All methods are called on the main thread.

# GKVoiceChatClient (Objective-C)

**Framework:** GameKit  
**Kind:** Protocol  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.8) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The [GKVoiceChatClient](gkvoicechatclient.md) protocol is implemented to control the behavior of the [GKVoiceChatService](gkvoicechatservice.md) object. The voice chat client has a number of responsibilities:

## Declaration

```objectivec
@protocol GKVoiceChatClient <NSObject>
```

<a id="overview"></a>

## Overview

- Provides a network connection that the voice chat service uses to send and receive configuration data with other participants. If this network connection is shared with other application data, the client must also disambiguate between chat configuration data and application data.
- Provides a participant ID that identifies the user to remote participants in the chat.
- Defines how a remote user’s participant ID translates into a network connection to that user.
- Accepts or rejects requests from remote participants to join the voice chat.

## Topics

### Getting Information about the Participant

- [participantID](gkvoicechatclient/participantid%28%29.md): Deprecated. Returns a string that uniquely identifies the local user.

### Sending data to other participants

- [voiceChatService:sendData:toParticipantID:](gkvoicechatclient/voicechatservice%28__send_toparticipantid_%29.md): Deprecated. A request for the client to send data to a participant.
- [voiceChatService:sendRealTimeData:toParticipantID:](gkvoicechatclient/voicechatservice%28__sendrealtime_toparticipantid_%29.md): Deprecated. Asks the client to send data to a participant that must get there quickly.

### Accepting Invitations from Remote Participants

- [voiceChatService:didReceiveInvitationFromParticipantID:callID:](gkvoicechatclient/voicechatservice%28__didreceiveinvitationfromparticipantid_callid_%29.md): Deprecated. Asks the client to accept or reject an invitation from a remote participant.

### Responding to Changes in Other Participants

- [voiceChatService:didStartWithParticipantID:](gkvoicechatclient/voicechatservice%28__didstartwithparticipantid_%29.md): Deprecated. Received by the client when a voice chat with another participant is established.
- [voiceChatService:didNotStartWithParticipantID:error:](gkvoicechatclient/voicechatservice%28__didnotstartwithparticipantid_error_%29.md): Deprecated. Received by the client when an attempt to establish a voice chat with another participant failed.
- [voiceChatService:didStopWithParticipantID:error:](gkvoicechatclient/voicechatservice%28__didstopwithparticipantid_error_%29.md): Deprecated. Received by the client when a previously established voice chat has ended.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Deprecated protocols

- [GKAchievementViewControllerDelegate](gkachievementviewcontrollerdelegate.md): Deprecated. An object implementing the [GKAchievementViewControllerDelegate](gkachievementviewcontrollerdelegate.md) protocol is called when the user dismisses the achievements view controller. Typically, this protocol is implemented by the object in your game that originally displayed the achievements user interface.
- [GKChallengeEventHandlerDelegate](gkchallengeeventhandlerdelegate.md): Deprecated. You implement the [GKChallengeEventHandlerDelegate](gkchallengeeventhandlerdelegate.md) delegate to control how challenges are displayed in your game.
- [GKChallengesViewControllerDelegate](gkchallengesviewcontrollerdelegate.md): Deprecated.
- [GKChallengeListener](gkchallengelistener.md): Deprecated. An object that responds to challenge events.
- [GKFriendRequestComposeViewControllerDelegate](gkfriendrequestcomposeviewcontrollerdelegate.md): Deprecated. The [GKFriendRequestComposeViewControllerDelegate](gkfriendrequestcomposeviewcontrollerdelegate.md) protocol is implemented by delegates of the [GKFriendRequestComposeViewController](gkfriendrequestcomposeviewcontroller.md) class. The delegate is called when the player dismisses the friend request.
- [GKGameSessionEventListener](gkgamesessioneventlistener.md): Deprecated. An event listener that handles game session events.
- [GKLeaderboardViewControllerDelegate](gkleaderboardviewcontrollerdelegate.md): Deprecated. The [GKLeaderboardViewControllerDelegate](gkleaderboardviewcontrollerdelegate.md) protocol is implemented by delegates of the [GKLeaderboardViewController](gkleaderboardviewcontroller.md) class. The delegate is called when the player dismisses the leaderboard.
- [GKPeerPickerControllerDelegate](gkpeerpickercontrollerdelegate.md): Deprecated. The [GKPeerPickerControllerDelegate](gkpeerpickercontrollerdelegate.md) protocol is implemented on an object to customize the behavior of a [GKPeerPickerController](gkpeerpickercontroller.md) object. The delegate is called by the peer picker to create a session object and to respond as the session is configured by the controller.
- [GKSessionDelegate](gksessiondelegate.md): Deprecated. An object implements the [GKSessionDelegate](gksessiondelegate.md) protocol to control the behavior of a [GKSession](gksession.md) object. The delegate is called when other visible peers change their state relative to the session. It is also called to determine whether another peer is allowed to connect to the session.
- [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md): Deprecated. The [GKTurnBasedEventHandlerDelegate](gkturnbasedeventhandlerdelegate.md) protocol is implemented by an object to receive notifications events for turn-based matches. All methods are called on the main thread.
