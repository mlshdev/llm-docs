> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hksource/default()

# default() (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a source object for the current app.

## Declaration

```swift
class func `default`() -> HKSource
```

<a id="return-value"></a>

## Return Value

A source object for the current app.

<a id="Discussion"></a>

## Discussion

You can access the source object for the current app directly using this methods. To access other sources, use a source query or similar approach.

# defaultSource (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a source object for the current app.

## Declaration

```objectivec
+ (HKSource *) defaultSource;
```

<a id="return-value"></a>

## Return Value

A source object for the current app.

<a id="Discussion"></a>

## Discussion

You can access the source object for the current app directly using this methods. To access other sources, use a source query or similar approach.
