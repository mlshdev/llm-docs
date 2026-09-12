> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattrprf](https://developer.apple.com/documentation/security/ksecattrprf)

# kSecAttrPRF (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

A key whose value indicates the item’s pseudorandom function.

## Declaration

```swift
let kSecAttrPRF: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFString](../corefoundation/cfstring.md) and indicates the pseudorandom function associated with this cryptographic key. See [Pseudorandom Function Values](item-attribute-keys-and-values.md#Pseudorandom-Function-Values) for a list of valid values.

# kSecAttrPRF (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

A key whose value indicates the item’s pseudorandom function.

## Declaration

```objectivec
extern CFStringRef const kSecAttrPRF;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFStringRef](../corefoundation/cfstring.md) and indicates the pseudorandom function associated with this cryptographic key. See [Pseudorandom Function Values](item-attribute-keys-and-values.md#Pseudorandom-Function-Values) for a list of valid values.
