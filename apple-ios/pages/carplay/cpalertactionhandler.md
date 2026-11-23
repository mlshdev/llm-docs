> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpalertactionhandler

# CPAlertActionHandler (Swift)

**Framework:** CarPlay  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

The declaration for an alert action handler.

## Declaration

```swift
typealias CPAlertActionHandler = (CPAlertAction) -> Void
```

## Parameters

- `action`: The alert action that invoked the block.

## See Also

### Getting the handler

- [handler](cpalertaction/handler.md): The closure that CarPlay invokes after the user taps the action button.

# CPAlertActionHandler (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

The declaration for an alert action handler.

## Declaration

```objectivec
typedef void (^)(CPAlertAction *) CPAlertActionHandler;
```

## Parameters

- `action`: The alert action that invoked the block.

## See Also

### Getting the handler

- [handler](cpalertaction/handler.md): The closure that CarPlay invokes after the user taps the action button.
