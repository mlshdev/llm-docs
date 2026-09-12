> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkcloudplayer/getcurrentsignedinplayer(forcontainer:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkcloudplayer/getcurrentsignedinplayer(forcontainer:completionhandler:))

# getCurrentSignedInPlayer(forContainer:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Returns player information for the currently signed-in player.

## Declaration

```swift
class func getCurrentSignedInPlayer(forContainer containerName: String?, completionHandler handler: @escaping @Sendable (GKCloudPlayer?, (any Error)?) -> Void)
```

```swift
class func currentSignedInPlayer(forContainer containerName: String?) async throws -> GKCloudPlayer
```

## Parameters

- `containerName`: String containing a unique container name associated with the app.
- `handler`: A block that is called after the player information is retrieved.

  - **player**: The GKCloudPlayer object representing the currently signed-in player.
  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is `nil`. See `GameKit Constants`for a list of error codes specific to GameKit.

<a id="Discussion"></a>

## Discussion

The container name must be a unique string associated with the app.

# getCurrentSignedInPlayerForContainer:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Returns player information for the currently signed-in player.

## Declaration

```objectivec
+ (void) getCurrentSignedInPlayerForContainer:(NSString *) containerName completionHandler:(void (^)(GKCloudPlayer *player, NSError *error)) handler;
```

## Parameters

- `containerName`: String containing a unique container name associated with the app.
- `handler`: A block that is called after the player information is retrieved.

  - **player**: The GKCloudPlayer object representing the currently signed-in player.
  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is `nil`. See `GameKit Constants`for a list of error codes specific to GameKit.

<a id="Discussion"></a>

## Discussion

The container name must be a unique string associated with the app.
