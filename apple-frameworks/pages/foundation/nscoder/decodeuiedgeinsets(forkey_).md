> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/decodeuiedgeinsets(forkey:)](https://developer.apple.com/documentation/foundation/nscoder/decodeuiedgeinsets(forkey:))

# decodeUIEdgeInsets(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decodes and returns the UIKit edge insets structure associated with the specified key in the coder’s archive.

## Declaration

```swift
func decodeUIEdgeInsets(forKey key: String) -> UIEdgeInsets
```

## Parameters

- `key`: The key that identifies the edge insets.

<a id="return-value"></a>

## Return Value

The edge insets data.

<a id="Discussion"></a>

## Discussion

Use this method to decode edge inset information that was previously encoded using the [encode(\_:forKey:)](encode%28__forkey_%29-44zsc.md) method.

## See Also

### Related Documentation

- [encode(\_:forKey:)](encode%28__forkey_%29-44zsc.md): Encodes edge inset data and associates it with the specified key in the coder’s archive.

### Decoding Geometry-Based Data

- [decodeCGAffineTransform(forKey:)](decodecgaffinetransform%28forkey_%29.md): Decodes and returns the Core Graphics affine transform structure associated with the specified key in the coder’s archive.
- [decodeCGPoint(forKey:)](decodecgpoint%28forkey_%29.md): Decodes and returns the Core Graphics point structure associated with the specified key in the coder’s archive.
- [decodeCGRect(forKey:)](decodecgrect%28forkey_%29.md): Decodes and returns the Core Graphics rectangle structure associated with the specified key in the coder’s archive.
- [decodeCGSize(forKey:)](decodecgsize%28forkey_%29.md): Decodes and returns the Core Graphics size structure associated with the specified key in the coder’s archive.
- [decodeCGVector(forKey:)](decodecgvector%28forkey_%29.md): Decodes and returns the Core Graphics vector data associated with the specified key in the coder’s archive.
- [decodeDirectionalEdgeInsets(forKey:)](decodedirectionaledgeinsets%28forkey_%29.md): Decodes and returns the UIKit directional edge insets structure associated with the specified key in the coder’s archive.
- [decodeUIOffset(forKey:)](decodeuioffset%28forkey_%29.md): Decodes and returns the UIKit offset structure associated with the specified key in the coder’s archive.

# decodeUIEdgeInsetsForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decodes and returns the UIKit edge insets structure associated with the specified key in the coder’s archive.

## Declaration

```objectivec
- (UIEdgeInsets) decodeUIEdgeInsetsForKey:(NSString *) key;
```

## Parameters

- `key`: The key that identifies the edge insets.

<a id="return-value"></a>

## Return Value

The edge insets data.

<a id="Discussion"></a>

## Discussion

Use this method to decode edge inset information that was previously encoded using the [encodeUIEdgeInsets:forKey:](encode%28__forkey_%29-44zsc.md) method.

## See Also

### Related Documentation

- [encodeUIEdgeInsets:forKey:](encode%28__forkey_%29-44zsc.md): Encodes edge inset data and associates it with the specified key in the coder’s archive.

### Decoding Geometry-Based Data

- [decodeCGAffineTransformForKey:](decodecgaffinetransform%28forkey_%29.md): Decodes and returns the Core Graphics affine transform structure associated with the specified key in the coder’s archive.
- [decodeCGPointForKey:](decodecgpoint%28forkey_%29.md): Decodes and returns the Core Graphics point structure associated with the specified key in the coder’s archive.
- [decodeCGRectForKey:](decodecgrect%28forkey_%29.md): Decodes and returns the Core Graphics rectangle structure associated with the specified key in the coder’s archive.
- [decodeCGSizeForKey:](decodecgsize%28forkey_%29.md): Decodes and returns the Core Graphics size structure associated with the specified key in the coder’s archive.
- [decodeCGVectorForKey:](decodecgvector%28forkey_%29.md): Decodes and returns the Core Graphics vector data associated with the specified key in the coder’s archive.
- [decodeDirectionalEdgeInsetsForKey:](decodedirectionaledgeinsets%28forkey_%29.md): Decodes and returns the UIKit directional edge insets structure associated with the specified key in the coder’s archive.
- [decodeUIOffsetForKey:](decodeuioffset%28forkey_%29.md): Decodes and returns the UIKit offset structure associated with the specified key in the coder’s archive.
