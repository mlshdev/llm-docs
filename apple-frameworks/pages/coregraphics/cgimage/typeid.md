> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgimage/typeid](https://developer.apple.com/documentation/coregraphics/cgimage/typeid)

# typeID (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the type identifier for CGImage objects.

## Declaration

```swift
class var typeID: CFTypeID { get }
```

# CGImageGetTypeID (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the type identifier for CGImage objects.

## Declaration

```objectivec
extern CFTypeID CGImageGetTypeID();
```

<a id="return-value"></a>

## Return Value

The identifier for the type [CGImageRef](../cgimage.md).
