> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservicedelegate/sharingservice(_:didshareitems:)](https://developer.apple.com/documentation/appkit/nssharingservicedelegate/sharingservice(_:didshareitems:))

# sharingService(\_:didShareItems:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Invoked when the sharing service has finished sharing the items.

## Declaration

```swift
@MainActor optional func sharingService(_ sharingService: NSSharingService, didShareItems items: [Any])
```

## Parameters

- `sharingService`: The sharing service.
- `items`: The items being shared.

## See Also

### Sharing Items

- [sharingService(\_:willShareItems:)](sharingservice%28__willshareitems_%29.md): Invoked when the sharing service will share the specified items.
- [sharingService(\_:didFailToShareItems:error:)](sharingservice%28__didfailtoshareitems_error_%29.md): Invoked when the sharing service encountered an error when sharing items.

# sharingService:didShareItems: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the sharing service has finished sharing the items.

## Declaration

```objectivec
- (void) sharingService:(NSSharingService *) sharingService didShareItems:(NSArray *) items;
```

## Parameters

- `sharingService`: The sharing service.
- `items`: The items being shared.

## See Also

### Sharing Items

- [sharingService:willShareItems:](sharingservice%28__willshareitems_%29.md): Invoked when the sharing service will share the specified items.
- [sharingService:didFailToShareItems:error:](sharingservice%28__didfailtoshareitems_error_%29.md): Invoked when the sharing service encountered an error when sharing items.
