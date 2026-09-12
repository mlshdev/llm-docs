> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsbundleresourcerequest/bundle](https://developer.apple.com/documentation/foundation/nsbundleresourcerequest/bundle)

# bundle (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

A reference to the bundle used for storing the downloaded resources. (read-only)

> Use Background Assets instead.

## Declaration

```swift
var bundle: Bundle { get }
```

<a id="Discussion"></a>

## Discussion

This value is either the main bundle or the one specified in the call to [init(tags:bundle:)](init%28tags_bundle_%29.md). It is valid as soon as the [NSBundleResourceRequest](../nsbundleresourcerequest.md) object is created.

## See Also

### Accessing the configuration

- [tags](tags.md): Deprecated. A set of strings, with each string specifying a tag used to mark on-demand resources managed by the request. (read-only)

# bundle (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

A reference to the bundle used for storing the downloaded resources. (read-only)

> Use Background Assets instead.

## Declaration

```objectivec
@property (strong, readonly) NSBundle * bundle;
```

<a id="Discussion"></a>

## Discussion

This value is either the main bundle or the one specified in the call to [initWithTags:bundle:](init%28tags_bundle_%29.md). It is valid as soon as the [NSBundleResourceRequest](../nsbundleresourcerequest.md) object is created.

## See Also

### Accessing the configuration

- [tags](tags.md): Deprecated. A set of strings, with each string specifying a tag used to mark on-demand resources managed by the request. (read-only)
