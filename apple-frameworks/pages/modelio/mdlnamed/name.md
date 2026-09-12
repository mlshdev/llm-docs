> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlnamed/name](https://developer.apple.com/documentation/modelio/mdlnamed/name)

# name (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A descriptive name for the object.

## Declaration

```swift
var name: String { get set }
```

<a id="Discussion"></a>

## Discussion

Many types of Model I/O objects support this property. For objects loaded from a file using the [MDLAsset](../mdlasset.md) class, this property may reflect the name or label assigned by an artist using 3D authoring tools.

# name (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A descriptive name for the object.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * name;
```

<a id="Discussion"></a>

## Discussion

Many types of Model I/O objects support this property. For objects loaded from a file using the [MDLAsset](../mdlasset.md) class, this property may reflect the name or label assigned by an artist using 3D authoring tools.
