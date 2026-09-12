> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/kaemiddle](https://developer.apple.com/documentation/coreservices/kaemiddle)

# kAEMiddle

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```swift
var kAEMiddle: Int { get }
```

<a id="discussion"></a>

## Discussion

Specifies the middle element in the container. If an object specifier specifies `kAEMiddle` and the number of elements in the container is even, the Apple Event Manager rounds down. For example, in a range of four words the second word is the “middle” word.
