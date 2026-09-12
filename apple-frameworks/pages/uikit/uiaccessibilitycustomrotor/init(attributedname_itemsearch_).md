> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitycustomrotor/init(attributedname:itemsearch:)](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomrotor/init(attributedname:itemsearch:))

# init(attributedName:itemSearch:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Creates a rotor with the specified name and search block.

## Declaration

```swift
init(attributedName: NSAttributedString, itemSearch itemSearchBlock: @escaping UIAccessibilityCustomRotor.Search)
```

## Parameters

- `attributedName`: The name of the rotor.
- `itemSearchBlock`: The block that provides the next or previous rotor.

<a id="return-value"></a>

## Return Value

An initialized rotor object.

## See Also

### Creating a rotor object

- [init(name:itemSearch:)](init%28name_itemsearch_%29.md): Creates a rotor with the specified name and search block.
- [init(systemType:itemSearch:)](init%28systemtype_itemsearch_%29.md): Creates a rotor for the specified type of item.

# initWithAttributedName:itemSearchBlock: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Creates a rotor with the specified name and search block.

## Declaration

```objectivec
- (instancetype) initWithAttributedName:(NSAttributedString *) attributedName itemSearchBlock:(UIAccessibilityCustomRotorSearch) itemSearchBlock;
```

## Parameters

- `attributedName`: The name of the rotor.
- `itemSearchBlock`: The block that provides the next or previous rotor.

<a id="return-value"></a>

## Return Value

An initialized rotor object.

## See Also

### Creating a rotor object

- [initWithName:itemSearchBlock:](init%28name_itemsearch_%29.md): Creates a rotor with the specified name and search block.
- [initWithSystemType:itemSearchBlock:](init%28systemtype_itemsearch_%29.md): Creates a rotor for the specified type of item.
