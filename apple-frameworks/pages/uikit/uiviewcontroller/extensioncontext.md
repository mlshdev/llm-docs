> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/extensioncontext](https://developer.apple.com/documentation/uikit/uiviewcontroller/extensioncontext)

# extensionContext (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the extension context of the view controller.

## Declaration

```swift
var extensionContext: NSExtensionContext? { get }
```

<a id="Discussion"></a>

## Discussion

The view controller can check this property to see if it participates in an extension request. If no extension context is set for the current view controller, the system walks up the view controller hierarchy to find a parent view controller that has a non `nil` `extensionContext` value.

# extensionContext (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the extension context of the view controller.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSExtensionContext * extensionContext;
```

<a id="Discussion"></a>

## Discussion

The view controller can check this property to see if it participates in an extension request. If no extension context is set for the current view controller, the system walks up the view controller hierarchy to find a parent view controller that has a non `nil` `extensionContext` value.
