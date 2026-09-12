> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/decodecgvector(forkey:)](https://developer.apple.com/documentation/foundation/nscoder/decodecgvector(forkey:))

# decodeCGVector(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decodes and returns the Core Graphics vector data associated with the specified key in the coder’s archive.

## Declaration

```swift
func decodeCGVector(forKey key: String) -> CGVector
```

## Parameters

- `key`: The key that identifies the vector.

<a id="return-value"></a>

## Return Value

The vector data.

<a id="Discussion"></a>

## Discussion

Use this method to decode vector information that was previously encoded using the [encode(\_:forKey:)](encode%28__forkey_%29-26fxa.md) method.

## See Also

### Related Documentation

- [encode(\_:forKey:)](encode%28__forkey_%29-26fxa.md): Encodes vector data and associates it with the specified key in the coder’s archive.

### Decoding Geometry-Based Data

- [decodeCGAffineTransform(forKey:)](decodecgaffinetransform%28forkey_%29.md): Decodes and returns the Core Graphics affine transform structure associated with the specified key in the coder’s archive.
- [decodeCGPoint(forKey:)](decodecgpoint%28forkey_%29.md): Decodes and returns the Core Graphics point structure associated with the specified key in the coder’s archive.
- [decodeCGRect(forKey:)](decodecgrect%28forkey_%29.md): Decodes and returns the Core Graphics rectangle structure associated with the specified key in the coder’s archive.
- [decodeCGSize(forKey:)](decodecgsize%28forkey_%29.md): Decodes and returns the Core Graphics size structure associated with the specified key in the coder’s archive.
- [decodeDirectionalEdgeInsets(forKey:)](decodedirectionaledgeinsets%28forkey_%29.md): Decodes and returns the UIKit directional edge insets structure associated with the specified key in the coder’s archive.
- [decodeUIEdgeInsets(forKey:)](decodeuiedgeinsets%28forkey_%29.md): Decodes and returns the UIKit edge insets structure associated with the specified key in the coder’s archive.
- [decodeUIOffset(forKey:)](decodeuioffset%28forkey_%29.md): Decodes and returns the UIKit offset structure associated with the specified key in the coder’s archive.

# decodeCGVectorForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decodes and returns the Core Graphics vector data associated with the specified key in the coder’s archive.

## Declaration

```objectivec
- (CGVector) decodeCGVectorForKey:(NSString *) key;
```

## Parameters

- `key`: The key that identifies the vector.

<a id="return-value"></a>

## Return Value

The vector data.

<a id="Discussion"></a>

## Discussion

Use this method to decode vector information that was previously encoded using the [encodeCGVector:forKey:](encode%28__forkey_%29-26fxa.md) method.

## See Also

### Related Documentation

- [encodeCGVector:forKey:](encode%28__forkey_%29-26fxa.md): Encodes vector data and associates it with the specified key in the coder’s archive.

### Decoding Geometry-Based Data

- [decodeCGAffineTransformForKey:](decodecgaffinetransform%28forkey_%29.md): Decodes and returns the Core Graphics affine transform structure associated with the specified key in the coder’s archive.
- [decodeCGPointForKey:](decodecgpoint%28forkey_%29.md): Decodes and returns the Core Graphics point structure associated with the specified key in the coder’s archive.
- [decodeCGRectForKey:](decodecgrect%28forkey_%29.md): Decodes and returns the Core Graphics rectangle structure associated with the specified key in the coder’s archive.
- [decodeCGSizeForKey:](decodecgsize%28forkey_%29.md): Decodes and returns the Core Graphics size structure associated with the specified key in the coder’s archive.
- [decodeDirectionalEdgeInsetsForKey:](decodedirectionaledgeinsets%28forkey_%29.md): Decodes and returns the UIKit directional edge insets structure associated with the specified key in the coder’s archive.
- [decodeUIEdgeInsetsForKey:](decodeuiedgeinsets%28forkey_%29.md): Decodes and returns the UIKit edge insets structure associated with the specified key in the coder’s archive.
- [decodeUIOffsetForKey:](decodeuioffset%28forkey_%29.md): Decodes and returns the UIKit offset structure associated with the specified key in the coder’s archive.
