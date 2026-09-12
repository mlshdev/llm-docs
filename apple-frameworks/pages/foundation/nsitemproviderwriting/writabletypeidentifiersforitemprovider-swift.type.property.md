> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemproviderwriting/writabletypeidentifiersforitemprovider-swift.type.property](https://developer.apple.com/documentation/foundation/nsitemproviderwriting/writabletypeidentifiersforitemprovider-swift.type.property)

# writableTypeIdentifiersForItemProvider (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An array of UTI strings representing the types of data that can be loaded for an item provider.

## Declaration

```swift
static var writableTypeIdentifiersForItemProvider: [String] { get }
```

<a id="Discussion"></a>

## Discussion

Provide uniform type identifiers (UTIs) in order from highest fidelity to lowest. If your app employs a native data representation, place that first in the array.

Implement this version of the property to offer a minimal list of UTIs that *all* resulting item provider instances can support. For example, using this version of the property for an [NSURL](../nsurl.md) object, your implementation should return the `public.url` UTI but not `public.file-url`.

Use the class version of this property when you do not initialize an item provider with an object, thereby deferring the underlying object’s instantiation until the destination app needs it.

## See Also

### Getting the writable type identifiers

- [writableTypeIdentifiersForItemProvider](writabletypeidentifiersforitemprovider-swift.property.md): An array of UTI strings representing the types of data that can be loaded for an item provider.

# writableTypeIdentifiersForItemProvider (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An array of UTI strings representing the types of data that can be loaded for an item provider.

## Declaration

```objectivec
@property (class, nonatomic, copy, readonly) NSArray<NSString *> * writableTypeIdentifiersForItemProvider;
```

```objectivec
@property (class, atomic, copy, readonly) NSArray<NSString *> * writableTypeIdentifiersForItemProvider;
```

<a id="Discussion"></a>

## Discussion

Provide uniform type identifiers (UTIs) in order from highest fidelity to lowest. If your app employs a native data representation, place that first in the array.

Implement this version of the property to offer a minimal list of UTIs that *all* resulting item provider instances can support. For example, using this version of the property for an [NSURL](../nsurl.md) object, your implementation should return the `public.url` UTI but not `public.file-url`.

Use the class version of this property when you do not initialize an item provider with an object, thereby deferring the underlying object’s instantiation until the destination app needs it.

## See Also

### Getting the writable type identifiers

- [writableTypeIdentifiersForItemProvider](writabletypeidentifiersforitemprovider-swift.property.md): An array of UTI strings representing the types of data that can be loaded for an item provider.
