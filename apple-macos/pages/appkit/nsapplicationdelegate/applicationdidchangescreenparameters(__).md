> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/applicationdidchangescreenparameters(_:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/applicationdidchangescreenparameters(_:))

# applicationDidChangeScreenParameters(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate about changes to the configuration of any attached displays.

## Declaration

```swift
@MainActor optional func applicationDidChangeScreenParameters(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [didChangeScreenParametersNotification](../nsapplication/didchangescreenparametersnotification.md). Calling the [object](https://developer.apple.com/documentation/foundation/nsnotification/object) method of this notification returns the `NSApplication` object itself.

# applicationDidChangeScreenParameters: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate about changes to the configuration of any attached displays.

## Declaration

```objectivec
- (void) applicationDidChangeScreenParameters:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSApplicationDidChangeScreenParametersNotification](../nsapplication/didchangescreenparametersnotification.md). Calling the [object](https://developer.apple.com/documentation/foundation/nsnotification/object) method of this notification returns the `NSApplication` object itself.
