> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitycustomrotoritemsearchdelegate/rotor(_:resultfor:)](https://developer.apple.com/documentation/appkit/nsaccessibilitycustomrotoritemsearchdelegate/rotor(_:resultfor:))

# rotor(\_:resultFor:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Performs a search with the specified search parameters and returns the item result.

## Declaration

```swift
func rotor(_ rotor: NSAccessibilityCustomRotor, resultFor searchParameters: NSAccessibilityCustomRotor.SearchParameters) -> NSAccessibilityCustomRotor.ItemResult?
```

## See Also

### Finding the Next Item

- [NSAccessibilityCustomRotor.SearchParameters](../nsaccessibilitycustomrotor/searchparameters.md): Search parameters for a custom rotor.

# rotor:resultForSearchParameters: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Performs a search with the specified search parameters and returns the item result.

## Declaration

```objectivec
- (NSAccessibilityCustomRotorItemResult *) rotor:(NSAccessibilityCustomRotor *) rotor resultForSearchParameters:(NSAccessibilityCustomRotorSearchParameters *) searchParameters;
```

## See Also

### Finding the Next Item

- [NSAccessibilityCustomRotorSearchParameters](../nsaccessibilitycustomrotor/searchparameters.md): Search parameters for a custom rotor.
