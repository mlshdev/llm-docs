> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/kmditemwherefroms](https://developer.apple.com/documentation/coreservices/kmditemwherefroms)

# kMDItemWhereFroms (Swift)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

Describes where the file was obtained from. A CFArray of CFStrings.

## Declaration

```swift
let kMDItemWhereFroms: CFString!
```

<a id="discussion"></a>

## Discussion

For example, a downloaded file may refer to the URL, files received by email may indicate the sender’s email address, message subject, etc.

# kMDItemWhereFroms (Objective-C)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

Describes where the file was obtained from. A CFArray of CFStrings.

## Declaration

```objectivec
const CFStringRef kMDItemWhereFroms;
```

<a id="discussion"></a>

## Discussion

For example, a downloaded file may refer to the URL, files received by email may indicate the sender’s email address, message subject, etc.
