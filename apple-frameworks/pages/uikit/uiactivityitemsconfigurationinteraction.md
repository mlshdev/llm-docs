> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityitemsconfigurationinteraction](https://developer.apple.com/documentation/uikit/uiactivityitemsconfigurationinteraction)

# UIActivityItemsConfigurationInteraction (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A structure that describes types of interactions.

## Declaration

```swift
struct UIActivityItemsConfigurationInteraction
```

<a id="overview"></a>

## Overview

Specify which interactions you want the activity view to include in [supportedInteractions](uiactivityitemsconfiguration/supportedinteractions.md).

## Topics

### Selecting interactions

- [copy](uiactivityitemsconfigurationinteraction/copy.md): The copy interaction.
- [share](uiactivityitemsconfigurationinteraction/share.md): The share interaction.

### Creating an interaction type

- [init(\_:)](uiactivityitemsconfigurationinteraction/init%28__%29.md): Creates an activity items configuration interaction.
- [init(rawValue:)](uiactivityitemsconfigurationinteraction/init%28rawvalue_%29.md): Creates an activity items configuration interaction with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing supported interactions

- [supportedInteractions](uiactivityitemsconfiguration/supportedinteractions.md): The types of interactions that the configuration supports.

# UIActivityItemsConfigurationInteraction (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A structure that describes types of interactions.

## Declaration

```objectivec
typedef NSString * UIActivityItemsConfigurationInteraction;
```

<a id="overview"></a>

## Overview

Specify which interactions you want the activity view to include in [supportedInteractions](uiactivityitemsconfiguration/supportedinteractions.md).

## Topics

### Selecting interactions

- [UIActivityItemsConfigurationInteractionCopy](uiactivityitemsconfigurationinteraction/copy.md): The copy interaction.
- [UIActivityItemsConfigurationInteractionShare](uiactivityitemsconfigurationinteraction/share.md): The share interaction.

## See Also

### Managing supported interactions

- [supportedInteractions](uiactivityitemsconfiguration/supportedinteractions.md): The types of interactions that the configuration supports.
