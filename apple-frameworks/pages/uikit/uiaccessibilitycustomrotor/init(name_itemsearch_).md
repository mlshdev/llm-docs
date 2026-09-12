> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitycustomrotor/init(name:itemsearch:)](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomrotor/init(name:itemsearch:))

# init(name:itemSearch:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates a rotor with the specified name and search block.

## Declaration

```swift
init(name: String, itemSearch itemSearchBlock: @escaping UIAccessibilityCustomRotor.Search)
```

## Parameters

- `name`: The name of the rotor.
- `itemSearchBlock`: The block that provides the next or previous rotor.

<a id="return-value"></a>

## Return Value

An initialized rotor object.

## See Also

### Creating a rotor object

- [init(attributedName:itemSearch:)](init%28attributedname_itemsearch_%29.md): Creates a rotor with the specified name and search block.
- [init(systemType:itemSearch:)](init%28systemtype_itemsearch_%29.md): Creates a rotor for the specified type of item.

# initWithName:itemSearchBlock: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates a rotor with the specified name and search block.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name itemSearchBlock:(UIAccessibilityCustomRotorSearch) itemSearchBlock;
```

## Parameters

- `name`: The name of the rotor.
- `itemSearchBlock`: The block that provides the next or previous rotor.

<a id="return-value"></a>

## Return Value

An initialized rotor object.

## See Also

### Creating a rotor object

- [initWithAttributedName:itemSearchBlock:](init%28attributedname_itemsearch_%29.md): Creates a rotor with the specified name and search block.
- [initWithSystemType:itemSearchBlock:](init%28systemtype_itemsearch_%29.md): Creates a rotor for the specified type of item.
