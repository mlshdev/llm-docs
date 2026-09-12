> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaitemartwork/init(boundssize:requesthandler:)](https://developer.apple.com/documentation/mediaplayer/mpmediaitemartwork/init(boundssize:requesthandler:))

# init(boundsSize:requestHandler:) (Swift)

**Framework:** Media Player  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a new image from existing artwork with the specified bounds.

## Declaration

```swift
init(boundsSize: CGSize, requestHandler: @escaping (CGSize) -> UIImage)
```

```swift
init(boundsSize: CGSize, requestHandler: @escaping (CGSize) -> NSImage)
```

## Parameters

- `boundsSize`: The original size of the artwork.
- `requestHandler`: A handler that the system calls for the requested artwork.

  - **size**: The new size for the image.

<a id="return-value"></a>

## Return Value

The newly resized artwork.

<a id="Discussion"></a>

## Discussion

The request handler returns the image in the newly requested size. The requested size must be less than the `boundsSize` parameter.

# initWithBoundsSize:requestHandler: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a new image from existing artwork with the specified bounds.

## Declaration

```objectivec
- (instancetype) initWithBoundsSize:(CGSize) boundsSize requestHandler:(UIImage * (^)(CGSize size)) requestHandler;
```

```objectivec
- (instancetype) initWithBoundsSize:(CGSize) boundsSize requestHandler:(NSImage * (^)(CGSize size)) requestHandler;
```

## Parameters

- `boundsSize`: The original size of the artwork.
- `requestHandler`: A handler that the system calls for the requested artwork.

  - **size**: The new size for the image.

<a id="return-value"></a>

## Return Value

The newly resized artwork.

<a id="Discussion"></a>

## Discussion

The request handler returns the image in the newly requested size. The requested size must be less than the `boundsSize` parameter.
