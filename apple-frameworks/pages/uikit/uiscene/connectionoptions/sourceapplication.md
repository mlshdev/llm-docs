> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscene/connectionoptions/sourceapplication](https://developer.apple.com/documentation/uikit/uiscene/connectionoptions/sourceapplication)

# sourceApplication (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The bundle ID of the app that originated the request.

## Declaration

```swift
var sourceApplication: String? { get }
```

<a id="Discussion"></a>

## Discussion

If the request originated from another app belonging to your team, UIKit places the bundle ID of that app in this property. If the team identifier of the originating app is different than the team identifier of the current app, this property is `nil`.

# sourceApplication (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The bundle ID of the app that originated the request.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * sourceApplication;
```

<a id="Discussion"></a>

## Discussion

If the request originated from another app belonging to your team, UIKit places the bundle ID of that app in this property. If the team identifier of the originating app is different than the team identifier of the current app, this property is `nil`.
