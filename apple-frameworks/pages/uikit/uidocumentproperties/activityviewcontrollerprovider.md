> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentproperties/activityviewcontrollerprovider](https://developer.apple.com/documentation/uikit/uidocumentproperties/activityviewcontrollerprovider)

# activityViewControllerProvider (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A closure that provides an activity view controller for sharing the document.

## Declaration

```swift
var activityViewControllerProvider: (() -> UIActivityViewController)? { get set }
```

<a id="Discussion"></a>

## Discussion

To support sharing, assign a closure that returns a [UIActivityViewController](../uiactivityviewcontroller.md) that you configure to share the document. When you set this property, a person can share the document by tapping the share button in the navigation item’s title menu.

# activityViewControllerProvider (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A closure that provides an activity view controller for sharing the document.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) UIActivityViewController * (^activityViewControllerProvider)();
```

<a id="Discussion"></a>

## Discussion

To support sharing, assign a closure that returns a [UIActivityViewController](../uiactivityviewcontroller.md) that you configure to share the document. When you set this property, a person can share the document by tapping the share button in the navigation item’s title menu.
