> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/encode(_:forkey:)-26fxa](https://developer.apple.com/documentation/foundation/nscoder/encode(_:forkey:)-26fxa)

# encode(\_:forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Encodes vector data and associates it with the specified key in the coder’s archive.

## Declaration

```swift
func encode(_ vector: CGVector, forKey key: String)
```

## Parameters

- `vector`: The vector data to encode.
- `key`: The key identifying the data.

<a id="Discussion"></a>

## Discussion

When decoding the data from the archive, you pass the value in the `key` parameter to the corresponding [decodeCGVector(forKey:)](decodecgvector%28forkey_%29.md) method to retrieve the data.

## See Also

### Related Documentation

- [decodeCGVector(forKey:)](decodecgvector%28forkey_%29.md): Decodes and returns the Core Graphics vector data associated with the specified key in the coder’s archive.

### Encoding Geometry-Based Data

- [encode(\_:forKey:)](encode%28__forkey_%29-29jyx.md): Encodes an affine transform and associates it with the specified key in the receiver’s archive.
- [encode(\_:forKey:)](encode%28__forkey_%29-7z9kc.md): Encodes a point and associates it with the specified key in the receiver’s archive.
- [encode(\_:forKey:)](encode%28__forkey_%29-10qhm.md): Encodes a rectangle and associates it with the specified key in the receiver’s archive.
- [encode(\_:forKey:)](encode%28__forkey_%29-6wq3n.md): Encodes size information and associates it with the specified key in the coder’s archive.
- [encode(\_:forKey:)](encode%28__forkey_%29-7oo2n.md): Encodes directional edge inset data and associates it with the specified key in the coder’s archive.
- [encode(\_:forKey:)](encode%28__forkey_%29-44zsc.md): Encodes edge inset data and associates it with the specified key in the coder’s archive.
- [encode(\_:forKey:)](encode%28__forkey_%29-9d1qy.md): Encodes offset data and associates it with the specified key in the coder’s archive.

# encodeCGVector:forKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Encodes vector data and associates it with the specified key in the coder’s archive.

## Declaration

```objectivec
- (void) encodeCGVector:(CGVector) vector forKey:(NSString *) key;
```

## Parameters

- `vector`: The vector data to encode.
- `key`: The key identifying the data.

<a id="Discussion"></a>

## Discussion

When decoding the data from the archive, you pass the value in the `key` parameter to the corresponding [decodeCGVectorForKey:](decodecgvector%28forkey_%29.md) method to retrieve the data.

## See Also

### Related Documentation

- [decodeCGVectorForKey:](decodecgvector%28forkey_%29.md): Decodes and returns the Core Graphics vector data associated with the specified key in the coder’s archive.

### Encoding Geometry-Based Data

- [encodeCGAffineTransform:forKey:](encode%28__forkey_%29-29jyx.md): Encodes an affine transform and associates it with the specified key in the receiver’s archive.
- [encodeCGPoint:forKey:](encode%28__forkey_%29-7z9kc.md): Encodes a point and associates it with the specified key in the receiver’s archive.
- [encodeCGRect:forKey:](encode%28__forkey_%29-10qhm.md): Encodes a rectangle and associates it with the specified key in the receiver’s archive.
- [encodeCGSize:forKey:](encode%28__forkey_%29-6wq3n.md): Encodes size information and associates it with the specified key in the coder’s archive.
- [encodeDirectionalEdgeInsets:forKey:](encode%28__forkey_%29-7oo2n.md): Encodes directional edge inset data and associates it with the specified key in the coder’s archive.
- [encodeUIEdgeInsets:forKey:](encode%28__forkey_%29-44zsc.md): Encodes edge inset data and associates it with the specified key in the coder’s archive.
- [encodeUIOffset:forKey:](encode%28__forkey_%29-9d1qy.md): Encodes offset data and associates it with the specified key in the coder’s archive.
