> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenesession/userinfo](https://developer.apple.com/documentation/uikit/uiscenesession/userinfo)

# userInfo (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Custom attributes that you can associate with the scene.

## Declaration

```swift
var userInfo: [String : Any]? { get set }
```

## See Also

### Getting additional session information

- [stateRestorationActivity](staterestorationactivity.md): An activity object you can use to restore the previous contents of your scene’s interface.

# userInfo (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Custom attributes that you can associate with the scene.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDictionary<NSString *,id> * userInfo;
```

## See Also

### Getting additional session information

- [stateRestorationActivity](staterestorationactivity.md): An activity object you can use to restore the previous contents of your scene’s interface.
