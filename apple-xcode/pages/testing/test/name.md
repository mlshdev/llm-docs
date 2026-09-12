> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/test/name](https://developer.apple.com/documentation/testing/test/name)

# name

**Framework:** Swift Testing  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

The name of this instance.

## Declaration

```swift
var name: String { get set }
```

<a id="discussion"></a>

## Discussion

The value of this property is equal to the name of the symbol to which the [Test](../test.md) attribute is applied (that is, the name of the type or function.) To get the customized display name specified as part of the [Test](../test.md) attribute, use the [displayName](displayname.md) property.
