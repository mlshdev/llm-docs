> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/registerforservices()](https://developer.apple.com/documentation/appkit/nstextview/registerforservices())

# registerForServices() (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Registers send and return types for the Services facility.

## Declaration

```swift
class func registerForServices()
```

<a id="Discussion"></a>

## Discussion

This method is invoked automatically when the first instance of a text view is created; you should never need to invoke it directly.

Subclasses of  `NSTextView` that wish to add support for new service types should override [registerForServices()](registerforservices%28%29.md) to call `super` and then register their own new types.

# registerForServices (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Registers send and return types for the Services facility.

## Declaration

```objectivec
+ (void) registerForServices;
```

<a id="Discussion"></a>

## Discussion

This method is invoked automatically when the first instance of a text view is created; you should never need to invoke it directly.

Subclasses of  `NSTextView` that wish to add support for new service types should override [registerForServices](registerforservices%28%29.md) to call `super` and then register their own new types.
