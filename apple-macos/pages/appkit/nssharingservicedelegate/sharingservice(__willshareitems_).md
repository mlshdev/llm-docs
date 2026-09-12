> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservicedelegate/sharingservice(_:willshareitems:)](https://developer.apple.com/documentation/appkit/nssharingservicedelegate/sharingservice(_:willshareitems:))

# sharingService(\_:willShareItems:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Invoked when the sharing service will share the specified items.

## Declaration

```swift
@MainActor optional func sharingService(_ sharingService: NSSharingService, willShareItems items: [Any])
```

## Parameters

- `sharingService`: The sharing service.
- `items`: The items being shared.

## See Also

### Sharing Items

- [sharingService(\_:didShareItems:)](sharingservice%28__didshareitems_%29.md): Invoked when the sharing service has finished sharing the items.
- [sharingService(\_:didFailToShareItems:error:)](sharingservice%28__didfailtoshareitems_error_%29.md): Invoked when the sharing service encountered an error when sharing items.

# sharingService:willShareItems: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the sharing service will share the specified items.

## Declaration

```objectivec
- (void) sharingService:(NSSharingService *) sharingService willShareItems:(NSArray *) items;
```

## Parameters

- `sharingService`: The sharing service.
- `items`: The items being shared.

## See Also

### Sharing Items

- [sharingService:didShareItems:](sharingservice%28__didshareitems_%29.md): Invoked when the sharing service has finished sharing the items.
- [sharingService:didFailToShareItems:error:](sharingservice%28__didfailtoshareitems_error_%29.md): Invoked when the sharing service encountered an error when sharing items.
