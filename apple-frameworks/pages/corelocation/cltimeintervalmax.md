> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corelocation/cltimeintervalmax

# CLTimeIntervalMax (Swift)

**Framework:** Core Location  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A value representing an unlimited amount of time.

## Declaration

```swift
let CLTimeIntervalMax: TimeInterval
```

<a id="Discussion"></a>

## Discussion

When scheduling deferred updates, you can use this constant to indicate that a new update should be triggered only after a large time interval has passed.

# CLTimeIntervalMax (Objective-C)

**Framework:** Core Location  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A value representing an unlimited amount of time.

## Declaration

```objectivec
extern const NSTimeInterval CLTimeIntervalMax;
```

<a id="Discussion"></a>

## Discussion

When scheduling deferred updates, you can use this constant to indicate that a new update should be triggered only after a large time interval has passed.
