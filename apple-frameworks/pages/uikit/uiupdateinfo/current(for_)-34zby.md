> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiupdateinfo/current(for:)-34zby](https://developer.apple.com/documentation/uikit/uiupdateinfo/current(for:)-34zby)

# current(for:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Returns an object that describes the current UI update state for the specified view.

## Declaration

```swift
class func current(for view: UIView) -> Self?
```

## See Also

### Getting the current UI update information

- [current(for:)](current%28for_%29-6y1z9.md): Returns an object that describes the current UI update state for the specified window.

# currentUpdateInfoForView: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · tvOS 18.0+ · visionOS 2.0+

Returns an object that describes the current UI update state for the specified view.

## Declaration

```objectivec
+ (instancetype) currentUpdateInfoForView:(UIView *) view;
```

## See Also

### Getting the current UI update information

- [currentUpdateInfoForWindowScene:](current%28for_%29-6y1z9.md): Returns an object that describes the current UI update state for the specified window.
