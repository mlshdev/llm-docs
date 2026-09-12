> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationload](https://developer.apple.com/documentation/appkit/nsapplicationload)

# NSApplicationLoad

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Startup function to call when running Cocoa code from a Carbon application.

## Declaration

```objectivec
extern BOOL NSApplicationLoad();
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the [NSApplication](nsapplication.md) object was successfully initialized and can now be used from your Carbon application or [false](https://developer.apple.com/documentation/swift/false) if there was an error during initialization.

<a id="Discussion"></a>

## Discussion

You typically call this function before calling other Cocoa code in a plug-in loaded into a primarily Carbon application. If the shared [NSApplication](nsapplication.md) object isn’t already initialized, this function initializes it and sets up the necessary event handlers for Cocoa.
