> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4pipelinedescriptor/label](https://developer.apple.com/documentation/metal/mtl4pipelinedescriptor/label)

# label (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns an optional string that uniquely identifies a pipeline descriptor.

## Declaration

```swift
var label: String? { get set }
```

<a id="discussion"></a>

## Discussion

After you provide this label, you can use it to look up a pipeline state object by name in a binary archive.

# label (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns an optional string that uniquely identifies a pipeline descriptor.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * label;
```

<a id="discussion"></a>

## Discussion

After you provide this label, you can use it to look up a pipeline state object by name in a binary archive.
