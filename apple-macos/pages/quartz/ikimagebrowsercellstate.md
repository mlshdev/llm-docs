> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowsercellstate](https://developer.apple.com/documentation/quartz/ikimagebrowsercellstate)

# IKImageBrowserCellState (Swift)

**Framework:** Quartz  
**Kind:** Structure  
**Availability:** macOS 10.4+

The possible states for the browser cell. These values are used by the [cellState()](ikimagebrowsercell/cellstate%28%29.md) method.

## Declaration

```swift
struct IKImageBrowserCellState
```

## Topics

### Constants

- [IKImageStateNoImage](ikimagestatenoimage.md): Returned until a thumbnail has been created from the represented object.
- [IKImageStateInvalid](ikimagestateinvalid.md): The thumbnail is invalid. For example, an unsupported image is provided.
- [IKImageStateReady](ikimagestateready.md): The receiver’s represented object has been set and the cell is ready to display.

### Initializers

- [init(\_:)](ikimagebrowsercellstate/init%28__%29.md)
- [init(rawValue:)](ikimagebrowsercellstate/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](ikimagebrowsercellstate/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Informal Protocols

- [IKImageBrowserDropOperation](ikimagebrowserdropoperation.md): These constants specify the locations for dropping items onto the browser view. Used by the method [setDrop(\_:dropOperation:)](ikimagebrowserview/setdrop%28__dropoperation_%29.md).

# IKImageBrowserCellState (Objective-C)

**Framework:** Quartz  
**Kind:** Enumeration  
**Availability:** macOS 10.4+

The possible states for the browser cell. These values are used by the [cellState](ikimagebrowsercell/cellstate%28%29.md) method.

## Declaration

```objectivec
typedef enum { ... } IKImageBrowserCellState;
```

## Topics

### Constants

- [IKImageStateNoImage](ikimagestatenoimage.md): Returned until a thumbnail has been created from the represented object.
- [IKImageStateInvalid](ikimagestateinvalid.md): The thumbnail is invalid. For example, an unsupported image is provided.
- [IKImageStateReady](ikimagestateready.md): The receiver’s represented object has been set and the cell is ready to display.

## See Also

### Informal Protocols

- [IKImageBrowserDropOperation](ikimagebrowserdropoperation.md): These constants specify the locations for dropping items onto the browser view. Used by the method [setDropIndex:dropOperation:](ikimagebrowserview/setdrop%28__dropoperation_%29.md).
