> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avexternalstoragedevice/authorizationstatus](https://developer.apple.com/documentation/avfoundation/avexternalstoragedevice/authorizationstatus)

# authorizationStatus (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Your app’s authorization status for the external storage device.

## Declaration

```swift
class var authorizationStatus: AVAuthorizationStatus { get }
```

<a id="Discussion"></a>

## Discussion

If the value is [AVAuthorizationStatus.notDetermined](../avauthorizationstatus/notdetermined.md), you can request access by calling the [requestAccess(completionHandler:)](requestaccess%28completionhandler_%29.md) method.

# authorizationStatus (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Your app’s authorization status for the external storage device.

## Declaration

```objectivec
@property (class, readonly) AVAuthorizationStatus authorizationStatus;
```

<a id="Discussion"></a>

## Discussion

If the value is [AVAuthorizationStatusNotDetermined](../avauthorizationstatus/notdetermined.md), you can request access by calling the [requestAccessWithCompletionHandler:](requestaccess%28completionhandler_%29.md) method.
