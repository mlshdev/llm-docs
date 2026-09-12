> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitycustomrotoritemsearchdelegate](https://developer.apple.com/documentation/appkit/nsaccessibilitycustomrotoritemsearchdelegate)

# NSAccessibilityCustomRotorItemSearchDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 10.13+

A delegate for a custom rotor that finds the next item result after performing a search with the specified search parameters.

## Declaration

```swift
protocol NSAccessibilityCustomRotorItemSearchDelegate : NSObjectProtocol
```

## Topics

### Finding the Next Item

- [rotor(\_:resultFor:)](nsaccessibilitycustomrotoritemsearchdelegate/rotor%28__resultfor_%29.md): Performs a search with the specified search parameters and returns the item result.
- [NSAccessibilityCustomRotor.SearchParameters](nsaccessibilitycustomrotor/searchparameters.md): Search parameters for a custom rotor.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Navigating to the Next Item

- [itemSearchDelegate](nsaccessibilitycustomrotor/itemsearchdelegate.md): The delegate for finding the next item result.

# NSAccessibilityCustomRotorItemSearchDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 10.13+

A delegate for a custom rotor that finds the next item result after performing a search with the specified search parameters.

## Declaration

```objectivec
@protocol NSAccessibilityCustomRotorItemSearchDelegate <NSObject>
```

## Topics

### Finding the Next Item

- [rotor:resultForSearchParameters:](nsaccessibilitycustomrotoritemsearchdelegate/rotor%28__resultfor_%29.md): Performs a search with the specified search parameters and returns the item result.
- [NSAccessibilityCustomRotorSearchParameters](nsaccessibilitycustomrotor/searchparameters.md): Search parameters for a custom rotor.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Navigating to the Next Item

- [itemSearchDelegate](nsaccessibilitycustomrotor/itemsearchdelegate.md): The delegate for finding the next item result.
