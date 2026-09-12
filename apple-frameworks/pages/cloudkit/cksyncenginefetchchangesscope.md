> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginefetchchangesscope](https://developer.apple.com/documentation/cloudkit/cksyncenginefetchchangesscope)

# CKSyncEngineFetchChangesScope

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A scope in which the sync engine will fetch changes from the server.

## Declaration

```objectivec
@interface CKSyncEngineFetchChangesScope : NSObject
```

## Topics

### Instance Properties

- [excludedZoneIDs](cksyncenginefetchchangesscope/excludedzoneids.md): A specific set of zone IDs to exclude from this scope.
- [zoneIDs](cksyncenginefetchchangesscope/zoneids.md): A specific set of zone IDs to include in the scope.

### Instance Methods

- [containsZoneID:](cksyncenginefetchchangesscope/containszoneid_.md): Returns true if the specified zone ID is included in this scope.
- [initWithExcludedZoneIDs:](cksyncenginefetchchangesscope/initwithexcludedzoneids_.md): Creates a scope that includes all zones except the specified excluded zones.
- [initWithZoneIDs:](cksyncenginefetchchangesscope/initwithzoneids_.md): Creates a scope that includes only the specified set of zones.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
