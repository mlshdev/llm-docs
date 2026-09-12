> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacmachineidentifier/datarepresentation](https://developer.apple.com/documentation/virtualization/vzmacmachineidentifier/datarepresentation)

# dataRepresentation (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

Returns the opaque data representation of the machine identifier.

## Declaration

```swift
var dataRepresentation: Data { get }
```

<a id="Discussion"></a>

## Discussion

You can use this to recreate the same machine identifier with [init(dataRepresentation:)](init%28datarepresentation_%29.md).

# dataRepresentation (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

Returns the opaque data representation of the machine identifier.

## Declaration

```objectivec
@property (copy, readonly) NSData * dataRepresentation;
```

<a id="Discussion"></a>

## Discussion

You can use this to recreate the same machine identifier with [initWithDataRepresentation:](init%28datarepresentation_%29.md).
