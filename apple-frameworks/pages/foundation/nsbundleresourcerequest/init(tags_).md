> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsbundleresourcerequest/init(tags:)](https://developer.apple.com/documentation/foundation/nsbundleresourcerequest/init(tags:))

# init(tags:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Initializes a resource request for managing the on-demand resources marked with any of the set of specified tags. The managed resources are loaded into the main bundle.

> Use Background Assets instead.

## Declaration

```swift
convenience init(tags: Set<String>)
```

## Parameters

- `tags`: A set of strings, with each string specifying a tag assigned to resources stored in the main bundle. The value must not be `nil`.

<a id="return-value"></a>

## Return Value

The initialized resource request.

## See Also

### Related Documentation

- [Bundle](../bundle.md): A representation of the code and resources stored in a bundle directory on disk.
- [On-Demand Resources Guide](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/On_Demand_Resources_Guide/index.html#//apple_ref/doc/uid/TP40015083)

### Initializing a resource request

- [init(tags:bundle:)](init%28tags_bundle_%29.md): Deprecated. Initializes a resource request for managing the on-demand resources marked with any of the set of specified tags. The managed resources are loaded into the specified bundle.

# initWithTags: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Initializes a resource request for managing the on-demand resources marked with any of the set of specified tags. The managed resources are loaded into the main bundle.

> Use Background Assets instead.

## Declaration

```objectivec
- (instancetype) initWithTags:(NSSet<NSString *> *) tags;
```

## Parameters

- `tags`: A set of strings, with each string specifying a tag assigned to resources stored in the main bundle. The value must not be `nil`.

<a id="return-value"></a>

## Return Value

The initialized resource request.

## See Also

### Related Documentation

- [NSBundle](../bundle.md): A representation of the code and resources stored in a bundle directory on disk.
- [On-Demand Resources Guide](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/On_Demand_Resources_Guide/index.html#//apple_ref/doc/uid/TP40015083)

### Initializing a resource request

- [initWithTags:bundle:](init%28tags_bundle_%29.md): Deprecated. Initializes a resource request for managing the on-demand resources marked with any of the set of specified tags. The managed resources are loaded into the specified bundle.
