> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediasetup/mssetupsession](https://developer.apple.com/documentation/mediasetup/mssetupsession)

# MSSetupSession (Swift)

**Framework:** Media Setup  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An object that manages the transfer of configuration information between your app, the system, your media service, and HomePod speakers.

## Declaration

```swift
class MSSetupSession
```

<a id="overview"></a>

## Overview

An `MSSetupSession` object guides the user through connecting HomePod speakers in their home to your media service. When your iOS app calls [start()](mssetupsession/start%28%29.md), the session displays a setup view in the window you provide in [presentationAnchor()](msauthenticationpresentationcontext/presentationanchor%28%29.md). The session embeds your app icon and the [serviceName](msserviceaccount/servicename.md) you provide into this setup view.

![A wireframe showing the setup view Media Setup displays to the user, with callouts indicating where your app’s icon and your media service’s name appear.](https://developer.apple.com/images/com.apple.mediasetup/media-3729379@2x.png)

After the user confirms the setup by tapping the “Use in Home” button, the system requests an OAuth token from your authentication service and shares the token with HomePod speakers in the user’s home.

## Topics

### Preparing the Configuration View

- [init(serviceAccount:)](mssetupsession/init%28serviceaccount_%29.md): Creates a new session.
- [account](mssetupsession/account.md): The streaming media service account for the session to configure.

### Presenting the Configuration View

- [presentationContext](mssetupsession/presentationcontext.md): A delegate that provides media setup display information to the system.
- [MSAuthenticationPresentationContext](msauthenticationpresentationcontext.md): A protocol that provides media setup display information to the system.
- [start()](mssetupsession/start%28%29.md): Initiates the service configuration process and sends the account details of the streaming media service to the user’s HomePod speakers.

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

### HomePod Configuration

- [MSServiceAccount](msserviceaccount.md): Account details for accessing a streaming media service.

# MSSetupSession (Objective-C)

**Framework:** Media Setup  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An object that manages the transfer of configuration information between your app, the system, your media service, and HomePod speakers.

## Declaration

```objectivec
@interface MSSetupSession : NSObject
```

<a id="overview"></a>

## Overview

An `MSSetupSession` object guides the user through connecting HomePod speakers in their home to your media service. When your iOS app calls [startWithError:](mssetupsession/start%28%29.md), the session displays a setup view in the window you provide in [presentationAnchor](msauthenticationpresentationcontext/presentationanchor%28%29.md). The session embeds your app icon and the [serviceName](msserviceaccount/servicename.md) you provide into this setup view.

![A wireframe showing the setup view Media Setup displays to the user, with callouts indicating where your app’s icon and your media service’s name appear.](https://developer.apple.com/images/com.apple.mediasetup/media-3729379@2x.png)

After the user confirms the setup by tapping the “Use in Home” button, the system requests an OAuth token from your authentication service and shares the token with HomePod speakers in the user’s home.

## Topics

### Preparing the Configuration View

- [initWithServiceAccount:](mssetupsession/init%28serviceaccount_%29.md): Creates a new session.
- [account](mssetupsession/account.md): The streaming media service account for the session to configure.

### Presenting the Configuration View

- [presentationContext](mssetupsession/presentationcontext.md): A delegate that provides media setup display information to the system.
- [MSAuthenticationPresentationContext](msauthenticationpresentationcontext.md): A protocol that provides media setup display information to the system.
- [startWithError:](mssetupsession/start%28%29.md): Initiates the service configuration process and sends the account details of the streaming media service to the user’s HomePod speakers.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### HomePod Configuration

- [MSServiceAccount](msserviceaccount.md): Account details for accessing a streaming media service.
