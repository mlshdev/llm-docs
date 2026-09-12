> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowserdropoperation](https://developer.apple.com/documentation/quartz/ikimagebrowserdropoperation)

# IKImageBrowserDropOperation (Swift)

**Framework:** Quartz  
**Kind:** Structure  
**Availability:** macOS 10.4+

These constants specify the locations for dropping items onto the browser view. Used by the method [setDrop(\_:dropOperation:)](ikimagebrowserview/setdrop%28__dropoperation_%29.md).

## Declaration

```swift
struct IKImageBrowserDropOperation
```

## Topics

### Constants

- [IKImageBrowserDropOn](ikimagebrowserdropon.md): Drop the item on the cell.
- [IKImageBrowserDropBefore](ikimagebrowserdropbefore.md): Drop the item before the cell.

### Initializers

- [init(\_:)](ikimagebrowserdropoperation/init%28__%29.md)
- [init(rawValue:)](ikimagebrowserdropoperation/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](ikimagebrowserdropoperation/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Informal Protocols

- [IKImageBrowserCellState](ikimagebrowsercellstate.md): The possible states for the browser cell. These values are used by the [cellState()](ikimagebrowsercell/cellstate%28%29.md) method.

# IKImageBrowserDropOperation (Objective-C)

**Framework:** Quartz  
**Kind:** Enumeration  
**Availability:** macOS 10.4+

These constants specify the locations for dropping items onto the browser view. Used by the method [setDropIndex:dropOperation:](ikimagebrowserview/setdrop%28__dropoperation_%29.md).

## Declaration

```objectivec
typedef enum { ... } IKImageBrowserDropOperation;
```

## Topics

### Constants

- [IKImageBrowserDropOn](ikimagebrowserdropon.md): Drop the item on the cell.
- [IKImageBrowserDropBefore](ikimagebrowserdropbefore.md): Drop the item before the cell.

## See Also

### Informal Protocols

- [IKImageBrowserCellState](ikimagebrowsercellstate.md): The possible states for the browser cell. These values are used by the [cellState](ikimagebrowsercell/cellstate%28%29.md) method.
