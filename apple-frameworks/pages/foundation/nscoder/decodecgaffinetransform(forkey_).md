> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/decodecgaffinetransform(forkey:)](https://developer.apple.com/documentation/foundation/nscoder/decodecgaffinetransform(forkey:))

# decodeCGAffineTransform(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decodes and returns the Core Graphics affine transform structure associated with the specified key in the coder’s archive.

## Declaration

```swift
func decodeCGAffineTransform(forKey key: String) -> CGAffineTransform
```

## Parameters

- `key`: The key that identifies the affine transform.

<a id="return-value"></a>

## Return Value

The affine transform.

<a id="Discussion"></a>

## Discussion

Use this method to decode size information that was previously encoded using the [encode(\_:forKey:)](encode%28__forkey_%29-29jyx.md) method.

## See Also

### Related Documentation

- [encode(\_:forKey:)](encode%28__forkey_%29-29jyx.md): Encodes an affine transform and associates it with the specified key in the receiver’s archive.

### Decoding Geometry-Based Data

- [decodeCGPoint(forKey:)](decodecgpoint%28forkey_%29.md): Decodes and returns the Core Graphics point structure associated with the specified key in the coder’s archive.
- [decodeCGRect(forKey:)](decodecgrect%28forkey_%29.md): Decodes and returns the Core Graphics rectangle structure associated with the specified key in the coder’s archive.
- [decodeCGSize(forKey:)](decodecgsize%28forkey_%29.md): Decodes and returns the Core Graphics size structure associated with the specified key in the coder’s archive.
- [decodeCGVector(forKey:)](decodecgvector%28forkey_%29.md): Decodes and returns the Core Graphics vector data associated with the specified key in the coder’s archive.
- [decodeDirectionalEdgeInsets(forKey:)](decodedirectionaledgeinsets%28forkey_%29.md): Decodes and returns the UIKit directional edge insets structure associated with the specified key in the coder’s archive.
- [decodeUIEdgeInsets(forKey:)](decodeuiedgeinsets%28forkey_%29.md): Decodes and returns the UIKit edge insets structure associated with the specified key in the coder’s archive.
- [decodeUIOffset(forKey:)](decodeuioffset%28forkey_%29.md): Decodes and returns the UIKit offset structure associated with the specified key in the coder’s archive.

# decodeCGAffineTransformForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decodes and returns the Core Graphics affine transform structure associated with the specified key in the coder’s archive.

## Declaration

```objectivec
- (CGAffineTransform) decodeCGAffineTransformForKey:(NSString *) key;
```

## Parameters

- `key`: The key that identifies the affine transform.

<a id="return-value"></a>

## Return Value

The affine transform.

<a id="Discussion"></a>

## Discussion

Use this method to decode size information that was previously encoded using the [encodeCGAffineTransform:forKey:](encode%28__forkey_%29-29jyx.md) method.

## See Also

### Related Documentation

- [encodeCGAffineTransform:forKey:](encode%28__forkey_%29-29jyx.md): Encodes an affine transform and associates it with the specified key in the receiver’s archive.

### Decoding Geometry-Based Data

- [decodeCGPointForKey:](decodecgpoint%28forkey_%29.md): Decodes and returns the Core Graphics point structure associated with the specified key in the coder’s archive.
- [decodeCGRectForKey:](decodecgrect%28forkey_%29.md): Decodes and returns the Core Graphics rectangle structure associated with the specified key in the coder’s archive.
- [decodeCGSizeForKey:](decodecgsize%28forkey_%29.md): Decodes and returns the Core Graphics size structure associated with the specified key in the coder’s archive.
- [decodeCGVectorForKey:](decodecgvector%28forkey_%29.md): Decodes and returns the Core Graphics vector data associated with the specified key in the coder’s archive.
- [decodeDirectionalEdgeInsetsForKey:](decodedirectionaledgeinsets%28forkey_%29.md): Decodes and returns the UIKit directional edge insets structure associated with the specified key in the coder’s archive.
- [decodeUIEdgeInsetsForKey:](decodeuiedgeinsets%28forkey_%29.md): Decodes and returns the UIKit edge insets structure associated with the specified key in the coder’s archive.
- [decodeUIOffsetForKey:](decodeuioffset%28forkey_%29.md): Decodes and returns the UIKit offset structure associated with the specified key in the coder’s archive.
