> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcodekit/xcsourceeditorcommandinvocation/cancellationhandler](https://developer.apple.com/documentation/xcodekit/xcsourceeditorcommandinvocation/cancellationhandler)

# cancellationHandler (Swift)

**Framework:** XcodeKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

A handler to be invoked by Xcode to indicate that the invocation has been canceled by the user.

## Declaration

```swift
var cancellationHandler: () -> Void { get set }
```

<a id="Discussion"></a>

## Discussion

There are no guarantees about the thread or queue on which the cancellation handler is invoked. After receiving a cancellation, the command’s `completionHandler` is invoked and no changes are applied.

# cancellationHandler (Objective-C)

**Framework:** XcodeKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

A handler to be invoked by Xcode to indicate that the invocation has been canceled by the user.

## Declaration

```objectivec
@property (copy) void (^cancellationHandler)();
```

<a id="Discussion"></a>

## Discussion

There are no guarantees about the thread or queue on which the cancellation handler is invoked. After receiving a cancellation, the command’s `completionHandler` is invoked and no changes are applied.
