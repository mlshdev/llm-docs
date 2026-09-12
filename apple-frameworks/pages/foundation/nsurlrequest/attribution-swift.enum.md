> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlrequest/attribution-swift.enum](https://developer.apple.com/documentation/foundation/nsurlrequest/attribution-swift.enum)

# NSURLRequest.Attribution (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The entities that can make a network request.

## Declaration

```swift
enum Attribution
```

<a id="overview"></a>

## Overview

Use one of these values when setting the [attribution](../urlrequest/attribution-swift.property.md) parameter of a [URLRequest](../urlrequest.md). If you don’t set a value, the system assumes [NSURLRequest.Attribution.developer](attribution-swift.enum/developer.md).

## Topics

### Request sources

- [NSURLRequest.Attribution.developer](attribution-swift.enum/developer.md): A developer-initiated network request.
- [NSURLRequest.Attribution.user](attribution-swift.enum/user.md): The user explicitly directs the app to make a network request.

### Initializers

- [init(rawValue:)](attribution-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Indicating the source of the request

- [attribution](../nsmutableurlrequest/attribution.md): The entity that initiates the network request.

# NSURLRequestAttribution (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The entities that can make a network request.

## Declaration

```objectivec
enum NSURLRequestAttribution : NSUInteger;
```

<a id="overview"></a>

## Overview

Use one of these values when setting the [attribution](../urlrequest/attribution-swift.property.md) parameter of a [URLRequest](../urlrequest.md). If you don’t set a value, the system assumes [NSURLRequestAttributionDeveloper](attribution-swift.enum/developer.md).

## Topics

### Request sources

- [NSURLRequestAttributionDeveloper](attribution-swift.enum/developer.md): A developer-initiated network request.
- [NSURLRequestAttributionUser](attribution-swift.enum/user.md): The user explicitly directs the app to make a network request.

## See Also

### Indicating the source of the request

- [attribution](../nsmutableurlrequest/attribution.md): The entity that initiates the network request.
