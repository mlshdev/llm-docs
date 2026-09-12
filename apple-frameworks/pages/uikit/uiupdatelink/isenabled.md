> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiupdatelink/isenabled](https://developer.apple.com/documentation/uikit/uiupdatelink/isenabled)

# isEnabled (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

A Boolean value that determines whether the UI update link is monitoring UI updates.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

By default, the value of this property is [true](https://developer.apple.com/documentation/swift/true), which means the system invokes the actions of the UI update link for each UI update.

When the value is [false](https://developer.apple.com/documentation/swift/false), the UI update link has no effect. Set the value to [false](https://developer.apple.com/documentation/swift/false) if you want to temporarily turn off the UI update link.

# enabled (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · tvOS 18.0+ · visionOS 2.0+

A Boolean value that determines whether the UI update link is monitoring UI updates.

## Declaration

```objectivec
@property (nonatomic, getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

By default, the value of this property is [true](https://developer.apple.com/documentation/swift/true), which means the system invokes the actions of the UI update link for each UI update.

When the value is [false](https://developer.apple.com/documentation/swift/false), the UI update link has no effect. Set the value to [false](https://developer.apple.com/documentation/swift/false) if you want to temporarily turn off the UI update link.
