> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/delegate](https://developer.apple.com/documentation/appkit/nsapplication/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The app delegate object.

## Declaration

```swift
weak var delegate: (any NSApplicationDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The app object and app delegate work in tandem to manage the app’s overall behavior. Typically, the delegate is configured automatically by the Xcode project templates.

## See Also

### Managing the app’s behavior

- [NSApplicationDelegate](../nsapplicationdelegate.md): A set of methods that manage your app’s life cycle and its interaction with common system services.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The app delegate object.

## Declaration

```objectivec
@property (weak, nullable) id<NSApplicationDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The app object and app delegate work in tandem to manage the app’s overall behavior. Typically, the delegate is configured automatically by the Xcode project templates.

## See Also

### Managing the app’s behavior

- [NSApplicationDelegate](../nsapplicationdelegate.md): A set of methods that manage your app’s life cycle and its interaction with common system services.
