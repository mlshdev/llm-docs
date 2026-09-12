> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrsubscribeparams](https://developer.apple.com/documentation/matter/mtrsubscribeparams)

# MTRSubscribeParams (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRSubscribeParams
```

## Topics

### Initializers

- [init(minInterval:maxInterval:)](mtrsubscribeparams/init%28mininterval_maxinterval_%29.md)

### Instance Properties

- [autoResubscribe](mtrsubscribeparams/autoresubscribe.md): Deprecated.
- [keepPreviousSubscriptions](mtrsubscribeparams/keepprevioussubscriptions.md): Deprecated.
- [maxInterval](mtrsubscribeparams/maxinterval.md)
- [minInterval](mtrsubscribeparams/mininterval.md)
- [shouldReplaceExistingSubscriptions](mtrsubscribeparams/shouldreplaceexistingsubscriptions.md)
- [shouldReportEventsUrgently](mtrsubscribeparams/shouldreporteventsurgently.md)
- [shouldResubscribeAutomatically](mtrsubscribeparams/shouldresubscribeautomatically.md)

### Type Methods

- [new()](mtrsubscribeparams/new%28%29.md): Deprecated.

## Relationships

### Inherits From

- [MTRReadParams](mtrreadparams.md)

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

# MTRSubscribeParams (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRSubscribeParams : MTRReadParams
```

## Topics

### Initializers

- [initWithMinInterval:maxInterval:](mtrsubscribeparams/init%28mininterval_maxinterval_%29.md)
- [init](mtrsubscribeparams/init.md): Deprecated.

### Instance Properties

- [autoResubscribe](mtrsubscribeparams/autoresubscribe.md): Deprecated.
- [keepPreviousSubscriptions](mtrsubscribeparams/keepprevioussubscriptions.md): Deprecated.
- [maxInterval](mtrsubscribeparams/maxinterval.md)
- [minInterval](mtrsubscribeparams/mininterval.md)
- [replaceExistingSubscriptions](mtrsubscribeparams/shouldreplaceexistingsubscriptions.md)
- [reportEventsUrgently](mtrsubscribeparams/shouldreporteventsurgently.md)
- [resubscribeAutomatically](mtrsubscribeparams/shouldresubscribeautomatically.md)

### Type Methods

- [new](mtrsubscribeparams/new%28%29.md): Deprecated.

## Relationships

### Inherits From

- [MTRReadParams](mtrreadparams.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
