> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/addressbook/absearchconjunction

# ABSearchConjunction (Swift)

**Framework:** Address Book  
**Kind:** Type Alias  
**Availability:** macOS

Constants used to create compound search elements.

## Declaration

```swift
typealias ABSearchConjunction = CFIndex
```

<a id="Discussion"></a>

## Discussion

These constants are used to create compound search elementswith the [ABSearchElementCreateWithConjunction(\_:\_:)](absearchelementcreatewithconjunction%28____%29.md) function.

## Topics

### Constants

- [kABSearchAnd](kabsearchand.md): Join the search elements together with theAND operand.
- [kABSearchOr](kabsearchor.md): Join the search elements together with theOR operand.

## See Also

### Constants

- [ABSearchComparison](absearchcomparison.md): Constants used to specify the type of comparison beingmade.

# ABSearchConjunction (Objective-C)

**Framework:** Address Book  
**Kind:** Type Alias  
**Availability:** macOS

Constants used to create compound search elements.

## Declaration

```objectivec
typedef CFIndex ABSearchConjunction;
```

<a id="Discussion"></a>

## Discussion

These constants are used to create compound search elementswith the [ABSearchElementCreateWithConjunction](absearchelementcreatewithconjunction%28____%29.md) function.

## See Also

### Constants

- [ABSearchComparison](absearchcomparison.md): Constants used to specify the type of comparison beingmade.
