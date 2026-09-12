> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/accessibilitysettings/animatedimagesenabled](https://developer.apple.com/documentation/accessibility/accessibilitysettings/animatedimagesenabled)

# animatedImagesEnabled

**Framework:** Accessibility  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A Boolean value that indicates whether the system setting for playing animated images is on.

## Declaration

```swift
static var animatedImagesEnabled: Bool { get }
```

<a id="discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the system setting for Animated Images is on; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Pausing animated images

- [Animated images](../animated-images.md): Pause animations in animated images in your app when people turn off the Animated Images setting.
- [animatedImagesEnabledDidChangeNotification](animatedimagesenableddidchangenotification.md): A notification that posts when the system setting for playing animated images changes.
