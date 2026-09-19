> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/shazamkit/shmediaitem/mediaitemwithproperties:

# mediaItemWithProperties:

**Interface language:** Objective-C

**Framework:** ShazamKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a media item object with a dictionary of properties and their associated values.

## Declaration

```objectivec
+ (instancetype) mediaItemWithProperties:(NSDictionary<NSString *,id> *) properties;
```

## Parameters

- `properties`: A dictionary that contains the media item properties and their associated values.
