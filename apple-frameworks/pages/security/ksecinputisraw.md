> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecinputisraw](https://developer.apple.com/documentation/security/ksecinputisraw)

# kSecInputIsRaw (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

The input is raw.

> SecTransform is no longer supported

## Declaration

```swift
let kSecInputIsRaw: CFString
```

<a id="Discussion"></a>

## Discussion

Using this type of input can be cryptographically unsafe (for example if you don’t blind a DSA or ECDSA signature you give away the key very quickly). You are strongly discouraged from using it..

# kSecInputIsRaw (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

The input is raw.

> SecTransform is no longer supported

## Declaration

```objectivec
extern CFStringRef const kSecInputIsRaw;
```

<a id="Discussion"></a>

## Discussion

Using this type of input can be cryptographically unsafe (for example if you don’t blind a DSA or ECDSA signature you give away the key very quickly). You are strongly discouraged from using it..
