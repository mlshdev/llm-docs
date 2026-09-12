> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cisampler/init(image:)](https://developer.apple.com/documentation/coreimage/cisampler/init(image:))

# init(image:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Initializes a sampler with an image object.

## Declaration

```swift
convenience init(image im: CIImage)
```

## Parameters

- `im`: The image object to initialize the sampler with.

## See Also

### Initializing a Sampler

- [init(image:options:)](init%28image_options_%29.md): Initializes the sampler with an image object using options specified in a dictionary.

# initWithImage: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Initializes a sampler with an image object.

## Declaration

```objectivec
- (instancetype) initWithImage:(CIImage *) im;
```

## Parameters

- `im`: The image object to initialize the sampler with.

## See Also

### Related Documentation

- [initWithImage:keysAndValues:](initwithimage_keysandvalues_.md): Initializes the sampler with an image object using options specified as key-value pairs.

### Initializing a Sampler

- [initWithImage:keysAndValues:](initwithimage_keysandvalues_.md): Initializes the sampler with an image object using options specified as key-value pairs.
- [initWithImage:options:](init%28image_options_%29.md): Initializes the sampler with an image object using options specified in a dictionary.
