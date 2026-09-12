> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cklocationsortdescriptor/init(coder:)](https://developer.apple.com/documentation/cloudkit/cklocationsortdescriptor/init(coder:))

# init(coder:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates a location sort descriptor from a serialized instance.

## Declaration

```swift
init(coder aDecoder: NSCoder)
```

## Parameters

- `aDecoder`: The coder to use when deserializing the location sort descriptor.

## See Also

### Creating a Location Sort Descriptor

- [init(key:relativeLocation:)](init%28key_relativelocation_%29.md): Creates a location sort descriptor using the specified key and relative location.

# initWithCoder: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates a location sort descriptor from a serialized instance.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) aDecoder;
```

## Parameters

- `aDecoder`: The coder to use when deserializing the location sort descriptor.

## See Also

### Creating a Location Sort Descriptor

- [initWithKey:relativeLocation:](init%28key_relativelocation_%29.md): Creates a location sort descriptor using the specified key and relative location.
