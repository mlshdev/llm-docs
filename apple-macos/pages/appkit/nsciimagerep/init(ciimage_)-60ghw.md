> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsciimagerep/init(ciimage:)-60ghw](https://developer.apple.com/documentation/appkit/nsciimagerep/init(ciimage:)-60ghw)

# init(ciImage:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Returns a representation of an image initialized to the specified Core Image instance.

## Declaration

```swift
init(ciImage image: CIImage)
```

## Parameters

- `image`: The [CIImage](https://developer.apple.com/documentation/coreimage/ciimage) instance.

<a id="return-value"></a>

## Return Value

An initialized [NSCIImageRep](../nsciimagerep.md) object, or `nil` if the object could not be initialized.

# initWithCIImage: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a representation of an image initialized to the specified Core Image instance.

## Declaration

```objectivec
- (instancetype) initWithCIImage:(CIImage *) image;
```

## Parameters

- `image`: The [CIImage](https://developer.apple.com/documentation/coreimage/ciimage) instance.

<a id="return-value"></a>

## Return Value

An initialized [NSCIImageRep](../nsciimagerep.md) object, or `nil` if the object could not be initialized.

## See Also

### Creating Representations of Core Image Objects

- [imageRepWithCIImage:](imagerepwithciimage_.md): Creates and returns a representation of an image initialized to the specified Core Image instance.
