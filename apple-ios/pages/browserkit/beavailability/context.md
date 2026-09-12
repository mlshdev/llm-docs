> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/beavailability/context](https://developer.apple.com/documentation/browserkit/beavailability/context)

# BEAvailability.Context (Swift)

**Framework:** BrowserKit  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ · iPadOS 18.4+

The category of app for which you determine eligibility.

## Declaration

```swift
enum Context
```

## Topics

### Identifying app contexts

- [BEAvailability.Context.webBrowser](context/webbrowser.md): The app is a web browser.

### Initializing an availability object

- [init(rawValue:)](context/init%28rawvalue_%29.md): Creates a new context with the given value of the underlying type.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# BEEligibilityContext (Objective-C)

**Framework:** BrowserKit  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · visionOS 2.4+ · watchOS 11.4+

The category of app for which you determine eligibility.

## Declaration

```objectivec
enum BEEligibilityContext : NSInteger;
```

## Topics

### Identifying app contexts

- [BEEligibilityContextWebBrowser](context/webbrowser.md): The app is a web browser.
