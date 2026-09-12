> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontroller/layoutenvironment](https://developer.apple.com/documentation/uikit/uisplitviewcontroller/layoutenvironment)

# UISplitViewController.LayoutEnvironment (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Constants that indicate the current layout of the containing split view controller.

## Declaration

```swift
enum LayoutEnvironment
```

## Topics

### Constants

- [UISplitViewController.LayoutEnvironment.collapsed](layoutenvironment/collapsed.md): Contained within a collapsed split view controller.
- [UISplitViewController.LayoutEnvironment.expanded](layoutenvironment/expanded.md): Contained within an expanded split view controller.
- [UISplitViewController.LayoutEnvironment.none](layoutenvironment/none.md): There is no containing split view controller.

### Initializers

- [init(rawValue:)](layoutenvironment/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# UISplitViewControllerLayoutEnvironment (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Constants that indicate the current layout of the containing split view controller.

## Declaration

```objectivec
enum UISplitViewControllerLayoutEnvironment : NSInteger;
```

## Topics

### Constants

- [UISplitViewControllerLayoutEnvironmentCollapsed](layoutenvironment/collapsed.md): Contained within a collapsed split view controller.
- [UISplitViewControllerLayoutEnvironmentExpanded](layoutenvironment/expanded.md): Contained within an expanded split view controller.
- [UISplitViewControllerLayoutEnvironmentNone](layoutenvironment/none.md): There is no containing split view controller.
