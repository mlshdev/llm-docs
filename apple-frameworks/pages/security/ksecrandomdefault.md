> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecrandomdefault](https://developer.apple.com/documentation/security/ksecrandomdefault)

# kSecRandomDefault (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An alias for the default random number generator.

## Declaration

```swift
let kSecRandomDefault: SecRandomRef
```

<a id="Discussion"></a>

## Discussion

When passed to the [SecRandomCopyBytes(\_:\_:\_:)](secrandomcopybytes%28______%29.md) function as the random number generator reference, this constant indicates that the default number generator should be used.

This constant is a synonym for `NULL`.

# kSecRandomDefault (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An alias for the default random number generator.

## Declaration

```objectivec
extern SecRandomRef const kSecRandomDefault;
```

<a id="Discussion"></a>

## Discussion

When passed to the [SecRandomCopyBytes](secrandomcopybytes%28______%29.md) function as the random number generator reference, this constant indicates that the default number generator should be used.

This constant is a synonym for `NULL`.
