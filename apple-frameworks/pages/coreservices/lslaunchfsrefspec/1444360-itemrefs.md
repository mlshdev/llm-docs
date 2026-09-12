> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/lslaunchfsrefspec/1444360-itemrefs](https://developer.apple.com/documentation/coreservices/lslaunchfsrefspec/1444360-itemrefs)

# itemRefs (Swift)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.10)

An array of file-system references designatingthe item or items to open. If the value of `numDocs` is `0`,this field is ignored and can be set to `NULL`.

## Declaration

```swift
var itemRefs: UnsafePointer<FSRef>!
```

# itemRefs (Objective-C)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.10)

An array of file-system references designatingthe item or items to open. If the value of `numDocs` is `0`,this field is ignored and can be set to `NULL`.

## Declaration

```objectivec
const FSRef *itemRefs;
```
