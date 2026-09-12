> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/typeobjectbeingexamined](https://developer.apple.com/documentation/coreservices/typeobjectbeingexamined)

# typeObjectBeingExamined

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.12+

## Declaration

```swift
var typeObjectBeingExamined: DescType { get }
```

<a id="discussion"></a>

## Discussion

Specifies a descriptor that acts as a placeholder for each of the successive elements in a container when the Apple Event Manager tests those elements one at a time. The descriptor has a null data storage pointer. This descriptor type is used only with `formTest`.
