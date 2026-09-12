> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/context](https://developer.apple.com/documentation/appkit/nsevent/context)

# context (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.12)

The display graphics context for this event.

> This method always returns `nil`. If you need access to the current drawing context, use [current](../nsgraphicscontext/current.md) inside of a draw operation.

## Declaration

```swift
var context: NSGraphicsContext? { get }
```

# context (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.12)

The display graphics context for this event.

> This method always returns `nil`. If you need access to the current drawing context, use [currentContext](../nsgraphicscontext/current.md) inside of a draw operation.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSGraphicsContext * context;
```
