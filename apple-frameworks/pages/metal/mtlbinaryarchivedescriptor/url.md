> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlbinaryarchivedescriptor/url](https://developer.apple.com/documentation/metal/mtlbinaryarchivedescriptor/url)

# url (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A URL to a Metal binary archive file.

## Declaration

```swift
var url: URL? { get set }
```

## Mentioned In

- [Creating binary archives from device-built pipeline state objects](../creating-binary-archives-from-device-built-pipeline-state-objects.md)

<a id="discussion"></a>

## Discussion

You can use this method to load a binary archive you created with an [MTLBinaryArchive](../mtlbinaryarchive.md) instance’s [serialize(to:)](../mtlbinaryarchive/serialize%28to_%29.md) method.

# url (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A URL to a Metal binary archive file.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSURL * url;
```

## Mentioned In

- [Creating binary archives from device-built pipeline state objects](../creating-binary-archives-from-device-built-pipeline-state-objects.md)

<a id="discussion"></a>

## Discussion

You can use this method to load a binary archive you created with an [MTLBinaryArchive](../mtlbinaryarchive.md) instance’s [serializeToURL:error:](../mtlbinaryarchive/serialize%28to_%29.md) method.
