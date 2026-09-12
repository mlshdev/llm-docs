> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsbundleresourcerequest/init(tags:bundle:)](https://developer.apple.com/documentation/foundation/nsbundleresourcerequest/init(tags:bundle:))

# init(tags:bundle:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Initializes a resource request for managing the on-demand resources marked with any of the set of specified tags. The managed resources are loaded into the specified bundle.

> Use Background Assets instead.

## Declaration

```swift
init(tags: Set<String>, bundle: Bundle)
```

## Parameters

- `tags`: A set of strings, with each string specifying a tag assigned to resources stored in `bundle`. The value must not be `nil`.
- `bundle`: The bundle used to store the loaded resources. Pass `nil` for the main bundle. The bundle must be the same as the one used in the Xcode project for all the resources marked with the specified tags.

<a id="return-value"></a>

## Return Value

The initialized resource request.

## See Also

### Initializing a resource request

- [init(tags:)](init%28tags_%29.md): Deprecated. Initializes a resource request for managing the on-demand resources marked with any of the set of specified tags. The managed resources are loaded into the main bundle.

# initWithTags:bundle: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Initializes a resource request for managing the on-demand resources marked with any of the set of specified tags. The managed resources are loaded into the specified bundle.

> Use Background Assets instead.

## Declaration

```objectivec
- (instancetype) initWithTags:(NSSet<NSString *> *) tags bundle:(NSBundle *) bundle;
```

## Parameters

- `tags`: A set of strings, with each string specifying a tag assigned to resources stored in `bundle`. The value must not be `nil`.
- `bundle`: The bundle used to store the loaded resources. Pass `nil` for the main bundle. The bundle must be the same as the one used in the Xcode project for all the resources marked with the specified tags.

<a id="return-value"></a>

## Return Value

The initialized resource request.

## See Also

### Initializing a resource request

- [initWithTags:](init%28tags_%29.md): Deprecated. Initializes a resource request for managing the on-demand resources marked with any of the set of specified tags. The managed resources are loaded into the main bundle.
