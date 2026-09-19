> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkworkoutevent/metadata

# metadata (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

The metadata associated with the workout event.

## Declaration

```swift
var metadata: [String : Any]? { get }
```

## See Also

### Getting property data

- [dateInterval](dateinterval.md): The time and duration of the event.
- [type](type.md): The type of workout event.

# metadata (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

The metadata associated with the workout event.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDictionary<NSString *,id> * metadata;
```

## See Also

### Getting property data

- [dateInterval](dateinterval.md): The time and duration of the event.
- [type](type.md): The type of workout event.
