> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocussystem/init(for:)](https://developer.apple.com/documentation/uikit/uifocussystem/init(for:))

# init(for:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 12.0+ (deprecated in 15.0) · iPadOS 12.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · tvOS 12.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Retrieves a focus system object that contains the state information for the specified object.

> Use `UIFocusSystem/focusSystem(for:)` instead.

## Declaration

```swift
init?(for environment: any UIFocusEnvironment)
```

## Parameters

- `environment`: The object whose state you want to return. Specify the view, view controller, or window whose state you want. You can also specify any other object that adopts the [UIFocusEnvironment](../uifocusenvironment.md) protocol.

<a id="return-value"></a>

## Return Value

The [UIFocusSystem](../uifocussystem.md) object that manages the state for the specified object or `nil` if focus interactions are not available for the object.

# focusSystemForEnvironment: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

Retrieves a focus system object that contains the state information for the specified object.

## Declaration

```objectivec
+ (UIFocusSystem *) focusSystemForEnvironment:(id<UIFocusEnvironment>) environment;
```

## Parameters

- `environment`: The object whose state you want to return. Specify the view, view controller, or window whose state you want. You can also specify any other object that adopts the [UIFocusEnvironment](../uifocusenvironment.md) protocol.

<a id="return-value"></a>

## Return Value

The [UIFocusSystem](../uifocussystem.md) object that manages the state for the specified object or `nil` if focus interactions are not available for the object.
