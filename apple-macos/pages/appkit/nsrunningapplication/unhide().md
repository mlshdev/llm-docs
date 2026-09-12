> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrunningapplication/unhide()](https://developer.apple.com/documentation/appkit/nsrunningapplication/unhide())

# unhide() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Attempts to unhide or the application.

## Declaration

```swift
func unhide() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the application was successfully shown, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The property of this value will be [false](https://developer.apple.com/documentation/swift/false) if the application has already quit, or if of a type that is unable to be hidden.

## See Also

### Hiding and unhiding applications

- [hide()](hide%28%29.md): Attempts to hide or the application.
- [isHidden](ishidden.md): Indicates whether the application is currently hidden.

# unhide (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Attempts to unhide or the application.

## Declaration

```objectivec
- (BOOL) unhide;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the application was successfully shown, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The property of this value will be [false](https://developer.apple.com/documentation/swift/false) if the application has already quit, or if of a type that is unable to be hidden.

## See Also

### Hiding and unhiding applications

- [hide](hide%28%29.md): Attempts to hide or the application.
- [hidden](ishidden.md): Indicates whether the application is currently hidden.
