> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corelocation/clbodyidentifiable

# CLBodyIdentifiable (Swift)

**Framework:** Core Location  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type that identifies a physical body or view for heading calculations.

## Declaration

```swift
protocol CLBodyIdentifiable : NSObjectProtocol
```

<a id="Overview"></a>

## Overview

Adopt this protocol to identify a custom body, or pass a conforming view, such as a [UIKit](../uikit.md) [UIView](../uikit/uiview.md), to associate heading updates with your app’s user interface. When you set [headingBody](cllocationmanager/headingbody.md) to an object conforming to [CLBodyIdentifiable](clbodyidentifiable.md), Core Location calculates compass heading relative to that view rather than the device’s physical orientation.

Passing a view to [headingBody](cllocationmanager/headingbody.md) lets your app receive heading data that aligns with your user interface during orientation changes, when running in Stage Manager or Split View on iPad or iPhone Duo.

## Topics

### Heading configuration

- [headingBody](cllocationmanager/headingbody.md): A physical body or view that defines the reference orientation for heading calculations.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Compass headings

- [Getting heading and course information](getting-heading-and-course-information.md): Use a device’s orientation and course information for navigation.
- [CLHeading](clheading.md): The orientation of the user’s device, relative to true or magnetic north.

# CLBodyIdentifiable (Objective-C)

**Framework:** Core Location  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type that identifies a physical body or view for heading calculations.

## Declaration

```objectivec
@protocol CLBodyIdentifiable <NSObject>
```

<a id="Overview"></a>

## Overview

Adopt this protocol to identify a custom body, or pass a conforming view, such as a [UIKit](../uikit.md) [UIView](../uikit/uiview.md), to associate heading updates with your app’s user interface. When you set [headingBody](cllocationmanager/headingbody.md) to an object conforming to [CLBodyIdentifiable](clbodyidentifiable.md), Core Location calculates compass heading relative to that view rather than the device’s physical orientation.

Passing a view to [headingBody](cllocationmanager/headingbody.md) lets your app receive heading data that aligns with your user interface during orientation changes, when running in Stage Manager or Split View on iPad or iPhone Duo.

## Topics

### Heading configuration

- [headingBody](cllocationmanager/headingbody.md): A physical body or view that defines the reference orientation for heading calculations.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Compass headings

- [Getting heading and course information](getting-heading-and-course-information.md): Use a device’s orientation and course information for navigation.
- [CLHeading](clheading.md): The orientation of the user’s device, relative to true or magnetic north.
