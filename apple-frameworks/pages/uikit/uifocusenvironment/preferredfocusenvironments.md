> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusenvironment/preferredfocusenvironments](https://developer.apple.com/documentation/uikit/uifocusenvironment/preferredfocusenvironments)

# preferredFocusEnvironments (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

An array of focus environments, ordered by priority, to which this environment prefers focus to be directed during a focus update.

## Declaration

```swift
var preferredFocusEnvironments: [any UIFocusEnvironment] { get }
```

<a id="Discussion"></a>

## Discussion

The preferred focus environments listed in this property define where to search for the default focused item in an environment, such as when focus updates programmatically. Starting from the target environment, each preferred focus environment is recursively searched in the order it appears in the array until an eligible, focusable item is found. Preferred focus environments can include focusable and nonfocusable items, in addition to nonitem environments. Returning an empty array is equivalent to returning an array containing only `self`.

## See Also

### Controlling user-generated focus movements

- [preferredFocusedView](preferredfocusedview.md): Deprecated. Specifies the view that should be focused if this environment is focused.

# preferredFocusEnvironments (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

An array of focus environments, ordered by priority, to which this environment prefers focus to be directed during a focus update.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<id<UIFocusEnvironment>> * preferredFocusEnvironments;
```

<a id="Discussion"></a>

## Discussion

The preferred focus environments listed in this property define where to search for the default focused item in an environment, such as when focus updates programmatically. Starting from the target environment, each preferred focus environment is recursively searched in the order it appears in the array until an eligible, focusable item is found. Preferred focus environments can include focusable and nonfocusable items, in addition to nonitem environments. Returning an empty array is equivalent to returning an array containing only `self`.

## See Also

### Controlling user-generated focus movements

- [preferredFocusedView](preferredfocusedview.md): Deprecated. Specifies the view that should be focused if this environment is focused.
