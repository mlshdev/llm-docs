> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitycustomrotor/init(systemtype:itemsearch:)](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomrotor/init(systemtype:itemsearch:))

# init(systemType:itemSearch:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Creates a rotor for the specified type of item.

## Declaration

```swift
init(systemType type: UIAccessibilityCustomRotor.SystemRotorType, itemSearch itemSearchBlock: @escaping UIAccessibilityCustomRotor.Search)
```

## Parameters

- `type`: The type of content navigated by the rotor. For a list of possible values, see [UIAccessibilityCustomRotor.SystemRotorType](systemrotortype-swift.enum.md).
- `itemSearchBlock`: The block that provides the next or previous rotor for the given type.

<a id="return-value"></a>

## Return Value

An initialized rotor object.

## See Also

### Creating a rotor object

- [init(attributedName:itemSearch:)](init%28attributedname_itemsearch_%29.md): Creates a rotor with the specified name and search block.
- [init(name:itemSearch:)](init%28name_itemsearch_%29.md): Creates a rotor with the specified name and search block.

# initWithSystemType:itemSearchBlock: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Creates a rotor for the specified type of item.

## Declaration

```objectivec
- (instancetype) initWithSystemType:(UIAccessibilityCustomSystemRotorType) type itemSearchBlock:(UIAccessibilityCustomRotorSearch) itemSearchBlock;
```

## Parameters

- `type`: The type of content navigated by the rotor. For a list of possible values, see [UIAccessibilityCustomSystemRotorType](systemrotortype-swift.enum.md).
- `itemSearchBlock`: The block that provides the next or previous rotor for the given type.

<a id="return-value"></a>

## Return Value

An initialized rotor object.

## See Also

### Creating a rotor object

- [initWithAttributedName:itemSearchBlock:](init%28attributedname_itemsearch_%29.md): Creates a rotor with the specified name and search block.
- [initWithName:itemSearchBlock:](init%28name_itemsearch_%29.md): Creates a rotor with the specified name and search block.
