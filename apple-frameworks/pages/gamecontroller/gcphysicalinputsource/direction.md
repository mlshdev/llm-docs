> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcphysicalinputsource/direction](https://developer.apple.com/documentation/gamecontroller/gcphysicalinputsource/direction)

# direction (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The directional input, if any, that a physical input source involves.

## Declaration

```swift
var direction: GCPhysicalInputSourceDirection { get }
```

<a id="Discussion"></a>

## Discussion

If this property is `nil`, the physical input source doesn’t involve directional input.

## See Also

### Getting directions

- [GCPhysicalInputSourceDirection](../gcphysicalinputsourcedirection.md): The directions that a physical input source involves.

# direction (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The directional input, if any, that a physical input source involves.

## Declaration

```objectivec
@property (readonly) GCPhysicalInputSourceDirection direction;
```

<a id="Discussion"></a>

## Discussion

If this property is `nil`, the physical input source doesn’t involve directional input.

## See Also

### Getting directions

- [GCPhysicalInputSourceDirection](../gcphysicalinputsourcedirection.md): The directions that a physical input source involves.
