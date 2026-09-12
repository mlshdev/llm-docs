> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/moonphase](https://developer.apple.com/documentation/weatherkit/moonphase)

# MoonPhase

**Framework:** WeatherKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An enumeration that specifies the moon phase kind.

## Declaration

```swift
@frozen enum MoonPhase
```

<a id="overview"></a>

## Overview

Waxing and waning provide information about direction. Crescent and gibbous describe shape.

## Topics

### Getting the moon phase

- [MoonPhase.firstQuarter](moonphase/firstquarter.md): The disk is half lit.
- [MoonPhase.full](moonphase/full.md): The disk is fully lit where the moon is visible.
- [MoonPhase.lastQuarter](moonphase/lastquarter.md): The disk is half lit.
- [MoonPhase.new](moonphase/new.md): The disk is unlit where the moon is not visible.
- [MoonPhase.waningCrescent](moonphase/waningcrescent.md): The disk is partially lit as the moon is waning.
- [MoonPhase.waningGibbous](moonphase/waninggibbous.md): The disk is half lit as the moon is waning.
- [MoonPhase.waxingCrescent](moonphase/waxingcrescent.md): The disk is partially lit as the moon is waxing.
- [MoonPhase.waxingGibbous](moonphase/waxinggibbous.md): The disk is half lit as the moon is waxing.

### Describing the moon phase

- [accessibilityDescription](moonphase/accessibilitydescription.md): A localized accessibility description describing the moon phase.
- [description](moonphase/description.md): A localized string describing the moon phase.
- [symbolName](moonphase/symbolname.md): The SF Symbol icon that represents the moon phase.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Celestial information

- [SunEvents](sunevents.md): An enumeration that represents dates of solar events, including sunrise, sunset, dawn, and dusk.
- [MoonEvents](moonevents.md): A structure that represents lunar events.
