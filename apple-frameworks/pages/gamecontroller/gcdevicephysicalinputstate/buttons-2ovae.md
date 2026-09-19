> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamecontroller/gcdevicephysicalinputstate/buttons-2ovae

# buttons

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS

The device’s buttons as key-value pairs for lookup by name.

## Declaration

```swift
var buttons: GCPhysicalInputElementCollection<any GCButtonElement> { get }
```

## See Also

### Accessing elements

- [elements](elements-46hgy.md): The device’s elements as key-value pairs for lookup by name.
- [axes](axes-5u1xr.md): The device’s axes as key-value pairs for lookup by name.
- [dpads](dpads-7b4o3.md): The device’s directional pads as key-value pairs for lookup by name.
- [switches](switches-6dcny.md): The device’s switches as key-value pairs for lookup by name.
- [subscript(\_:)](subscript%28__%29.md): Returns the element that the key specifies.
