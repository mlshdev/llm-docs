> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/beavailability](https://developer.apple.com/documentation/browserkit/beavailability)

# BEAvailability (Swift)

**Framework:** BrowserKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+

A class that tests whether a device is eligible to run an alternative browser engine.

## Declaration

```swift
class BEAvailability
```

## Topics

### Testing eligibility

- [isEligible(for:completionHandler:)](beavailability/iseligible%28for_completionhandler_%29.md): Tests whether the device is eligible to use an app that contains an alternative browser engine.

### Identifying contexts

- [BEAvailability.Context](beavailability/context.md): The category of app for which you determine eligibility.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Essentials

- [Transferring browsing data to another browser](transferring-browsing-data-to-another-browser.md): Allow people to transfer browsing history, bookmarks, reading lists, and browser extensions to or from your app using a system-provided sheet.

# BEAvailability (Objective-C)

**Framework:** BrowserKit  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+

A class that tests whether a device is eligible to run an alternative browser engine.

## Declaration

```objectivec
@interface BEAvailability : NSObject
```

## Topics

### Testing eligibility

- [isEligibleForContext:completionHandler:](beavailability/iseligible%28for_completionhandler_%29.md): Tests whether the device is eligible to use an app that contains an alternative browser engine.

### Identifying contexts

- [BEEligibilityContext](beavailability/context.md): The category of app for which you determine eligibility.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Essentials

- [Transferring browsing data to another browser](transferring-browsing-data-to-another-browser.md): Allow people to transfer browsing history, bookmarks, reading lists, and browser extensions to or from your app using a system-provided sheet.
