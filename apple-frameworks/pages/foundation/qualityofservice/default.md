> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/qualityofservice/default](https://developer.apple.com/documentation/foundation/qualityofservice/default)

# QualityOfService.default (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
case `default`
```

<a id="Discussion"></a>

## Discussion

Indicates no explicit quality of service information. Whenever possible, an appropriate quality of service is determined from available sources. Otherwise, some quality of service level between `NSQualityOfServiceUserInteractive` and `NSQualityOfServiceUtility` is used.

## See Also

### Constants

- [QualityOfService.userInteractive](userinteractive.md)
- [QualityOfService.userInitiated](userinitiated.md)
- [QualityOfService.utility](utility.md)
- [QualityOfService.background](background.md)

# NSQualityOfServiceDefault (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
NSQualityOfServiceDefault
```

<a id="Discussion"></a>

## Discussion

Indicates no explicit quality of service information. Whenever possible, an appropriate quality of service is determined from available sources. Otherwise, some quality of service level between `NSQualityOfServiceUserInteractive` and `NSQualityOfServiceUtility` is used.

## See Also

### Constants

- [NSQualityOfServiceUserInteractive](userinteractive.md)
- [NSQualityOfServiceUserInitiated](userinitiated.md)
- [NSQualityOfServiceUtility](utility.md)
- [NSQualityOfServiceBackground](background.md)
