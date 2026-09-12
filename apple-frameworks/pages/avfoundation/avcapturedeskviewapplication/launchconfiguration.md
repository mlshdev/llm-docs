> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedeskviewapplication/launchconfiguration](https://developer.apple.com/documentation/avfoundation/avcapturedeskviewapplication/launchconfiguration)

# AVCaptureDeskViewApplication.LaunchConfiguration (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** Mac Catalyst 16.1+ · macOS 13.0+

An object that configures how to present Desk View.

## Declaration

```swift
class LaunchConfiguration
```

<a id="overview"></a>

## Overview

Use this object to specify the frame for Desk View when it launches, and when to execute the completion handler. You can specify whether to perform the completion handler as soon as Desk View is visible to the user, or only after they start Desk View.

## Topics

### Customizing the presentation

- [mainWindowFrame](launchconfiguration/mainwindowframe.md): The frame for Desk View after it launches.
- [requiresSetUpModeCompletion](launchconfiguration/requiressetupmodecompletion.md): A Boolean value that specifies whether the system requires the user to complete setup mode before it executes the completion handler.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Presenting the Desk View app

- [present(completionHandler:)](present%28completionhandler_%29.md): Launches Desk View with no additional configuration and then performs a completion handler if you specify it.
- [present(launchConfiguration:completionHandler:)](present%28launchconfiguration_completionhandler_%29.md): Launches Desk View with the configuration and completion handler that you specify.

# AVCaptureDeskViewApplicationLaunchConfiguration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** Mac Catalyst 16.1+ · macOS 13.0+

An object that configures how to present Desk View.

## Declaration

```objectivec
@interface AVCaptureDeskViewApplicationLaunchConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Use this object to specify the frame for Desk View when it launches, and when to execute the completion handler. You can specify whether to perform the completion handler as soon as Desk View is visible to the user, or only after they start Desk View.

## Topics

### Customizing the presentation

- [mainWindowFrame](launchconfiguration/mainwindowframe.md): The frame for Desk View after it launches.
- [requiresSetUpModeCompletion](launchconfiguration/requiressetupmodecompletion.md): A Boolean value that specifies whether the system requires the user to complete setup mode before it executes the completion handler.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Presenting the Desk View app

- [presentWithCompletionHandler:](present%28completionhandler_%29.md): Launches Desk View with no additional configuration and then performs a completion handler if you specify it.
- [presentWithLaunchConfiguration:completionHandler:](present%28launchconfiguration_completionhandler_%29.md): Launches Desk View with the configuration and completion handler that you specify.
