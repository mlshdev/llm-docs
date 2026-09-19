> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiactivityitemsconfiguration/supportedinteractions

# supportedInteractions (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The types of interactions that the configuration supports.

## Declaration

```swift
var supportedInteractions: [UIActivityItemsConfigurationInteraction] { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is all known interactions.

## See Also

### Managing supported interactions

- [UIActivityItemsConfigurationInteraction](../uiactivityitemsconfigurationinteraction.md): A structure that describes types of interactions.

# supportedInteractions (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The types of interactions that the configuration supports.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSString *> * supportedInteractions;
```

<a id="Discussion"></a>

## Discussion

The default value is all known interactions.

## See Also

### Managing supported interactions

- [UIActivityItemsConfigurationInteraction](../uiactivityitemsconfigurationinteraction.md): A structure that describes types of interactions.
