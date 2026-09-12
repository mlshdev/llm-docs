> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/init(item:typeidentifier:)](https://developer.apple.com/documentation/foundation/nsitemprovider/init(item:typeidentifier:))

# init(item:typeIdentifier:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Creates an item provider with an object, according to the item provider type coercion policy.

> Use initWithObject: instead.

## Declaration

```swift
init(item: (any NSSecureCoding)?, typeIdentifier: String?)
```

## Parameters

- `item`: An object containing the data you want to provide. You may specify `nil` for this parameter and register items and types later.
- `typeIdentifier`: A string that represents the UTI of the item. If `item` is not `nil`, this parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

An item provider for the specified item.

<a id="Discussion"></a>

## Discussion

Use this method to initialize an item provider for objects in your app. The item provider registers your object with the specified type. Subsequent requests for that same type return the specified `item`.

## See Also

### Creating an item provider

- [init(contentsOf:)](init%28contentsof_%29.md): Provides data-backed content from an existing file.
- [init(contentsOf:contentType:openInPlace:coordinated:visibility:)](init%28contentsof_contenttype_openinplace_coordinated_visibility_%29.md): Provides data-backed content from an existing file with the specified parameters.
- [init()](init%28%29.md): Creates an empty item provider to which you can later register a data or file representation.
- [init(object:)](init%28object_%29.md): Creates a new item provider, employing a specified object’s type identifiers to specify the data representations eligible for the provider to load.

# initWithItem:typeIdentifier: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Creates an item provider with an object, according to the item provider type coercion policy.

> Use initWithObject: instead.

## Declaration

```objectivec
- (instancetype) initWithItem:(id<NSSecureCoding>) item typeIdentifier:(NSString *) typeIdentifier;
```

## Parameters

- `item`: An object containing the data you want to provide. You may specify `nil` for this parameter and register items and types later.
- `typeIdentifier`: A string that represents the UTI of the item. If `item` is not `nil`, this parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

An item provider for the specified item.

<a id="Discussion"></a>

## Discussion

Use this method to initialize an item provider for objects in your app. The item provider registers your object with the specified type. Subsequent requests for that same type return the specified `item`.

## See Also

### Creating an item provider

- [initWithContentsOfURL:](init%28contentsof_%29.md): Provides data-backed content from an existing file.
- [initWithContentsOfURL:contentType:openInPlace:coordinated:visibility:](initwithcontentsofurl_contenttype_openinplace_coordinated_visibility_.md): Provides data-backed content from an existing file with the specified parameters.
- [init](init%28%29.md): Creates an empty item provider to which you can later register a data or file representation.
- [initWithObject:](init%28object_%29.md): Creates a new item provider, employing a specified object’s type identifiers to specify the data representations eligible for the provider to load.
