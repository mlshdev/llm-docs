> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cglayer/typeid](https://developer.apple.com/documentation/coregraphics/cglayer/typeid)

# typeID (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the unique type identifier used for [CGLayer](../cglayer.md) objects.

## Declaration

```swift
class var typeID: CFTypeID { get }
```

<a id="Discussion"></a>

## Discussion

A type identifier is an integer that identifies the opaque type to which a Core Foundation object belongs. You use type IDs in various contexts, such as when you are operating on heterogeneous collections.

# CGLayerGetTypeID (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the unique type identifier used for [CGLayerRef](../cglayer.md) objects.

## Declaration

```objectivec
extern CFTypeID CGLayerGetTypeID();
```

<a id="return-value"></a>

## Return Value

The type identifier for CGLayer objects.

<a id="Discussion"></a>

## Discussion

A type identifier is an integer that identifies the opaque type to which a Core Foundation object belongs. You use type IDs in various contexts, such as when you are operating on heterogeneous collections.
