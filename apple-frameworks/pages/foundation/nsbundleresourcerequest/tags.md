> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsbundleresourcerequest/tags](https://developer.apple.com/documentation/foundation/nsbundleresourcerequest/tags)

# tags (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

A set of strings, with each string specifying a tag used to mark on-demand resources managed by the request. (read-only)

> Use Background Assets instead.

## Declaration

```swift
var tags: Set<String> { get }
```

<a id="Discussion"></a>

## Discussion

This value is read-only value and is set when the resource request is initialized. The value of each tag in the set corresponds to an identifier you created during app development.

## See Also

### Accessing the configuration

- [bundle](bundle.md): Deprecated. A reference to the bundle used for storing the downloaded resources. (read-only)

# tags (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

A set of strings, with each string specifying a tag used to mark on-demand resources managed by the request. (read-only)

> Use Background Assets instead.

## Declaration

```objectivec
@property (copy, readonly) NSSet<NSString *> * tags;
```

<a id="Discussion"></a>

## Discussion

This value is read-only value and is set when the resource request is initialized. The value of each tag in the set corresponds to an identifier you created during app development.

## See Also

### Accessing the configuration

- [bundle](bundle.md): Deprecated. A reference to the bundle used for storing the downloaded resources. (read-only)
