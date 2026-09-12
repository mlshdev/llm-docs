> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/init(contentsof:)](https://developer.apple.com/documentation/foundation/nsitemprovider/init(contentsof:))

# init(contentsOf:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Provides data-backed content from an existing file.

## Declaration

```swift
convenience init?(contentsOf fileURL: URL!)
```

## Parameters

- `fileURL`: The URL of the file to use for the item provider’s data. The item provider uses the filename extension to determine the universal type identifier for the associated data.

<a id="return-value"></a>

## Return Value

An item provider for the specified file, or `nil` if an error occurs.

<a id="Discussion"></a>

## Discussion

The system uses the URL’s filename extension to select an appropriate universal type identifier. If the system can’t determine a specific universal type identifier based on the filename extension, it assigns the `public.data` universal type identifier for the file.

## See Also

### Related Documentation

- [App Extension Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/index.html#//apple_ref/doc/uid/TP40014214)

### Creating an item provider

- [init(contentsOf:contentType:openInPlace:coordinated:visibility:)](init%28contentsof_contenttype_openinplace_coordinated_visibility_%29.md): Provides data-backed content from an existing file with the specified parameters.
- [init(item:typeIdentifier:)](init%28item_typeidentifier_%29.md): Deprecated. Creates an item provider with an object, according to the item provider type coercion policy.
- [init()](init%28%29.md): Creates an empty item provider to which you can later register a data or file representation.
- [init(object:)](init%28object_%29.md): Creates a new item provider, employing a specified object’s type identifiers to specify the data representations eligible for the provider to load.

# initWithContentsOfURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Provides data-backed content from an existing file.

## Declaration

```objectivec
- (instancetype) initWithContentsOfURL:(NSURL *) fileURL;
```

## Parameters

- `fileURL`: The URL of the file to use for the item provider’s data. The item provider uses the filename extension to determine the universal type identifier for the associated data.

<a id="return-value"></a>

## Return Value

An item provider for the specified file, or `nil` if an error occurs.

<a id="Discussion"></a>

## Discussion

The system uses the URL’s filename extension to select an appropriate universal type identifier. If the system can’t determine a specific universal type identifier based on the filename extension, it assigns the `public.data` universal type identifier for the file.

## See Also

### Related Documentation

- [App Extension Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/index.html#//apple_ref/doc/uid/TP40014214)

### Creating an item provider

- [initWithContentsOfURL:contentType:openInPlace:coordinated:visibility:](initwithcontentsofurl_contenttype_openinplace_coordinated_visibility_.md): Provides data-backed content from an existing file with the specified parameters.
- [initWithItem:typeIdentifier:](init%28item_typeidentifier_%29.md): Deprecated. Creates an item provider with an object, according to the item provider type coercion policy.
- [init](init%28%29.md): Creates an empty item provider to which you can later register a data or file representation.
- [initWithObject:](init%28object_%29.md): Creates a new item provider, employing a specified object’s type identifiers to specify the data representations eligible for the provider to load.
