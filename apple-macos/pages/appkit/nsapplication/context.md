> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/context](https://developer.apple.com/documentation/appkit/nsapplication/context)

# context (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.12)

The graphics context associated with the app.

> This method always returns nil. If you need access to the current drawing context, use \[NSGraphicsContext currentContext\] inside of a draw operation.

## Declaration

```swift
var context: NSGraphicsContext? { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the graphics context most recently used by your app.

# context (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.12)

The graphics context associated with the app.

> This method always returns nil. If you need access to the current drawing context, use \[NSGraphicsContext currentContext\] inside of a draw operation.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSGraphicsContext * context;
```

<a id="Discussion"></a>

## Discussion

This property contains the graphics context most recently used by your app.
