> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/applicationshouldhandlereopen(_:hasvisiblewindows:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/applicationshouldhandlereopen(_:hasvisiblewindows:))

# applicationShouldHandleReopen(\_:hasVisibleWindows:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates if the app responds to reopen AppleEvents.

## Declaration

```swift
@MainActor optional func applicationShouldHandleReopen(_ sender: NSApplication, hasVisibleWindows: Bool) -> Bool
```

## Parameters

- `sender`: The application object.
- `hasVisibleWindows`: Indicates whether the `NSApplication` object found any visible windows in your application. You can use this value as an indication of whether the application would do anything if you return [true](https://developer.apple.com/documentation/swift/true).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you want the application to perform its normal tasks or [false](https://developer.apple.com/documentation/swift/false) if you want the application to do nothing.

<a id="Discussion"></a>

## Discussion

These events are sent whenever the Finder reactivates an already running application because someone double-clicked it again or used the dock to activate it.

By default the Application Kit will handle this event by checking whether there are any visible `NSWindow` (not `NSPanel`) objects, and, if there are none, it goes through the standard untitled document creation (the same as it does if `theApplication` is launched without any document to open). For most document-based applications, an untitled document will be created.

The application delegate will also get a chance to respond to the normal untitled document delegate methods. If you implement this method in your application delegate, it will be called before any of the default behavior happens. If you return [true](https://developer.apple.com/documentation/swift/true), then `NSApplication` will proceed as normal. If you return [false](https://developer.apple.com/documentation/swift/false), then `NSApplication` will do nothing. So, you can either implement this method with a version that does nothing, and return [false](https://developer.apple.com/documentation/swift/false) if you do not want anything to happen at all (not recommended), or you can implement this method, handle the event yourself in some custom way, and return [false](https://developer.apple.com/documentation/swift/false).

Miniaturized windows, windows in the Dock, are considered visible by this method, and cause `flag` to return [true](https://developer.apple.com/documentation/swift/true), despite the fact that miniaturized windows return [false](https://developer.apple.com/documentation/swift/false) when sent an [isVisible](../nswindow/isvisible.md) message.

## See Also

### Managing Windows

- [applicationWillUpdate(\_:)](applicationwillupdate%28__%29.md): Tells the delegate that the app is about to update its windows.
- [applicationDidUpdate(\_:)](applicationdidupdate%28__%29.md): Tells the delegate that the app’s windows did update.

# applicationShouldHandleReopen:hasVisibleWindows: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates if the app responds to reopen AppleEvents.

## Declaration

```objectivec
- (BOOL) applicationShouldHandleReopen:(NSApplication *) sender hasVisibleWindows:(BOOL) hasVisibleWindows;
```

## Parameters

- `sender`: The application object.
- `hasVisibleWindows`: Indicates whether the `NSApplication` object found any visible windows in your application. You can use this value as an indication of whether the application would do anything if you return [true](https://developer.apple.com/documentation/swift/true).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you want the application to perform its normal tasks or [false](https://developer.apple.com/documentation/swift/false) if you want the application to do nothing.

<a id="Discussion"></a>

## Discussion

These events are sent whenever the Finder reactivates an already running application because someone double-clicked it again or used the dock to activate it.

By default the Application Kit will handle this event by checking whether there are any visible `NSWindow` (not `NSPanel`) objects, and, if there are none, it goes through the standard untitled document creation (the same as it does if `theApplication` is launched without any document to open). For most document-based applications, an untitled document will be created.

The application delegate will also get a chance to respond to the normal untitled document delegate methods. If you implement this method in your application delegate, it will be called before any of the default behavior happens. If you return [true](https://developer.apple.com/documentation/swift/true), then `NSApplication` will proceed as normal. If you return [false](https://developer.apple.com/documentation/swift/false), then `NSApplication` will do nothing. So, you can either implement this method with a version that does nothing, and return [false](https://developer.apple.com/documentation/swift/false) if you do not want anything to happen at all (not recommended), or you can implement this method, handle the event yourself in some custom way, and return [false](https://developer.apple.com/documentation/swift/false).

Miniaturized windows, windows in the Dock, are considered visible by this method, and cause `flag` to return [true](https://developer.apple.com/documentation/swift/true), despite the fact that miniaturized windows return [false](https://developer.apple.com/documentation/swift/false) when sent an [visible](../nswindow/isvisible.md) message.

## See Also

### Managing Windows

- [applicationWillUpdate:](applicationwillupdate%28__%29.md): Tells the delegate that the app is about to update its windows.
- [applicationDidUpdate:](applicationdidupdate%28__%29.md): Tells the delegate that the app’s windows did update.
