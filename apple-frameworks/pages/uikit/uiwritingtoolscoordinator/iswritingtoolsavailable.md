> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/iswritingtoolsavailable](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/iswritingtoolsavailable)

# isWritingToolsAvailable (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

A Boolean value that indicates whether Writing Tools features are available to enable.

## Declaration

```swift
class var isWritingToolsAvailable: Bool { get }
```

<a id="discussion"></a>

## Discussion

The value of this property is `true` when Writing Tools features are supported, even when the user has not enabled the feature. Writing Tools support might be unavailable because of device constraints.

# isWritingToolsAvailable (Objective-C)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

A Boolean value that indicates whether Writing Tools features are available to enable.

## Declaration

```objectivec
@property (class, nonatomic, assign, readonly) BOOL isWritingToolsAvailable;
```

<a id="discussion"></a>

## Discussion

The value of this property is `true` when Writing Tools features are supported, even when the user has not enabled the feature. Writing Tools support might be unavailable because of device constraints.
