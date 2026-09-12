> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipageviewcontroller/optionskey](https://developer.apple.com/documentation/uikit/uipageviewcontroller/optionskey)

# UIPageViewController.OptionsKey (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Keys for creating the page view controller.

## Declaration

```swift
struct OptionsKey
```

## Topics

### Page options

- [interPageSpacing](optionskey/interpagespacing.md): Space between pages, in points.
- [spineLocation](optionskey/spinelocation.md): Location of the spine.

### Initializers

- [init(rawValue:)](optionskey/init%28rawvalue_%29.md): Creates a page view controller options structure with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a page view controller

- [init(transitionStyle:navigationOrientation:options:)](init%28transitionstyle_navigationorientation_options_%29.md): Initializes a newly created page view controller.
- [init(coder:)](init%28coder_%29.md): Creates a page view controller from data in an unarchiver.

# UIPageViewControllerOptionsKey (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Keys for creating the page view controller.

## Declaration

```objectivec
typedef NSString * UIPageViewControllerOptionsKey;
```

## Topics

### Page options

- [UIPageViewControllerOptionInterPageSpacingKey](optionskey/interpagespacing.md): Space between pages, in points.
- [UIPageViewControllerOptionSpineLocationKey](optionskey/spinelocation.md): Location of the spine.

## See Also

### Creating a page view controller

- [initWithTransitionStyle:navigationOrientation:options:](init%28transitionstyle_navigationorientation_options_%29.md): Initializes a newly created page view controller.
- [initWithCoder:](init%28coder_%29.md): Creates a page view controller from data in an unarchiver.
