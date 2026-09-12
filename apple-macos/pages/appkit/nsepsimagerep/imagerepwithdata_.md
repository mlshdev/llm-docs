> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsepsimagerep/imagerepwithdata:](https://developer.apple.com/documentation/appkit/nsepsimagerep/imagerepwithdata:)

# imageRepWithData:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 14.0)

Creates and returns a representation of an image initialized with the specified EPS data.

## Declaration

```objectivec
+ (instancetype) imageRepWithData:(NSData *) epsData;
```

## Parameters

- `epsData`: The EPS data representing the desired image.

<a id="return-value"></a>

## Return Value

A new, initialized `NSEPSImageRep` object or `nil` if the object could not be initialized.

<a id="Discussion"></a>

## Discussion

The size of the receiver is set using the bounding box information specified in the EPS header comments.

## See Also

### Creating Representations of Images from EPS Data

- [initWithData:](init%28data_%29.md): Deprecated. Returns a representation of an image initialized with the specified EPS data.
