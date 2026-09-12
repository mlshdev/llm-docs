> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitycustomrotor/init(rotortype:itemsearchdelegate:)](https://developer.apple.com/documentation/appkit/nsaccessibilitycustomrotor/init(rotortype:itemsearchdelegate:))

# init(rotorType:itemSearchDelegate:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.13+

Creates a custom rotor with the specified rotor type and item search delegate.

## Declaration

```swift
init(rotorType: NSAccessibilityCustomRotor.RotorType, itemSearchDelegate: any NSAccessibilityCustomRotorItemSearchDelegate)
```

## See Also

### Creating a Rotor

- [init(label:itemSearchDelegate:)](init%28label_itemsearchdelegate_%29.md): Creates a custom rotor with the specified label and item search delegate.

# initWithRotorType:itemSearchDelegate: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Creates a custom rotor with the specified rotor type and item search delegate.

## Declaration

```objectivec
- (instancetype) initWithRotorType:(NSAccessibilityCustomRotorType) rotorType itemSearchDelegate:(id<NSAccessibilityCustomRotorItemSearchDelegate>) itemSearchDelegate;
```

## See Also

### Creating a Rotor

- [initWithLabel:itemSearchDelegate:](init%28label_itemsearchdelegate_%29.md): Creates a custom rotor with the specified label and item search delegate.
