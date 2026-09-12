> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrunningapplication/hide()](https://developer.apple.com/documentation/appkit/nsrunningapplication/hide())

# hide() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Attempts to hide or the application.

## Declaration

```swift
func hide() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the application was successfully hidden, otherwise [false](https://developer.apple.com/documentation/swift/false).

## Mentioned In

- [Passing control from one app to another with cooperative activation](../passing-control-from-one-app-to-another-with-cooperative-activation.md)

<a id="Discussion"></a>

## Discussion

The property of this value will be [false](https://developer.apple.com/documentation/swift/false) if the application has already quit, or if of a type that is unable to be hidden.

## See Also

### Hiding and unhiding applications

- [unhide()](unhide%28%29.md): Attempts to unhide or the application.
- [isHidden](ishidden.md): Indicates whether the application is currently hidden.

# hide (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Attempts to hide or the application.

## Declaration

```objectivec
- (BOOL) hide;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the application was successfully hidden, otherwise [false](https://developer.apple.com/documentation/swift/false).

## Mentioned In

- [Passing control from one app to another with cooperative activation](../passing-control-from-one-app-to-another-with-cooperative-activation.md)

<a id="Discussion"></a>

## Discussion

The property of this value will be [false](https://developer.apple.com/documentation/swift/false) if the application has already quit, or if of a type that is unable to be hidden.

## See Also

### Hiding and unhiding applications

- [unhide](unhide%28%29.md): Attempts to unhide or the application.
- [hidden](ishidden.md): Indicates whether the application is currently hidden.
