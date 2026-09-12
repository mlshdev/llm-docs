> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdataprovider/typeid](https://developer.apple.com/documentation/coregraphics/cgdataprovider/typeid)

# typeID (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the Core Foundation type identifier for data providers.

## Declaration

```swift
class var typeID: CFTypeID { get }
```

# CGDataProviderGetTypeID (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the Core Foundation type identifier for data providers.

## Declaration

```objectivec
extern CFTypeID CGDataProviderGetTypeID();
```

<a id="return-value"></a>

## Return Value

The identifier for the opaque type [CGDataProviderRef](../cgdataprovider.md).
