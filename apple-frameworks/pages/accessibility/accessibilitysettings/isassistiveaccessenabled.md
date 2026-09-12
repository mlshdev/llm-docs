> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/accessibilitysettings/isassistiveaccessenabled](https://developer.apple.com/documentation/accessibility/accessibilitysettings/isassistiveaccessenabled)

# isAssistiveAccessEnabled (Swift)

**Framework:** Accessibility  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A Boolean value that indicates whether Assistive Access is running.

## Declaration

```swift
static var isAssistiveAccessEnabled: Bool { get }
```

## Mentioned In

- [Optimizing your app for Assistive Access](../optimizing-your-app-for-assistive-access.md)

<a id="discussion"></a>

## Discussion

The value of this property doesn’t change during a process’s lifetime, so it isn’t necessary to observe changes.

## See Also

### Related Documentation

- [accessibilityAssistiveAccessEnabled](https://developer.apple.com/documentation/swiftui/environmentvalues/accessibilityassistiveaccessenabled): A Boolean value that indicates whether Assistive Access is in use.

### Supporting cognitive accessibility features

- [Assistive Access](../assistive-access.md): A mode that tailors the iOS and iPadOS experience for people with cognitive disabilities.
- [UISupportsFullScreenInAssistiveAccess](../../bundleresources/information-property-list/uisupportsfullscreeninassistiveaccess.md): A Boolean value that indicates if an iOS or iPadOS app appears as full screen in Assistive Access.

# AXAssistiveAccessEnabled (Objective-C)

**Framework:** Accessibility  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A Boolean value that indicates whether Assistive Access is running.

## Declaration

```objectivec
extern BOOL AXAssistiveAccessEnabled();
```

## Mentioned In

- [Optimizing your app for Assistive Access](../optimizing-your-app-for-assistive-access.md)

<a id="discussion"></a>

## Discussion

The value of this property doesn’t change during a process’s lifetime, so it isn’t necessary to observe changes.

## See Also

### Supporting cognitive accessibility features

- [Assistive Access](../assistive-access.md): A mode that tailors the iOS and iPadOS experience for people with cognitive disabilities.
- [UISupportsFullScreenInAssistiveAccess](../../bundleresources/information-property-list/uisupportsfullscreeninassistiveaccess.md): A Boolean value that indicates if an iOS or iPadOS app appears as full screen in Assistive Access.
