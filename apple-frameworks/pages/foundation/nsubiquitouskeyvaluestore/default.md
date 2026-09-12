> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsubiquitouskeyvaluestore/default](https://developer.apple.com/documentation/foundation/nsubiquitouskeyvaluestore/default)

# default (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 9.0+

The shared iCloud key-value store object.

## Declaration

```swift
class var `default`: NSUbiquitousKeyValueStore { get }
```

<a id="discussion"></a>

## Discussion

Use this object to access the shared iCloud key-value store tied to your app and the current person. You must use this object to get and set stored values.

# defaultStore (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 9.0+

The shared iCloud key-value store object.

## Declaration

```objectivec
@property (class, strong, readonly) NSUbiquitousKeyValueStore * defaultStore;
```

<a id="discussion"></a>

## Discussion

Use this object to access the shared iCloud key-value store tied to your app and the current person. You must use this object to get and set stored values.
