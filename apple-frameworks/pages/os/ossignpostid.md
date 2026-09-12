> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/ossignpostid](https://developer.apple.com/documentation/os/ossignpostid)

# OSSignpostID

**Framework:** os  
**Kind:** Structure  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS · watchOS 5.0+

An identifier that disambiguates signposted intervals.

## Declaration

```swift
struct OSSignpostID
```

## Mentioned In

- [Recording Performance Data](recording-performance-data.md)

<a id="overview"></a>

## Overview

Multiple intervals that have matching names, subsystems, and categories, and that exist in the same scope can be in-flight simultaneously. To match a pair of interval calls, you need to identify each interval with a unique signpost identifier. Use the first strategy in the list below that matches your use case:

- If identical intervals can never overlap, use the [exclusive](ossignpostid/exclusive.md) signpost ID.
- If you have data that uniquely identifies each instance of the measured task, create a signpost ID using the [init(\_:)](ossignpostid/init%28__%29.md) method. The value you provide must not match that of any of the system-defined signpost IDs.
- If you have an object that uniquely identifies a pair of interval calls, such as the object you’re measuring, create a signpost ID using the [makeSignpostID(from:)](ossignposter/makesignpostid%28from_%29.md) method. Don’t use this method for signposts that cross process boundaries.
- Otherwise, create a signpost ID using the [makeSignpostID()](ossignposter/makesignpostid%28%29.md) method.

## Topics

### Getting Signpost Identifiers

- [exclusive](ossignpostid/exclusive.md): A signpost identifier that indicates no overlap among different signpost time intervals.
- [invalid](ossignpostid/invalid.md): A signpost identifier that indicates an error.
- [null](ossignpostid/null.md): A signpost identifier that indicates a disabled signpost.

### Creating a Signpost Identifier

- [init(\_:)](ossignpostid/init%28__%29.md): Creates a signpost ID from an arbitrary 64-bit integer value.
- [init(log:)](ossignpostid/init%28log_%29.md): Deprecated. Creates a signpost ID for the specified log.
- [init(log:object:)](ossignpostid/init%28log_object_%29.md): Deprecated. Creates a signpost ID and associates it with the specified object.

### Getting an Identifier’s Raw Value

- [rawValue](ossignpostid/rawvalue.md): The signpost ID’s raw value.

## Relationships

### Conforms To

- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Generating Signpost IDs

- [makeSignpostID()](ossignposter/makesignpostid%28%29.md): Returns an identifier that’s unique within the scope of the signposter.
- [makeSignpostID(from:)](ossignposter/makesignpostid%28from_%29.md): Returns an identifier that the signposter derives from the specified object.
