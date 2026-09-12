> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfileversion/originatornamecomponents](https://developer.apple.com/documentation/foundation/nsfileversion/originatornamecomponents)

# originatorNameComponents (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

The name components of the user who created this version of the file. Is nil if the file is not shared or if the current user is the originator.

## Declaration

```swift
var originatorNameComponents: PersonNameComponents? { get }
```

# originatorNameComponents (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

The name components of the user who created this version of the file. Is nil if the file is not shared or if the current user is the originator.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSPersonNameComponents * originatorNameComponents;
```
