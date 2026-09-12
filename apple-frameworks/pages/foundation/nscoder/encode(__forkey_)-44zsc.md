> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/encode(_:forkey:)-44zsc](https://developer.apple.com/documentation/foundation/nscoder/encode(_:forkey:)-44zsc)

# encode(\_:forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Encodes edge inset data and associates it with the specified key in the coder’s archive.

## Declaration

```swift
func encode(_ insets: UIEdgeInsets, forKey key: String)
```

## Parameters

- `insets`: The edge insets data to encode.
- `key`: The key identifying the data.

<a id="Discussion"></a>

## Discussion

When decoding the data from the archive, you pass the value in the `key` parameter to the corresponding [decodeUIEdgeInsets(forKey:)](decodeuiedgeinsets%28forkey_%29.md) method to retrieve the data.

## See Also

### Related Documentation

- [decodeUIEdgeInsets(forKey:)](decodeuiedgeinsets%28forkey_%29.md): Decodes and returns the UIKit edge insets structure associated with the specified key in the coder’s archive.

### Encoding Geometry-Based Data

- [encode(\_:forKey:)](encode%28__forkey_%29-29jyx.md): Encodes an affine transform and associates it with the specified key in the receiver’s archive.
- [encode(\_:forKey:)](encode%28__forkey_%29-7z9kc.md): Encodes a point and associates it with the specified key in the receiver’s archive.
- [encode(\_:forKey:)](encode%28__forkey_%29-10qhm.md): Encodes a rectangle and associates it with the specified key in the receiver’s archive.
- [encode(\_:forKey:)](encode%28__forkey_%29-6wq3n.md): Encodes size information and associates it with the specified key in the coder’s archive.
- [encode(\_:forKey:)](encode%28__forkey_%29-26fxa.md): Encodes vector data and associates it with the specified key in the coder’s archive.
- [encode(\_:forKey:)](encode%28__forkey_%29-7oo2n.md): Encodes directional edge inset data and associates it with the specified key in the coder’s archive.
- [encode(\_:forKey:)](encode%28__forkey_%29-9d1qy.md): Encodes offset data and associates it with the specified key in the coder’s archive.

# encodeUIEdgeInsets:forKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Encodes edge inset data and associates it with the specified key in the coder’s archive.

## Declaration

```objectivec
- (void) encodeUIEdgeInsets:(UIEdgeInsets) insets forKey:(NSString *) key;
```

## Parameters

- `insets`: The edge insets data to encode.
- `key`: The key identifying the data.

<a id="Discussion"></a>

## Discussion

When decoding the data from the archive, you pass the value in the `key` parameter to the corresponding [decodeUIEdgeInsetsForKey:](decodeuiedgeinsets%28forkey_%29.md) method to retrieve the data.

## See Also

### Related Documentation

- [decodeUIEdgeInsetsForKey:](decodeuiedgeinsets%28forkey_%29.md): Decodes and returns the UIKit edge insets structure associated with the specified key in the coder’s archive.

### Encoding Geometry-Based Data

- [encodeCGAffineTransform:forKey:](encode%28__forkey_%29-29jyx.md): Encodes an affine transform and associates it with the specified key in the receiver’s archive.
- [encodeCGPoint:forKey:](encode%28__forkey_%29-7z9kc.md): Encodes a point and associates it with the specified key in the receiver’s archive.
- [encodeCGRect:forKey:](encode%28__forkey_%29-10qhm.md): Encodes a rectangle and associates it with the specified key in the receiver’s archive.
- [encodeCGSize:forKey:](encode%28__forkey_%29-6wq3n.md): Encodes size information and associates it with the specified key in the coder’s archive.
- [encodeCGVector:forKey:](encode%28__forkey_%29-26fxa.md): Encodes vector data and associates it with the specified key in the coder’s archive.
- [encodeDirectionalEdgeInsets:forKey:](encode%28__forkey_%29-7oo2n.md): Encodes directional edge inset data and associates it with the specified key in the coder’s archive.
- [encodeUIOffset:forKey:](encode%28__forkey_%29-9d1qy.md): Encodes offset data and associates it with the specified key in the coder’s archive.
