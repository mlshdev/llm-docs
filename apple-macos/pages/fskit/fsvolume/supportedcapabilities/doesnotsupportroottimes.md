> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/supportedcapabilities/doesnotsupportroottimes](https://developer.apple.com/documentation/fskit/fsvolume/supportedcapabilities/doesnotsupportroottimes)

# doesNotSupportRootTimes (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean property that indicates the volume doesn’t store reliable times for the root directory.

## Declaration

```swift
var doesNotSupportRootTimes: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If this value is `true` (Swift) or `YES` (Objective-C), the volume doesn’t store reliable times for the root directory.

# doesNotSupportRootTimes (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean property that indicates the volume doesn’t store reliable times for the root directory.

## Declaration

```objectivec
@property (nonatomic) BOOL doesNotSupportRootTimes;
```

<a id="discussion"></a>

## Discussion

If this value is `true` (Swift) or `YES` (Objective-C), the volume doesn’t store reliable times for the root directory.
