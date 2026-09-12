> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmtagcollectiontagsarraykey](https://developer.apple.com/documentation/coremedia/kcmtagcollectiontagsarraykey)

# kCMTagCollectionTagsArrayKey

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A dictionary key for assigning tag collections to.

## Declaration

```objectivec
extern CFStringRef const kCMTagCollectionTagsArrayKey;
```

<a id="Discussion"></a>

## Discussion

Avoid creating dictionaries and setting this key yourself. Call [CMTagCollectionCopyAsDictionary](cmtagcollectioncopyasdictionary.md) on an existing, valid tag collection instead.
