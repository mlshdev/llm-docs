> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/init()](https://developer.apple.com/documentation/foundation/nsitemprovider/init())

# init() (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an empty item provider to which you can later register a data or file representation.

## Declaration

```swift
init()
```

## See Also

### Creating an item provider

- [init(contentsOf:)](init%28contentsof_%29.md): Provides data-backed content from an existing file.
- [init(contentsOf:contentType:openInPlace:coordinated:visibility:)](init%28contentsof_contenttype_openinplace_coordinated_visibility_%29.md): Provides data-backed content from an existing file with the specified parameters.
- [init(item:typeIdentifier:)](init%28item_typeidentifier_%29.md): Deprecated. Creates an item provider with an object, according to the item provider type coercion policy.
- [init(object:)](init%28object_%29.md): Creates a new item provider, employing a specified object’s type identifiers to specify the data representations eligible for the provider to load.

# init (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an empty item provider to which you can later register a data or file representation.

## Declaration

```objectivec
- (instancetype) init;
```

## See Also

### Creating an item provider

- [initWithContentsOfURL:](init%28contentsof_%29.md): Provides data-backed content from an existing file.
- [initWithContentsOfURL:contentType:openInPlace:coordinated:visibility:](initwithcontentsofurl_contenttype_openinplace_coordinated_visibility_.md): Provides data-backed content from an existing file with the specified parameters.
- [initWithItem:typeIdentifier:](init%28item_typeidentifier_%29.md): Deprecated. Creates an item provider with an object, according to the item provider type coercion policy.
- [initWithObject:](init%28object_%29.md): Creates a new item provider, employing a specified object’s type identifiers to specify the data representations eligible for the provider to load.
