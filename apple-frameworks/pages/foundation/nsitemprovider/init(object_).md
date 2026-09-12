> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/init(object:)](https://developer.apple.com/documentation/foundation/nsitemprovider/init(object:))

# init(object:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a new item provider, employing a specified object’s type identifiers to specify the data representations eligible for the provider to load.

## Declaration

```swift
convenience init(object: any NSItemProviderWriting)
```

## Parameters

- `object`: An object containing the data you want to provide.

## See Also

### Creating an item provider

- [init(contentsOf:)](init%28contentsof_%29.md): Provides data-backed content from an existing file.
- [init(contentsOf:contentType:openInPlace:coordinated:visibility:)](init%28contentsof_contenttype_openinplace_coordinated_visibility_%29.md): Provides data-backed content from an existing file with the specified parameters.
- [init(item:typeIdentifier:)](init%28item_typeidentifier_%29.md): Deprecated. Creates an item provider with an object, according to the item provider type coercion policy.
- [init()](init%28%29.md): Creates an empty item provider to which you can later register a data or file representation.

# initWithObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a new item provider, employing a specified object’s type identifiers to specify the data representations eligible for the provider to load.

## Declaration

```objectivec
- (instancetype) initWithObject:(id<NSItemProviderWriting>) object;
```

## Parameters

- `object`: An object containing the data you want to provide.

## See Also

### Creating an item provider

- [initWithContentsOfURL:](init%28contentsof_%29.md): Provides data-backed content from an existing file.
- [initWithContentsOfURL:contentType:openInPlace:coordinated:visibility:](initwithcontentsofurl_contenttype_openinplace_coordinated_visibility_.md): Provides data-backed content from an existing file with the specified parameters.
- [initWithItem:typeIdentifier:](init%28item_typeidentifier_%29.md): Deprecated. Creates an item provider with an object, according to the item provider type coercion policy.
- [init](init%28%29.md): Creates an empty item provider to which you can later register a data or file representation.
