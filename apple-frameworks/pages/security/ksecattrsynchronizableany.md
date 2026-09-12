> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecattrsynchronizableany](https://developer.apple.com/documentation/security/ksecattrsynchronizableany)

# kSecAttrSynchronizableAny (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies that both synchronizable and non-synchronizable results should be returned from a query.

## Declaration

```swift
let kSecAttrSynchronizableAny: CFString
```

<a id="Discussion"></a>

## Discussion

This may be used as a value for the [kSecAttrSynchronizable](ksecattrsynchronizable.md) dictionary key (in place of `kCFBooleanTrue` or `kCFBooleanFalse`) in a call to [SecItemCopyMatching(\_:\_:)](secitemcopymatching%28____%29.md), [SecItemUpdate(\_:\_:)](secitemupdate%28____%29.md), or [SecItemDelete(\_:)](secitemdelete%28__%29.md).

# kSecAttrSynchronizableAny (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies that both synchronizable and non-synchronizable results should be returned from a query.

## Declaration

```objectivec
extern CFStringRef const kSecAttrSynchronizableAny;
```

<a id="Discussion"></a>

## Discussion

This may be used as a value for the [kSecAttrSynchronizable](ksecattrsynchronizable.md) dictionary key (in place of `kCFBooleanTrue` or `kCFBooleanFalse`) in a call to [SecItemCopyMatching](secitemcopymatching%28____%29.md), [SecItemUpdate](secitemupdate%28____%29.md), or [SecItemDelete](secitemdelete%28__%29.md).
