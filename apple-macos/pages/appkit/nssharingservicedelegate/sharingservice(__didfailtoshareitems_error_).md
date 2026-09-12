> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservicedelegate/sharingservice(_:didfailtoshareitems:error:)](https://developer.apple.com/documentation/appkit/nssharingservicedelegate/sharingservice(_:didfailtoshareitems:error:))

# sharingService(\_:didFailToShareItems:error:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Invoked when the sharing service encountered an error when sharing items.

## Declaration

```swift
@MainActor optional func sharingService(_ sharingService: NSSharingService, didFailToShareItems items: [Any], error: any Error)
```

## Parameters

- `sharingService`: The sharing service.
- `items`: The items being shared.
- `error`: The error that was encountered when trying to share the item. If the error is [NSUserCancelledError](https://developer.apple.com/documentation/foundation/nsusercancellederror-swift.var), the user simply cancelled the error.

## See Also

### Sharing Items

- [sharingService(\_:willShareItems:)](sharingservice%28__willshareitems_%29.md): Invoked when the sharing service will share the specified items.
- [sharingService(\_:didShareItems:)](sharingservice%28__didshareitems_%29.md): Invoked when the sharing service has finished sharing the items.

# sharingService:didFailToShareItems:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the sharing service encountered an error when sharing items.

## Declaration

```objectivec
- (void) sharingService:(NSSharingService *) sharingService didFailToShareItems:(NSArray *) items error:(NSError *) error;
```

## Parameters

- `sharingService`: The sharing service.
- `items`: The items being shared.
- `error`: The error that was encountered when trying to share the item. If the error is [NSUserCancelledError](https://developer.apple.com/documentation/foundation/nsusercancellederror-swift.var), the user simply cancelled the error.

## See Also

### Sharing Items

- [sharingService:willShareItems:](sharingservice%28__willshareitems_%29.md): Invoked when the sharing service will share the specified items.
- [sharingService:didShareItems:](sharingservice%28__didshareitems_%29.md): Invoked when the sharing service has finished sharing the items.
