> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowrestoration](https://developer.apple.com/documentation/appkit/nswindowrestoration)

# NSWindowRestoration (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that restoration classes must implement to handle the recreation of windows.

## Declaration

```swift
protocol NSWindowRestoration : NSObjectProtocol
```

<a id="overview"></a>

## Overview

At launch time, the application object retrieves the restoration class and uses its [restoreWindow(withIdentifier:state:completionHandler:)](nswindowrestoration/restorewindow%28withidentifier_state_completionhandler_%29.md) method to obtain a new window whose type matches the type that was preserved previously. Classes that adopt this protocol can use the provided information to create (or obtain a reference to) the window in the new application. As part of creating the window, the class should also create any related objects, such as window controllers, normally used to manage the window.

## Topics

### Handling Window Restoration

- [restoreWindow(withIdentifier:state:completionHandler:)](nswindowrestoration/restorewindow%28withidentifier_state_completionhandler_%29.md): Asks the class to provide a new window for the specified identifier.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSDocumentController](nsdocumentcontroller.md)

## See Also

### Window Restoration

- [Restoring your app’s state with AppKit](restoring-your-app-s-state-with-appkit.md): Provide continuity for people using your app by preserving current activities on macOS.
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md): A set of methods used to associate a unique identifier with objects in your user interface.

# NSWindowRestoration (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that restoration classes must implement to handle the recreation of windows.

## Declaration

```objectivec
@protocol NSWindowRestoration <NSObject>
```

<a id="overview"></a>

## Overview

At launch time, the application object retrieves the restoration class and uses its [restoreWindowWithIdentifier:state:completionHandler:](nswindowrestoration/restorewindow%28withidentifier_state_completionhandler_%29.md) method to obtain a new window whose type matches the type that was preserved previously. Classes that adopt this protocol can use the provided information to create (or obtain a reference to) the window in the new application. As part of creating the window, the class should also create any related objects, such as window controllers, normally used to manage the window.

## Topics

### Handling Window Restoration

- [restoreWindowWithIdentifier:state:completionHandler:](nswindowrestoration/restorewindow%28withidentifier_state_completionhandler_%29.md): Asks the class to provide a new window for the specified identifier.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSDocumentController](nsdocumentcontroller.md)

## See Also

### Window Restoration

- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md): A set of methods used to associate a unique identifier with objects in your user interface.
