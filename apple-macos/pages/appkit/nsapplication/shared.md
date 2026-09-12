> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/shared](https://developer.apple.com/documentation/appkit/nsapplication/shared)

# shared (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the application instance, creating it if it doesn’t exist yet.

## Declaration

```swift
class var shared: NSApplication { get }
```

<a id="return-value"></a>

## Return Value

The shared application object.

## Mentioned In

- [Passing control from one app to another with cooperative activation](../passing-control-from-one-app-to-another-with-cooperative-activation.md)

<a id="Discussion"></a>

## Discussion

This method also makes a connection to the window server and completes other initialization. Your program should invoke this method as one of the first statements in `main()`; this invoking is done for you if you create your application with Xcode. To retrieve the `NSApplication` instance after it has been created, use the global variable [NSApp](../nsapp.md) or invoke this method.

## See Also

### Related Documentation

- [run()](run%28%29.md): Starts the main event loop.
- [terminate(\_:)](terminate%28__%29.md): Terminates the receiver.

### Getting the shared app object

- [NSApp](../nsapp.md): The global variable for the shared app instance.

# sharedApplication (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the application instance, creating it if it doesn’t exist yet.

## Declaration

```objectivec
@property (class, strong, readonly) NSApplication * sharedApplication;
```

<a id="return-value"></a>

## Return Value

The shared application object.

## Mentioned In

- [Passing control from one app to another with cooperative activation](../passing-control-from-one-app-to-another-with-cooperative-activation.md)

<a id="Discussion"></a>

## Discussion

This method also makes a connection to the window server and completes other initialization. Your program should invoke this method as one of the first statements in `main()`; this invoking is done for you if you create your application with Xcode. To retrieve the `NSApplication` instance after it has been created, use the global variable [NSApp](../nsapp.md) or invoke this method.

## See Also

### Related Documentation

- [run](run%28%29.md): Starts the main event loop.
- [terminate:](terminate%28__%29.md): Terminates the receiver.

### Getting the shared app object

- [NSApp](../nsapp.md): The global variable for the shared app instance.
