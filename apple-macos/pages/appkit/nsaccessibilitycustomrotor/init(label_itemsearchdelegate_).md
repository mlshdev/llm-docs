> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsaccessibilitycustomrotor/init(label:itemsearchdelegate:)

# init(label:itemSearchDelegate:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.13+

Creates a custom rotor with the specified label and item search delegate.

## Declaration

```swift
init(label: String, itemSearchDelegate: any NSAccessibilityCustomRotorItemSearchDelegate)
```

## See Also

### Creating a Rotor

- [init(rotorType:itemSearchDelegate:)](init%28rotortype_itemsearchdelegate_%29.md): Creates a custom rotor with the specified rotor type and item search delegate.

# initWithLabel:itemSearchDelegate: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Creates a custom rotor with the specified label and item search delegate.

## Declaration

```objectivec
- (instancetype) initWithLabel:(NSString *) label itemSearchDelegate:(id<NSAccessibilityCustomRotorItemSearchDelegate>) itemSearchDelegate;
```

## See Also

### Creating a Rotor

- [initWithRotorType:itemSearchDelegate:](init%28rotortype_itemsearchdelegate_%29.md): Creates a custom rotor with the specified rotor type and item search delegate.
