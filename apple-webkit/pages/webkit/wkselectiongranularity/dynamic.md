> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkselectiongranularity/dynamic](https://developer.apple.com/documentation/webkit/wkselectiongranularity/dynamic)

# WKSelectionGranularity.dynamic (Swift)

**Framework:** WebKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Granularity that varies automatically depending on the selection.

> This property is ignored; selection granularity is always \`character\`.

## Declaration

```swift
case dynamic
```

<a id="Discussion"></a>

## Discussion

When the selection is within a single block, the granularity may be single character. When the selection is not confined to a single block, the granularity may be a single block.

## See Also

### Getting the Granularity Options

- [WKSelectionGranularity.character](character.md): Deprecated. Granularity that allows the user to place selection endpoints at any character boundary.

# WKSelectionGranularityDynamic (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Granularity that varies automatically depending on the selection.

> This property is ignored; selection granularity is always \`character\`.

## Declaration

```objectivec
WKSelectionGranularityDynamic
```

<a id="Discussion"></a>

## Discussion

When the selection is within a single block, the granularity may be single character. When the selection is not confined to a single block, the granularity may be a single block.

## See Also

### Getting the Granularity Options

- [WKSelectionGranularityCharacter](character.md): Deprecated. Granularity that allows the user to place selection endpoints at any character boundary.
