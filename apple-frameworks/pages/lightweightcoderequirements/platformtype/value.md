> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/platformtype/value](https://developer.apple.com/documentation/lightweightcoderequirements/platformtype/value)

# PlatformType.Value

**Framework:** LightweightCodeRequirements  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Supported Platform Types for a process

## Declaration

```swift
struct Value
```

<a id="overview"></a>

## Overview

A platform type is an indication of the runtime enviroment of a process. These runtime enviroments indicate the types of code that can run in the process, the dyld shared cache in use and impact some security policies.

## Topics

### Initializers

- [init(rawValue:)](value/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

### Instance Properties

- [rawValue](value/rawvalue.md): The corresponding value of the raw type.

### Type Properties

- [driverKit](value/driverkit.md): The platform type for a driverkit driver.
- [iOS](value/ios.md): The platform type for iOS/iPadOS software running on iOS/ipadOS/macOS/visionOS
- [iOSSimulator](value/iossimulator.md): The platform type for code running in the iOS Simulator.
- [macCatalyst](value/maccatalyst.md): The platform type for macCatalyst software.
- [macOS](value/macos.md): The platform type for non-macCatalyst macOS software.
- [tvOS](value/tvos.md): The platform type for native tvOS software.
- [tvOSSimulator](value/tvossimulator.md): The platform type for code running in the tvOS Simulator.
- [visionOS](value/visionos.md): The platform type for native visionOS code.
- [visionOSSimulator](value/visionossimulator.md): The platform type for code running in the visionOS Simulator.
- [watchOS](value/watchos.md): The platform type for native watchOS software.
- [watchOSSimulator](value/watchossimulator.md): The platform type for code running in the watchOS Simulator.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
