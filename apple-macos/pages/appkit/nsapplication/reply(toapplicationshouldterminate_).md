> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/reply(toapplicationshouldterminate:)](https://developer.apple.com/documentation/appkit/nsapplication/reply(toapplicationshouldterminate:))

# reply(toApplicationShouldTerminate:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Responds to `NSTerminateLater` once the app knows whether it can terminate.

## Declaration

```swift
func reply(toApplicationShouldTerminate shouldTerminate: Bool)
```

## Parameters

- `shouldTerminate`: Specify [true](https://developer.apple.com/documentation/swift/true) if you want the app to terminate; otherwise, specify [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If your app delegate returns `NSTerminateLater` from its [applicationShouldTerminate(\_:)](../nsapplicationdelegate/applicationshouldterminate%28__%29.md) method, your code must subsequently call this method to let the `NSApplication` object know whether it can actually terminate itself.

## See Also

### Terminating the app

- [terminate(\_:)](terminate%28__%29.md): Terminates the receiver.

# replyToApplicationShouldTerminate: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Responds to `NSTerminateLater` once the app knows whether it can terminate.

## Declaration

```objectivec
- (void) replyToApplicationShouldTerminate:(BOOL) shouldTerminate;
```

## Parameters

- `shouldTerminate`: Specify [true](https://developer.apple.com/documentation/swift/true) if you want the app to terminate; otherwise, specify [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If your app delegate returns `NSTerminateLater` from its [applicationShouldTerminate:](../nsapplicationdelegate/applicationshouldterminate%28__%29.md) method, your code must subsequently call this method to let the `NSApplication` object know whether it can actually terminate itself.

## See Also

### Terminating the app

- [terminate:](terminate%28__%29.md): Terminates the receiver.
