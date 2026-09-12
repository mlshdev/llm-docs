> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkqueryanchor](https://developer.apple.com/documentation/healthkit/hkqueryanchor)

# HKQueryAnchor (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

An object used to identify all the samples previously returned by an anchored object query.

## Declaration

```swift
class HKQueryAnchor
```

<a id="overview"></a>

## Overview

The system returns [HKQueryAnchor](hkqueryanchor.md) objects in both the anchored object query’s results handler and it’s update handler. Use the anchors to query for samples added or deleted after the result or update.

## Topics

### Creating Anchor Objects

- [init(fromValue:)](hkqueryanchor/init%28fromvalue_%29.md): Returns an anchor object from the provided anchor value.

### Initializers

- [init(coder:)](hkqueryanchor/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# HKQueryAnchor (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

An object used to identify all the samples previously returned by an anchored object query.

## Declaration

```objectivec
@interface HKQueryAnchor : NSObject
```

<a id="overview"></a>

## Overview

The system returns [HKQueryAnchor](hkqueryanchor.md) objects in both the anchored object query’s results handler and it’s update handler. Use the anchors to query for samples added or deleted after the result or update.

## Topics

### Creating Anchor Objects

- [anchorFromValue:](hkqueryanchor/init%28fromvalue_%29.md): Returns an anchor object from the provided anchor value.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
