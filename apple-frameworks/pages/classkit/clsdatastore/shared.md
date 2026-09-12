> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsdatastore/shared](https://developer.apple.com/documentation/classkit/clsdatastore/shared)

# shared (Swift)

**Framework:** ClassKit  
**Kind:** Type Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

The shared data store object.

## Declaration

```swift
class var shared: CLSDataStore { get }
```

<a id="Discussion"></a>

## Discussion

When working with the data store, always use this shared instance. Don’t create a new instance.

# shared (Objective-C)

**Framework:** ClassKit  
**Kind:** Type Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The shared data store object.

## Declaration

```objectivec
@property (class, nonatomic, strong, readonly) CLSDataStore * shared;
```

<a id="Discussion"></a>

## Discussion

When working with the data store, always use this shared instance. Don’t create a new instance.
