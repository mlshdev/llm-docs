> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcvirtualcontroller/configuration/ishidden](https://developer.apple.com/documentation/gamecontroller/gcvirtualcontroller/configuration/ishidden)

# isHidden (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

A Boolean value that indicates whether the system or the app presents the virtual interface.

## Declaration

```swift
var isHidden: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

To present your own virtual controller interface, set this property to [true](https://developer.apple.com/documentation/swift/true). Then when the state of controls in your interface changes, use the [GCVirtualController](../../gcvirtualcontroller.md) [setValue(\_:forButtonElement:)](../setvalue%28__forbuttonelement_%29.md) and [setPosition(\_:forDirectionPadElement:)](../setposition%28__fordirectionpadelement_%29.md) methods to update the corresponding elements.

The default value is [false](https://developer.apple.com/documentation/swift/false).

# hidden (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

A Boolean value that indicates whether the system or the app presents the virtual interface.

## Declaration

```objectivec
@property (nonatomic, getter=isHidden) BOOL hidden;
```

<a id="Discussion"></a>

## Discussion

To present your own virtual controller interface, set this property to [true](https://developer.apple.com/documentation/swift/true). Then when the state of controls in your interface changes, use the [GCVirtualController](../../gcvirtualcontroller.md) [setValue:forButtonElement:](../setvalue%28__forbuttonelement_%29.md) and [setPosition:forDirectionPadElement:](../setposition%28__fordirectionpadelement_%29.md) methods to update the corresponding elements.

The default value is [false](https://developer.apple.com/documentation/swift/false).
