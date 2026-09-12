> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebviewconfiguration/selectiongranularity](https://developer.apple.com/documentation/webkit/wkwebviewconfiguration/selectiongranularity)

# selectionGranularity (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

The level of granularity with which the user can interactively select web view content.

> This property is ignored; selection granularity is always \`character\`.

## Declaration

```swift
var selectionGranularity: WKSelectionGranularity { get set }
```

<a id="Discussion"></a>

## Discussion

The value is one of the constants of the enumerated type [WKSelectionGranularity](../wkselectiongranularity.md). The default value is [WKSelectionGranularity.dynamic](../wkselectiongranularity/dynamic.md).

## See Also

### Setting selection granularity

- [WKSelectionGranularity](../wkselectiongranularity.md): Deprecated. The granularity with which the user can select and modify web view content.

# selectionGranularity (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

The level of granularity with which the user can interactively select web view content.

> This property is ignored; selection granularity is always \`character\`.

## Declaration

```objectivec
@property (nonatomic) WKSelectionGranularity selectionGranularity;
```

<a id="Discussion"></a>

## Discussion

The value is one of the constants of the enumerated type [WKSelectionGranularity](../wkselectiongranularity.md). The default value is [WKSelectionGranularityDynamic](../wkselectiongranularity/dynamic.md).

## See Also

### Setting selection granularity

- [WKSelectionGranularity](../wkselectiongranularity.md): Deprecated. The granularity with which the user can select and modify web view content.
