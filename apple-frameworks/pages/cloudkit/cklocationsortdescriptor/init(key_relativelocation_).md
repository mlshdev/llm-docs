> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cklocationsortdescriptor/init(key:relativelocation:)](https://developer.apple.com/documentation/cloudkit/cklocationsortdescriptor/init(key:relativelocation:))

# init(key:relativeLocation:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates a location sort descriptor using the specified key and relative location.

## Declaration

```swift
init(key: String, relativeLocation: CLLocation)
```

## Parameters

- `key`: The name of the key with a [CLLocation](../../corelocation/cllocation.md) object as its value. The key must belong to the records you’re sorting. The sort descriptor uses this key to retrieve the corresponding value from the record.
- `relativeLocation`: The reference location when sorting. CloudKit sorts records according to their distance from this location.

<a id="discussion"></a>

## Discussion

During sorting, the sort descriptor computes the distance between the value in the `relativeLocation` parameter and the location value in the specified key of each record. It then sorts the records in ascending order using the distance between the two points. You can’t change the sort order.

## See Also

### Creating a Location Sort Descriptor

- [init(coder:)](init%28coder_%29.md): Creates a location sort descriptor from a serialized instance.

# initWithKey:relativeLocation: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates a location sort descriptor using the specified key and relative location.

## Declaration

```objectivec
- (instancetype) initWithKey:(NSString *) key relativeLocation:(CLLocation *) relativeLocation;
```

## Parameters

- `key`: The name of the key with a [CLLocation](../../corelocation/cllocation.md) object as its value. The key must belong to the records you’re sorting. The sort descriptor uses this key to retrieve the corresponding value from the record.
- `relativeLocation`: The reference location when sorting. CloudKit sorts records according to their distance from this location.

<a id="discussion"></a>

## Discussion

During sorting, the sort descriptor computes the distance between the value in the `relativeLocation` parameter and the location value in the specified key of each record. It then sorts the records in ascending order using the distance between the two points. You can’t change the sort order.

## See Also

### Creating a Location Sort Descriptor

- [initWithCoder:](init%28coder_%29.md): Creates a location sort descriptor from a serialized instance.
