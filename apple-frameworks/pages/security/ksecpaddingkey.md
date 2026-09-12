> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecpaddingkey](https://developer.apple.com/documentation/security/ksecpaddingkey)

# kSecPaddingKey (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

The kind of padding to use.

> SecTransform is no longer supported

## Declaration

```swift
let kSecPaddingKey: CFString
```

<a id="Discussion"></a>

## Discussion

If you do not supply a value for this key, an appropriate value will be supplied for you. See [Padding Types](transform-attributes.md#Padding-Types) for a list of valid values.

# kSecPaddingKey (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

The kind of padding to use.

> SecTransform is no longer supported

## Declaration

```objectivec
extern CFStringRef const kSecPaddingKey;
```

<a id="Discussion"></a>

## Discussion

If you do not supply a value for this key, an appropriate value will be supplied for you. See [Padding Types](transform-attributes.md#Padding-Types) for a list of valid values.
