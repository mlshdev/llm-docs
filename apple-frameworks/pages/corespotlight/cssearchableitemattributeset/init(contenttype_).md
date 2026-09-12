> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitemattributeset/init(contenttype:)](https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/init(contenttype:))

# init(contentType:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates an attribute set for the specified content type.

## Declaration

```swift
init(contentType: UTType)
```

## Parameters

- `contentType`: The type of the content. For example, [png](../../uniformtypeidentifiers/uttype-swift.struct/png.md) or [movie](../../uniformtypeidentifiers/uttype-swift.struct/movie.md).

<a id="return-value"></a>

## Return Value

An attribute set that represents an item of the specified content type.

## See Also

### Creating an attribute set

- [init(coder:)](init%28coder_%29.md)

# initWithContentType: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates an attribute set for the specified content type.

## Declaration

```objectivec
- (instancetype) initWithContentType:(UTType *) contentType;
```

## Parameters

- `contentType`: The type of the content. For example, [png](../../uniformtypeidentifiers/uttype-swift.struct/png.md) or [movie](../../uniformtypeidentifiers/uttype-swift.struct/movie.md).

<a id="return-value"></a>

## Return Value

An attribute set that represents an item of the specified content type.
