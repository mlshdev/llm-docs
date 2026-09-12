> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdevicephysicalinputstate/subscript(_:)](https://developer.apple.com/documentation/gamecontroller/gcdevicephysicalinputstate/subscript(_:))

# subscript(\_:) (Swift)

**Framework:** Game Controller  
**Kind:** Instance Subscript  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Returns the element that the key specifies.

## Declaration

```swift
subscript(key: String) -> (any GCPhysicalInputElement)? { get }
```

## Parameters

- `key`: A key that identifies an element.

<a id="return-value"></a>

## Return Value

The element that matches the key.

## See Also

### Accessing elements

- [elements](elements-46hgy.md): The device’s elements as key-value pairs for lookup by name.
- [axes](axes-5u1xr.md): The device’s axes as key-value pairs for lookup by name.
- [buttons](buttons-2ovae.md): The device’s buttons as key-value pairs for lookup by name.
- [dpads](dpads-7b4o3.md): The device’s directional pads as key-value pairs for lookup by name.
- [switches](switches-6dcny.md): The device’s switches as key-value pairs for lookup by name.

# objectForKeyedSubscript: (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Returns the element that the key specifies.

## Declaration

```objectivec
- (id<GCPhysicalInputElement>) objectForKeyedSubscript:(NSString *) key;
```

## Parameters

- `key`: A key that identifies an element.

<a id="return-value"></a>

## Return Value

The element that matches the key.

## See Also

### Accessing elements

- [elements](elements-1shp2.md): The device’s elements as key-value pairs for lookup by name.
- [axes](axes-80rx.md): The device’s axes as key-value pairs for lookup by name.
- [buttons](buttons-3257g.md): The device’s buttons as key-value pairs for lookup by name.
- [dpads](dpads-5yr9x.md): The device’s directional pads as key-value pairs for lookup by name.
- [switches](switches-6bws2.md): The device’s switches as key-value pairs for lookup by name.
