> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitycustomrotor/itemresult](https://developer.apple.com/documentation/appkit/nsaccessibilitycustomrotor/itemresult)

# NSAccessibilityCustomRotor.ItemResult (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.13+

A target accessibility element that a custom rotor references.

## Declaration

```swift
class ItemResult
```

## Topics

### Creating an Item Result

- [init(targetElement:)](itemresult/init%28targetelement_%29.md): Creates an item result with the specified target element.
- [init(itemLoadingToken:customLabel:)](itemresult/init%28itemloadingtoken_customlabel_%29.md): Creates an item result with the specified item load token and custom label.

### Identifying an Item Result

- [targetElement](itemresult/targetelement.md): A target element that references an element to message for accessibility properties.
- [itemLoadingToken](itemresult/itemloadingtoken.md): A token to determine which item to return.
- [targetRange](itemresult/targetrange.md): A range that specifies the area of interest for text-based elements.
- [customLabel](itemresult/customlabel.md): A localized label to use instead of the default item label to describe the item result.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Managing the Current Item

- [currentItem](searchparameters/currentitem.md): The current item that determines where the search starts.

# NSAccessibilityCustomRotorItemResult (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.13+

A target accessibility element that a custom rotor references.

## Declaration

```objectivec
@interface NSAccessibilityCustomRotorItemResult : NSObject
```

## Topics

### Creating an Item Result

- [initWithTargetElement:](itemresult/init%28targetelement_%29.md): Creates an item result with the specified target element.
- [initWithItemLoadingToken:customLabel:](itemresult/init%28itemloadingtoken_customlabel_%29.md): Creates an item result with the specified item load token and custom label.

### Identifying an Item Result

- [targetElement](itemresult/targetelement.md): A target element that references an element to message for accessibility properties.
- [itemLoadingToken](itemresult/itemloadingtoken.md): A token to determine which item to return.
- [targetRange](itemresult/targetrange.md): A range that specifies the area of interest for text-based elements.
- [customLabel](itemresult/customlabel.md): A localized label to use instead of the default item label to describe the item result.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Managing the Current Item

- [currentItem](searchparameters/currentitem.md): The current item that determines where the search starts.
