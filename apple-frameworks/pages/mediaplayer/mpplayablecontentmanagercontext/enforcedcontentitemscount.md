> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpplayablecontentmanagercontext/enforcedcontentitemscount](https://developer.apple.com/documentation/mediaplayer/mpplayablecontentmanagercontext/enforcedcontentitemscount)

# enforcedContentItemsCount (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 8.4+ (deprecated in 14.0) · iPadOS 8.4+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Returns the number of content items to display during content limiting.

> Use CarPlay framework

## Declaration

```swift
var enforcedContentItemsCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

This property returns [NSIntegerMax](../../objectivec/nsintegermax.md) when the content server doesn’t limit the maximum number of items.

## See Also

### Inspecting content manager properties

- [contentLimitsEnforced](contentlimitsenforced.md): Deprecated. A Boolean value that indicates whether the content server enforces content limits.
- [endpointAvailable](endpointavailable.md): Deprecated. Returns a Boolean that indicates whether the content server is available.
- [enforcedContentTreeDepth](enforcedcontenttreedepth.md): Deprecated. The maximum depth of the navigation hierarchy allowed by the content server.
- [contentLimitsEnabled](contentlimitsenabled.md): Deprecated. A Boolean value that indicates whether the content server enables content limits.

# enforcedContentItemsCount (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 8.4+ (deprecated in 14.0) · iPadOS 8.4+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Returns the number of content items to display during content limiting.

> Use CarPlay framework

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger enforcedContentItemsCount;
```

<a id="Discussion"></a>

## Discussion

This property returns [NSIntegerMax](../../objectivec/nsintegermax.md) when the content server doesn’t limit the maximum number of items.

## See Also

### Inspecting content manager properties

- [contentLimitsEnforced](contentlimitsenforced.md): Deprecated. A Boolean value that indicates whether the content server enforces content limits.
- [endpointAvailable](endpointavailable.md): Deprecated. Returns a Boolean that indicates whether the content server is available.
- [enforcedContentTreeDepth](enforcedcontenttreedepth.md): Deprecated. The maximum depth of the navigation hierarchy allowed by the content server.
- [contentLimitsEnabled](contentlimitsenabled.md): Deprecated. A Boolean value that indicates whether the content server enables content limits.
