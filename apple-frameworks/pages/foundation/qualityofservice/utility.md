> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/qualityofservice/utility](https://developer.apple.com/documentation/foundation/qualityofservice/utility)

# QualityOfService.utility (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
case utility
```

<a id="Discussion"></a>

## Discussion

Used for performing work which the user is unlikely to be immediately waiting for the results. This work may have been requested by the user or initiated automatically, and often operates at user-visible timescales using a non-modal progress indicator. For example, periodic content updates or bulk file operations, such as media import.

## See Also

### Constants

- [QualityOfService.userInteractive](userinteractive.md)
- [QualityOfService.userInitiated](userinitiated.md)
- [QualityOfService.background](background.md)
- [QualityOfService.default](default.md)

# NSQualityOfServiceUtility (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
NSQualityOfServiceUtility
```

<a id="Discussion"></a>

## Discussion

Used for performing work which the user is unlikely to be immediately waiting for the results. This work may have been requested by the user or initiated automatically, and often operates at user-visible timescales using a non-modal progress indicator. For example, periodic content updates or bulk file operations, such as media import.

## See Also

### Constants

- [NSQualityOfServiceUserInteractive](userinteractive.md)
- [NSQualityOfServiceUserInitiated](userinitiated.md)
- [NSQualityOfServiceBackground](background.md)
- [NSQualityOfServiceDefault](default.md)
