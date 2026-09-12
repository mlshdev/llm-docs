> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/menuchangedmessagesenabled](https://developer.apple.com/documentation/appkit/nsmenu/menuchangedmessagesenabled)

# menuChangedMessagesEnabled (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Indicates whether messages are sent to the application’s windows each time the menu changes.

## Declaration

```swift
var menuChangedMessagesEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property indicates whether messages are sent to the application’s windows each time the menu changes.

To avoid the “flickering” effect of many successive menu changes, set the value of this property to [false](https://developer.apple.com/documentation/swift/false), make changes to the menu, and then set the value of this property to [true](https://developer.apple.com/documentation/swift/true). This approach has the effect of batching changes and applying them all at once.

<a id="Special-Considerations"></a>

### Special Considerations

In macOS 10.6 and later this property has no effect.

# menuChangedMessagesEnabled (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.11)

Indicates whether messages are sent to the application’s windows each time the menu changes.

## Declaration

```objectivec
@property BOOL menuChangedMessagesEnabled;
```

<a id="Discussion"></a>

## Discussion

This property indicates whether messages are sent to the application’s windows each time the menu changes.

To avoid the “flickering” effect of many successive menu changes, set the value of this property to [false](https://developer.apple.com/documentation/swift/false), make changes to the menu, and then set the value of this property to [true](https://developer.apple.com/documentation/swift/true). This approach has the effect of batching changes and applying them all at once.

<a id="Special-Considerations"></a>

### Special Considerations

In macOS 10.6 and later this property has no effect.
