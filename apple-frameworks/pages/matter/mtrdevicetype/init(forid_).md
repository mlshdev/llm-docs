> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicetype/init(forid:)](https://developer.apple.com/documentation/matter/mtrdevicetype/init(forid:))

# init(forID:) (Swift)

**Framework:** Matter  
**Kind:** Initializer  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Returns an MTRDeviceType for the given ID, if the ID is known.  Returns nil for unknown IDs.

## Declaration

```swift
init?(forID deviceTypeID: NSNumber)
```

# deviceTypeForID: (Objective-C)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Returns an MTRDeviceType for the given ID, if the ID is known.  Returns nil for unknown IDs.

## Declaration

```objectivec
+ (MTRDeviceType *) deviceTypeForID:(NSNumber *) deviceTypeID;
```
