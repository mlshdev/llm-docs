> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionconfiguration/background(withidentifier:)](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/background(withidentifier:))

# background(withIdentifier:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a session configuration object that allows HTTP and HTTPS uploads or downloads to be performed in the background.

## Declaration

```swift
class func background(withIdentifier identifier: String) -> URLSessionConfiguration
```

## Parameters

- `identifier`: The unique identifier for the configuration object. This parameter must not be `nil` or an empty string.

<a id="return-value"></a>

## Return Value

A configuration object that causes the system to perform upload and download tasks in a separate process.

## Mentioned In

- [Downloading files in the background](../downloading-files-in-the-background.md)

<a id="Discussion"></a>

## Discussion

Use this method to initialize a configuration object suitable for transferring data files while the app runs in the background. A session configured with this object hands control of the transfers over to the system, which handles the transfers in a separate process. In iOS, this configuration makes it possible for transfers to continue even when the app itself is suspended or terminated.

If an iOS app is terminated by the system and relaunched, the app can use the same `identifier` to create a new configuration object and session and to retrieve the status of transfers that were in progress at the time of termination. This behavior applies only for normal termination of the app by the system. If the user terminates the app from the multitasking screen, the system cancels all of the session’s background transfers. In addition, the system does not automatically relaunch apps that were force quit by the user. The user must explicitly relaunch the app before transfers can begin again.

You can configure an background session to schedule transfers at the discretion of the system for optimal performance using the [isDiscretionary](isdiscretionary.md) property. When transferring large amounts of data, you are encouraged to set the value of this property to [true](https://developer.apple.com/documentation/swift/true). For an example of using the background configuration, see [Downloading files in the background](../downloading-files-in-the-background.md).

## See Also

### Creating a session configuration object

- [default](default.md): A default session configuration object.
- [ephemeral](ephemeral.md): A session configuration that uses no persistent storage for caches, cookies, or credentials.
- [init()](init%28%29.md): Deprecated. Creates an empty session configuration.
- [new()](new%28%29.md): Deprecated. Creates an empty session configuration.

# backgroundSessionConfigurationWithIdentifier: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a session configuration object that allows HTTP and HTTPS uploads or downloads to be performed in the background.

## Declaration

```objectivec
+ (NSURLSessionConfiguration *) backgroundSessionConfigurationWithIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: The unique identifier for the configuration object. This parameter must not be `nil` or an empty string.

<a id="return-value"></a>

## Return Value

A configuration object that causes the system to perform upload and download tasks in a separate process.

## Mentioned In

- [Downloading files in the background](../downloading-files-in-the-background.md)

<a id="Discussion"></a>

## Discussion

Use this method to initialize a configuration object suitable for transferring data files while the app runs in the background. A session configured with this object hands control of the transfers over to the system, which handles the transfers in a separate process. In iOS, this configuration makes it possible for transfers to continue even when the app itself is suspended or terminated.

If an iOS app is terminated by the system and relaunched, the app can use the same `identifier` to create a new configuration object and session and to retrieve the status of transfers that were in progress at the time of termination. This behavior applies only for normal termination of the app by the system. If the user terminates the app from the multitasking screen, the system cancels all of the session’s background transfers. In addition, the system does not automatically relaunch apps that were force quit by the user. The user must explicitly relaunch the app before transfers can begin again.

You can configure an background session to schedule transfers at the discretion of the system for optimal performance using the [discretionary](isdiscretionary.md) property. When transferring large amounts of data, you are encouraged to set the value of this property to [true](https://developer.apple.com/documentation/swift/true). For an example of using the background configuration, see [Downloading files in the background](../downloading-files-in-the-background.md).

## See Also

### Creating a session configuration object

- [defaultSessionConfiguration](default.md): A default session configuration object.
- [ephemeralSessionConfiguration](ephemeral.md): A session configuration that uses no persistent storage for caches, cookies, or credentials.
- [init](init%28%29.md): Deprecated. Creates an empty session configuration.
- [new](new%28%29.md): Deprecated. Creates an empty session configuration.
