> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfileversion/replacingoptions/bymoving](https://developer.apple.com/documentation/foundation/nsfileversion/replacingoptions/bymoving)

# byMoving (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An option to perform replacing by moving a file.

## Declaration

```swift
static var byMoving: NSFileVersion.ReplacingOptions { get }
```

<a id="Discussion"></a>

## Discussion

This option results in moving the old version of the file out of the version store instead of copying the new contents into the file’s version. Use this option in conjunction with a file coordinator to make sure the operation is coordinated with other clients of the file.

# NSFileVersionReplacingByMoving (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An option to perform replacing by moving a file.

## Declaration

```objectivec
NSFileVersionReplacingByMoving
```

<a id="Discussion"></a>

## Discussion

This option results in moving the old version of the file out of the version store instead of copying the new contents into the file’s version. Use this option in conjunction with a file coordinator to make sure the operation is coordinated with other clients of the file.
