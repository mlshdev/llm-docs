> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlsubmesh/name](https://developer.apple.com/documentation/modelio/mdlsubmesh/name)

# name (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A descriptive name for the submesh.

## Declaration

```swift
var name: String { get set }
```

<a id="Discussion"></a>

## Discussion

This property is not used in rendering, but you can use it to keep track of multiple submeshes for debugging. This property can also be populated with useful descriptive information when importing submesh data from an asset file or other source.

# name (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A descriptive name for the submesh.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * name;
```

<a id="Discussion"></a>

## Discussion

This property is not used in rendering, but you can use it to keep track of multiple submeshes for debugging. This property can also be populated with useful descriptive information when importing submesh data from an asset file or other source.
