> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariviewcontroller/configuration-swift.class/eventattribution](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller/configuration-swift.class/eventattribution)

# eventAttribution (Swift)

**Framework:** Safari Services  
**Kind:** Instance Property  
**Availability:** iOS 15.2+ · iPadOS 15.2+ · Mac Catalyst 15.2+ · visionOS 1.0+

An object you use to send tap event attribution data to the browser for Private Click Measurement.

## Declaration

```swift
@NSCopying var eventAttribution: UIEventAttribution? { get set }
```

<a id="Discussion"></a>

## Discussion

For more information about preparing event attribution data, see [UIEventAttribution](../../../uikit/uieventattribution.md).

## See Also

### Configuring a Safari View Controller

- [entersReaderIfAvailable](entersreaderifavailable.md): A value that specifies whether Safari should enter Reader mode, if it is available.
- [barCollapsingEnabled](barcollapsingenabled.md)

# eventAttribution (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Property  
**Availability:** iOS 15.2+ · iPadOS 15.2+ · Mac Catalyst 15.2+ · visionOS 1.0+

An object you use to send tap event attribution data to the browser for Private Click Measurement.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIEventAttribution * eventAttribution;
```

<a id="Discussion"></a>

## Discussion

For more information about preparing event attribution data, see [UIEventAttribution](../../../uikit/uieventattribution.md).

## See Also

### Configuring a Safari View Controller

- [entersReaderIfAvailable](entersreaderifavailable.md): A value that specifies whether Safari should enter Reader mode, if it is available.
- [barCollapsingEnabled](barcollapsingenabled.md)
