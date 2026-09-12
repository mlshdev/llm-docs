> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiupdateinfo/current(for:)-6y1z9](https://developer.apple.com/documentation/uikit/uiupdateinfo/current(for:)-6y1z9)

# current(for:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Returns an object that describes the current UI update state for the specified window.

## Declaration

```swift
class func current(for windowScene: UIWindowScene) -> Self?
```

## See Also

### Getting the current UI update information

- [current(for:)](current%28for_%29-34zby.md): Returns an object that describes the current UI update state for the specified view.

# currentUpdateInfoForWindowScene: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · tvOS 18.0+ · visionOS 2.0+

Returns an object that describes the current UI update state for the specified window.

## Declaration

```objectivec
+ (instancetype) currentUpdateInfoForWindowScene:(UIWindowScene *) windowScene;
```

## See Also

### Getting the current UI update information

- [currentUpdateInfoForView:](current%28for_%29-34zby.md): Returns an object that describes the current UI update state for the specified view.
