> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4binaryfunctiondescriptor/name](https://developer.apple.com/documentation/metal/mtl4binaryfunctiondescriptor/name)

# name (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Associates a string that uniquely identifies a binary function.

## Declaration

```swift
var name: String { get set }
```

<a id="discussion"></a>

## Discussion

You can use this property to look up a corresponding binary function by name in a [MTL4Archive](../mtl4archive.md) instance.

# name (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Associates a string that uniquely identifies a binary function.

## Declaration

```objectivec
@property (copy, readwrite, nonnull) NSString * name;
```

<a id="discussion"></a>

## Discussion

You can use this property to look up a corresponding binary function by name in a [MTL4Archive](../mtl4archive.md) instance.
