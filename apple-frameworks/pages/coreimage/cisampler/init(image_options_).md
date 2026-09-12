> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cisampler/init(image:options:)](https://developer.apple.com/documentation/coreimage/cisampler/init(image:options:))

# init(image:options:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Initializes the sampler with an image object using options specified in a dictionary.

## Declaration

```swift
init(image im: CIImage, options dict: [AnyHashable : Any]? = nil)
```

## Parameters

- `im`: The image to initialize the sampler with.
- `dict`: A dictionary that contains options specified as key-value pairs. See [Sampler Option Keys](../sampler-option-keys.md).

## See Also

### Initializing a Sampler

- [init(image:)](init%28image_%29.md): Initializes a sampler with an image object.

# initWithImage:options: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Initializes the sampler with an image object using options specified in a dictionary.

## Declaration

```objectivec
- (instancetype) initWithImage:(CIImage *) im options:(NSDictionary *) dict;
```

## Parameters

- `im`: The image to initialize the sampler with.
- `dict`: A dictionary that contains options specified as key-value pairs. See [Sampler Option Keys](../sampler-option-keys.md).

## See Also

### Related Documentation

- [initWithImage:keysAndValues:](initwithimage_keysandvalues_.md): Initializes the sampler with an image object using options specified as key-value pairs.

### Initializing a Sampler

- [initWithImage:](init%28image_%29.md): Initializes a sampler with an image object.
- [initWithImage:keysAndValues:](initwithimage_keysandvalues_.md): Initializes the sampler with an image object using options specified as key-value pairs.
