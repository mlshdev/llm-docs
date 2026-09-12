> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imageplaygroundpersonalizationpolicy](https://developer.apple.com/documentation/imageplayground/imageplaygroundpersonalizationpolicy)

# ImagePlaygroundPersonalizationPolicy

**Framework:** Image Playground  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ (deprecated in 26.4) · iPadOS 18.4+ (deprecated in 26.4) · Mac Catalyst 18.4+ (deprecated in 26.4) · macOS 15.4+ (deprecated in 26.4) · visionOS 2.4+ (deprecated in 26.4)

An option for enabling or disabling personalization in the system interface.

> Use the ImagePlaygroundOptions.Personalization type.

## Declaration

```swift
enum ImagePlaygroundPersonalizationPolicy
```

<a id="overview"></a>

## Overview

Use this type to configure the personalization behavior for the view controllers and SwiftUI view modifiers you use in your interface.

## Topics

### Getting the policy

- [ImagePlaygroundPersonalizationPolicy.automatic](imageplaygroundpersonalizationpolicy/automatic.md): Deprecated. An option to choose the most appropriate personalization behavior.
- [ImagePlaygroundPersonalizationPolicy.enabled](imageplaygroundpersonalizationpolicy/enabled.md): Deprecated. An option to enable personalization features in the view controller.
- [ImagePlaygroundPersonalizationPolicy.disabled](imageplaygroundpersonalizationpolicy/disabled.md): Deprecated. An option to disable personalization features in the view controller.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Specifying the configuration of the playground

- [selectedGenerationStyle](imageplaygroundviewcontroller/selectedgenerationstyle.md): Generation style to pre-select upong launching the playground among those in `allowedGenerationStyles`.
- [allowedGenerationStyles](imageplaygroundviewcontroller/allowedgenerationstyles.md): A list of allowed generation styles to choose from in the playground.
- [personalizationPolicy](imageplaygroundviewcontroller/personalizationpolicy.md): Deprecated. The policy to apply when determining whether to include people in generated images.
