> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkselectiongranularity](https://developer.apple.com/documentation/webkit/wkselectiongranularity)

# WKSelectionGranularity (Swift)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

The granularity with which the user can select and modify web view content.

> This property is ignored; selection granularity is always \`character\`.

## Declaration

```swift
enum WKSelectionGranularity
```

## Topics

### Getting the Granularity Options

- [WKSelectionGranularity.dynamic](wkselectiongranularity/dynamic.md): Deprecated. Granularity that varies automatically depending on the selection.
- [WKSelectionGranularity.character](wkselectiongranularity/character.md): Deprecated. Granularity that allows the user to place selection endpoints at any character boundary.

### Initializers

- [init(rawValue:)](wkselectiongranularity/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting selection granularity

- [selectionGranularity](wkwebviewconfiguration/selectiongranularity.md): Deprecated. The level of granularity with which the user can interactively select web view content.

# WKSelectionGranularity (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

The granularity with which the user can select and modify web view content.

> This property is ignored; selection granularity is always \`character\`.

## Declaration

```objectivec
enum WKSelectionGranularity : NSInteger;
```

## Topics

### Getting the Granularity Options

- [WKSelectionGranularityDynamic](wkselectiongranularity/dynamic.md): Deprecated. Granularity that varies automatically depending on the selection.
- [WKSelectionGranularityCharacter](wkselectiongranularity/character.md): Deprecated. Granularity that allows the user to place selection endpoints at any character boundary.

## See Also

### Setting selection granularity

- [selectionGranularity](wkwebviewconfiguration/selectiongranularity.md): Deprecated. The level of granularity with which the user can interactively select web view content.
