> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpnowplayingsession](https://developer.apple.com/documentation/mediaplayer/mpnowplayingsession)

# MPNowPlayingSession (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 14.0+ · visionOS 1.0+

An object that manages Now Playing information and remote commands for multiple players.

## Declaration

```swift
class MPNowPlayingSession
```

<a id="overview"></a>

## Overview

An [AVPlayer](../avfoundation/avplayer.md) object can have only one Now Playing session. An [AVPlayerViewController](../avkit/avplayerviewcontroller.md) manages its own player and Now Playing session, so you can’t add your own Now Playing session.

> **Important**

>  If you create an `MPNowPlayingSession` object, don’t attempt to use it with the `AVPlayer` that an `AVPlayerViewController` presents. Create your own `AVPlayer` instance with custom playback controls to use with your Now Playing session.

## Topics

### Creating a session

- [init(players:)](mpnowplayingsession/init%28players_%29.md): Creates a Now Playing session object.

### Accessing the delegate object

- [delegate](mpnowplayingsession/delegate.md): The Now Playing session’s delegate object.
- [MPNowPlayingSessionDelegate](mpnowplayingsessiondelegate.md): A protocol that defines the delegate interface for a Now Playing session.

### Managing players

- [players](mpnowplayingsession/players.md): The array of players associated with the session.
- [addPlayer(\_:)](mpnowplayingsession/addplayer%28__%29.md): Adds a player to the session.
- [removePlayer(\_:)](mpnowplayingsession/removeplayer%28__%29.md): Removes a player from the session.

### Managing the active state

- [isActive](mpnowplayingsession/isactive.md): A Boolean value that indicates whether the session is the app’s active Now Playing session.
- [canBecomeActive](mpnowplayingsession/canbecomeactive.md): A Boolean value that indicates whether the session can become the app’s active Now Playing session.
- [becomeActiveIfPossible(completion:)](mpnowplayingsession/becomeactiveifpossible%28completion_%29.md): Tells the system to make the session the active Now Playing session if possible.

### Configuring Now Playing information

- [automaticallyPublishesNowPlayingInfo](mpnowplayingsession/automaticallypublishesnowplayinginfo.md): A Boolean that indicates whether Now Playing info automatically publishes.
- [nowPlayingInfoCenter](mpnowplayingsession/nowplayinginfocenter.md): The Now Playing information center associated with the session.

### Handling remote commands

- [remoteCommandCenter](mpnowplayingsession/remotecommandcenter.md): The remote command center associated with the session.

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

## See Also

### Now Playing information

- [Becoming a now playable app](becoming-a-now-playable-app.md): Ensure your app is eligible to become the Now Playing app by adopting best practices for providing Now Playing info and registering for remote command center actions.
- [MPNowPlayingInfoCenter](mpnowplayinginfocenter.md): An object for setting the Now Playing information for media that your app plays.
- [MPNowPlayingInfoLanguageOption](mpnowplayinginfolanguageoption.md): A set of interfaces for setting the language option for the Now Playing item.
- [MPNowPlayingInfoLanguageOptionGroup](mpnowplayinginfolanguageoptiongroup.md): A grouped set of language options where only a single language option can be active at a time.
- [Language option characteristic constants](language-option-characteristic-constants.md): The constants for defining language characteristics.

# MPNowPlayingSession (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 14.0+ · visionOS 1.0+

An object that manages Now Playing information and remote commands for multiple players.

## Declaration

```objectivec
@interface MPNowPlayingSession : NSObject
```

<a id="overview"></a>

## Overview

An [AVPlayer](../avfoundation/avplayer.md) object can have only one Now Playing session. An [AVPlayerViewController](../avkit/avplayerviewcontroller.md) manages its own player and Now Playing session, so you can’t add your own Now Playing session.

> **Important**

>  If you create an `MPNowPlayingSession` object, don’t attempt to use it with the `AVPlayer` that an `AVPlayerViewController` presents. Create your own `AVPlayer` instance with custom playback controls to use with your Now Playing session.

## Topics

### Creating a session

- [initWithPlayers:](mpnowplayingsession/init%28players_%29.md): Creates a Now Playing session object.

### Accessing the delegate object

- [delegate](mpnowplayingsession/delegate.md): The Now Playing session’s delegate object.
- [MPNowPlayingSessionDelegate](mpnowplayingsessiondelegate.md): A protocol that defines the delegate interface for a Now Playing session.

### Managing players

- [players](mpnowplayingsession/players.md): The array of players associated with the session.
- [addPlayer:](mpnowplayingsession/addplayer%28__%29.md): Adds a player to the session.
- [removePlayer:](mpnowplayingsession/removeplayer%28__%29.md): Removes a player from the session.

### Managing the active state

- [active](mpnowplayingsession/isactive.md): A Boolean value that indicates whether the session is the app’s active Now Playing session.
- [canBecomeActive](mpnowplayingsession/canbecomeactive.md): A Boolean value that indicates whether the session can become the app’s active Now Playing session.
- [becomeActiveIfPossibleWithCompletion:](mpnowplayingsession/becomeactiveifpossible%28completion_%29.md): Tells the system to make the session the active Now Playing session if possible.

### Configuring Now Playing information

- [automaticallyPublishesNowPlayingInfo](mpnowplayingsession/automaticallypublishesnowplayinginfo.md): A Boolean that indicates whether Now Playing info automatically publishes.
- [nowPlayingInfoCenter](mpnowplayingsession/nowplayinginfocenter.md): The Now Playing information center associated with the session.

### Handling remote commands

- [remoteCommandCenter](mpnowplayingsession/remotecommandcenter.md): The remote command center associated with the session.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Now Playing information

- [Becoming a now playable app](becoming-a-now-playable-app.md): Ensure your app is eligible to become the Now Playing app by adopting best practices for providing Now Playing info and registering for remote command center actions.
- [MPNowPlayingInfoCenter](mpnowplayinginfocenter.md): An object for setting the Now Playing information for media that your app plays.
- [MPNowPlayingInfoLanguageOption](mpnowplayinginfolanguageoption.md): A set of interfaces for setting the language option for the Now Playing item.
- [MPNowPlayingInfoLanguageOptionGroup](mpnowplayinginfolanguageoptiongroup.md): A grouped set of language options where only a single language option can be active at a time.
- [Language option characteristic constants](language-option-characteristic-constants.md): The constants for defining language characteristics.
