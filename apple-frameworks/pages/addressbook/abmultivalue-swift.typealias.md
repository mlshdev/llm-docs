> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abmultivalue-swift.typealias](https://developer.apple.com/documentation/addressbook/abmultivalue-swift.typealias)

# ABMultiValue (Swift)

**Framework:** Address Book  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS

A reference to an `ABMultiValue` or `ABMutableMultiValueobject`.

> use NSArray of CNLabeledValue

## Declaration

```swift
typealias ABMultiValue = CFTypeRef
```

```swift
class ABMultiValueRef
```

## Relationships

### Inherited By

- [ABMutableMultiValue](abmutablemultivalue-swift.typealias.md)

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Data Types

- [ABPersonRef](abpersonref.md): A reference to an ABPerson object.
- [ABGroupRef](abgroupref.md): A reference to an ABGroup object.
- [ABMutableMultiValue](abmutablemultivalue-swift.typealias.md): Deprecated. A reference to an ABMutableMultiValue object.

# ABMultiValueRef (Objective-C)

**Framework:** Address Book  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS

A reference to an `ABMultiValue` or `ABMutableMultiValueobject`.

> use NSArray of CNLabeledValue

## Declaration

```objectivec
typedef CFTypeRef ABMultiValueRef;
```

```objectivec
typedef const struct __ABMultiValue * ABMultiValueRef;
```

## See Also

### Data Types

- [ABPersonRef](abpersonref.md): A reference to an ABPerson object.
- [ABGroupRef](abgroupref.md): A reference to an ABGroup object.
- [ABMutableMultiValueRef](abmutablemultivalue-swift.typealias.md): Deprecated. A reference to an ABMutableMultiValue object.
