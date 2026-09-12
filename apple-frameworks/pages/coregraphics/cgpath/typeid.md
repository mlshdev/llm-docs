> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpath/typeid](https://developer.apple.com/documentation/coregraphics/cgpath/typeid)

# typeID (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the Core Foundation type identifier for Core Graphics paths.

## Declaration

```swift
class var typeID: CFTypeID { get }
```

# CGPathGetTypeID (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the Core Foundation type identifier for Core Graphics paths.

## Declaration

```objectivec
extern CFTypeID CGPathGetTypeID();
```

<a id="return-value"></a>

## Return Value

The Core Foundation identifier for the opaque type [CGPathRef](../cgpath.md).
