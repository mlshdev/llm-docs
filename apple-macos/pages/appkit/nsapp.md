> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapp](https://developer.apple.com/documentation/appkit/nsapp)

# NSApp (Swift)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

The global variable for the shared app instance.

## Declaration

```swift
@MainActor var NSApp: NSApplication!
```

<a id="Discussion"></a>

## Discussion

The value in this global variable is the same as accessing the [shared](nsapplication/shared.md) property of the app.

## See Also

### Getting the shared app object

- [shared](nsapplication/shared.md): Returns the application instance, creating it if it doesn’t exist yet.

# NSApp (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

The global variable for the shared app instance.

## Declaration

```objectivec
extern NSApplication * NSApp;
```

<a id="Discussion"></a>

## Discussion

The value in this global variable is the same as accessing the [sharedApplication](nsapplication/shared.md) property of the app.

## See Also

### Getting the shared app object

- [sharedApplication](nsapplication/shared.md): Returns the application instance, creating it if it doesn’t exist yet.
