> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tips/configurationoption/datastorelocation](https://developer.apple.com/documentation/tipkit/tips/configurationoption/datastorelocation)

# DatastoreLocation

**Framework:** TipKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A type for specifying a custom location for your tips datastore.

## Declaration

```swift
struct DatastoreLocation
```

<a id="overview"></a>

## Overview

For more information on datastore location, see [datastoreLocation(\_:)](datastorelocation%28__%29.md).

## Topics

### Type Properties

- [applicationDefault](datastorelocation/applicationdefault.md): The default location for persisting tips, which is generally your application’s support directory.

### Type Methods

- [groupContainer(identifier:)](datastorelocation/groupcontainer%28identifier_%29.md): DatastoreLocation for persisting tips in a group container.
- [url(\_:)](datastorelocation/url%28__%29.md): Configuration option for persisting tips at a custom on-disk location.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
