> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/iswritingtoolsavailable](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/iswritingtoolsavailable)

# isWritingToolsAvailable (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 15.2+

A Boolean value that indicates whether Writing Tools features are available to enable.

## Declaration

```swift
class var isWritingToolsAvailable: Bool { get }
```

<a id="discussion"></a>

## Discussion

The value of this property is `true` when Writing Tools features are supported, even when the user has not enabled the feature. Writing Tools support might be unavailable because of device constraints.

# isWritingToolsAvailable (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 15.2+

A Boolean value that indicates whether Writing Tools features are available to enable.

## Declaration

```objectivec
@property (class, readonly) BOOL isWritingToolsAvailable;
```

<a id="discussion"></a>

## Discussion

The value of this property is `true` when Writing Tools features are supported, even when the user has not enabled the feature. Writing Tools support might be unavailable because of device constraints.
