> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/maflashinglightsprocessor/optionkey](https://developer.apple.com/documentation/mediaaccessibility/maflashinglightsprocessor/optionkey)

# MAFlashingLightsProcessor.OptionKey (Swift)

**Framework:** Media Accessibility  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 13.0+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

Options for the flashing lights processor.

## Declaration

```swift
struct OptionKey
```

## Topics

### Creating an options structure

- [init(\_:)](optionkey/init%28__%29.md): Creates an options structure.
- [init(rawValue:)](optionkey/init%28rawvalue_%29.md): Creates an options structure with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Processing video content

- [processSurface(\_:outSurface:timestamp:options:)](processsurface%28__outsurface_timestamp_options_%29.md): Processes a surface by analyzing pixels for sequences of flashing lights and mitigates them by dimming the content.
- [MAFlashingLightsProcessor.Result](result.md): An object that reports the result of the flashing lights processor.

# MAFlashingLightsProcessorOptionKey (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Type Alias  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 13.0+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

Options for the flashing lights processor.

## Declaration

```objectivec
typedef NSString * MAFlashingLightsProcessorOptionKey;
```

## See Also

### Processing video content

- [processSurface:outSurface:timestamp:options:](processsurface_outsurface_timestamp_options_.md): Processes a surface by analyzing pixels for sequences of flashing lights and mitigates them by dimming the content.
- [MAFlashingLightsProcessorResult](../maflashinglightsprocessorresult.md): An object that reports the result of the flashing lights processor.
