> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocussystem/environment:containsenvironment:](https://developer.apple.com/documentation/uikit/uifocussystem/environment:containsenvironment:)

# environment:containsEnvironment:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether one focus environment is contained by another.

## Declaration

```objectivec
+ (BOOL) environment:(id<UIFocusEnvironment>) environment containsEnvironment:(id<UIFocusEnvironment>) otherEnvironment;
```

## Parameters

- `environment`: The object whose children you want to check.
- `otherEnvironment`: The target object.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `environment` is an ancestor of `otherEnvironment`, or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

Use this method to determine if the two environments are related. For example, you might specify a [UIWindow](../uiwindow.md) object for `environment` and a [UIView](../uiview.md) object for `otherEnvironment` to determine if the view is displayed by that window.
