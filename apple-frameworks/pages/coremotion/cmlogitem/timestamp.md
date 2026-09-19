> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremotion/cmlogitem/timestamp

# timestamp (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The time when the logged item is valid.

## Declaration

```swift
var timestamp: TimeInterval { get }
```

## Mentioned In

- [Getting processed device-motion data](../getting-processed-device-motion-data.md)

<a id="Discussion"></a>

## Discussion

The timestamp is the amount of time in seconds since the device booted.

# timestamp (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The time when the logged item is valid.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval timestamp;
```

## Mentioned In

- [Getting processed device-motion data](../getting-processed-device-motion-data.md)

<a id="Discussion"></a>

## Discussion

The timestamp is the amount of time in seconds since the device booted.
