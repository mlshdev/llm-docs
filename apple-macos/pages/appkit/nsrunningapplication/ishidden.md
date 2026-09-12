> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrunningapplication/ishidden](https://developer.apple.com/documentation/appkit/nsrunningapplication/ishidden)

# isHidden (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Indicates whether the application is currently hidden.

## Declaration

```swift
var isHidden: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is observable using key-value observing.

## See Also

### Hiding and unhiding applications

- [hide()](hide%28%29.md): Attempts to hide or the application.
- [unhide()](unhide%28%29.md): Attempts to unhide or the application.

# hidden (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Indicates whether the application is currently hidden.

## Declaration

```objectivec
@property (readonly, getter=isHidden) BOOL hidden;
```

<a id="Discussion"></a>

## Discussion

This property is observable using key-value observing.

## See Also

### Hiding and unhiding applications

- [hide](hide%28%29.md): Attempts to hide or the application.
- [unhide](unhide%28%29.md): Attempts to unhide or the application.
