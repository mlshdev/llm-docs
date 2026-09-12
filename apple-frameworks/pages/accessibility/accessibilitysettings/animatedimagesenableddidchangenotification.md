> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/accessibilitysettings/animatedimagesenableddidchangenotification](https://developer.apple.com/documentation/accessibility/accessibilitysettings/animatedimagesenableddidchangenotification)

# animatedImagesEnabledDidChangeNotification

**Framework:** Accessibility  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A notification that posts when the system setting for playing animated images changes.

## Declaration

```swift
static var animatedImagesEnabledDidChangeNotification: Notification.Name { get }
```

## See Also

### Pausing animated images

- [Animated images](../animated-images.md): Pause animations in animated images in your app when people turn off the Animated Images setting.
- [animatedImagesEnabled](animatedimagesenabled.md): A Boolean value that indicates whether the system setting for playing animated images is on.
