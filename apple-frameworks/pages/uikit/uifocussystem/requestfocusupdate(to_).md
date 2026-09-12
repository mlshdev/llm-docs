> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocussystem/requestfocusupdate(to:)](https://developer.apple.com/documentation/uikit/uifocussystem/requestfocusupdate(to:))

# requestFocusUpdate(to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

Submits a request to update the focus state of the specified object.

## Declaration

```swift
func requestFocusUpdate(to environment: any UIFocusEnvironment)
```

## Parameters

- `environment`: The view, view controller, window, or other object that you want to update. You can specify any object that adopts the [UIFocusEnvironment](../uifocusenvironment.md) protocol.

<a id="Discussion"></a>

## Discussion

Use this method to ask the focus engine to update the focus-related information for the specified object. If the update request is accepted, the focus engine updates the object’s focus-related information during the next run loop cycle. If the specified object does not contain a focused item, calling this method has no effect.

## See Also

### Managing focus updates

- [updateFocusIfNeeded()](updatefocusifneeded%28%29.md): Forces the system to act on a pending focus update for the current environment.

# requestFocusUpdateToEnvironment: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

Submits a request to update the focus state of the specified object.

## Declaration

```objectivec
- (void) requestFocusUpdateToEnvironment:(id<UIFocusEnvironment>) environment;
```

## Parameters

- `environment`: The view, view controller, window, or other object that you want to update. You can specify any object that adopts the [UIFocusEnvironment](../uifocusenvironment.md) protocol.

<a id="Discussion"></a>

## Discussion

Use this method to ask the focus engine to update the focus-related information for the specified object. If the update request is accepted, the focus engine updates the object’s focus-related information during the next run loop cycle. If the specified object does not contain a focused item, calling this method has no effect.

## See Also

### Managing focus updates

- [updateFocusIfNeeded](updatefocusifneeded%28%29.md): Forces the system to act on a pending focus update for the current environment.
