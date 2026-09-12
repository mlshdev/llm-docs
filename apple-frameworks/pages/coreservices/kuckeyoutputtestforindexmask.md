> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/kuckeyoutputtestforindexmask](https://developer.apple.com/documentation/coreservices/kuckeyoutputtestforindexmask)

# kUCKeyOutputTestForIndexMask

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```swift
var kUCKeyOutputTestForIndexMask: Int { get }
```

<a id="discussion"></a>

## Discussion

You can use this mask to test the bits (14–15) in the `UCKeyOutput` value that determine whether the value contains an index to any other structure. If both bits specified by this mask are clear, the `UCKeyOutput` value does not contain an index to any other structure.
