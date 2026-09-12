> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolor/typeid](https://developer.apple.com/documentation/coregraphics/cgcolor/typeid)

# typeID (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the Core Foundation type identifier for a color data type.

## Declaration

```swift
class var typeID: CFTypeID { get }
```

# CGColorGetTypeID (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the Core Foundation type identifier for a color data type.

## Declaration

```objectivec
extern CFTypeID CGColorGetTypeID();
```

<a id="return-value"></a>

## Return Value

The Core Foundation type identifier for [CGColorRef](../cgcolor.md).
