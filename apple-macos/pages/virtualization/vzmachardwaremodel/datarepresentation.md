> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmachardwaremodel/datarepresentation](https://developer.apple.com/documentation/virtualization/vzmachardwaremodel/datarepresentation)

# dataRepresentation (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

Returns the opaque data representation of the hardware model.

## Declaration

```swift
var dataRepresentation: Data { get }
```

<a id="Discussion"></a>

## Discussion

You can use this to recreate the same hardware model with [init(dataRepresentation:)](init%28datarepresentation_%29.md).

## See Also

### Configuring the hardware model

- [isSupported](issupported.md): A Boolean value that indicates whether the host supports this hardware model.

# dataRepresentation (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

Returns the opaque data representation of the hardware model.

## Declaration

```objectivec
@property (copy, readonly) NSData * dataRepresentation;
```

<a id="Discussion"></a>

## Discussion

You can use this to recreate the same hardware model with [initWithDataRepresentation:](init%28datarepresentation_%29.md).

## See Also

### Configuring the hardware model

- [supported](issupported.md): A Boolean value that indicates whether the host supports this hardware model.
