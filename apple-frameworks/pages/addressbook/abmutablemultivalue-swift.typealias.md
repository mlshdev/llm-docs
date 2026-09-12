> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abmutablemultivalue-swift.typealias](https://developer.apple.com/documentation/addressbook/abmutablemultivalue-swift.typealias)

# ABMutableMultiValue (Swift)

**Framework:** Address Book  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS

A reference to an ABMutableMultiValue object.

> use NSMutableArray of CNLabeledValue

## Declaration

```swift
typealias ABMutableMultiValue = CFTypeRef
```

```swift
class ABMutableMultiValueRef
```

## Relationships

### Inherits From

- [ABMultiValue](abmultivalue-swift.typealias.md)

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Data Types

- [ABPersonRef](abpersonref.md): A reference to an ABPerson object.
- [ABGroupRef](abgroupref.md): A reference to an ABGroup object.
- [ABMultiValue](abmultivalue-swift.typealias.md): Deprecated. A reference to an `ABMultiValue` or `ABMutableMultiValueobject`.

# ABMutableMultiValueRef (Objective-C)

**Framework:** Address Book  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS

A reference to an ABMutableMultiValue object.

> use NSMutableArray of CNLabeledValue

## Declaration

```objectivec
typedef CFTypeRef ABMutableMultiValueRef;
```

```objectivec
typedef struct __ABMultiValue * ABMutableMultiValueRef;
```

## See Also

### Data Types

- [ABPersonRef](abpersonref.md): A reference to an ABPerson object.
- [ABGroupRef](abgroupref.md): A reference to an ABGroup object.
- [ABMultiValueRef](abmultivalue-swift.typealias.md): Deprecated. A reference to an `ABMultiValue` or `ABMutableMultiValueobject`.
