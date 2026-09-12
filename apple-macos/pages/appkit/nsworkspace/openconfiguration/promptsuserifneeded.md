> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/openconfiguration/promptsuserifneeded](https://developer.apple.com/documentation/appkit/nsworkspace/openconfiguration/promptsuserifneeded)

# promptsUserIfNeeded (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A Boolean value indicating whether to display errors, authentication requests, or other UI elements to the user.

## Declaration

```swift
var promptsUserIfNeeded: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the system presents a user interface to request or display relevant information. The system waits until the user dismisses the UI before calling any relevant completion handlers. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

# promptsUserIfNeeded (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A Boolean value indicating whether to display errors, authentication requests, or other UI elements to the user.

## Declaration

```objectivec
@property BOOL promptsUserIfNeeded;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the system presents a user interface to request or display relevant information. The system waits until the user dismisses the UI before calling any relevant completion handlers. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).
