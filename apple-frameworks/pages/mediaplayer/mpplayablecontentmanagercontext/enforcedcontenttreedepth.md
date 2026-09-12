> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpplayablecontentmanagercontext/enforcedcontenttreedepth](https://developer.apple.com/documentation/mediaplayer/mpplayablecontentmanagercontext/enforcedcontenttreedepth)

# enforcedContentTreeDepth (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 8.4+ (deprecated in 14.0) · iPadOS 8.4+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The maximum depth of the navigation hierarchy allowed by the content server.

> Use CarPlay framework

## Declaration

```swift
var enforcedContentTreeDepth: Int { get }
```

<a id="Discussion"></a>

## Discussion

Exceeding the limit contained by this property causes your app to terminate.

## See Also

### Inspecting content manager properties

- [contentLimitsEnforced](contentlimitsenforced.md): Deprecated. A Boolean value that indicates whether the content server enforces content limits.
- [endpointAvailable](endpointavailable.md): Deprecated. Returns a Boolean that indicates whether the content server is available.
- [enforcedContentItemsCount](enforcedcontentitemscount.md): Deprecated. Returns the number of content items to display during content limiting.
- [contentLimitsEnabled](contentlimitsenabled.md): Deprecated. A Boolean value that indicates whether the content server enables content limits.

# enforcedContentTreeDepth (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 8.4+ (deprecated in 14.0) · iPadOS 8.4+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The maximum depth of the navigation hierarchy allowed by the content server.

> Use CarPlay framework

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger enforcedContentTreeDepth;
```

<a id="Discussion"></a>

## Discussion

Exceeding the limit contained by this property causes your app to terminate.

## See Also

### Inspecting content manager properties

- [contentLimitsEnforced](contentlimitsenforced.md): Deprecated. A Boolean value that indicates whether the content server enforces content limits.
- [endpointAvailable](endpointavailable.md): Deprecated. Returns a Boolean that indicates whether the content server is available.
- [enforcedContentItemsCount](enforcedcontentitemscount.md): Deprecated. Returns the number of content items to display during content limiting.
- [contentLimitsEnabled](contentlimitsenabled.md): Deprecated. A Boolean value that indicates whether the content server enables content limits.
