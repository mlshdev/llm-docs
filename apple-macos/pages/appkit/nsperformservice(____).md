> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsperformservice(_:_:)](https://developer.apple.com/documentation/appkit/nsperformservice(_:_:))

# NSPerformService(\_:\_:) (Swift)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Programmatically invokes a Services menu service.

## Declaration

```swift
func NSPerformService(_ itemName: String, _ pboard: NSPasteboard?) -> Bool
```

## Parameters

- `itemName`: Specifies a Services menu item, in any language. If the requested service is from a submenu of the Services menu, the value must contain a slash (for example, “Mail/Selection”).
- `pboard`: The pasteboard containing the data required by the service. This data must be present for the service to succeed. On output, this pasteboard contains the data returned by the service provider.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the service was successfully performed or [false](https://developer.apple.com/documentation/swift/false) if it was not.

<a id="Discussion"></a>

## Discussion

Use this function to programmatically invoke a service found in the application’s Services menu.

# NSPerformService (Objective-C)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Programmatically invokes a Services menu service.

## Declaration

```objectivec
extern BOOL NSPerformService(NSString *itemName, NSPasteboard *pboard);
```

## Parameters

- `itemName`: Specifies a Services menu item, in any language. If the requested service is from a submenu of the Services menu, the value must contain a slash (for example, “Mail/Selection”).
- `pboard`: The pasteboard containing the data required by the service. This data must be present for the service to succeed. On output, this pasteboard contains the data returned by the service provider.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the service was successfully performed or [false](https://developer.apple.com/documentation/swift/false) if it was not.

<a id="Discussion"></a>

## Discussion

Use this function to programmatically invoke a service found in the application’s Services menu.
