> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsepsimagerep/init(data:)](https://developer.apple.com/documentation/appkit/nsepsimagerep/init(data:))

# init(data:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.0+ (deprecated in 14.0)

Returns a representation of an image initialized with the specified EPS data.

> \`NSEPSImageRep\` instances cannot be created on macOS 14.0 and later

## Declaration

```swift
init?(data epsData: Data)
```

## Parameters

- `epsData`: The EPS data representing the desired image.

<a id="return-value"></a>

## Return Value

The initialized `NSEPSImageRep` object or `nil` if the object could not be initialized

<a id="Discussion"></a>

## Discussion

The size of the receiver is set using the bounding box information specified in the EPS header comments.

# initWithData: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 14.0)

Returns a representation of an image initialized with the specified EPS data.

> \`NSEPSImageRep\` instances cannot be created on macOS 14.0 and later

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) epsData;
```

## Parameters

- `epsData`: The EPS data representing the desired image.

<a id="return-value"></a>

## Return Value

The initialized `NSEPSImageRep` object or `nil` if the object could not be initialized

<a id="Discussion"></a>

## Discussion

The size of the receiver is set using the bounding box information specified in the EPS header comments.

## See Also

### Creating Representations of Images from EPS Data

- [imageRepWithData:](imagerepwithdata_.md): Deprecated. Creates and returns a representation of an image initialized with the specified EPS data.
